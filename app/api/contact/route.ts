import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    let body: any
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid JSON request body." },
        { status: 400 }
      )
    }

    const { name, email, message, botcheck } = body || {}

    // Honeypot spam check: if filled by a bot, silently return success without wasting upstream quota
    if (botcheck) {
      return NextResponse.json({ success: true, message: "Message sent successfully." })
    }

    // Input validation
    if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 100) {
      return NextResponse.json(
        { success: false, message: "Invalid name." },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || typeof email !== "string" || !emailRegex.test(email) || email.length > 254) {
      return NextResponse.json(
        { success: false, message: "Invalid email address." },
        { status: 400 }
      )
    }

    if (!message || typeof message !== "string" || message.trim().length === 0 || message.length > 5000) {
      return NextResponse.json(
        { success: false, message: "Invalid message." },
        { status: 400 }
      )
    }

    // 1. Try Resend if API key is configured (recommended & most reliable for Vercel Serverless)
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        const recipient = process.env.CONTACT_RECEIVER_EMAIL || "krkrkemo2005@gmail.com"
        const { error } = await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
          to: [recipient],
          replyTo: email.trim(),
          subject: `Portfolio Message from ${name.trim()}`,
          text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
        })

        if (!error) {
          return NextResponse.json({ success: true, message: "Message sent successfully." })
        }
        console.error("Resend delivery failed:", error)
      } catch (resendErr) {
        console.error("Resend exception:", resendErr)
      }
    }

    // 2. Fallback to Web3Forms if WEB3FORMS_KEY is available
    const accessKey = process.env.WEB3FORMS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY

    if (accessKey) {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 9000)

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "User-Agent": "KareemPortfolio-Contact/1.0 (Next.js Serverless)",
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
            subject: `New Portfolio Message from ${name.trim()}`,
            from_name: name.trim(),
          }),
          signal: controller.signal,
        })

        const text = await response.text()
        let result: { success?: boolean; message?: string } = {}
        try {
          result = JSON.parse(text)
        } catch {
          console.error("Non-JSON response from Web3Forms (HTTP " + response.status + "):", text.slice(0, 300))
          return NextResponse.json(
            { success: false, message: "Upstream service error. Please try again or email directly." },
            { status: 502 }
          )
        }

        if (result.success) {
          return NextResponse.json({ success: true, message: "Message sent successfully." })
        } else {
          console.error("Web3Forms error response:", result)
          return NextResponse.json(
            { success: false, message: result.message || "Failed to submit form." },
            { status: response.status >= 400 && response.status < 600 ? response.status : 400 }
          )
        }
      } finally {
        clearTimeout(timeoutId)
      }
    }

    // If neither Resend nor Web3Forms keys are present
    console.error("Neither RESEND_API_KEY nor WEB3FORMS_KEY is configured.")
    return NextResponse.json(
      { success: false, message: "Server configuration error. Service key is missing." },
      { status: 500 }
    )
  } catch (error: any) {
    if (error?.name === "AbortError" || error?.name === "TimeoutError") {
      console.error("Contact API upstream timeout")
      return NextResponse.json(
        { success: false, message: "Email service request timed out." },
        { status: 504 }
      )
    }
    console.error("Contact API unhandled error:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    )
  }
}
