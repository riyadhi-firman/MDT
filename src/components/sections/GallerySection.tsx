"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"
import { Section } from "@/components/ui/section"
import { useInView } from "@/hooks/useInView"

export function GallerySection() {
  const gridRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(gridRef, { once: true, threshold: 0.1 })

  useEffect(() => {
    if (isInView && gridRef.current) {
      anime({
        targets: gridRef.current.children,
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 800,
        delay: anime.stagger(100),
        easing: 'easeOutQuart'
      })
    }
  }, [isInView])

  const images = [
    { title: "Backbone Fiber", src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop" },
    { title: "Data Center", src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" },
    { title: "Patch Panel", src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop" },
    { title: "Rack Server", src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" },
    { title: "Server Room", src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop" },
    { title: "Core Network", src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" },
  ]

  return (
    <Section className="bg-slate-50 dark:bg-slate-950/30">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Galeri Infrastruktur</h2>
        <p className="text-muted-foreground text-lg">
          Dokumentasi pembangunan dan pengelolaan jaringan telekomunikasi kami di berbagai wilayah.
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            style={{ opacity: 0 }}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={img.src} 
              alt={img.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <h3 className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {img.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
