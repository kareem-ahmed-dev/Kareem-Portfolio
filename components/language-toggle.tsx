"use client"

import { Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function LanguageToggle() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1"
      role="group"
      aria-label={t.nav.language}
    >
      <Globe className="mx-1 h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
          lang === "en" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("ar")}
        aria-pressed={lang === "ar"}
        className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
          lang === "ar" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        العربية
      </button>
    </div>
  )
}
