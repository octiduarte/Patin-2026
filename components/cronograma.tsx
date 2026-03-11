interface DaySchedule {
  day: string
  date: string
  events: { time: string; description: string; highlight?: boolean }[]
}

const schedule: DaySchedule[] = [
  {
    day: "Viernes",
    date: "25 Abr",
    events: [
      { time: "09:00", description: "Acreditación de delegaciones" },
      { time: "14:00", description: "Entrenamiento oficial en pista" },
      { time: "18:00", description: "Ceremonia de apertura", highlight: true },
      { time: "20:00", description: "Cena de bienvenida" },
    ],
  },
  {
    day: "Sábado",
    date: "26 Abr",
    events: [
      { time: "09:00", description: "Competencia – Categorías menores (libre)" },
      { time: "14:00", description: "Competencia – Infantil y Pre-infantil" },
      { time: "19:00", description: "Premiación del día", highlight: true },
    ],
  },
  {
    day: "Domingo",
    date: "27 Abr",
    events: [
      { time: "09:00", description: "Competencia – Categorías juveniles" },
      { time: "14:00", description: "Competencia – Parejas deportivas" },
      { time: "18:30", description: "Premiación y gala vespertina", highlight: true },
    ],
  },
  {
    day: "Lunes",
    date: "28 Abr",
    events: [
      { time: "10:00", description: "Entrenamiento libre supervisado" },
      { time: "15:00", description: "Competencia – Categorías cadetes" },
    ],
  },
  {
    day: "Martes",
    date: "29 Abr",
    events: [
      { time: "09:00", description: "Competencia – Danza sobre ruedas" },
      { time: "14:00", description: "Competencia – Libre parejas adultos" },
    ],
  },
  {
    day: "Miércoles",
    date: "30 Abr",
    events: [
      { time: "10:00", description: "Semifinales – Categorías principales" },
      { time: "17:00", description: "Competencia – Programa corto senior", highlight: true },
    ],
  },
  {
    day: "Jueves",
    date: "1 May",
    events: [
      { time: "09:00", description: "Finales – Todas las categorías", highlight: true },
      { time: "18:00", description: "Gran final – Programa libre senior", highlight: true },
    ],
  },
  {
    day: "Viernes",
    date: "2 May",
    events: [
      { time: "10:00", description: "Exhibición de campeones" },
      { time: "15:00", description: "Ceremonia de clausura y premiación general", highlight: true },
      { time: "19:00", description: "Cierre oficial del torneo" },
    ],
  },
]

export default function Cronograma() {
  return (
    <section id="cronograma" className="py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-red text-xs font-black uppercase tracking-widest mb-3">Programa</span>
          <h2
            className="text-white font-black text-4xl md:text-5xl uppercase leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Cronograma del Torneo
          </h2>
          <div className="w-16 h-1 bg-red mt-4 mb-6" />
          <p className="text-white/60 max-w-xl text-base leading-relaxed">
            25 de Abril al 2 de Mayo de 2025 · CEPARD, Posadas, Misiones
          </p>
        </div>

        {/* Schedule grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {schedule.map((day, idx) => (
            <div
              key={day.date}
              className="bg-navy-light rounded-sm overflow-hidden border border-white/5 hover:border-red/40 transition-all duration-300"
            >
              {/* Day header */}
              <div className="bg-red px-4 py-3 flex items-center justify-between">
                <div>
                  <span className="text-white font-black text-sm uppercase tracking-wide block">
                    {day.day}
                  </span>
                  <span className="text-white/80 text-xs font-semibold">{day.date}</span>
                </div>
                <span
                  className="text-white/30 font-black text-2xl"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Events */}
              <div className="p-4 flex flex-col gap-3">
                {day.events.map((event) => (
                  <div
                    key={event.time + event.description}
                    className={`flex items-start gap-3 ${event.highlight ? "text-white" : "text-white/60"}`}
                  >
                    <span
                      className={`text-xs font-black shrink-0 mt-0.5 ${
                        event.highlight ? "text-red" : "text-white/30"
                      }`}
                    >
                      {event.time}
                    </span>
                    <span className={`text-xs leading-snug ${event.highlight ? "font-semibold text-white" : ""}`}>
                      {event.description}
                    </span>
                    {event.highlight && (
                      <span className="ml-auto shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-red block mt-1.5" />
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-white/30 text-xs text-center mt-8">
          * Los horarios pueden estar sujetos a modificaciones. Consultar el cronograma oficial publicado por FEMIPAT.
        </p>
      </div>
    </section>
  )
}
