"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  const path1Ref = useRef<SVGPathElement>(null)
  const path2Ref = useRef<SVGPathElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Path 1 animation
    if (path1Ref.current) {
      anime({
        targets: path1Ref.current,
        strokeDashoffset: [anime.setDashoffset, 0],
        opacity: [0, 1],
        easing: 'linear',
        duration: 3000,
        loop: true
      })
    }

    // Path 2 animation
    if (path2Ref.current) {
      anime({
        targets: path2Ref.current,
        strokeDashoffset: [anime.setDashoffset, 0],
        opacity: [0, 0.8],
        easing: 'linear',
        duration: 4000,
        delay: 1000,
        loop: true
      })
    }

    // Content animation
    if (contentRef.current) {
      anime({
        targets: contentRef.current,
        opacity: [0, 1],
        translateY: [30, 0],
        easing: 'easeOutExpo',
        duration: 1200
      })
    }

    // Text animation
    if (textRef.current) {
      anime({
        targets: textRef.current,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: 300
      })
    }

    // Buttons animation
    if (buttonsRef.current) {
      anime({
        targets: buttonsRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: 600
      })
    }
  }, [])

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 pt-20">
      {/* Background with Fiber Optic glowing effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dot-pattern"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-50/80 to-slate-50 dark:via-slate-950/80 dark:to-slate-950"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-cyan/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Animated lines simulating data flow */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <path
            ref={path1Ref}
            d="M-100,500 Q200,300 500,500 T1200,400 T1900,500"
            fill="none"
            stroke="url(#glow-line)"
            strokeWidth="2"
            style={{ opacity: 0 }}
          />
          <path
            ref={path2Ref}
            d="M-100,600 Q300,400 600,600 T1300,500 T2000,600"
            fill="none"
            stroke="url(#glow-line)"
            strokeWidth="1.5"
            style={{ opacity: 0 }}
          />
          <defs>
            <linearGradient id="glow-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0A4DA2" stopOpacity="0" />
              <stop offset="50%" stopColor="#00E5FF" stopOpacity="1" />
              <stop offset="100%" stopColor="#0A4DA2" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center mt-12 md:mt-0">
        <div
          ref={contentRef}
          className="max-w-4xl mx-auto space-y-8"
          style={{ opacity: 0 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight drop-shadow-sm">
            Connecting Indonesia Through <br />
            <span className="text-gradient">Reliable Fiber Optic Backbone</span>
          </h1>
          
          <p 
            ref={textRef}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-medium"
            style={{ opacity: 0 }}
          >
            PT. Mitra Data Technology menyediakan solusi infrastruktur backbone fiber optic berkapasitas tinggi untuk mendukung konektivitas operator telekomunikasi, ISP, data center, enterprise, dan sektor pemerintahan.
          </p>
          
          <div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            style={{ opacity: 0 }}
          >
            <Button variant="glow" size="lg" asChild>
              <Link href="#contact">Hubungi Kami</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-300 bg-white/50 text-slate-900 hover:bg-slate-900/10 dark:border-white/20 dark:bg-slate-900/50 dark:text-white dark:hover:bg-white/10 backdrop-blur-sm" asChild>
              <Link href="#services">Lihat Layanan</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
