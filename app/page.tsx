import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Education, Experience } from "@/components/experience"
import { Why } from "@/components/why"
import { Skills } from "@/components/skills"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Why />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
