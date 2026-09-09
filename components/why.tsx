"use client"

import { MonitorSmartphone, Code2, Users } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const ICONS = [MonitorSmartphone, Code2, Users]

export function Why() {
  const { t } = useLanguage()

  return (
    <section className="border-t border-border bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{t.why.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t.why.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">{t.why.intro}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.why.points.map((point, i) => {
            const Icon = ICONS[i]
            return (
              <div key={point.title} className="rounded-2xl border border-border bg-card p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{point.title}</h3>
                <p className="mt-2.5 text-pretty leading-relaxed text-muted-foreground">{point.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
