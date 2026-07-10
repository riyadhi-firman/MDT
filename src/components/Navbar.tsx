"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { ThemeToggle } from "./ThemeToggle"
import { Logo } from "./Logo"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Infrastruktur", href: "#infrastructure" },
    { name: "Jaringan", href: "#coverage" },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md shadow-sm border-b" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="#" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={`text-sm font-medium hover:text-brand-cyan transition-colors text-foreground/90`}>
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
          <Button variant="glow" asChild>
            <Link href="#contact">Hubungi Kami</Link>
          </Button>
        </nav>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          {/* Mobile Nav Toggle */}
          <button 
            className="p-2" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-foreground/80 hover:text-brand-blue font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="default" className="w-full mt-2" asChild>
            <Link href="#contact" onClick={() => setIsOpen(false)}>Hubungi Kami</Link>
          </Button>
        </div>
      )}
    </header>
  )
}
