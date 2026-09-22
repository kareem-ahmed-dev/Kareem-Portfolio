"use client"

import Image from "next/image"
import { ExternalLink, Code2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const PROJECT_META = [
  {
    image: "/projects/dashboard.png",
    tags: ["React", "Material UI", "Nivo", "FullCalendar", "Vite"],
    github: "https://github.com/kareem-ahmed-dev/dashboard-react",
    liveDemo: "https://dashboard-react-one-psi.vercel.app/",
  },
  {
    image: "/projects/landing.png",
    tags: ["React", "Vite", "JavaScript", "CSS"],
    github: "https://github.com/kareem-ahmed-dev/Landing-page",
    liveDemo: "https://stratum-ai-landing-page.vercel.app/",
  },
  {
    image: "/projects/morrow.png",
    tags: ["React", "Tailwind CSS", "React Router", "Vite"],
    github: "https://github.com/kareem-ahmed-dev/morrow-store",
    liveDemo: "https://morrow-store-seven.vercel.app/",
  },
]

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{t.projects.eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t.projects.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((project, i) => {
            const meta = PROJECT_META[i]
            return (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                  <Image
                    src={meta.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {meta.tags.map((tag) => (
                      <li key={tag} className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center gap-2">
                    <a
                      href={meta.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-opacity hover:opacity-90"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {t.projects.liveDemo}
                    </a>
                    <a
                      href={meta.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                      <Code2 className="h-3.5 w-3.5" />
                      {t.projects.github}
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
