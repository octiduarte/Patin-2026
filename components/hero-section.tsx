import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-section/fondo-herosection.jpg"
          alt="Patinaje artistico sobre ruedas  Copa Apertura B Nacional"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay with navy tint */}
        <div className="absolute inset-0 bg-linear-to-b from-navy/85 via-navy/70 to-navy/95" />
        {/* Red accent stripe */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-red" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center flex flex-col items-center gap-6">
        {/* Year badge */}
        <div className="inline-flex items-center gap-2 bg-red text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-sm">
          <span>2026</span>
          <span className="opacity-50">|</span>
          <span>Patinaje Artístico</span>
        </div>

        {/* Main title */}
        <h1 className="text-white font-black uppercase leading-none text-balance" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          <span className="block text-5xl md:text-7xl lg:text-8xl tracking-tight">Copa Apertura</span>
          <span className="block text-6xl md:text-8xl lg:text-9xl tracking-tight mt-1">
            <span className="text-red">"B"</span> Nacional
          </span>
        </h1>

        {/* Date & location */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm px-5 py-2.5">
            <svg className="w-4 h-4 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-white font-semibold text-sm tracking-wide">Posadas, Misiones</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm px-5 py-2.5">
            <svg className="w-4 h-4 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-white font-semibold text-sm tracking-wide">25 de Abril – 2 de Mayo</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#cronograma"
          className="mt-4 inline-flex items-center gap-2 bg-red hover:bg-red-dark text-white font-black uppercase tracking-widest text-sm px-8 py-4 rounded-sm transition-all duration-200 shadow-lg shadow-red/30 hover:shadow-red/50 hover:-translate-y-0.5"
        >
          Ver Cronograma
          <ChevronDown size={16} />
        </a>

        {/* Organizing logos row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <div className="flex flex-col items-center">
            <Image
              src="/images/logos/organizaciones/logo_cap.png"
              alt="Logo CAP"
              width={80}
              height={80}
              className="object-contain w-20 h-20 md:w-30 md:h-30 p-2"
              priority
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/logos/organizaciones/logo_femipat.png"
              alt="Logo FEMIPAT"
              width={80}
              height={80}
              className="object-contain w-16 h-16 md:w-30 md:h-30  p-2"
              priority
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/logos/organizaciones/logo_ministerio_deportes_alt.png"
              alt="Logo Misiones Gobierno"
              width={80}
              height={80}
              className="object-contain w-20 h-20 md:w-48 md:h-48 p-2"
              priority
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/logos/organizaciones/logo_municipalidad_posadas.png"
              alt="Logo Posadas"
              width={80}
              height={80}
              className="object-contain w-16 h-16 md:w-32 md:h-32 p-2"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="text-white/50 w-5 h-5" />
      </div>
    </section>
  )
}
