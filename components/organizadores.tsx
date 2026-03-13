import Image from "next/image"

interface OrganizerLogo {
  name: string
  shortName: string
  role: string
  logoSrc: string
}

const organizers: OrganizerLogo[] = [
  {
    name: "Federación Misionera de Patinaje",
    shortName: "FEMIPAT",
    role: "Organizador Principal",
    logoSrc: "/images/logos/organizaciones/logo_femipat.webp",
  },
  {
    name: "Confederación Argentina de Patinaje",
    shortName: "CAP",
    role: "Aval Nacional",
    logoSrc: "/images/logos/organizaciones/logo_cap_azul.webp",
  },
  {
    name: "Ministerio de Deportes de Misiones",
    shortName: "MISIONES",
    role: "Apoyo Institucional",
    logoSrc: "/images/logos/organizaciones/logo_ministerio_deportes.webp",
  },
  {
    name: "Municipalidad de Posadas",
    shortName: "POSADAS",
    role: "Apoyo Municipal",
    logoSrc: "/images/logos/organizaciones/logo_municipalidad_posadas.webp",
  },
]

export default function Organizadores() {
  return (
    <section id="organizadores" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-red text-xs font-black uppercase tracking-widest mb-3">Instituciones</span>
          <h2
            className="text-navy font-black text-4xl md:text-5xl uppercase leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Organizadores
          </h2>
          <div className="w-16 h-1 bg-red mt-4 mb-6" />
          <p className="text-navy/60 max-w-xl text-base leading-relaxed">
            Este torneo es posible gracias al compromiso y trabajo conjunto de las siguientes instituciones deportivas y gubernamentales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {organizers.map((org) => (
            <div
              key={org.shortName}
              className="group border border-navy/10 rounded-sm p-8 flex flex-col items-center text-center hover:border-red hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Logo */}
              <div className="w-full h-24 mb-5 relative">
                <Image
                  src={org.logoSrc}
                  alt={`Logo ${org.shortName}`}
                  fill
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 40vw, 80vw"
                  className="object-contain"
                />
              </div>

              {/* Role badge */}
              <span className="text-red text-[10px] font-black uppercase tracking-widest mb-2">
                {org.role}
              </span>

              {/* Name */}
              <h3 className="text-navy font-bold text-sm leading-snug">{org.name}</h3>

              {/* Decorative line */}
              <div className="w-8 h-0.5 bg-red/30 mt-4 group-hover:w-12 group-hover:bg-red transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Secondary text */}
        <div className="mt-10 text-center">
          <p className="text-navy/40 text-xs uppercase tracking-widest">
            Evento avalado por la Confederación Argentina de Patinaje · Temporada 2026
          </p>
        </div>
      </div>
    </section>
  )
}
