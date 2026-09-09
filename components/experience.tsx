"use client"

import { GraduationCap } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">{t.education.eyebrow}</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t.education.title}
            </h2>
          </div>
          <div className="flex gap-4">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <GraduationCap className="h-5 w-5" />
            </span>
            <div>
              <p className="font-mono text-sm text-primary">{t.education.institution}</p>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{t.education.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{t.experience.eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t.experience.title}
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {t.experience.items.map((item) => (
            <article key={item.organization} className="rounded-2xl border border-border bg-card p-7">
              <p className="font-mono text-sm text-primary">{item.organization}</p>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

