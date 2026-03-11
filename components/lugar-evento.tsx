import Image from "next/image"
import { MapPin, Navigation, Clock, Phone } from "lucide-react"

export default function LugarEvento() {
  return (
    <section id="lugar" className="py-20 md:py-28 bg-[#0d1b3e]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-[#c8102e] text-xs font-black uppercase tracking-widest mb-3">Sede Oficial</span>
          <h2
            className="text-white font-black text-4xl md:text-5xl uppercase leading-tight text-balance"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Lugar del Evento
          </h2>
          <div className="w-16 h-1 bg-[#c8102e] mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: venue info + image */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-video rounded-sm overflow-hidden">
              <Image
                src="/images/cepard.jpg"
                alt="Centro Deportivo CEPARD – Posadas, Misiones"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-[#0d1b3e] to-transparent p-4">
                <span className="text-white font-black text-xl uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  CEPARD
                </span>
                <p className="text-white/70 text-sm">Centro Deportivo de Posadas</p>
              </div>
            </div>

            {/* Venue details */}
            <div className="bg-[#162040] rounded-sm p-6 flex flex-col gap-4">
              <h3
                className="text-white font-black text-2xl uppercase"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Centro Deportivo CEPARD
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                El CEPARD (Centro Deportivo de Posadas) es una de las instalaciones deportivas más modernas del NEA (Noreste Argentino). 
                Cuenta con canchas multifunción cubiertas, vestuarios de primer nivel, tribunas con capacidad para cientos de espectadores 
                y accesibilidad para personas con movilidad reducida.
              </p>

              <div className="flex flex-col gap-3 mt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#c8102e] mt-0.5 shrink-0" size={16} />
                  <div>
                    <span className="text-white font-semibold text-sm">Dirección</span>
                    <p className="text-white/60 text-sm">José Sorsana 5400 (RN-12 y acceso al Parque Inudstrial), entre el Parque del Conocimiento y el Parque de la Ciudad</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-[#c8102e] mt-0.5 shrink-0" size={16} />
                  <div>
                    <span className="text-white font-semibold text-sm">Horarios de competencia</span>
                    <p className="text-white/60 text-sm">A confirmar según cronograma oficial</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-[#c8102e] mt-0.5 shrink-0" size={16} />
                  <div>
                    <span className="text-white font-semibold text-sm">Contacto organizador</span>
                    <p className="text-white/60 text-sm">FEMIPAT – Federación Misionera de Patinaje</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map + directions */}
          <div className="flex flex-col gap-6">
            {/* Map embed placeholder */}
            <div className="rounded-sm overflow-hidden border border-white/10" style={{ height: 340 }}>
              <iframe
                title="Mapa CEPARD Posadas"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3542.184975241133!2d-55.966364!3d-27.4011581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457bdbaedccab25%3A0x44258c4845831f49!2sCEPARD!5e0!3m2!1ses!2sar!4v1773265612402!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* How to get there */}
            <div className="bg-[#162040] rounded-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Navigation className="text-[#c8102e]" size={18} />
                <h4 className="text-white font-black text-base uppercase tracking-wide">
                  Cómo llegar desde el centro de Posadas
                </h4>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3 p-3 bg-[#0d1b3e] rounded-sm">
                  <span className="text-[#c8102e] font-black text-xs uppercase tracking-wider shrink-0 mt-0.5">Auto</span>
                  <p className="text-white/70 text-sm">
                    Desde la plaza 9 de Julio, tomar Av. Costanera en dirección norte hacia el CEPARD. 
                    Aproximadamente <strong className="text-white">10 minutos</strong> en auto.
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-[#0d1b3e] rounded-sm">
                  <span className="text-[#c8102e] font-black text-xs uppercase tracking-wider shrink-0 mt-0.5">Bus</span>
                  <p className="text-white/70 text-sm">
                    Líneas de colectivo urbano que circulan por Av. Quaranta. 
                    Consultar el recorrido de la línea que pasa por el CEPARD en la terminal de Posadas.
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-[#0d1b3e] rounded-sm">
                  <span className="text-[#c8102e] font-black text-xs uppercase tracking-wider shrink-0 mt-0.5">Remis</span>
                  <p className="text-white/70 text-sm">
                    Servicio de remises disponible en toda la ciudad. 
                    Tiempo estimado desde el microcentro: <strong className="text-white">15–25 minutos</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
