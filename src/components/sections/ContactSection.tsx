"use client"

import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <Section id="contact" className="bg-slate-50 dark:bg-slate-950">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Hubungi Kami</h2>
        <p className="text-muted-foreground text-lg">
          Diskusikan kebutuhan infrastruktur jaringan Anda dengan tim ahli kami.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Nama Lengkap</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full h-10 px-3 rounded-md border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-brand-blue" 
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-foreground">Perusahaan</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full h-10 px-3 rounded-md border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-brand-blue" 
                  placeholder="PT. Perusahaan Anda"
                />
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full h-10 px-3 rounded-md border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-brand-blue" 
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">Nomor HP</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full h-10 px-3 rounded-md border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-brand-blue" 
                  placeholder="08123456789"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium text-foreground">Layanan yang Diminati</label>
              <select 
                id="service" 
                className="w-full h-10 px-3 rounded-md border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="">Pilih Layanan</option>
                <option value="fiber-optic">Fiber Optic Backbone</option>
                <option value="metro">Metro Ethernet</option>
                <option value="dark-fiber">Dark Fiber</option>
                <option value="dwdm">DWDM Network</option>
                <option value="ip-transit">IP Transit</option>
                <option value="other">Lainnya</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">Pesan / Kebutuhan</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full p-3 rounded-md border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-brand-blue"
                placeholder="Deskripsikan kebutuhan infrastruktur Anda..."
              ></textarea>
            </div>

            <Button type="button" variant="glow" className="w-full" size="lg">
              Kirim Pesan
            </Button>
          </form>
        </div>

        {/* Google Maps Embed */}
        <div className="h-[600px] bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4896.8654208198905!2d106.1719902!3d-6.1198041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41f58fdc4f0c33%3A0x7e7fe741e2dac1a9!2sPT.%20Mitra%20Data%20Technology!5e1!3m2!1sid!2sid!4v1783668116287!5m2!1sid!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            title="Google Maps PT. Mitra Data Technology"
          ></iframe>
        </div>
      </div>
    </Section>
  )
}
