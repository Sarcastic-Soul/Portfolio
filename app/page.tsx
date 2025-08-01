import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Work } from "@/components/sections/work"
import { Skills } from "@/components/sections/skills"
import { Achievements } from "@/components/sections/achievements"
import { CodingProfiles } from "@/components/sections/coding-profiles"
import { Contact } from "@/components/sections/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Achievements />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
