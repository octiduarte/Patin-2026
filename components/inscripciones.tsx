import { ExternalLink, CheckCircle, AlertCircle, FileText, Users } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Completá el formulario",
    description:
      "Ingresá al formulario oficial de inscripción y completá todos los datos del deportista: nombre, club, categoría, provincia y especialidad.",
  },
  {
    icon: Users,
    title: "Representación de club",
    description:
      "Las inscripciones deben ser realizadas por el director técnico o representante oficial del club, con aval de la federación provincial correspondiente.",
  },
  {
    icon: CheckCircle,
    title: "Confirmación y acreditación",
    description:
      "Una vez procesada la inscripción, recibirás la confirmación por correo electrónico. El día del evento, presentate en acreditaciones con tu documento.",
  },
  {
    icon: AlertCircle,
    title: "Fecha límite",
    description:
      "Las inscripciones cierran el 18 de Abril de 2025. No se aceptarán inscripciones fuera de término. Asegurate de completar el proceso con anticipación.",
  },
]

const requirements = [
  "Ser miembro activo de un club afiliado a la federación provincial",
  "Contar con el aval de la federación de tu provincia",
  "Tener licencia federativa vigente para la temporada 2025",
  "Haber participado en competencias provinciales (según reglamento CAP)",
  "Presentar certificado médico actualizado",
  "Abonar el arancel de inscripción según la categoría",
]

export default function Inscripciones() {
  return (
    <section id="inscripciones" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-[#c8102e] text-xs font-black uppercase tracking-widest mb-3">Participá</span>
          <h2
            className="text-[#0d1b3e] font-black text-4xl md:text-5xl uppercase leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Inscripciones
          </h2>
          <div className="w-16 h-1 bg-[#c8102e] mt-4 mb-6" />
          <p className="text-[#0d1b3e]/60 max-w-xl text-base leading-relaxed">
            ¿Sos patinador/a y querés participar en la Copa Apertura "B" Nacional? Seguí estos pasos para inscribirte y ser parte del torneo más importante de la temporada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Steps */}
          <div>
            <h3
              className="text-[#0d1b3e] font-black text-2xl uppercase mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Cómo inscribirse
            </h3>
            <div className="flex flex-col gap-5">
              {steps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <div key={step.title} className="flex items-start gap-4 group">
                    <div className="flex flex-col items-center gap-1 shrink-0">
                      <div className="w-10 h-10 rounded-sm bg-[#0d1b3e] flex items-center justify-center group-hover:bg-[#c8102e] transition-colors duration-300">
                        <Icon size={18} className="text-white" />
                      </div>
                      {idx < steps.length - 1 && (
                        <div className="w-px h-6 bg-[#0d1b3e]/15" />
                      )}
                    </div>
                    <div className="pt-1">
                      <span className="text-[#c8102e] text-[10px] font-black uppercase tracking-widest">
                        Paso {idx + 1}
                      </span>
                      <h4 className="text-[#0d1b3e] font-bold text-base mt-0.5">{step.title}</h4>
                      <p className="text-[#0d1b3e]/60 text-sm leading-relaxed mt-1">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#c8102e] hover:bg-[#a80d26] text-white font-black uppercase tracking-widest text-sm px-8 py-4 rounded-sm transition-all duration-200 shadow-lg shadow-[#c8102e]/20 hover:shadow-[#c8102e]/40 hover:-translate-y-0.5"
              >
                Formulario de Inscripción
                <ExternalLink size={16} />
              </a>
              <p className="text-[#0d1b3e]/40 text-xs mt-3">
                * Serás redirigido al formulario oficial de FEMIPAT/CAP
              </p>
            </div>
          </div>

          {/* Right: Requirements */}
          <div>
            <h3
              className="text-[#0d1b3e] font-black text-2xl uppercase mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Requisitos para participar
            </h3>
            <div className="bg-[#0d1b3e] rounded-sm p-6">
              <div className="flex flex-col gap-3">
                {requirements.map((req) => (
                  <div key={req} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-[#c8102e] shrink-0 mt-0.5" />
                    <span className="text-white/75 text-sm leading-snug">{req}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="flex items-start gap-3 bg-[#c8102e]/15 rounded-sm p-4">
                  <AlertCircle size={16} className="text-[#c8102e] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold text-sm block">Cierre de inscripciones</span>
                    <span className="text-white/60 text-sm">18 de Abril de 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="mt-6 bg-[#f5f6fa] rounded-sm p-5">
              <h4 className="text-[#0d1b3e] font-bold text-sm mb-3 uppercase tracking-wide">
                Consultas e información
              </h4>
              <div className="flex flex-col gap-2">
                <p className="text-[#0d1b3e]/65 text-sm">
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:femipat@gmail.com" className="text-[#c8102e] hover:underline">
                    femipat@gmail.com
                  </a>
                </p>
                <p className="text-[#0d1b3e]/65 text-sm">
                  <span className="font-semibold">Instagram:</span>{" "}
                  <a href="https://instagram.com/femipat" className="text-[#c8102e] hover:underline" target="_blank" rel="noopener noreferrer">
                    @femipat
                  </a>
                </p>
                <p className="text-[#0d1b3e]/65 text-sm">
                  <span className="font-semibold">Sitio CAP:</span>{" "}
                  <a href="https://www.cap.org.ar" className="text-[#c8102e] hover:underline" target="_blank" rel="noopener noreferrer">
                    www.cap.org.ar
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
