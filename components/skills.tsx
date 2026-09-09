"use client"

import { useLanguage } from "@/components/language-provider"

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{t.skills.eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t.skills.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {t.skills.groups.map((group) => (
            <div key={group.title} className="bg-card p-7">
              <h3 className="font-mono text-sm font-semibold text-foreground">{group.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
