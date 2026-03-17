import Image from "next/image"
import { MapPin, Instagram, Facebook } from "lucide-react"

const navLinks = [
  { href: "#sobre", label: "El Torneo" },
  { href: "#lugar", label: "Lugar del Evento" },
  { href: "#organizadores", label: "Acompañan" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#Entradas", label: "Entradas" },
]

const organizers = ["Ministerio de Deportes Misiones", "Municipalidad de Posadas"]

export default function Footer() {
  return (
    <footer className="bg-[#060f24] text-white">
      {/* Top band */}
      <div className="h-1 bg-red" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logos/navbar/logo_copa.webp"
                alt="Logo Copa Apertura Nacional B"
                width={48}
                height={48}
                className="h-12 w-12 shrink-0 object-contain rounded-full"
              />
              <div>
                <h2
                  className="text-white font-black text-2xl uppercase leading-none"
                >
                  Copa Apertura Nacional <span className="text-red">&quot;B&quot;</span>
                </h2>
                <p className="text-white/50 text-xs uppercase tracking-widest mt-1">
                  Patinaje Artístico sobre Ruedas
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-5">
              <MapPin size={14} className="text-red shrink-0" />
              <span className="text-white/60 text-sm">Posadas, Misiones, Argentina</span>
            </div>
            <p className="text-white/40 text-sm mt-2 pl-5">
              25 de Abril – 2 de Mayo de 2025 · CEPARD
            </p>

            {/* Social media */}
            <div className="flex items-center gap-3 mt-6">
              <span className="text-white/30 text-xs uppercase tracking-widest">Seguinos:</span>
              <a
                href="https://instagram.com/fe.mi.pat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram FEMIPAT"
                className="w-9 h-9 rounded-sm bg-navy-light hover:bg-red flex items-center justify-center transition-colors duration-200"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/FederacionMisioneraPatinaje/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook FEMIPAT"
                className="w-9 h-9 rounded-sm bg-navy-light hover:bg-red flex items-center justify-center transition-colors duration-200"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-white font-black text-sm uppercase tracking-widest mb-4">Navegación</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/50 hover:text-red text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Acompañan column */}
          <div>
            <h3 className="text-white font-black text-sm uppercase tracking-widest mb-4">Acompañan</h3>
            <div className="flex flex-col gap-3">
              {organizers.map((org) => (
                <div key={org} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red shrink-0" />
                  <span className="text-white/50 text-sm">{org}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/30 text-xs leading-relaxed">
                Torneo oficial avalado por la{" "}
                <a href="https://www.cap.org.ar" target="_blank" rel="noopener noreferrer" className="text-red hover:underline">
                  Confederación Argentina de Patinaje (CAP)
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © 2025 Copa Apertura Nacional &quot;B&quot; – Patinaje Artístico. FEMIPAT · Posadas, Misiones.
          </p>
          <p className="text-white/20 text-xs">
            Diseñado para el deporte argentino.
          </p>
        </div>
      </div>
    </footer>
  )
}
