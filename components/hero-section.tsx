import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-section/fondo-herosection.jpg"
          alt="Patinaje artistico sobre ruedas Copa Apertura B Nacional"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Primary tonal gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-navy/92 via-navy/55 to-navy/97" />
        {/* Radial vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 65% at 50% 42%, transparent 20%, rgba(13,27,62,0.7) 100%)",
          }}
        />
        {/* Film-grain texture for depth */}
        <div
          className="absolute inset-0 opacity-[0.045] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px",
          }}
        />
        {/* Bottom crimson accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-red" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-12 text-center flex flex-col items-center">

        {/* Editorial category tag */}
        <div
          className="hero-fade-up flex items-center gap-3 mb-5 md:mb-10"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="h-px w-8 bg-red block" />
          <span className="text-red font-black uppercase tracking-[0.25em] md:tracking-[0.35em] text-[0.6rem] md:text-[0.7rem]">
            Patinaje Artistico &nbsp;&nbsp; 2026
          </span>
          <span className="h-px w-8 bg-red block" />
        </div>

        {/* Main headline */}
        <h1 className="text-white font-black uppercase leading-none text-balance"style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            animationDelay: "0.25s",
          }}>
          <span className="block text-5xl md:text-7xl lg:text-8xl tracking-tight">Copa Apertura</span>
          <span className="block text-6xl md:text-8xl lg:text-9xl tracking-tight mt-0.5 md:mt-1">
            <span className="text-red">"B"</span> Nacional
          </span>
        </h1>

        {/* Red rule divider */}
        <div
          className="hero-fade-up w-10 md:w-14 h-0.5 bg-red my-4 md:my-8"
          style={{ animationDelay: "0.4s" }}
        />

        {/* Date & location pills */}
        <div
          className="hero-fade-up flex flex-row items-stretch justify-center gap-0"
          style={{ animationDelay: "0.52s" }}
        >
          <div className="flex items-center gap-2 md:gap-3 border-l-2 border-red pl-3 pr-4 md:pl-4 md:pr-7 py-2.5 md:py-3 bg-white/6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
            <svg
              className="w-3 h-3 md:w-3.5 md:h-3.5 text-red shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-white font-semibold text-xs md:text-sm tracking-wider md:tracking-widest">
              Posadas, Misiones
            </span>
          </div>
          <div className="w-px h-8 md:h-10 bg-white/10 self-center" />
          <div className="flex items-center gap-2 md:gap-3 border-l-2 border-red pl-3 pr-4 md:pl-4 md:pr-7 py-2.5 md:py-3 bg-white/6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
            <svg
              className="w-3 h-3 md:w-3.5 md:h-3.5 text-red shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-white font-semibold text-xs md:text-sm tracking-wider md:tracking-widest">
              25 Abril — 2 Mayo
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div
          className="hero-fade-up mt-5 md:mt-10"
          style={{ animationDelay: "0.65s" }}
        >
          <a
            href="#cronograma"
            className="group relative inline-flex items-center gap-2 md:gap-3 bg-red text-white rounded-sm font-black uppercase tracking-[0.15em] md:tracking-[0.18em] text-[0.65rem] md:text-xs px-7 py-3.5 md:px-10 md:py-5 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(200,16,47,0.45)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="relative z-10">Ver Cronograma</span>
            <ChevronDown
              size={13}
              className="relative z-10 transition-transform duration-300 group-hover:translate-y-1"
            />
            {/* Shimmer sweep */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-[200%] bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out pointer-events-none" />
          </a>
        </div>

        {/* Organizing logos */}
        <div
          className="hero-fade-up mt-7 md:mt-14 w-full max-w-2xl"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="border-t border-white/12 pt-5 md:pt-8 flex flex-wrap items-center justify-center gap-4 md:gap-10">
            <Image
              src="/images/logos/organizaciones/logo_cap.png"
              alt="Logo CAP"
              width={80}
              height={80}
              className="object-contain w-16 h-16 md:w-20 md:h-20 opacity-70 hover:opacity-100 transition-opacity duration-300 drop-shadow-lg p-1"
              priority
            />
            <Image
              src="/images/logos/organizaciones/logo_femipat.png"
              alt="Logo FEMIPAT"
              width={64}
              height={64}
              className="object-contain w-16 h-16 md:w-16 md:h-16 opacity-70 hover:opacity-100 transition-opacity duration-300 drop-shadow-lg p-1"
              priority
            />
            <Image
              src="/images/logos/organizaciones/logo_ministerio_deportes_alt.png"
              alt="Logo Misiones Gobierno"
              width={140}
              height={80}
              className="object-contain w-24 h-24 md:w-40 md:h-20 opacity-70 hover:opacity-100 transition-opacity duration-300 drop-shadow-lg p-1"
              priority
            />
            <Image
              src="/images/logos/organizaciones/logo_municipalidad_posadas.png"
              alt="Logo Posadas"
              width={64}
              height={64}
              className="object-contain w-16 h-16 md:w-24 md:h-24 opacity-70 hover:opacity-100 transition-opacity duration-300 drop-shadow-lg p-1"
              priority
            />
          </div>
        </div>
      </div>

    
    </section>
  )
}