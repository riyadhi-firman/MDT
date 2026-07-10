"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"
import { Section } from "@/components/ui/section"
import { Network, Activity, Cable, Server, Route, Wifi, ServerCrash, Eye } from "lucide-react"
import { useInView } from "@/hooks/useInView"

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, threshold: 0.1 })

  useEffect(() => {
    if (isInView && containerRef.current) {
      const children = containerRef.current.children
      anime({
        targets: children,
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutQuad',
        duration: 500,
        delay: anime.stagger(100)
      })
    }
  }, [isInView])

  const services = [
    { icon: <Cable className="h-8 w-8" />, title: "Fiber Optic Backbone", desc: "Pembangunan jaringan backbone fiber optic antar kota berkapasitas besar." },
    { icon: <Activity className="h-8 w-8" />, title: "Metro Ethernet", desc: "Layanan Metro Ethernet berkecepatan tinggi untuk konektivitas bisnis." },
    { icon: <Network className="h-8 w-8" />, title: "Dark Fiber", desc: "Penyewaan Dark Fiber murni untuk kontrol penuh jaringan Anda." },
    { icon: <Server className="h-8 w-8" />, title: "DWDM Network", desc: "Implementasi teknologi DWDM untuk peningkatan kapasitas masif." },
    { icon: <Route className="h-8 w-8" />, title: "IP Transit", desc: "Layanan IP Transit premium untuk ISP dengan routing BGP teroptimasi." },
    { icon: <Wifi className="h-8 w-8" />, title: "Internet Dedicated", desc: "Dedicated Internet dengan SLA tinggi untuk skala Enterprise." },
    { icon: <ServerCrash className="h-8 w-8" />, title: "Colocation", desc: "Layanan Data Center dan Colocation aman bersertifikasi." },
    { icon: <Eye className="h-8 w-8" />, title: "24/7 NOC", desc: "Network Operation Center untuk monitoring jaringan secara proaktif 24/7." },
  ]

  return (
    <Section id="services" className="relative bg-slate-50 dark:bg-slate-950/50 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50 z-0"></div>

      <div className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Layanan Kami</h2>
          <p className="text-muted-foreground text-lg">
            Solusi komprehensif untuk seluruh kebutuhan infrastruktur telekomunikasi perusahaan Anda, dikelola oleh tim profesional bersertifikat.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((svc, idx) => (
            <div
              key={idx}
              style={{ opacity: 0 }}
              className="glassmorphism p-8 rounded-2xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(0,229,255,0.3)] hover:border-brand-cyan/50"
            >
              <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-950 inline-block rounded-xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white group-hover:shadow-[0_0_15px_rgba(0,229,255,0.5)] transition-all duration-300">
                {svc.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-brand-cyan transition-colors duration-300">{svc.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
