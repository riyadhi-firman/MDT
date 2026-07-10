"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"
import { Section } from "@/components/ui/section"
import { CheckCircle2 } from "lucide-react"
import { useInView } from "@/hooks/useInView"

export function AdvantagesSection() {
  const listRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(listRef, { once: true, threshold: 0.1 })

  useEffect(() => {
    if (isInView && listRef.current) {
      anime({
        targets: listRef.current.children,
        opacity: [0, 1],
        translateY: [10, 0],
        easing: 'easeOutQuad',
        duration: 500,
        delay: anime.stagger(100)
      })
    }
  }, [isInView])

  const advantages = [
    "Fiber Optic Berkualitas Tinggi",
    "SLA Tinggi (99.9%)",
    "24/7 Network Operation Center",
    "Teknologi DWDM Terkini",
    "Tim Engineer Berpengalaman",
    "Respon Gangguan Cepat",
    "Keamanan Jaringan Enterprise",
    "Infrastruktur Redundant (Ring)",
  ]

  return (
    <Section className="bg-slate-50 dark:bg-slate-950/30 border-y border-slate-100 dark:border-slate-800">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Keunggulan Kami
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            PT. Mitra Data Technology selalu mengedepankan kualitas dan kepuasan pelanggan dengan standar enterprise global.
          </p>
          
          <div ref={listRef} className="grid sm:grid-cols-2 gap-4">
            {advantages.map((adv, idx) => (
              <div 
                key={idx}
                style={{ opacity: 0 }}
                className="flex items-center gap-3 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800"
              >
                <CheckCircle2 className="h-5 w-5 text-brand-cyan shrink-0" />
                <span className="font-medium text-sm text-foreground">{adv}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative aspect-square md:aspect-auto md:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-brand-blue/20 z-10 mix-blend-multiply"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop" 
            alt="Data Center" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-20"></div>
          <div className="absolute bottom-8 left-8 z-30 text-white">
            <h3 className="text-2xl font-bold mb-2">Standar Global</h3>
            <p className="text-white/80 max-w-sm">Menggunakan perangkat telekomunikasi terbaik di kelasnya dari vendor terkemuka.</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
