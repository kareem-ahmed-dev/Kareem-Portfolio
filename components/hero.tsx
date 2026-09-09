"use client"

import Image from "next/image"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const MARQUEE = ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"]

export function Hero() {
  const { t, dir } = useLanguage()
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-24 lg:pt-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(260px,0.72fr)] md:gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16">
          <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-medium text-muted-foreground">{t.hero.badge}</span>
          </div>

          <p className="mb-4 font-mono text-sm text-primary">{t.hero.greeting}</p>

          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {t.hero.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.hero.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.hero.primaryCta}
              <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {t.hero.secondaryCta}
            </a>
          </div>

          </div>

          <div className="mx-auto w-full max-w-[220px] sm:max-w-[250px] md:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-primary/10">
              <Image
                src="/profile-photo.jpeg"
                alt="Kareem Ahmed wearing a blue suit and red tie"
                fill
                priority
                sizes="(min-width: 1024px) 380px, (min-width: 768px) 34vw, 300px"
                className="object-cover object-[center_38%]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-16 md:mt-24">
        <div className="group flex overflow-hidden border-y border-border py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" aria-label="Skills">
          <div className="flex shrink-0 animate-marquee items-center gap-10 group-hover:[animation-play-state:paused] pe-10">
            {MARQUEE.concat(MARQUEE).map((item, i) => (
              <span key={i} className="font-mono text-sm text-muted-foreground">
                {item}
              </span>
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee items-center gap-10 group-hover:[animation-play-state:paused] pe-10" aria-hidden="true">
            {MARQUEE.concat(MARQUEE).map((item, i) => (
              <span key={i} className="font-mono text-sm text-muted-foreground">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
