"use client"

import * as React from "react"
import anime from "animejs"
import { Section } from "@/components/ui/section"
import { useInView } from "@/hooks/useInView"

const Counter = ({ from = 0, to, duration = 2, suffix = "" }: { from?: number, to: number, duration?: number, suffix?: string }) => {
  const nodeRef = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(nodeRef, { once: true, threshold: 0.1 })

  React.useEffect(() => {
    if (isInView && nodeRef.current) {
      const obj = { val: from }
      anime({
        targets: obj,
        val: to,
        easing: 'easeOutExpo',
        duration: duration * 1000,
        update: () => {
          if (nodeRef.current) {
            const displayVal = to % 1 !== 0 ? obj.val.toFixed(1) : Math.floor(obj.val)
            nodeRef.current.innerHTML = displayVal + suffix
          }
        }
      })
    }
  }, [isInView, from, to, duration, suffix])

  return <span ref={nodeRef}>{from}{suffix}</span>
}

export function InfrastructureSection() {
  const stats = [
    { value: 5000, suffix: "+", label: "KM Fiber Optic", desc: "Jaringan backbone tersebar" },
    { value: 120, suffix: "+", label: "POP (Point of Presence)", desc: "Di seluruh kota besar Indonesia" },
    { value: 99.9, suffix: "%", label: "Network Availability", desc: "SLA tinggi untuk enterprise" },
    { value: 24, suffix: "/7", label: "Monitoring NOC", desc: "Pengawasan jaringan real-time" },
    { value: 500, suffix: "+", label: "Enterprise Customer", desc: "Telah mempercayakan layanannya" },
    { value: 100, suffix: "%", label: "Ring Architecture", desc: "Redundansi jaringan penuh" },
  ]

  return (
    <Section id="infrastructure" className="bg-gradient-enterprise text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 mix-blend-overlay"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-cyan/20 blur-[100px] rounded-full"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-blue/30 blur-[120px] rounded-full"></div>
      
      <div className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Infrastruktur Skala Enterprise</h2>
          <p className="text-white/80 text-lg">
            Kami berinvestasi penuh dalam membangun infrastruktur telekomunikasi yang modern dan tangguh.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-brand-cyan drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-sm text-white/70">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
