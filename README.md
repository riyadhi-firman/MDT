# PT Mitra Data Technology (MDT) - Corporate Website

Website perusahaan resmi untuk PT. Mitra Data Technology, penyedia solusi infrastruktur telekomunikasi dan *fiber optic backbone*. Proyek ini dibangun dengan antarmuka modern (Glassmorphism), performa tinggi, serta efek animasi interaktif menggunakan AnimeJS.

## ✨ Fitur Utama

- **Desain Modern Premium**: Antarmuka berkelas *enterprise* dengan efek *Glassmorphism*, pantulan cahaya (*glowing orbs*), dan tema *Dark Mode Mesh Gradient*.
- **Animasi Super Mulus**: Efek animasi interaktif pada *scroll* menggunakan **Anime.js** yang menggantikan Framer Motion untuk performa yang lebih presisi dan ringan.
- **Dukungan Dark/Light Mode**: Website secara otomatis beradaptasi dengan preferensi mode warna pengguna atau dapat diubah secara manual dengan *toggle* di bilah navigasi.
- **Responsif Sepenuhnya**: Tampilan sempurna pada ukuran layar apa pun, mulai dari perangkat seluler hingga layar desktop beresolusi tinggi.
- **Performa Tinggi**: Dibangun di atas fondasi Next.js (App Router) untuk meminimalkan *loading time* dan optimisasi aset maksimal.

## 🛠️ Teknologi yang Digunakan

- **Framework Utama**: [Next.js 15](https://nextjs.org/) (React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animasi**: [Anime.js v3.2.2](https://animejs.com/)
- **Ikonografia**: [Lucide React](https://lucide.dev/)
- **Bahasa**: TypeScript

## 🚀 Memulai Pengembangan (Getting Started)

Ikuti langkah-langkah di bawah ini untuk menjalankan *server* pengembangan di komputer lokal Anda:

1. **Instal dependensi**:
   ```bash
   npm install
   ```

2. **Jalankan *server* pengembangan**:
   ```bash
   npm run dev
   ```

3. Buka [http://localhost:3000](http://localhost:3000) pada browser Anda untuk melihat hasilnya.

## 📂 Struktur Proyek

- `/src/app` - Halaman rute utama (Next.js App Router) dan tata letak global.
- `/src/components/sections` - Komponen khusus untuk setiap bagian beranda (Hero, Layanan, Infrastruktur, Peta Cakupan, dll.).
- `/src/components/ui` - Komponen *User Interface* umum seperti Tombol, Kartu, atau penampung Section.
- `/src/hooks` - *Custom Hooks* React (contoh: `useInView` untuk deteksi *scroll*).
- `/src/lib` - Utilitas bantu (*helper functions*).

## 📄 Lisensi

Hak Cipta © 2026 PT. Mitra Data Technology. Seluruh hak cipta dilindungi undang-undang.
