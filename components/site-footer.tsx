"use client"

import { Mail, MessageCircle, Github, Linkedin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { CONTACT } from "@/lib/dictionaries"

export function SiteFooter() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-sm">
            <p className="font-mono text-sm font-semibold text-foreground">{t.footer.name}</p>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label={t.contact.emailLabel}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.contact.whatsappLabel}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            © {year} {t.footer.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
