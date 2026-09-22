import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

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

    const accessKey = process.env.WEB3FORMS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY

    if (!accessKey) {
      console.error("WEB3FORMS_KEY is missing in environment variables.")
      return NextResponse.json(
        { success: false, message: "Server configuration error." },
        { status: 500 }
      )
    }

    // Forward request to Web3Forms server-side (avoids CORS and protects access key)
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      }),
    })

    const text = await response.text()
    let result: { success?: boolean; message?: string } = {}
    try {
      result = JSON.parse(text)
    } catch {
      console.error("Non-JSON response from Web3Forms:", text.slice(0, 200))
      return NextResponse.json(
        { success: false, message: "Upstream service error." },
        { status: 502 }
      )
    }

    if (result.success) {
      return NextResponse.json({ success: true, message: "Message sent successfully." })
    } else {
      console.error("Web3Forms error:", result)
      return NextResponse.json(
        { success: false, message: result.message || "Failed to submit form." },
        { status: response.status || 400 }
      )
    }
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    )
  }
}
