import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT. Mitra Data Technology | Infrastruktur Backbone Fiber Optic Indonesia",
  description: "PT. Mitra Data Technology merupakan perusahaan penyedia infrastruktur backbone fiber optic, dark fiber, metro ethernet, DWDM, IP Transit, internet dedicated, colocation, dan layanan NOC 24/7 di Indonesia.",
  keywords: "Fiber Optic, Backbone, Telekomunikasi, ISP, Dark Fiber, Metro Ethernet, DWDM, IP Transit, Data Center, Colocation, Internet Dedicated, Infrastruktur Telekomunikasi, Jaringan Fiber Optic Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
