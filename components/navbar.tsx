"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#sobre", label: "El Torneo" },
  { href: "#lugar", label: "Lugar" },
  { href: "#cronograma", label: "Cronograma" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#inscripciones", label: "Inscripciones" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0d1b3e] shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/images/logos/navbar/LOGO COPA APERTURA NACIONAL B 2026.png"
            alt="Logo Copa Apertura Nacional B"
            width={72}
            height={72}
            className="h-14 w-14 shrink-0 object-contain rounded-full"
            priority
          />
          <span className="text-white font-bold text-sm leading-tight hidden sm:block">
            Copa Apertura<br />
            <span className="text-[#c8102e] font-black">"B" Nacional</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 hover:text-[#c8102e]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d1b3e] border-t border-white/10 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 hover:text-[#c8102e] font-semibold uppercase tracking-wider py-3 border-b border-white/10 text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
