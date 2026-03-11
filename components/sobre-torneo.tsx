import Image from "next/image"

const stats = [
  { value: "+200", label: "Deportistas" },
  { value: "8", label: "Días de Competencia" },
  { value: "15+", label: "Provincias" },
  { value: "1", label: "País Anfitrión" },
]

export default function SobreTorneo() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-red text-xs font-black uppercase tracking-widest mb-3">El Torneo</span>
          <h2 className="text-navy font-black text-4xl md:text-5xl uppercase leading-tight text-balance" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Sobre el Torneo
          </h2>
          <div className="w-16 h-1 bg-red mt-4 mb-6" />
          <p className="text-navy/70 text-lg max-w-3xl leading-relaxed">
            La <strong className="text-navy">Copa Apertura "B" Nacional de Patinaje Artístico sobre Ruedas</strong> es uno de los torneos más importantes del calendario federativo argentino.
            Organizado por la <strong>Federación Misionera de Patinaje (FEMIPAT)</strong> y avalado por la <strong>Confederación Argentina de Patinaje (CAP)</strong>,
            este evento reúne a los mejores patinadores del país en la categoría "B", representando a clubes y provincias de toda Argentina.
          </p>
          <p className="text-navy/60 text-base max-w-2xl leading-relaxed mt-4">
            Posadas, capital de Misiones, abre nuevamente sus puertas para ser sede de esta gran fiesta del deporte nacional. 
            Competidores de distintas edades y especialidades se darán cita en el CEPARD para demostrar su talento y representar a sus provincias con orgullo.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-navy text-white rounded-sm p-6 flex flex-col items-center text-center"
            >
              <span
                className="font-black text-4xl md:text-5xl text-red leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {stat.value}
              </span>
              <span className="text-white/70 text-xs font-semibold uppercase tracking-widest mt-2">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Gallery grid */}
        <div>
          <h3 className="text-navy font-black text-2xl uppercase mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Galería – Edición 2025
          </h3>

          {/* Top section: featured + 2 smaller */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
            {/* Featured large image */}
            <div className="col-span-2 row-span-2 relative aspect-4/3 rounded-sm overflow-hidden group">
              <Image
                src="/images/edicion-2025/img4.jpeg"
                alt="Patinadores en el Polideportivo Finito Gehrmann – Edición 2025"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Small image 1 */}
            <div className="relative aspect-4/3 rounded-sm overflow-hidden group">
              <Image
                src="/images/edicion-2025/img1.jpeg"
                alt="Patinadoras en entrevista – Edición 2025"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Small image 2 */}
            <div className="relative aspect-4/3 rounded-sm overflow-hidden group">
              <Image
                src="/images/edicion-2025/img3.jpeg"
                alt="Entrenamientos en el polideportivo – Edición 2025"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Bottom section: img2 + 3 videos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* img2 */}
            <div className="relative aspect-3/4 rounded-sm overflow-hidden group">
              <Image
                src="/images/edicion-2025/img2.jpeg"
                alt="Vista general del polideportivo – Edición 2025"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Video 1 */}
            <div className="relative aspect-3/4 rounded-sm overflow-hidden bg-navy">
              <video
                src="/images/edicion-2025/video1.mp4"
                className="w-full h-full object-cover"
                controls
                muted
                playsInline
                preload="metadata"
              />
            </div>
            {/* Video 2 */}
            <div className="relative aspect-3/4 rounded-sm overflow-hidden bg-navy">
              <video
                src="/images/edicion-2025/video2.mp4"
                className="w-full h-full object-cover"
                controls
                muted
                playsInline
                preload="metadata"
              />
            </div>
            {/* Video 3 */}
            <div className="relative aspect-3/4 rounded-sm overflow-hidden bg-navy">
              <video
                src="/images/edicion-2025/video3.mp4"
                className="w-full h-full object-cover"
                controls
                muted
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
