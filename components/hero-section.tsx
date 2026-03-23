import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-navy overflow-hidden flex flex-col"
    >
      {/* ── BACKGROUND PHOTO (right 60%, full height) ────────────────── */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[45%] z-0">
        <Image
          src="/images/hero-section/fondo-herosection2.webp"
          alt="Patinaje artístico sobre ruedas – Copa Apertura B Nacional"
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover object-center"
          priority
          quality={75}
        />
        {/* Fade into navy on the left edge */}
        <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/60 to-transparent" />
      </div>

      {/* ── DIAGONAL RED SLASH ───────────────────────────────────────── */}
      {/* Navy panel – blocks photo on the left, diagonal right edge */}
      <div
        className="absolute inset-0 z-10 bg-navy hidden lg:block"
        style={{ clipPath: "polygon(0 0, 70% 0, 50% 100%, 0 100%)" }}
        aria-hidden="true"
      />
      {/* Red bar at the boundary – thinner (~3% wide) */}
      <div
        className="absolute inset-0 z-10 bg-red hidden lg:block"
        style={{ clipPath: "polygon(70% 0, 73% 0, 53% 100%, 50% 100%)" }}
        aria-hidden="true"
      />
      {/* Mobile: navy panel covers top portion, descending edge (left↑ right↓) */}
      <div
        className="absolute inset-0 z-10 bg-navy lg:hidden"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 55%)" }}
        aria-hidden="true"
      />
      {/* Mobile: red bar – descending, ~4% thick */}
      <div
        className="absolute inset-0 z-10 bg-red lg:hidden"
        style={{ clipPath: "polygon(0 55%, 100% 65%, 100% 69%, 0 59%)" }}
        aria-hidden="true"
      />

      {/* ── CONTENT ──────────────────────────────────────────────────── */}
      <div className="relative z-20 flex flex-col justify-center min-h-screen px-6 md:px-12 lg:px-20 max-w-160">
        {/* Main title */}
        <h1
          className="hero-fade-up text-white uppercase leading-[0.88] tracking-tight text-balance"
          style={{ animationDelay: "0.25s" }}
        >
          <span className="block text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white/90 font-normal">
            Copa
          </span>
          <span className="block text-3xl md:text-4xl lg:text-4xl xl:text-5xl  2xl:text-6xl text-white/90 font-black">
            Apertura
          </span>
          {/* "Nacional" and "B" in a red parallelogram pill */}
          <span className="flex items-center flex-wrap lg:flex-nowrap gap-4 xl:gap-2 mt-1 font-black">
            <span className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl">Nacional</span>
            <span
              className="block text-3xl md:text-4xl lg:text-4xl xl:text-5xl  2xl:text-6xl text-white/90 font-normal"
              style={{ clipPath: "polygon(0 0,100% 0,96% 100%,0 100%)" }}
            >
              &quot;B&quot;
            </span>
          </span>
          <span className="block text-xl md:text-2xl lg:text-3xl xl:text-2xl xl:mt-1 2xl:text-4xl text-white font-normal tracking-[0.08em] mt-3 lg:whitespace-nowrap">
            Patinaje Artístico
          </span>
        </h1>

        {/* Diamond divider */}
        <div
          className="hero-fade-up flex items-center gap-4 my-4 md:my-8 xl:my-6"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="h-px flex-1 bg-white/15" />
          <div className="w-2 h-2 bg-red rotate-45" />
          <div className="h-px flex-1 bg-white/15" />
        </div>

        {/* Meta info */}
        <div
          className="hero-fade-up flex flex-wrap items-center gap-x-4 gap-y-2 mb-10 md:mb-4 xl:mb-6"
          style={{ animationDelay: "0.52s" }}
        >
          <span className="text-white/60 text-sm uppercase tracking-widest">
            Del{" "}
            <strong className="text-white font-black">25 de Abril</strong>
            {" "}al{" "}
            <strong className="text-white font-black">2 de Mayo</strong>
          </span>
          <span className="bg-red text-white text-xs font-black uppercase tracking-widest px-3 py-1.5">
            Centro Deportivo &quot;CEPARD&quot;
          </span>
          <span className="text-white/40 text-sm uppercase tracking-widest">
            | Posadas, Misiones
          </span>
        </div>

        {/* Split CTA */}
      

        {/* Organizers strip */}
        <div
          className="hero-fade-up mt-6 md:pt-8 xl:mt-4 xl:pt-6 border-t border-white/10 space-y-3"
          style={{ animationDelay: "0.8s" }}
        >
          <span className="text-white/35 text-[10px] uppercase tracking-widest">
            Organiza:
          </span>
          <div className="flex flex-nowrap items-stretch border border-white/20 rounded-sm overflow-hidden w-fit lg:w-fit">
            <div className="flex items-center justify-center p-3 md:p-4 xl:p-2 border-r border-white/20">
              <Image
                src="/images/logos/organizaciones/logo_cap_blanco.webp"
                alt="Logo CAP"
                width={160}
                height={160}
                className="object-contain h-7 md:h-11 w-auto brightness-0 invert"
              />
            </div>
            <div className="flex items-center justify-center p-3 md:p-4 xl:p-2 border-r border-white/20">
              <Image
                src="/images/logos/organizaciones/logo_femipat.webp"
                alt="Logo FEMIPAT"
                width={160}
                height={160}
                className="object-contain h-7 md:h-11 w-auto brightness-0 invert"
              />
            </div>
            <div className="flex items-center justify-center p-3 md:p-4 xl:p-2 border-r border-white/20">
              <Image
                src="/images/logos/organizaciones/logo_ministerio_deportes.webp"
                alt="Logo Misiones Gobierno"
                width={300}
                height={120}
                className="object-contain h-7 md:h-11 w-auto brightness-0 invert"
              />
            </div>
            <div className="flex items-center justify-center p-3 md:p-4 xl:p-2">
              <Image
                src="/images/logos/organizaciones/logo_municipalidad_posadas.webp"
                alt="Logo Posadas"
                width={160}
                height={160}
                className="object-contain h-7 md:h-11 w-auto brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM TICKER TAPE ───────────────────────────────────────── */}
      {/* Mobile: full width · Desktop: solo sobre la foto (el diagonal termina en x=50% al bottom) */}
      <div className="absolute bottom-0 left-0 right-0 lg:left-[53%] z-20 overflow-hidden py-2.5">
        <div
          className="flex gap-12 whitespace-nowrap animate-[ticker_4s_linear_infinite] md:animate-[ticker_18s_linear_infinite]"
          style={{ willChange: "transform" }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-black uppercase tracking-[0.2em] text-xs shrink-0 bg-linear-to-r from-red to-navy bg-clip-text text-transparent"
            >
              Copa Apertura Nacional &quot;B&quot; &nbsp;·&nbsp; Posadas,
              Misiones &nbsp;·&nbsp; 25 Abr – 2 May 2026 &nbsp;·&nbsp; Patinaje
              Artístico sobre Ruedas &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── VERTICAL EVENT CODE (decorative) ─────────────────────────── */}
      <div
        className="absolute right-6 bottom-16 z-20 hidden lg:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="h-16 w-px bg-white/20" />
        <span
          className="text-white/25 text-[10px] uppercase tracking-[0.3em] font-bold"
          style={{ writingMode: "vertical-rl" }}
        >
          CEPARD · POSADAS
        </span>
      </div>
    </section>
  );
}
