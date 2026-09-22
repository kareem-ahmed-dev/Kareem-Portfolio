"use client"

import { useState, type FormEvent } from "react"
import { Mail, MessageCircle, Check, Code2, Briefcase } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { CONTACT } from "@/lib/dictionaries"

export function Contact() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "954bc42d-2045-4ef7-8ca2-8b535891b598",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })
      const result = await response.json()
      if (result.success) {
        setSent(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section id="contact" className="border-t border-border bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">{t.contact.eyebrow}</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              {t.contact.description}
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">{t.contact.emailLabel}</span>
                  <span className="block truncate text-sm font-medium text-foreground">{CONTACT.email}</span>
                </span>
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">{t.contact.whatsappLabel}</span>
                  <span className="block text-sm font-medium text-foreground" dir="ltr">
                    {CONTACT.whatsappDisplay}
                  </span>
                </span>
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Code2 className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">{t.contact.githubLabel}</span>
                  <span className="block truncate text-sm font-medium text-foreground">{CONTACT.githubDisplay}</span>
                </span>
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Briefcase className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">{t.contact.linkedinLabel}</span>
                  <span className="block truncate text-sm font-medium text-foreground">{CONTACT.linkedinDisplay}</span>
                </span>
              </a>
            </div>
          </div>

          {sent ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{t.contact.form.successTitle}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{t.contact.form.successBody}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-7">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                    {t.contact.form.name}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                    {t.contact.form.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder={t.contact.form.emailPlaceholder}
                    dir="ltr"
                    className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full resize-none rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {t.contact.form.submit}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
