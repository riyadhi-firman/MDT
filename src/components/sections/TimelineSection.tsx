"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"
import { Section } from "@/components/ui/section"
import { ClipboardList, Map, PenTool, HardHat, CheckSquare, Activity, Wrench } from "lucide-react"
import { useInView } from "@/hooks/useInView"

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (isInView) {
      if (lineRef.current) {
        anime({
          targets: lineRef.current,
          width: [0, '100%'],
          duration: 2000,
          easing: 'easeInOutSine'
        })
      }
      
      if (containerRef.current) {
        const items = containerRef.current.querySelectorAll('.timeline-item')
        anime({
          targets: items,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 800,
          delay: anime.stagger(200)
        })
      }
    }
  }, [isInView])

  const steps = [
    { icon: <ClipboardList />, title: "Planning", desc: "Perencanaan kebutuhan kapasitas" },
    { icon: <Map />, title: "Survey", desc: "Survey jalur backbone & site" },
    { icon: <PenTool />, title: "Design", desc: "Desain topologi jaringan" },
    { icon: <HardHat />, title: "Deployment", desc: "Penarikan kabel FO & instalasi" },
    { icon: <CheckSquare />, title: "Testing", desc: "OTDR & Splicing test" },
    { icon: <Activity />, title: "Monitoring", desc: "Aktivasi 24/7 NOC" },
    { icon: <Wrench />, title: "Maintenance", desc: "Pemeliharaan rutin" },
  ]

  return (
    <Section className="bg-background">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Mengapa Memilih Kami</h2>
        <p className="text-muted-foreground text-lg">
          Proses kerja sistematis dan terukur untuk menjamin kualitas hasil akhir infrastruktur jaringan Anda.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto" ref={containerRef}>
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 hidden md:block z-0"></div>
        <div 
          ref={lineRef}
          className="absolute top-1/2 left-0 h-1 bg-brand-cyan -translate-y-1/2 hidden md:block z-0"
          style={{ width: 0 }}
        ></div>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-8 md:gap-4 relative z-10">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              style={{ opacity: 0 }}
              className="timeline-item flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center mb-4 group-hover:border-brand-cyan group-hover:text-brand-cyan transition-colors shadow-sm relative z-10">
                {step.icon}
              </div>
              <h3 className="font-bold text-sm mb-1 text-foreground">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
