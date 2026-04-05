import FadeIn from "./fade-in"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink } from "lucide-react"

interface DaySchedule {
  day: string
  date: string
  events: {
    time: string
    description: string
    highlight?: boolean
    centered?: boolean
    type?: "default" | "track" | "special"
    quantityLabel?: string
  }[]
}

type BlockType = "prueba_de_pista" | "competencia" | "premiacion_prueba_receso" | "fin_de_jornada" | "acto_ceremonial"

interface RawBlock {
  tipo: BlockType
  cantidad?: number
  desde?: string
  hasta?: string
  panel?: "A" | "B"
  categoria?: string
  nivel?: string
  edad?: string
  rama?: string
  especialidad?: string
}

interface RawScheduleDay {
  dia: string
  inicioJornada: string
  bloques: RawBlock[]
}

const CRONOGRAMA_PDF_URL = "/PROGRAMA.pdf"

const cronograma: RawScheduleDay[] = [
  {
    dia: "Sábado 25/04/2026",
    inicioJornada: "07:45",
    bloques: [
      { tipo: "prueba_de_pista", cantidad: 7, desde: "07:45", hasta: "08:34" },
      { tipo: "competencia", cantidad: 29, desde: "08:34", hasta: "11:57", categoria: "PROMO", nivel: "SENIOR", edad: "AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 14, desde: "11:57", hasta: "13:35", categoria: "1RA", nivel: "SENIOR", edad: "AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "premiacion_prueba_receso", cantidad: 12, desde: "13:35", hasta: "14:59" },
      { tipo: "competencia", cantidad: 33, desde: "14:59", hasta: "18:50", categoria: "3RA", nivel: "SENIOR", edad: "AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 3, desde: "18:50", hasta: "19:11", categoria: "PROMO", nivel: "JUNIOR", edad: "AÑOS", rama: "CABALLEROS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 3, desde: "19:11", hasta: "19:32", categoria: "3RA", nivel: "JUNIOR", edad: "AÑOS", rama: "CABALLEROS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 3, desde: "19:32", hasta: "19:53", categoria: "2DA", nivel: "JUNIOR", edad: "AÑOS", rama: "CABALLEROS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 3, desde: "19:53", hasta: "20:14", categoria: "2DA", nivel: "SENIOR", edad: "AÑOS", rama: "CABALLEROS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 24, desde: "20:14", hasta: "23:02", categoria: "2DA", nivel: "SENIOR", edad: "AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "fin_de_jornada" },
    ],
  },
  {
    dia: "Domingo 26/04/2026",
    inicioJornada: "07:45",
    bloques: [
      { tipo: "prueba_de_pista", cantidad: 6, desde: "07:45", hasta: "08:27" },
      { tipo: "competencia", cantidad: 42, desde: "08:27", hasta: "13:21", categoria: "PROMO", nivel: "JUNIOR", edad: "17 AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "premiacion_prueba_receso", cantidad: 16, desde: "13:21", hasta: "15:13" },
      { tipo: "competencia", panel: "A", cantidad: 10, desde: "15:13", hasta: "16:03", categoria: "2DA", nivel: "JUNIOR", edad: "AÑOS", rama: "DAMAS", especialidad: "FIG OBLIG" },
      { tipo: "competencia", panel: "A", cantidad: 4, desde: "16:03", hasta: "16:23", categoria: "PROMO", nivel: "SENIOR", edad: "AÑOS", rama: "DAMAS Y CAB", especialidad: "FIG OBLIG" },
      { tipo: "competencia", panel: "A", cantidad: 8, desde: "16:23", hasta: "17:03", categoria: "1RA", nivel: "SENIOR", edad: "AÑOS", rama: "DAMAS Y CAB", especialidad: "FIG OBLIG" },
      { tipo: "competencia", panel: "B", cantidad: 12, desde: "15:13", hasta: "16:13", categoria: "1RA", nivel: "JUNIOR", edad: "AÑOS", rama: "DAMAS", especialidad: "FIG OBLIG" },
      { tipo: "competencia", panel: "B", cantidad: 7, desde: "16:13", hasta: "16:48", categoria: "3RA", nivel: "SENIOR", edad: "AÑOS", rama: "DAMAS", especialidad: "FIG OBLIG" },
      { tipo: "competencia", panel: "B", cantidad: 5, desde: "16:48", hasta: "17:13", categoria: "2DA", nivel: "SENIOR", edad: "AÑOS", rama: "DAMAS", especialidad: "FIG OBLIG" },
      { tipo: "competencia", cantidad: 1, desde: "17:13", hasta: "17:20", categoria: "INTERMEDIO", nivel: "CADETE", edad: "AÑOS", rama: "DAMAS", especialidad: "IN LINE" },
      { tipo: "competencia", cantidad: 1, desde: "17:20", hasta: "17:27", categoria: "INTERMEDIO", nivel: "SENIOR", edad: "AÑOS", rama: "DAMAS", especialidad: "IN LINE" },
      { tipo: "competencia", cantidad: 29, desde: "17:27", hasta: "20:50", categoria: "PROMO", nivel: "JUNIOR", edad: "17 AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 18, desde: "20:50", hasta: "22:56", categoria: "1RA", nivel: "JUNIOR", edad: "AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "fin_de_jornada" },
    ],
  },
  {
    dia: "Lunes 27/04/2026",
    inicioJornada: "07:45",
    bloques: [
      { tipo: "prueba_de_pista", cantidad: 5, desde: "07:45", hasta: "08:20" },
      { tipo: "competencia", cantidad: 37, desde: "08:20", hasta: "12:39", categoria: "3RA", nivel: "JUNIOR", edad: "AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "premiacion_prueba_receso", cantidad: 14, desde: "12:39", hasta: "14:17" },
      { tipo: "competencia", cantidad: 51, desde: "14:17", hasta: "19:23", categoria: "PROMO", nivel: "JUVENIL", edad: "AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 38, desde: "19:23", hasta: "23:11", categoria: "2DA", nivel: "JUNIOR", edad: "AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "fin_de_jornada" },
    ],
  },
  {
    dia: "Martes 28/04/2026",
    inicioJornada: "07:45",
    bloques: [
      { tipo: "prueba_de_pista", cantidad: 5, desde: "07:45", hasta: "08:20" },
      { tipo: "competencia", cantidad: 30, desde: "08:20", hasta: "11:20", categoria: "3RA", nivel: "JUVENIL", edad: "AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 8, desde: "11:20", hasta: "12:16", categoria: "1RA", nivel: "JUVENIL", edad: "AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "premiacion_prueba_receso", cantidad: 15, desde: "12:16", hasta: "14:01" },
      { tipo: "competencia", panel: "A", cantidad: 22, desde: "14:01", hasta: "15:51", categoria: "PROMO", nivel: "JUNIOR", edad: "AÑOS", rama: "DAMAS", especialidad: "FIG OBLIG" },
      { tipo: "competencia", panel: "A", cantidad: 7, desde: "15:51", hasta: "16:26", categoria: "3RA", nivel: "JUVENIL", edad: "AÑOS", rama: "DAMAS Y CAB", especialidad: "FIG OBLIG" },
      { tipo: "competencia", panel: "B", cantidad: 4, desde: "14:01", hasta: "14:21", categoria: "3RA", nivel: "JUNIOR", edad: "AÑOS", rama: "DAMAS", especialidad: "FIG OBLIG" },
      { tipo: "competencia", panel: "B", cantidad: 10, desde: "14:21", hasta: "15:11", categoria: "PROMO", nivel: "JUVENIL", edad: "AÑOS", rama: "DAMAS", especialidad: "FIG OBLIG" },
      { tipo: "competencia", panel: "B", cantidad: 8, desde: "15:11", hasta: "15:51", categoria: "2DA", nivel: "JUVENIL", edad: "AÑOS", rama: "DAMAS", especialidad: "FIG OBLIG" },
      { tipo: "competencia", panel: "B", cantidad: 5, desde: "15:51", hasta: "16:16", categoria: "1RA", nivel: "JUVENIL", edad: "AÑOS", rama: "DAMAS", especialidad: "FIG OBLIG" },
      { tipo: "competencia", cantidad: 3, desde: "16:26", hasta: "16:47", categoria: "PROMO", nivel: "CADETE", edad: "AÑOS", rama: "CABALLEROS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 1, desde: "16:47", hasta: "16:53", categoria: "PROMO", nivel: "JUVENIL", edad: "AÑOS", rama: "CABALLEROS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 2, desde: "16:53", hasta: "17:07", categoria: "3RA", nivel: "CADETE", edad: "AÑOS", rama: "CABALLEROS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 1, desde: "17:07", hasta: "17:13", categoria: "2DA", nivel: "CADETE", edad: "AÑOS", rama: "CABALLEROS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 1, desde: "17:13", hasta: "17:19", categoria: "2DA", nivel: "JUVENIL", edad: "AÑOS", rama: "CABALLEROS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 25, desde: "17:19", hasta: "20:14", categoria: "2DA", nivel: "CADETE", edad: "AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 17, desde: "20:14", hasta: "22:13", categoria: "2DA", nivel: "JUVENIL", edad: "AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "fin_de_jornada" },
    ],
  },
  {
    dia: "Miércoles 29/04/2026",
    inicioJornada: "08:00",
    bloques: [
      { tipo: "prueba_de_pista", cantidad: 7, desde: "08:00", hasta: "08:49" },
      { tipo: "competencia", panel: "A", cantidad: 26, desde: "08:49", hasta: "10:59", categoria: "PROMO", nivel: "CADETE", edad: "AÑOS", rama: "DAMAS", especialidad: "FIG OBLIG" },
      { tipo: "competencia", panel: "A", cantidad: 1, desde: "10:59", hasta: "11:04", categoria: "1RA", nivel: "CADETE", edad: "AÑOS", rama: "DAMAS", especialidad: "FIG OBLIG" },
      { tipo: "competencia", panel: "B", cantidad: 14, desde: "08:49", hasta: "09:59", categoria: "3RA", nivel: "CADETE", edad: "AÑOS", rama: "DAMAS", especialidad: "FIG OBLIG" },
      { tipo: "competencia", panel: "B", cantidad: 10, desde: "09:59", hasta: "10:49", categoria: "2DA", nivel: "CADETE", edad: "AÑOS", rama: "DAMAS", especialidad: "FIG OBLIG" },
      { tipo: "premiacion_prueba_receso", cantidad: 13, desde: "11:04", hasta: "12:35" },
      { tipo: "competencia", cantidad: 44, desde: "12:35", hasta: "16:59", categoria: "3RA", nivel: "CADETE", edad: "AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 12, desde: "16:59", hasta: "18:23", categoria: "1RA", nivel: "CADETE", edad: "AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 6, desde: "18:23", hasta: "18:59", categoria: "PROMO", nivel: "INFANTIL", edad: "AÑOS", rama: "CABALLEROS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 1, desde: "18:59", hasta: "19:06", categoria: "PROMO", nivel: "MINI", edad: "AÑOS", rama: "CABALLEROS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 1, desde: "19:06", hasta: "19:12", categoria: "3RA", nivel: "INFANTIL", edad: "AÑOS", rama: "CABALLEROS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 1, desde: "19:12", hasta: "19:19", categoria: "3RA", nivel: "MINI", edad: "AÑOS", rama: "CABALLEROS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 1, desde: "19:19", hasta: "19:25", categoria: "2DA", nivel: "INFANTIL", edad: "AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "acto_ceremonial", desde: "19:30" },
    ],
  },
  {
    dia: "Jueves 30/04/2026",
    inicioJornada: "07:45",
    bloques: [
      { tipo: "prueba_de_pista", cantidad: 5, desde: "07:45", hasta: "08:20" },
      { tipo: "competencia", cantidad: 40, desde: "08:20", hasta: "12:20", categoria: "PROMO", nivel: "CADETE", edad: "14 AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "premiacion_prueba_receso", cantidad: 15, desde: "12:20", hasta: "14:05" },
      { tipo: "competencia", panel: "A", cantidad: 18, desde: "14:05", hasta: "15:35", categoria: "PROMO", nivel: "INFANTIL", edad: "AÑOS", rama: "DAMAS", especialidad: "FIG OBLIG" },
      { tipo: "competencia", panel: "A", cantidad: 4, desde: "15:35", hasta: "15:55", categoria: "3RA", nivel: "MINI", edad: "AÑOS", rama: "DAMAS", especialidad: "FIG OBLIG" },
      { tipo: "competencia", panel: "A", cantidad: 1, desde: "15:55", hasta: "16:00", categoria: "2DA", nivel: "MINI", edad: "AÑOS", rama: "DAMAS", especialidad: "FIG OBLIG" },
      { tipo: "competencia", panel: "B", cantidad: 8, desde: "14:05", hasta: "14:45", categoria: "PROMO", nivel: "MINI", edad: "AÑOS", rama: "DAMAS", especialidad: "FIG OBLIG" },
      { tipo: "competencia", panel: "B", cantidad: 8, desde: "14:45", hasta: "15:25", categoria: "3RA", nivel: "INFANTIL", edad: "AÑOS", rama: "DAMAS", especialidad: "FIG OBLIG" },
      { tipo: "competencia", panel: "B", cantidad: 7, desde: "15:25", hasta: "16:00", categoria: "2DA", nivel: "INFANTIL", edad: "AÑOS", rama: "DAMAS", especialidad: "FIG OBLIG" },
      { tipo: "competencia", cantidad: 40, desde: "16:00", hasta: "20:20", categoria: "PROMO", nivel: "CADETE", edad: "15 AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 23, desde: "20:20", hasta: "23:01", categoria: "PROMO", nivel: "MINI", edad: "AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "fin_de_jornada" },
    ],
  },
  {
    dia: "Viernes 01/05/2026",
    inicioJornada: "07:45",
    bloques: [
      { tipo: "prueba_de_pista", cantidad: 6, desde: "07:45", hasta: "08:27" },
      { tipo: "competencia", cantidad: 29, desde: "08:27", hasta: "11:50", categoria: "3RA", nivel: "INFANTIL", edad: "AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 10, desde: "11:50", hasta: "13:00", categoria: "2DA", nivel: "INFANTIL", edad: "AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "premiacion_prueba_receso", cantidad: 15, desde: "13:00", hasta: "14:45" },
      { tipo: "competencia", cantidad: 54, desde: "14:45", hasta: "20:09", categoria: "PROMO", nivel: "INFANTIL", edad: "AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "competencia", cantidad: 9, desde: "20:09", hasta: "21:12", categoria: "3RA", nivel: "MINI", edad: "AÑOS", rama: "DAMAS", especialidad: "LIBRE" },
      { tipo: "fin_de_jornada" },
    ],
  },
]

const MONTHS: Record<string, string> = {
  "01": "Ene",
  "02": "Feb",
  "03": "Mar",
  "04": "Abr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Ago",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dic",
}

function formatDayLabel(dia: string) {
  const [day, date] = dia.split(" ")
  const [d, m] = date.split("/")

  return {
    day,
    date: `${Number(d)} ${MONTHS[m]}`,
  }
}

function formatRange(block: RawBlock) {
  if (block.desde && block.hasta) return `${block.desde}–${block.hasta}`
  return block.desde ?? "Cierre"
}

function formatBlockDescription(block: RawBlock) {
  switch (block.tipo) {
    case "prueba_de_pista":
      return "Prueba de pista"
    case "premiacion_prueba_receso":
      return "Premiación, prueba y receso"
    case "acto_ceremonial":
      return "Acto ceremonial"
    case "fin_de_jornada":
      return "Fin de jornada"
    case "competencia": {
      const details = [block.categoria, block.nivel, block.edad, block.rama, block.especialidad]
        .filter(Boolean)
        .join(" · ")

      const panel = block.panel ? `Panel ${block.panel} · ` : ""
      const quantity = block.cantidad ? ` (${block.cantidad})` : ""

      return `${panel}${details}${quantity}`
    }
  }
}

function isHighlighted(block: RawBlock) {
  return block.tipo === "premiacion_prueba_receso" || block.tipo === "acto_ceremonial" || block.tipo === "fin_de_jornada"
}

function getEventType(block: RawBlock): DaySchedule["events"][number]["type"] {
  if (block.tipo === "prueba_de_pista") return "track"
  if (block.tipo === "premiacion_prueba_receso" || block.tipo === "acto_ceremonial" || block.tipo === "fin_de_jornada") return "special"
  return "default"
}

function formatQuantityLabel(block: RawBlock) {
  if (!block.cantidad) return undefined

  if (block.tipo === "prueba_de_pista") return `${block.cantidad} salidas`
  if (block.tipo === "premiacion_prueba_receso") return `${block.cantidad} tandas`
  return `Cantidad: ${block.cantidad}`
}

const schedule: DaySchedule[] = cronograma.map(({ dia, inicioJornada, bloques }) => {
  const labels = formatDayLabel(dia)

  return {
    ...labels,
    events: [
      {
        time: inicioJornada,
        description: "Inicio de jornada",
      },
      ...bloques.map((block) => ({
        time: formatRange(block),
        description: formatBlockDescription(block),
        highlight: isHighlighted(block),
        centered: block.tipo === "fin_de_jornada",
        type: getEventType(block),
        quantityLabel: formatQuantityLabel(block),
      })),
    ],
  }
})

export default function Cronograma() {
  return (
    <section id="cronograma" className="scroll-mt-16 py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <FadeIn className="flex flex-col items-center text-center mb-14">
          <span className="text-red text-xs font-black uppercase tracking-widest mb-3">Programa</span>
          <h2
            className="text-white font-black text-4xl md:text-5xl uppercase leading-tight"
          >
            Cronograma del Torneo
          </h2>
          <div className="w-16 h-1 bg-red mt-4 mb-6" />
          <p className="text-white/60 max-w-xl text-base leading-relaxed">
            25 de Abril al 1 de Mayo de 2026 · CEPARD, Posadas, Misiones
          </p>
        </FadeIn>

        <div className="max-w-5xl mx-auto mb-4">
          <FadeIn delay={0.1}>
            <div className="flex items-center justify-center mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                El detalle completo también está disponible en PDF
              </span>
            </div>
          </FadeIn>

          <Accordion type="single" collapsible className="space-y-4 ">
          {schedule.map((day, idx) => (
            <FadeIn
              key={day.date}
              delay={idx * 0.1}
              className="bg-navy-light rounded-sm overflow-hidden border border-white/5 hover:border-red/40 transition-all duration-300 cursor-pointer"
            >
              <AccordionItem value={day.date} className="border-b-0 ">
                <AccordionTrigger className="bg-red px-4 py-4 hover:no-underline [&>svg]:text-white/80 [&>svg]:size-5 cursor-pointer">
                  <div className="flex w-full items-center justify-between text-left pr-3">
                    <div>
                      <span className="text-white font-black text-sm uppercase tracking-wide block">
                        {day.day}
                      </span>
                      <span className="text-white/80 text-xs font-semibold">{day.date}</span>
                    </div>
                    <span className="text-white/30 font-black text-2xl">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-4 pb-4 pt-4">
                  <div className="flex flex-col gap-3">
                    {day.events.map((event) => {
                      const isTrack = event.type === "track"
                      const isSpecial = event.type === "special"
                      const isCentered = event.centered

                      return (
                        <div
                          key={event.time + event.description}
                          className={[
                            "rounded-sm border px-4 py-3 transition-all duration-300",
                            isCentered
                              ? "border-red/40 bg-red/10 text-center"
                              : isTrack
                                ? "border-cyan-400/30 bg-cyan-400/10"
                                : isSpecial
                                  ? "border-red/25 bg-red/5"
                                  : "border-white/5 bg-white/[0.02]",
                          ].join(" ")}
                        >
                          <div className={[
                            "flex gap-3",
                            isCentered ? "flex-col items-center justify-center" : "items-start",
                          ].join(" ")}>
                            <span
                              className={[
                                "shrink-0 font-black",
                                isCentered ? "text-base text-red" : "text-xs mt-0.5",
                                isTrack ? "text-cyan-300" : isSpecial ? "text-red" : "text-white/30",
                              ].join(" ")}
                            >
                              {event.time}
                            </span>

                            <div className={isCentered ? "space-y-1" : "flex-1 space-y-1"}>
                              <p
                                className={[
                                  "leading-snug",
                                  isCentered
                                    ? "text-sm font-black uppercase tracking-wide text-white"
                                    : event.highlight
                                      ? "text-xs font-semibold text-white"
                                      : "text-xs text-white/70",
                                ].join(" ")}
                              >
                                {event.description}
                              </p>

                              {event.quantityLabel && !isCentered && (
                                <span className={[
                                  "inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wider",
                                  isTrack
                                    ? "bg-cyan-300/15 text-cyan-200"
                                    : "bg-white/8 text-white/55",
                                ].join(" ")}>
                                  {event.quantityLabel}
                                </span>
                              )}
                            </div>

                            {event.highlight && !isCentered && (
                              <span className="ml-auto shrink-0 self-center">
                                <span className={`w-1.5 h-1.5 rounded-full block ${isTrack ? "bg-cyan-300" : "bg-red"}`} />
                              </span>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </FadeIn>
          ))}
          </Accordion>
        </div>

        <FadeIn delay={0.15}>
          <div className="flex justify-center mt-8">
            <a
              href={CRONOGRAMA_PDF_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-red hover:bg-red-dark text-white font-black uppercase tracking-widest text-sm px-8 py-4 rounded-sm transition-all duration-200 shadow-lg shadow-red/20 hover:shadow-red/40 hover:-translate-y-0.5"
            >
              Cronograma completo
              <ExternalLink size={16} />
            </a>
          </div>
        </FadeIn>

        {/* Note */}
        <FadeIn delay={0.2}>
          <p className="text-white/30 text-xs text-center mt-8">
            * Los horarios pueden estar sujetos a modificaciones. Si querés el detalle completo, usá el PDF oficial del cronograma.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
