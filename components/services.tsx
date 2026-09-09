"use client"

import { Monitor, Boxes, Rocket, LayoutTemplate } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const ICONS = [Monitor, Boxes, Rocket, LayoutTemplate]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="border-t border-border bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{t.services.eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t.services.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {t.services.items.map((service, i) => {
            const Icon = ICONS[i]
            return (
              <article
                key={service.title}
                className="group flex gap-5 rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
