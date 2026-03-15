import Image from "next/image"
import { MapPin, Tag, Instagram } from "lucide-react"

interface Sponsor {
  name: string
  type: "hotel" | "food" | "catering"
  image: string
  description: string
  location?: string
  discount?: string
  instagram?: string
  badge: string
}

const sponsors: Sponsor[] = [
  {
    name: "Hotel Julio César",
    type: "hotel",
    image: "/images/sponsors/julio_cesar.webp",
    description:
      "Uno de los hoteles más distinguidos de Posadas. Confort y elegancia en el corazón de la ciudad, a pocos minutos del CEPARD.",
    location: "San Lorenzo 2232, Posadas, Misiones",
    discount: "Descuento especial para participantes del torneo",
    badge: "Hospedaje",
  },
  {
    name: "Hotel City",
    type: "hotel",
    image: "/images/sponsors/hotel_city.webp",
    description:
      "Hotel moderno en pleno centro de Posadas. Habitaciones cómodas, WiFi de alta velocidad y excelente servicio para deportistas y familias.",
    location: "Colón 2235, Posadas, Misiones",
    discount: "Descuento especial para participantes del torneo",
    badge: "Hospedaje",
  },
  {
    name: "Duomo",
    type: "food",
    image: "/images/sponsors/duomo.webp",
    description:
      "El stand gastronómico oficial del evento. Duomo estará presente con sus mejores propuestas de comida y bebida durante todos los días del torneo.",
    badge: "Gastronomía",
    instagram: "@duomo_posadas",
  },
  {
    name: "Rio Uruguay",
    type: "catering",
    image: "/images/sponsors/rio_uruguay.webp",
    description:
      "Nuestro sponsor oficial Rio Uruguay estará presente durante toda la competencia brindando sus productos de calidad para atletas, delegaciones y espectadores.",
    badge: "Sponsor Oficial",
    instagram: "@riouruguay",
  },
]

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="bg-white rounded-sm overflow-hidden border border-navy/10 flex flex-col group hover:shadow-xl hover:border-red/30 transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={sponsor.image}
          alt={sponsor.name}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 44vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Badge */}
        <div className="absolute top-3 left-3 bg-red text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm">
          {sponsor.badge}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3
          className="text-navy font-black text-xl uppercase leading-tight"
        >
          {sponsor.name}
        </h3>
        <p className="text-navy/65 text-sm leading-relaxed">{sponsor.description}</p>

        <div className="flex flex-col gap-2 mt-auto pt-3 border-t border-navy/10">
          {sponsor.location && (
            <div className="flex items-start gap-2">
              <MapPin size={13} className="text-red shrink-0 mt-0.5" />
              <span className="text-navy/60 text-xs">{sponsor.location}</span>
            </div>
          )}
          {sponsor.discount && (
            <div className="flex items-start gap-2">
              <Tag size={13} className="text-red shrink-0 mt-0.5" />
              <span className="text-red font-semibold text-xs">{sponsor.discount}</span>
            </div>
          )}
          {sponsor.instagram && (
            <div className="flex items-center gap-2">
              <Instagram size={13} className="text-red shrink-0" />
              <span className="text-navy/60 text-xs">{sponsor.instagram}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 md:py-28 bg-[#f5f6fa]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-red text-xs font-black uppercase tracking-widest mb-3">Colaboradores</span>
          <h2
            className="text-navy font-black text-4xl md:text-5xl uppercase leading-tight"
          >
            Sponsors del Torneo
          </h2>
          <div className="w-16 h-1 bg-red mt-4 mb-6" />
          <p className="text-navy/60 max-w-xl text-base leading-relaxed">
            Empresas y emprendimientos que hacen posible este gran evento. ¡Gracias a nuestros sponsors por su apoyo!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.name} sponsor={sponsor} />
          ))}
        </div>

        {/* CTA to sponsors */}
        <div className="mt-12 text-center">
          <p className="text-navy/50 text-sm">
            ¿Querés ser sponsor del torneo? Contactanos a través de{" "}
            <a href="mailto:femipat@gmail.com" className="text-red font-semibold hover:underline">
              femipat@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
