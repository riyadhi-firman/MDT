"use client"

import * as React from "react"
import anime from "animejs"
import { Section } from "@/components/ui/section"
import { ChevronDown } from "lucide-react"

function AccordionItem({ faq, isOpen, onClick }: { faq: any, isOpen: boolean, onClick: () => void }) {
  const contentRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        anime({
          targets: contentRef.current,
          height: [0, contentRef.current.scrollHeight],
          opacity: [0, 1],
          duration: 300,
          easing: 'easeOutQuad'
        })
      } else {
        anime({
          targets: contentRef.current,
          height: [contentRef.current.scrollHeight, 0],
          opacity: [1, 0],
          duration: 300,
          easing: 'easeInQuad'
        })
      }
    }
  }, [isOpen])

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm">
      <button
        className="w-full px-6 py-4 flex items-center justify-between font-semibold text-left text-foreground hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
        onClick={onClick}
      >
        {faq.q}
        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-blue" : ""}`} />
      </button>
      <div
        ref={contentRef}
        style={{ height: 0, opacity: 0, overflow: 'hidden' }}
      >
        <div className="px-6 pb-5 pt-0 text-muted-foreground border-t border-slate-100 dark:border-slate-800/50 mt-4">
          {faq.a}
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const faqs = [
    {
      q: "Apa itu Dark Fiber?",
      a: "Dark Fiber adalah penyewaan infrastruktur kabel fiber optic murni (tanpa perangkat aktif dari kami). Anda memiliki kontrol penuh untuk memasang perangkat transmisi Anda sendiri (seperti DWDM) sesuai dengan kebutuhan kapasitas."
    },
    {
      q: "Apa itu Metro Ethernet?",
      a: "Metro Ethernet adalah layanan jaringan area metropolitan yang berbasis pada standar Ethernet. Layanan ini menghubungkan pelanggan ke jaringan publik atau jaringan privat perusahaan dengan kecepatan tinggi."
    },
    {
      q: "Berapa SLA yang diberikan?",
      a: "Kami memberikan Service Level Agreement (SLA) sebesar 99.9% untuk memastikan layanan jaringan bisnis Anda tetap berjalan tanpa hambatan dengan dukungan teknis 24/7."
    },
    {
      q: "Apakah melayani seluruh Indonesia?",
      a: "Ya, infrastruktur backbone kami menjangkau seluruh pulau besar di Indonesia dengan berbagai titik Point of Presence (POP) strategis."
    },
    {
      q: "Bagaimana proses instalasi?",
      a: "Proses instalasi dimulai dari tahapan perencanaan, survey lapangan, perancangan desain topologi, penarikan kabel (deployment), testing, hingga serah terima. Waktu instalasi bergantung pada kompleksitas jalur."
    }
  ]

  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <Section className="bg-background">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Temukan jawaban untuk pertanyaan umum seputar layanan dan infrastruktur jaringan kami.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem 
              key={idx} 
              faq={faq} 
              isOpen={openIndex === idx} 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)} 
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
