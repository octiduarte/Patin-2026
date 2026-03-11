import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import SobreTorneo from "@/components/sobre-torneo"
import LugarEvento from "@/components/lugar-evento"
import Organizadores from "@/components/organizadores"
import Sponsors from "@/components/sponsors"
import Cronograma from "@/components/cronograma"
import Inscripciones from "@/components/inscripciones"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SobreTorneo />
      <LugarEvento />
      <Organizadores />
      <Cronograma />
      <Sponsors />
      <Inscripciones />
      <Footer />
    </main>
  )
}
