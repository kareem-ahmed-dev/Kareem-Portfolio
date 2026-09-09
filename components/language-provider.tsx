"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { dictionaries, type Dictionary, type Lang } from "@/lib/dictionaries"

const STORAGE_KEY = "portfolio-lang"

type LanguageContextValue = {
  lang: Lang
  dir: "ltr" | "rtl"
  t: Dictionary
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function isLang(value: string | null): value is Lang {
  return value === "en" || value === "ar"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  // Load persisted preference on mount (default stays "en" for SSR parity).
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isLang(stored)) setLangState(stored)
  }, [])

  // Reflect language + direction on the document element.
  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = lang === "ar" ? "rtl" : "ltr"
  }, [lang])

  const setLang = (next: Lang) => {
    setLangState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  const value: LanguageContextValue = {
    lang,
    dir: lang === "ar" ? "rtl" : "ltr",
    t: dictionaries[lang],
    setLang,
    toggleLang: () => setLang(lang === "en" ? "ar" : "en"),
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider")
  return ctx
}
