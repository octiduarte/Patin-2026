interface OrganizerLogo {
  name: string
  shortName: string
  role: string
  color: string
}

const organizers: OrganizerLogo[] = [
  {
    name: "Federación Misionera de Patinaje",
    shortName: "FEMIPAT",
    role: "Organizador Principal",
    color: "#c8102e",
  },
  {
    name: "Confederación Argentina de Patinaje",
    shortName: "CAP",
    role: "Aval Nacional",
    color: "#0d1b3e",
  },
  {
    name: "Ministerio de Deportes de Misiones",
    shortName: "MISIONES",
    role: "Apoyo Institucional",
    color: "#0d1b3e",
  },
  {
    name: "Municipalidad de Posadas",
    shortName: "POSADAS",
    role: "Apoyo Municipal",
    color: "#0d1b3e",
  },
]

export default function Organizadores() {
  return (
    <section id="organizadores" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-[#c8102e] text-xs font-black uppercase tracking-widest mb-3">Instituciones</span>
          <h2
            className="text-[#0d1b3e] font-black text-4xl md:text-5xl uppercase leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Organizadores
          </h2>
          <div className="w-16 h-1 bg-[#c8102e] mt-4 mb-6" />
          <p className="text-[#0d1b3e]/60 max-w-xl text-base leading-relaxed">
            Este torneo es posible gracias al compromiso y trabajo conjunto de las siguientes instituciones deportivas y gubernamentales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {organizers.map((org) => (
            <div
              key={org.shortName}
              className="group border border-[#0d1b3e]/10 rounded-sm p-8 flex flex-col items-center text-center hover:border-[#c8102e] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Logo circle */}
              <div
                className="w-24 h-24 rounded-full flex flex-col items-center justify-center mb-5 transition-all duration-300"
                style={{ backgroundColor: org.color }}
              >
                <span
                  className="text-white font-black text-lg leading-tight"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {org.shortName}
                </span>
              </div>

              {/* Role badge */}
              <span className="text-[#c8102e] text-[10px] font-black uppercase tracking-widest mb-2">
                {org.role}
              </span>

              {/* Name */}
              <h3 className="text-[#0d1b3e] font-bold text-sm leading-snug">{org.name}</h3>

              {/* Decorative line */}
              <div className="w-8 h-0.5 bg-[#c8102e]/30 mt-4 group-hover:w-12 group-hover:bg-[#c8102e] transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Secondary text */}
        <div className="mt-10 text-center">
          <p className="text-[#0d1b3e]/40 text-xs uppercase tracking-widest">
            Evento avalado por la Confederación Argentina de Patinaje · Temporada 2025
          </p>
        </div>
      </div>
    </section>
  )
}
