"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"
import { Section } from "@/components/ui/section"
import { MapPin } from "lucide-react"
import { useInView } from "@/hooks/useInView"

export function CoverageSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const isInView = useInView(containerRef, { once: true, threshold: 0.3 })

  useEffect(() => {
    if (isInView) {
      if (containerRef.current) {
        const cityMarkers = containerRef.current.querySelectorAll('.city-marker')
        anime({
          targets: cityMarkers,
          scale: [0, 1],
          opacity: [0, 1],
          easing: 'easeOutElastic(1, .8)',
          duration: 1000,
          delay: anime.stagger(150)
        })
      }

      if (pathRef.current) {
        anime({
          targets: pathRef.current,
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 2000
        })
      }
    }
  }, [isInView])

  const cities = [
    { name: "Jakarta", x: "30%", y: "65%" },
    { name: "Bandung", x: "32%", y: "70%" },
    { name: "Semarang", x: "42%", y: "68%" },
    { name: "Surabaya", x: "50%", y: "72%" },
    { name: "Medan", x: "15%", y: "25%" },
    { name: "Pekanbaru", x: "18%", y: "35%" },
    { name: "Batam", x: "23%", y: "32%" },
    { name: "Makassar", x: "65%", y: "65%" },
    { name: "Balikpapan", x: "55%", y: "50%" },
  ]

  return (
    <Section id="coverage" className="bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none"></div>

      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Cakupan Jaringan Nasional</h2>
        <p className="text-muted-foreground text-lg">
          Jaringan Backbone kami menjangkau berbagai kota besar di Indonesia dengan topologi Ring untuk memastikan koneksi tanpa henti.
        </p>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full max-w-5xl mx-auto aspect-[16/9] bg-slate-950 rounded-3xl border border-slate-800/80 p-8 flex items-center justify-center overflow-hidden shadow-2xl z-10"
      >
        {/* Radar Rings */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="w-[80%] aspect-square rounded-full border border-brand-cyan"></div>
          <div className="absolute w-[60%] aspect-square rounded-full border border-brand-cyan"></div>
          <div className="absolute w-[40%] aspect-square rounded-full border border-brand-cyan"></div>
          <div className="absolute w-[20%] aspect-square rounded-full border border-brand-cyan bg-brand-cyan/5"></div>
        </div>

        {/* Placeholder for actual SVG Map */}
        <div className="absolute inset-0 opacity-30 flex items-center justify-center pointer-events-none">
          <svg viewBox="0 0 1000 500" className="w-full h-full p-10">
            {/* Simple abstract islands representation */}
            <path d="M100,200 Q150,150 200,300 T300,400" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="text-brand-blue" />
            <path d="M250,250 Q400,250 500,450" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="text-brand-blue" />
            <path d="M450,150 Q550,200 650,250" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="text-brand-blue" />
            <path d="M700,200 Q800,250 900,300" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="text-brand-blue" />
          </svg>
        </div>

        {/* Cities */}
        {cities.map((city, idx) => (
          <div
            key={idx}
            className="city-marker absolute flex flex-col items-center group cursor-pointer"
            style={{ left: city.x, top: city.y, opacity: 0, transform: 'scale(0)' }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-cyan rounded-full animate-ping opacity-75" />
              <div className="absolute inset-0 bg-brand-cyan rounded-full blur-md opacity-50" />
              <MapPin className="h-6 w-6 text-brand-cyan relative z-10 fill-brand-blue/80 drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
            </div>
            <div className="mt-2 px-3 py-1 bg-slate-900/90 backdrop-blur-sm rounded-md shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-slate-700 text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity absolute top-full pointer-events-none text-white z-50">
              {city.name}
            </div>
          </div>
        ))}

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <path
            ref={pathRef}
            d={`M150,125 L160,175 L210,325 L250,360 L350,340`}
            fill="none"
            stroke="#00E5FF"
            strokeWidth="3"
            className="opacity-60"
            filter="drop-shadow(0px 0px 4px rgba(0,229,255,0.5))"
          />
        </svg>

        <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-64 glassmorphism bg-slate-900/60 p-5 rounded-2xl border border-slate-700/50">
          <h4 className="font-semibold text-sm mb-3 text-white">Status Jaringan</h4>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_8px_rgba(0,229,255,0.8)]"></div>
            <span className="text-xs text-slate-300 font-medium">Aktif (120+ POP)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]"></div>
            <span className="text-xs text-slate-300 font-medium">Dalam Pembangunan (40 POP)</span>
          </div>
        </div>
      </div>
    </Section>
  )
}
