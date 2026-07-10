"use client"

import * as React from "react"
import anime from "animejs"
import { Section } from "@/components/ui/section"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function TestimonialSection() {
  const testimonials = [
    {
      text: "Koneksi backbone sangat stabil dan support tim NOC sangat cepat. Membantu kami menjaga SLA ke end-user.",
      author: "ISP Nasional",
      role: "Chief Technology Officer"
    },
    {
      text: "Infrastruktur sangat handal, terutama untuk koneksi antar cabang enterprise kami. Tidak pernah ada kendala berarti.",
      author: "Enterprise Customer",
      role: "IT Director"
    },
    {
      text: "Layanan profesional dengan SLA tinggi. Proses deployment juga dilakukan dengan rapi dan sesuai target waktu.",
      author: "Government",
      role: "Kepala Dinas Kominfo"
    }
  ]

  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [displayIndex, setDisplayIndex] = React.useState(0)
  const contentRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (currentIndex !== displayIndex && contentRef.current) {
      anime({
        targets: contentRef.current,
        opacity: [1, 0],
        translateX: [0, -50],
        duration: 200,
        easing: 'easeInQuad',
        complete: () => {
          setDisplayIndex(currentIndex)
          anime({
            targets: contentRef.current,
            opacity: [0, 1],
            translateX: [50, 0],
            duration: 300,
            easing: 'easeOutQuad'
          })
        }
      })
    }
  }, [currentIndex, displayIndex])

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <Section className="dark bg-gradient-enterprise text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 mix-blend-overlay"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/20 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="absolute top-0 right-0 p-32 opacity-10 pointer-events-none">
        <Quote className="w-64 h-64 shrink-0" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16">Apa Kata Mereka</h2>
        
        <div className="relative h-[280px] md:h-[220px] flex items-center justify-center">
          <div
            ref={contentRef}
            className="absolute inset-0 flex flex-col items-center justify-center glassmorphism px-8 py-6 rounded-3xl"
          >
            <Quote className="h-10 w-10 shrink-0 text-brand-cyan mb-4 opacity-80" />
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
              &quot;{testimonials[displayIndex].text}&quot;
            </p>
            <div>
              <h4 className="font-bold text-lg text-brand-cyan">{testimonials[displayIndex].author}</h4>
              <p className="text-sm text-white/80">{testimonials[displayIndex].role}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-12">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? "bg-brand-cyan w-6 shadow-[0_0_8px_rgba(0,229,255,0.8)]" : "bg-white/30"}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </Section>
  )
}
