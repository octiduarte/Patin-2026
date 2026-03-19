"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  className?: string
  once?: boolean
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  duration = 1,
  className = "",
  once = true,
}: FadeInProps) {
  // Definimos de dónde viene la animación según la dirección elegida
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Curva de animación suave (easeOut)
      }}
      viewport={{ once: once, margin: "-10%" }} // Se activa un poco antes de que entre totalmente en pantalla
      className={className}
    >
      {children}
    </motion.div>
  )
}
