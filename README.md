# SDN 15 Buton - School Profile Website

Website profil resmi SDN 15 Buton Pasarwajo, hasil modifikasi total dari template [School Profile Website](https://github.com/Shizu-ka/School-Profile-Website) oleh Shizu-ka (TemplateMo 557 Grad School).

**Live Demo:** [https://sdn15-buton.netlify.app](https://sdn15buton.netlify.app/)

---

## 🚀 Apa yang sudah saya ubah?

Template aslinya pecah di HP, loading berat, dan banyak fitur tidak kepakai. Saya rombak hampir 70% khusus untuk SDN 15:

### 1. Full Responsive Android & iPhone
- **Header:** hamburger menu diperbaiki, tidak menutupi konten saat di-scroll
- **Banner:** teks pakai `clamp()`, video background tetap full tanpa scroll horizontal
- **Features (3 box atas):** diubah dari scroll horizontal menjadi 3 kolom kecil berdampingan di HP
- **Video Profil TikTok:** tinggi dibatasi max 360px di mobile, bisa di-scroll di dalam, tidak mendorong halaman
- **Tabs "Kenapa Memilih":** layout flex, tidak pecah jadi berantakan di layar kecil
- **Mata Pelajaran:** carousel Owl Carousel diperbaiki — gambar dipotong rapi 200px, box putih dan teks hitam muncul sempurna di desktop & mobile
- **Contact:** form dan Google Maps dibuat 1 kolom di HP

### 2. Optimasi Performa
- Hapus 7 file tidak terpakai: `lightbox.js/css`, `isotope.min.js`, `slick-slider.js`, `flex-slider.css`, `video.js`, `jquery.slim.*` → hemat ~400KB
- CSS custom dipindah ke `templatemo-grad-school.css` dengan override `!important` seperlunya
- Gambar course pakai `object-fit: cover`
- Video background pakai tag `<video>` native (tanpa plugin berat)

### 3. Fitur Baru
- **TikTok embed:** profil sekolah langsung di homepage
- **Siap Netlify:** tidak perlu build step, tinggal push

---

## 🛠️ Teknologi
- HTML5, CSS3
- Bootstrap 4
- jQuery 3 + Owl Carousel 2
- Font Awesome 5

---

## 📁 Struktur Folder
```
/
├── index.html
├── assets/
│   ├── css/
│   │   ├── templatemo-grad-school.css
│   │   ├── fontawesome.css
│   │   └── owl.css
│   ├── js/
│   │   ├── custom.js
│   │   ├── owl-carousel.js
│   │   └── tabs.js
│   ├── images/
│   └── vendor/
│       ├── bootstrap/
│       └── jquery/
└── README.md
```

---

## 💻 Cara Jalankan Lokal
```bash
git clone https://github.com/Jabrann/School-Website.git
cd School-Website
# buka index.html di browser
```

## ☁️ Deploy ke Netlify
1. Fork repo ini
2. Netlify → Add new site → Import from Git
3. Pilih repo `Jabrann/School-Website`
4. Build command: (kosongkan)
5. Publish directory: `/`
6. Deploy

---

## 📝 Credit
- Base template: [TemplateMo 557 Grad School](https://templatemo.com/tm-557-grad-school)
- Original repo: [Shizu-ka/School-Profile-Website](https://github.com/Shizu-ka/School-Profile-Website)
- Custom, responsive fix, dan optimasi: **Jabrann - SDN 15 Buton (2026)**

Lisensi: MIT — bebas pakai dan modifikasi dengan menyertakan credit pembuat asli.
