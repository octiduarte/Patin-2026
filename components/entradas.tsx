import { ExternalLink } from "lucide-react";

export default function Entradas() {
  return (
    <section id="Entradas" className="py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        <span className="text-red text-xs font-black uppercase tracking-widest mb-4">
          Entradas
        </span>
        <h2 className="text-white font-black text-4xl md:text-5xl uppercase leading-tight text-balance mb-6">
          Adquirí tu entrada y sé parte de la Copa Apertura Nacional &quot;B&quot;
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mb-10">
          Completá tu inscripción antes del 18 de Abril de 2026 y sé parte de la
          Copa Apertura Nacional "B".
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-red hover:bg-red-dark text-white font-black uppercase tracking-widest text-sm px-8 py-4 rounded-sm transition-all duration-200 shadow-lg shadow-red/20 hover:shadow-red/40 hover:-translate-y-0.5"
        >
          Comprar entradas
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}
