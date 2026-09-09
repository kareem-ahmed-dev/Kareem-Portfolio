"use client"

import { ThemeProvider } from "next-themes"
import type { ReactNode } from "react"
import { LanguageProvider } from "@/components/language-provider"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  )
}
