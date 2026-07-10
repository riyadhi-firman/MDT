"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"
import { Section } from "@/components/ui/section"
import { Shield, Zap, Globe } from "lucide-react"
import { useInView } from "@/hooks/useInView"

export function AboutSection() {
  const leftColRef = useRef<HTMLDivElement>(null)
  const rightColRef = useRef<HTMLDivElement>(null)
  const isLeftInView = useInView(leftColRef, { once: true, threshold: 0.2 })
  const isRightInView = useInView(rightColRef, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (isLeftInView && leftColRef.current) {
      anime({
        targets: leftColRef.current,
        opacity: [0, 1],
        translateX: [-50, 0],
        easing: 'easeOutExpo',
        duration: 1200
      })
    }
  }, [isLeftInView])

  useEffect(() => {
    if (isRightInView && rightColRef.current) {
      // Animate the container and stagger the children
      const children = rightColRef.current.children
      anime({
        targets: children,
        opacity: [0, 1],
        translateX: [50, 0],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: anime.stagger(200)
      })
    }
  }, [isRightInView])

  const values = [
    {
      icon: <Shield className="h-10 w-10 text-brand-cyan" />,
      title: "Keandalan Tinggi",
      desc: "Infrastruktur tangguh dengan jaminan uptime 99.9%."
    },
    {
      icon: <Zap className="h-10 w-10 text-brand-cyan" />,
      title: "Latensi Rendah",
      desc: "Koneksi ultra-cepat untuk kebutuhan mission-critical."
    },
    {
      icon: <Globe className="h-10 w-10 text-brand-cyan" />,
      title: "Kapasitas Besar",
      desc: "Siap mendukung lonjakan trafik digital skala nasional."
    }
  ]

  return (
    <Section id="about" className="bg-background">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div
          ref={leftColRef}
          className="space-y-6"
          style={{ opacity: 0 }}
        >
          <div className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-medium mb-2">
            Tentang Kami
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Mitra Terpercaya untuk Transformasi Digital
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            PT. Mitra Data Technology merupakan perusahaan penyedia infrastruktur telekomunikasi yang berkomitmen menghadirkan jaringan backbone fiber optic berkualitas tinggi dengan tingkat keandalan tinggi, latensi rendah, dan kapasitas besar untuk mendukung transformasi digital di Indonesia.
          </p>
          
          <div className="pt-6 space-y-4">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
              <h3 className="font-semibold text-xl mb-2 text-brand-blue">Visi</h3>
              <p className="text-muted-foreground">Menjadi penyedia infrastruktur telekomunikasi terpercaya di Indonesia.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
              <h3 className="font-semibold text-xl mb-2 text-brand-blue">Misi</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Membangun jaringan backbone berkualitas</li>
                <li>Memberikan layanan terbaik</li>
                <li>Mengembangkan teknologi jaringan modern</li>
                <li>Mendukung pertumbuhan ekonomi digital Indonesia</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div
          ref={rightColRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1"
        >
          {values.map((val, idx) => (
            <div 
              key={idx}
              style={{ opacity: 0 }}
              className="glassmorphism bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-start gap-4 transition-transform hover:scale-[1.02]"
            >
              <div className="p-3 bg-brand-blue/5 rounded-xl">
                {val.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">{val.title}</h4>
                <p className="text-muted-foreground">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
