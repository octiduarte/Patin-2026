"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const stats = [
  { value: "+200", label: "Deportistas" },
  { value: "8", label: "Días de Competencia" },
  { value: "15+", label: "Provincias" },
  { value: "1", label: "País Anfitrión" },
];

const photos = [
  "/images/edicion-2025/Horizontales/foto-2025_1.webp",
  "/images/edicion-2025/Horizontales/foto-2025_2.webp",
  "/images/edicion-2025/Horizontales/foto-2025_3.webp",
  "/images/edicion-2025/Horizontales/foto-2025_4.webp",
  "/images/edicion-2025/Horizontales/foto-2025_5.webp",
  "/images/edicion-2025/Horizontales/foto-2025_6.webp",
  "/images/edicion-2025/Horizontales/foto-2025_7.webp",
  "/images/edicion-2025/Horizontales/prueba.jpg",
  "/images/edicion-2025/Verticales/foto-2025_8.webp",
  "/images/edicion-2025/Verticales/foto-2025_9.webp",
  "/images/edicion-2025/Verticales/foto-2025_10.webp",
  "/images/edicion-2025/Verticales/foto-2025_11.webp",
  "/images/edicion-2025/Verticales/foto-2025_12.webp",
];

type PhotoSize = "large" | "tall" | "wide" | "small";

// Mosaic layout: each entry describes the visual weight of that slot.
// "large" = 2×2, "tall" = 1×2, "wide" = 2×1, "small" = 1×1 (default, no extra class needed)
const PHOTO_SIZES: PhotoSize[] = [
  "large", // 0
  "small", // 1
  "tall",  // 2
  "small", // 3
  "wide",  // 4
  "small", // 5
  "small", // 6
  "large", // 7
  "small", // 8
  "tall",  // 9
  "small", // 10
  "wide",  // 11
];

const SIZE_CLASSES: Record<PhotoSize, string> = {
  large: "lg:col-span-2 lg:row-span-2",
  tall:  "lg:row-span-2",
  wide:  "lg:col-span-2",
  small: "",
};

function shufflePhotos(list: string[]) {
  const shuffled = [...list];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function SobreTorneo() {
  const [randomizedPhotos, setRandomizedPhotos] = useState<string[]>(photos);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  useEffect(() => {
    setRandomizedPhotos(shufflePhotos(photos));
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPhoto(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-red text-xs font-black uppercase tracking-widest mb-3">
            El Torneo
          </span>
          <h2
            className="text-navy font-black text-4xl md:text-5xl uppercase leading-tight text-balance"
          >
            Sobre el Torneo
          </h2>
          <div className="w-16 h-1 bg-red mt-4 mb-6" />
          <p className="text-navy/70 text-lg max-w-3xl leading-relaxed">
            La{" "}
            <strong className="text-navy">
              Copa Apertura "B" Nacional de Patinaje Artístico sobre Ruedas
            </strong>{" "}
            es uno de los torneos más importantes del calendario federativo
            argentino. Organizado por la{" "}
            <strong>Federación Misionera de Patinaje (FEMIPAT)</strong> y
            avalado por la{" "}
            <strong>Confederación Argentina de Patinaje (CAP)</strong>, este
            evento reúne a los mejores patinadores del país en la categoría "B",
            representando a clubes y provincias de toda Argentina.
          </p>
          <p className="text-navy/60 text-base max-w-2xl leading-relaxed mt-4">
            Posadas, capital de Misiones, abre nuevamente sus puertas para ser
            sede de esta gran fiesta del deporte nacional. Competidores de
            distintas edades y especialidades se darán cita en el CEPARD para
            demostrar su talento y representar a sus provincias con orgullo.
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
              >
                {stat.value}
              </span>
              <span className="text-white/70 text-xs font-semibold uppercase tracking-widest mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Gallery grid */}
        <div>
          <h3
            className="text-navy font-black text-2xl uppercase mb-6"
          >
            Galería – Edición 2025
          </h3>
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 grid-flow-dense"
            style={{ gridAutoRows: "200px" }}
          >
            {randomizedPhotos.map((photo, index) => (
              <button
                key={photo}
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                className={[
                  "relative overflow-hidden rounded-sm bg-navy/5 group cursor-zoom-in",
                  SIZE_CLASSES[PHOTO_SIZES[index]],
                ].filter(Boolean).join(" ")}
                aria-label={`Abrir imagen ${index + 1}`}
              >
                <Image
                  src={photo}
                  alt={`Imagen de la Copa Apertura 2025 (${index + 1})`}
                  fill
                  sizes="(min-width: 1280px) 560px, (min-width: 1024px) 50vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedPhoto ? (
        <div
          className="fixed inset-0 z-50 bg-navy/85 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de imagen"
        >
          <button
            type="button"
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 h-10 w-10 rounded-full bg-white/15 text-white text-2xl leading-none hover:bg-white/25 transition-colors"
            aria-label="Cerrar imagen"
          >
            ×
          </button>

          <div
            className="relative w-[min(92vw,1200px)] h-[85vh]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedPhoto}
              alt="Imagen ampliada de la Copa Apertura 2025"
              fill
              sizes="(min-width: 1280px) 1200px, (min-width: 768px) 80vw, 95vw"
              className="object-contain"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
