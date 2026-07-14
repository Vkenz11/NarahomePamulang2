/**
 * Nara Home Pamulang - Core Property Configurations
 * Customize prices, contact info, specifications, and content here.
 */

export const PROPERTY_CONFIG = {
  name: "Nara Home Pamulang",
  tagline: "Hunian Modern di Jantung Pamulang",
  subtitle: "Rumah 2 Lantai Modern Mulai Rp800 Jutaan dengan Lokasi Strategis di Tangerang Selatan.",
  developer: "Nara Home Pamulang",
  launchPrice: "Rp800an Juta*",
  whatsappNumber: "+62 813-2000-2523", // Change this to your real WhatsApp number
  whatsappMessage: "Halo Nara Home, saya tertarik untuk bertanya tentang unit dan booking site visit.",
  email: "narahomepamulang@gmail.com",
  googleMapsIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.57864114777!2d106.7138602!3d-6.3263837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e50077f91f77%3A0x9df57f83427299f7!2sNara%20Home!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid", // Map embed URL for resolved Nara Home location
  googleMapsDirectionsUrl: "https://maps.app.goo.gl/9mtNbVpPuAhAenma9",
  address: "Jl. Kalimantan No.24, Benda Baru, Pamulang, Tangerang Selatan, Banten 15418",
  totalUnits: 22,
  showHousesCount: 6,

  // Floating CTA WhatsApp link
  whatsappUrl: "https://wa.me/6281320002523?text=Halo%20Nara%20Home%20Pamulang%2C%20saya%20tertarik%20untuk%20info%20lebih%20lanjut%20dan%20booking%20site%20visit.",

  // House Specifications
  specs: {
    buildingArea: 74, // m²
    landArea: 60, // m²
    bedrooms: 3,
    bathrooms: 2,
    carport: 1, // car
    floors: 2,
    electricity: "2.200 W",
    waterSupply: "Pompa Air Shimizu & Toren 500L (Air Jernih)",
    foundation: "Cakar Ayam & Beton Bertulang",
    structure: "Hebel (Double Dinding)",
    roof: "Baja Ringan, Genteng Beton",
    floorFinishing: "Homogeneous Tile 60x60"
  },

  // Detailed Building Materials Specifications (From Official Blueprint Image)
  materialSpecs: [
    { label: "Dinding", value: "Hebel (Double Dinding)" },
    { label: "Lantai Utama", value: "Homogenous Tile 60x60" },
    { label: "Tangga", value: "Homogenous Tile 30x60 Kasar (Anti-Slip)" },
    { label: "Lantai Kamar Mandi", value: "Keramik 25x25" },
    { label: "Atap", value: "Baja Ringan, Genteng Beton" },
    { label: "Plafon", value: "Gypsum" },
    { label: "Sanitary", value: "Setara Toto" },
    { label: "Cat", value: "Jotun (Premium Weatherproof & Interior)" },
    { label: "Kusen Pintu", value: "Aluminium (Kuat & Tahan Rayap)" },
    { label: "Daun Pintu Dalam", value: "Multipleks + HPL" },
    { label: "Jendela", value: "Aluminium Alexindo" },
    { label: "Aksesoris Pintu Jendela", value: "Solid" },
    { label: "Septictank", value: "Biopro (Sistem Ramah Lingkungan)" },
    { label: "Toren", value: "500L" },
    { label: "Pompa Air", value: "Shimizu" },
    { label: "Listrik", value: "2.200 W" }
  ],

  // Key Highlights / USPs (Unique Selling Points)
  highlights: [
    {
      id: "modern-design",
      title: "Desain Modern Minimalis",
      desc: "Estetika modern dengan fungsionalitas ruang maksimal, sirkulasi udara optimal, dan sirkulasi cahaya alami melimpah.",
      icon: "Home"
    },
    {
      id: "strategic-location",
      title: "Lokasi Strategis",
      desc: "Hanya beberapa menit dari gerbang tol BSD/Pamulang, stasiun KRL, pusat belanja, dan fasilitas kesehatan terbaik.",
      icon: "MapPin"
    },
    {
      id: "family-friendly",
      title: "Ramah Keluarga",
      desc: "Lingkungan tenang dengan taman bermain ramah anak dan keamanan 24 jam untuk tumbuh kembang buah hati.",
      icon: "Users"
    },
    {
      id: "investment-potential",
      title: "Potensi Investasi Tinggi",
      desc: "Pamulang adalah kawasan penyangga Jakarta dengan laju pertumbuhan nilai properti hingga 15% per tahun.",
      icon: "TrendingUp"
    },
    {
      id: "quality-construction",
      title: "Konstruksi Premium",
      desc: "Material pilihan terbaik mulai dari pondasi cakar ayam, dinding bata kokoh, hingga finishing homogeneous tile.",
      icon: "ShieldCheck"
    },
    {
      id: "growing-neighborhood",
      title: "Kawasan Berkembang",
      desc: "Dikelilingi oleh pusat pendidikan ternama seperti Universitas Pamulang serta beragam area komersial aktif.",
      icon: "Sparkles"
    }
  ],  // Gallery categorization (with placeholder paths generated or fallbacks)
  logo: "/assets/images/logo_narahome-removebg-preview.webp",
  heroImage: "/assets/images/img15.webp",
  facade3D: "/assets/images/1 PDF 3D FACADE & SITE - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0001.webp",
  
  // Multi-page PDF layouts
  facade3DPages: [
    "/assets/images/1 PDF 3D FACADE & SITE - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0001.webp",
    "/assets/images/1 PDF 3D FACADE & SITE - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0002.webp",
    "/assets/images/1-PDF-3D-FACADE-_-SITE-PROJECT-CLUSTER-PAMULANG_-TANGERANG-SELATAN-BAPAK-RAMLI_page-0003.webp",
    "/assets/images/1-PDF-3D-FACADE-_-SITE-PROJECT-CLUSTER-PAMULANG_-TANGERANG-SELATAN-BAPAK-RAMLI_page-0004.webp",
    "/assets/images/1 PDF 3D FACADE & SITE - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0005.webp",
    "/assets/images/1-PDF-3D-FACADE-_-SITE-PROJECT-CLUSTER-PAMULANG_-TANGERANG-SELATAN-BAPAK-RAMLI_page-0006.webp",
    "/assets/images/1-PDF-3D-FACADE-_-SITE-PROJECT-CLUSTER-PAMULANG_-TANGERANG-SELATAN-BAPAK-RAMLI_page-0007.webp",
    "/assets/images/1 PDF 3D FACADE & SITE - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0008.webp"
  ],

  denah3DPages: [
    "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0001.webp",
    "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0002.webp",
    "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0003.webp",
    "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0004.webp",
    "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0005.webp",
    "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0006.webp"
  ],
  
  // Interactive Site Map list of all 22 units
  units: [
    { id: "unit-A-01", number: "A-01", status: "Coming Soon", isReady: false, price: "Rp1.15 Miliar*", specs: { land: 72, building: 89 } },
    { id: "unit-A-02", number: "A-02", status: "Coming Soon", isReady: false, price: "Rp1.18 Miliar*", specs: { land: 75, building: 89 } },
    { id: "unit-A-03", number: "A-03", status: "Coming Soon", isReady: false, price: "Rp995 Juta*", specs: { land: 66, building: 74 } },
    { id: "unit-A-04", number: "A-04", status: "Coming Soon", isReady: false, price: "Rp1.02 Miliar*", specs: { land: 68, building: 74 } },
    { id: "unit-A-05", number: "A-05", status: "Coming Soon", isReady: false, price: "Rp1.04 Miliar*", specs: { land: 69, building: 74 } },
    { id: "unit-A-06", number: "A-06", status: "Coming Soon", isReady: false, price: "Rp1.01 Miliar*", specs: { land: 67, building: 74 } },
    { id: "unit-A-07", number: "A-07", status: "Coming Soon", isReady: false, price: "Rp1.22 Miliar*", specs: { land: 89, building: 74 } },
    { id: "unit-B-01", number: "B-01", status: "Coming Soon", isReady: false, price: "Rp800an Juta*", specs: { land: 62, building: 74 } },
    { id: "unit-B-02", number: "B-02", status: "Coming Soon", isReady: false, price: "Rp800an Juta*", specs: { land: 62, building: 74 } },
    { id: "unit-B-03", number: "B-03", status: "Coming Soon", isReady: false, price: "Rp800an Juta*", specs: { land: 62, building: 74 } },
    { id: "unit-B-04", number: "B-04", status: "Coming Soon", isReady: false, price: "Rp1.24 Miliar*", specs: { land: 83, building: 89 } },
    { id: "unit-B-05", number: "B-05", status: "Coming Soon", isReady: false, price: "Rp1.29 Miliar*", specs: { land: 96, building: 74 } },
    { id: "unit-B-06", number: "B-06", status: "Coming Soon", isReady: false, price: "Rp1.16 Miliar*", specs: { land: 83, building: 74 } },
    { id: "unit-B-07", number: "B-07", status: "Coming Soon", isReady: false, price: "Rp800an Juta*", specs: { land: 62, building: 68 } },
    { id: "unit-C-01", number: "C-01", status: "Available", isReady: true, price: "Rp800an Juta*", specs: { land: 60, building: 74 }, image: "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0005.webp", imageLantai2: "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0006.webp" },
    { id: "unit-C-02", number: "C-02", status: "Available", isReady: true, price: "Rp800an Juta*", specs: { land: 60, building: 74 }, image: "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0005.webp", imageLantai2: "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0006.webp" },
    { id: "unit-C-03", number: "C-03", status: "Available", isReady: true, price: "Rp800an Juta*", specs: { land: 60, building: 74 }, image: "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0005.webp", imageLantai2: "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0006.webp" },
    { id: "unit-C-04", number: "C-04", status: "Available", isReady: true, price: "Rp800an Juta*", specs: { land: 60, building: 74 }, image: "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0005.webp", imageLantai2: "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0006.webp" },
    { id: "unit-C-05", number: "C-05", status: "Available", isReady: true, price: "Rp800an Juta*", specs: { land: 60, building: 74 }, image: "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0005.webp", imageLantai2: "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0006.webp" },
    { id: "unit-C-06", number: "C-06", status: "Available", isReady: true, price: "Rp800an Juta*", specs: { land: 60, building: 74 }, image: "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0005.webp", imageLantai2: "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0006.webp" },
    { id: "unit-C-07", number: "C-07", status: "Coming Soon", isReady: false, price: "Rp1.15 Miliar*", specs: { land: 72, building: 89 } },
    { id: "unit-C-08", number: "C-08", status: "Coming Soon", isReady: false, price: "Rp800an Juta*", specs: { land: 60, building: 70 } }
  ],

  gallery: [
    {
      id: "img-1",
      category: "living-room",
      title: "Living Room",
      desc: "Desain area living room utama dengan tata ruang lapang dan elegan.",
      image: "/assets/images/img1.webp",
      fallback: "/assets/images/img1.webp"
    },
    {
      id: "img-3",
      category: "living-room",
      title: "Living Room",
      desc: "Sudut pandang ruang keluarga yang mewah, terang, dan nyaman untuk berkumpul.",
      image: "/assets/images/img3.webp",
      fallback: "/assets/images/img3.webp"
    },
    {
      id: "img-5",
      category: "living-room",
      title: "Living Room",
      desc: "Area tangga dan living room dengan finishing homogeneous tile premium.",
      image: "/assets/images/img5.webp",
      fallback: "/assets/images/img5.webp"
    },
    {
      id: "img-7",
      category: "living-room",
      title: "Living Room",
      desc: "Sisi lain ruang keluarga dengan sirkulasi udara optimal dan pencahayaan maksimal.",
      image: "/assets/images/img7.webp",
      fallback: "/assets/images/img7.webp"
    },
    {
      id: "img-9",
      category: "living-room",
      title: "Ruang Makan",
      desc: "Area makan modern yang menyatu harmonis dengan ruang keluarga.",
      image: "/assets/images/img9.webp",
      fallback: "/assets/images/img9.webp"
    },
    {
      id: "img-11",
      category: "living-room",
      title: "Pintu Masuk dari Dalam Rumah",
      desc: "Desain akses pintu masuk utama yang estetik dan lapang dipandang dari dalam.",
      image: "/assets/images/img11.webp",
      fallback: "/assets/images/img11.webp"
    },
    {
      id: "img-13",
      category: "kitchen",
      title: "Dapur Luar",
      desc: "Area dapur luar dengan sirkulasi udara yang lancar untuk kenyamanan memasak.",
      image: "/assets/images/img13.webp",
      fallback: "/assets/images/img13.webp"
    },
    {
      id: "img-15",
      category: "bedroom",
      title: "Kamar Tidur Utama",
      desc: "Kamar tidur utama yang luas, nyaman, dan bernuansa hangat.",
      image: "/assets/images/img15.webp",
      fallback: "/assets/images/img15.webp"
    },
    {
      id: "img-17",
      category: "bedroom",
      title: "Kamar Tidur Utama",
      desc: "Sudut pandang lain dari kamar tidur utama yang elegan dan fungsional.",
      image: "/assets/images/img17.webp",
      fallback: "/assets/images/img17.webp"
    },
    {
      id: "img-19",
      category: "bedroom",
      title: "Kamar Tidur Utama",
      desc: "Pencahayaan alami yang melimpah mempercantik ruang kamar tidur utama.",
      image: "/assets/images/img19.webp",
      fallback: "/assets/images/img19.webp"
    },
    {
      id: "img-21",
      category: "bedroom",
      title: "Kamar Tidur",
      desc: "Rancangan kamar tidur anak atau tamu dengan optimalisasi tata ruang.",
      image: "/assets/images/img21.webp",
      fallback: "/assets/images/img21.webp"
    }
  ],

  // Nearby landmarks & travel times
  nearbyFacilities: [
    {
      category: "Pendidikan",
      icon: "GraduationCap",
      places: [
        { name: "SD/SMP/SMA Mumtaza Islamic", time: "2 Menit (Satu Area Jl. Kalimantan)" },
        { name: "TK & SD Islam Al-Azhar Pamulang", time: "4 Menit" },
        { name: "Universitas Pamulang (UNPAM)", time: "7 Menit" },
        { name: "Global Islamic School", time: "10 Menit" }
      ]
    },
    {
      category: "Kesehatan",
      icon: "HeartPulse",
      places: [
        { name: "RSUD Tangerang Selatan", time: "3 Menit (Jl. Pajajaran)" },
        { name: "RS Permata Pamulang", time: "6 Menit" },
        { name: "RS Vitalaya Pamulang", time: "7 Menit" },
        { name: "Klinik & Apotek 24 Jam terdekat", time: "1 Menit" }
      ]
    },
    {
      category: "Pusat Belanja",
      icon: "ShoppingBag",
      places: [
        { name: "Superindo Pamulang", time: "4 Menit" },
        { name: "Pamulang Square", time: "6 Menit" },
        { name: "Living Plaza Pamulang", time: "8 Menit" },
        { name: "Lotte Grosir Serpong", time: "12 Menit" }
      ]
    },
    {
      category: "Transportasi",
      icon: "Car",
      places: [
        { name: "Gerbang Tol Pamulang (Cinere-Serpong)", time: "8 Menit" },
        { name: "Stasiun KRL Sudimara", time: "12 Menit" },
        { name: "Stasiun KRL Rawa Buntu", time: "15 Menit" },
        { name: "Halte Bus Transjakarta Pamulang", time: "6 Menit" }
      ]
    },
    {
      category: "Fasilitas Publik",
      icon: "Compass",
      places: [
        { name: "Masjid Agung Pamulang", time: "6 Menit" },
        { name: "Kantor Walikota Tangerang Selatan", time: "8 Menit" },
        { name: "Taman Kota Pamulang", time: "6 Menit" },
        { name: "Community Center Pamulang", time: "6 Menit" }
      ]
    }
  ],

  // Core Residential Cluster Amenities (10 Cards)
  facilities: [
    { name: "One Gate Community", desc: "Akses tunggal terkontrol untuk privasi & rasa aman keluarga.", icon: "Lock" },
    { name: "24/7 Security", desc: "Petugas keamanan terlatih bersertifikasi berjaga nonstop.", icon: "Shield" },
    { name: "Children's Playground", desc: "Taman hijau interaktif yang ramah & aman bagi tumbuh kembang anak.", icon: "Smile" },
    { name: "6-Meter Wide Paved Roads", desc: "Jalan utama cluster lebar 6 meter dilapisi paving block premium.", icon: "Milestone" },
    { name: "CCTV Monitoring", desc: "Pengawasan kamera keamanan di seluruh titik strategis cluster.", icon: "Video" },
    { name: "Underground Utilities", desc: "Instalasi kabel listrik bawah tanah bebas kusut & rapi secara estetika.", icon: "Zap" },
    { name: "Mosque Nearby", desc: "Masjid komplek yang bersih dan nyaman berjarak berjalan kaki singkat.", icon: "Moon" },
    { name: "Smart Key Door Lock", desc: "Keamanan modern pintu utama berbasis kartu pintar dan kode PIN.", icon: "Key" }
  ],

  // Customer FAQs (SEO Optimized)
  faqs: [
    {
      q: "Apakah Nara Home Pamulang termasuk cluster murah dekat BSD?",
      a: "Ya, betul sekali. Jika dibandingkan dengan perumahan di dalam kawasan utama BSD yang harganya rata-rata sudah melambung di atas 1,5 Miliar rupiah untuk tipe sejenis, Nara Home Pamulang merupakan pilihan cluster murah dekat BSD dengan harga mulai Rp800 Jutaan saja. Anda sudah mendapatkan hunian 2 lantai premium dengan spesifikasi mewah berstruktur bata merah, dekat dari BSD City."
    },
    {
      q: "Berapa jarak dari Nara Home Pamulang ke Stasiun KRL terdekat?",
      a: "Bagi Anda yang sedang mencari pilihan rumah dekat Stasiun Sudimara, cluster Nara Home Pamulang berada di lokasi yang sangat ideal. Lokasi kami hanya berjarak sekitar 12 menit berkendara (sekitar 4-5 km) dari Stasiun KRL Sudimara. Stasiun ini memberikan kemudahan akses commuting langsung menuju stasiun Tanah Abang, Palmerah, hingga Sudirman CBD Jakarta."
    },
    {
      q: "Berapa minimal uang muka (DP) yang harus disiapkan?",
      a: "Tersedia promo DP khusus mulai dari 5% hingga 10% yang bisa diangsur, atau bahkan DP 0% (Syarat dan Ketentuan berlaku). Hubungi marketing kami via WhatsApp untuk mendapatkan simulasi cicilan resmi terupdate."
    },
    {
      q: "Apakah bisa mengajukan pembelian melalui KPR?",
      a: "Sangat bisa. Saat ini Nara Home Pamulang bekerja sama dengan Bank Syariah Indonesia (BSI) dan Bank Tabungan Negara (BTN) untuk memudahkan pengajuan KPR Anda dengan proses yang dibantu penuh oleh tim kami."
    },
    {
      q: "Berapa sisa unit yang tersedia saat ini?",
      a: "Nara Home Pamulang adalah cluster eksklusif yang hanya terdiri dari 22 Unit secara keseluruhan. Saat ini unit-unit di Blok C (C-01 hingga C-06) telah dibuka dan siap dipilih. Untuk mengetahui kavling terbaik yang masih tersedia, silakan segera jadwalkan kunjungan site visit."
    },
    {
      q: "Bagaimana akses transportasi terdekat dari Nara Home Pamulang?",
      a: "Sangat strategis! Kami hanya berjarak 8 menit dari Gerbang Tol Pamulang (Tol Serpong-Cinere) dan sekitar 12 menit berkendara menuju Stasiun KRL Sudimara yang menghubungkan langsung ke pusat bisnis Sudirman Jakarta."
    },
    {
      q: "Bagaimana cara memesan unit atau melakukan booking?",
      a: "Cukup dengan Booking Fee Rp5 Juta (Refundable sesuai ketentuan), Anda sudah bisa mengamankan nomor kavling pilihan Anda. Langkah pertama adalah menghubungi kami melalui WhatsApp untuk menjadwalkan kunjungan show unit."
    }
  ],

  // Imaginary/fictional testimonials focusing on survey, design, and location impressions (no buyer/resident claims)
  testimonials: [
    {
      name: "Andini & Rangga",
      role: "Keluarga Muda, Pengunjung Site Visit",
      text: "Sangat kagum saat pertama kali berkunjung ke lokasi Nara Home. Desain rumah 2 lantainya sangat modern dengan tata ruang yang lapang dan fungsional untuk keluarga kecil. Lokasinya juga strategis sekali, dekat ke area sekolah dan hanya beberapa menit menuju kampus UNPAM.",
      avatar: "AR"
    },
    {
      name: "Budi Hermawan",
      role: "Wiraswasta, Pengamat Properti",
      text: "Nara Home menawarkan spesifikasi material bangunan yang sangat kokoh dan berkualitas tinggi di kelasnya. Konsep arsitektur tropis modernnya terlihat menawan, ditambah suasananya yang tenang meskipun dekat dari jalan raya utama Pamulang.",
      avatar: "BH"
    },
    {
      name: "Citra Lestari",
      role: "Karyawan Swasta, Peminat Desain Modern",
      text: "Suka sekali dengan konsep One Gate System dan sistem pencahayaan alami di setiap sudut ruangan yang kami lihat saat survey. Tata ruangnya dirancang apik untuk sirkulasi udara yang optimal, serta akses transportasi ke Tol Pamulang juga sangat mudah.",
      avatar: "CL"
    }
  ],

  // Articles for SEO Optimization & Local Keywords
  articles: [
    {
      id: "tips-beli-rumah-pertama-pamulang",
      slug: "tips-beli-rumah-pertama-pamulang",
      title: "Tips Cerdas Membeli Rumah Pertama di Pamulang Tangerang Selatan",
      category: "KPR Syariah",
      summary: "Menemukan hunian impian bagi keluarga muda membutuhkan strategi matang. Pelajari keunggulan kawasan Pamulang serta tips mengamankan KPR Syariah terbaik.",
      date: "14 Juli 2026",
      author: "Nara Home Editorial",
      readTime: "5 Menit Read",
      keywords: ["Rumah dijual di Pamulang", "Rumah Tangerang Selatan", "KPR Syariah Tangerang Selatan", "Investasi Properti"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      content: `
        <p class="lead font-medium text-slate-800 dark:text-gray-200 text-base mb-4">
          Membeli <strong>rumah pertama</strong> adalah salah satu pencapaian finansial dan personal terbesar bagi keluarga muda. Di tengah pesatnya perkembangan wilayah penyangga Jakarta, kawasan <strong>Pamulang, Tangerang Selatan</strong> muncul sebagai salah satu primadona properti yang paling diminati.
        </p>
        <p class="mb-4">
          Selain harganya yang masih relatif terjangkau dibandingkan area tetangganya seperti BSD atau Bintaro, Pamulang menawarkan fasilitas umum yang sangat matang. Namun, sebelum Anda memutuskan untuk melakukan booking fee, ada beberapa tips cerdas yang perlu Anda perhatikan:
        </p>
        <h3 class="font-serif font-bold text-lg text-slate-900 dark:text-white mt-6 mb-2">1. Analisis Aksesbilitas & Konektivitas</h3>
        <p class="mb-4">
          Pastikan rumah impian Anda dekat dengan akses transportasi harian. Pamulang kini diuntungkan dengan kehadiran <strong>Tol Serpong-Cinere (Gerbang Tol Pamulang)</strong> yang hanya berjarak beberapa menit saja. Bagi pengguna transportasi umum, kedekatan dengan <strong>Stasiun KRL Sudimara</strong> menjadi nilai tambah yang luar biasa untuk memudahkan commuting kerja ke Jakarta.
        </p>
        <h3 class="font-serif font-bold text-lg text-slate-900 dark:text-white mt-6 mb-2">2. Perhatikan Legalitas dan Kredibilitas Developer</h3>
        <p class="mb-4">
          Banyak pembeli rumah pertama terjebak dalam masalah legalitas sertifikat ganda atau izin PBG yang tertunda. Pastikan Anda membeli dari developer berkomitmen tinggi seperti <strong>Nara Home Pamulang</strong> yang menjamin <strong>Sertifikat Hak Milik (SHM) pecah per kavling</strong> serta izin lingkungan yang 100% aman dan klir sejak awal.
        </p>
        <h3 class="font-serif font-bold text-lg text-slate-900 dark:text-white mt-6 mb-2">3. Pilih Skema Pembiayaan Syariah Terpercaya</h3>
        <p class="mb-4">
          Untuk ketenangan finansial jangka panjang, skema <strong>KPR Syariah di Tangerang Selatan</strong> kini sangat digemari. Kerja sama perumahan dengan bank terkemuka seperti Bank Syariah Indonesia (BSI) memberikan kepastian cicilan flat yang aman tanpa fluktuasi suku bunga, membantu Anda merencanakan cashflow keluarga dengan lebih matang.
        </p>
        <p class="mt-6 font-semibold text-primary dark:text-accent">
          Ingin berkonsultasi mengenai simulasi KPR Syariah flat untuk unit eksklusif kami? Hubungi konsultan pemasaran Nara Home Pamulang sekarang juga!
        </p>
      `
    },
    {
      id: "keunggulan-desain-tropis-modern",
      slug: "keunggulan-desain-tropis-modern",
      title: "Keunggulan Desain Tropis Modern untuk Rumah Minimalis 2 Lantai",
      category: "Tips Membeli Rumah",
      summary: "Mengapa arsitektur tropis modern sangat cocok untuk iklim Indonesia? Temukan bagaimana sirkulasi udara dan cahaya alami dapat menghemat pengeluaran energi Anda.",
      date: "10 Juli 2026",
      author: "Architectural Specialist",
      readTime: "4 Menit Read",
      keywords: ["Arsitektur Tropis Modern", "Rumah Minimalis 2 Lantai", "Cluster Pamulang", "Nara Home Pamulang"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      content: `
        <p class="lead font-medium text-slate-800 dark:text-gray-200 text-base mb-4">
          Di Indonesia yang beriklim tropis basah dengan curah hujan tinggi serta paparan sinar matahari sepanjang tahun, pemilihan gaya arsitektur rumah bukan sekadar urusan keindahan visual. Konsep <strong>arsitektur tropis modern</strong> hadir sebagai solusi hunian ideal yang fungsional dan elegan.
        </p>
        <p class="mb-4">
          Gaya arsitektur inilah yang diusung oleh <strong>Nara Home Pamulang</strong> untuk menciptakan kenyamanan maksimal bagi para penghuninya. Berikut adalah beberapa keunggulan utama dari perpaduan tropis dan modern:
        </p>
        <h3 class="font-serif font-bold text-lg text-slate-900 dark:text-white mt-6 mb-2">1. Pencahayaan Alami Maksimal (Natural Daylight)</h3>
        <p class="mb-4">
          Dengan bukaan jendela yang lebar dan tata letak yang strategis, cahaya matahari dapat masuk menerangi seisi rumah sepanjang hari tanpa menghasilkan panas berlebih. Hal ini tidak hanya meminimalkan kelembapan ruangan, tetapi juga menghemat konsumsi energi listrik untuk lampu di siang hari.
        </p>
        <h3 class="font-serif font-bold text-lg text-slate-900 dark:text-white mt-6 mb-2">2. Sirkulasi Udara Silang (Cross Ventilation)</h3>
        <p class="mb-4">
          Udara segar yang terus mengalir masuk dan keluar secara alami membuat suhu di dalam rumah minimalis 2 lantai tetap sejuk meski di siang hari terik. Udara tidak pengap, dan penggunaan pendingin ruangan (AC) dapat dikurangi secara signifikan untuk menjaga kebugaran sistem pernapasan keluarga Anda.
        </p>
        <h3 class="font-serif font-bold text-lg text-slate-900 dark:text-white mt-6 mb-2">3. Konstruksi Tangguh Bebas Cuaca</h3>
        <p class="mb-4">
          Atap miring dengan kemiringan optimal membantu mengalirkan air hujan dengan sangat cepat, mencegah risiko bocor atau rembesan pada dinding luar. Dipadukan dengan material dinding premium seperti struktur bata merah berkualitas tinggi yang kokoh, bangunan siap menghadapi tantangan cuaca ekstrem Indonesia.
        </p>
        <p class="mt-6 font-semibold text-primary dark:text-accent">
          Kunjungi rumah contoh (Show Unit) Nara Home Pamulang sekarang untuk merasakan langsung sejuknya sirkulasi udara dan kemewahan tata ruang tropis modern kami.
        </p>
      `
    },
    {
      id: "mengapa-pamulang-kawasan-properti-populer",
      slug: "mengapa-pamulang-kawasan-properti-populer",
      title: "Mengapa Pamulang Menjadi Kawasan Properti Paling Diburu saat Ini?",
      category: "Investasi Properti",
      summary: "Dengan selesainya jalur tol baru dan kedekatan dengan fasilitas pendidikan ternama, Pamulang bertransformasi menjadi magnet investasi properti utama.",
      date: "05 Juli 2026",
      author: "Investment Consultant",
      readTime: "6 Menit Read",
      keywords: ["Rumah dijual di Pamulang", "Investasi Properti Tangerang Selatan", "Tol Pamulang Serpong", "Universitas Pamulang"],
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
      content: `
        <p class="lead font-medium text-slate-800 dark:text-gray-200 text-base mb-4">
          Jika Anda sedang mencari lokasi perumahan dengan nilai kenaikan investasi (capital gain) tertinggi di Tangerang Selatan, jawabannya mengarah kuat pada satu wilayah: <strong>Pamulang</strong>. Area ini sedang bertransformasi pesat dari kawasan pemukiman biasa menjadi pusat komersial dan hunian modern bergengsi.
        </p>
        <p class="mb-4">
          Faktor apa saja yang memicu lonjakan minat pencari properti dan investor di wilayah Pamulang, khususnya di sekitar Benda Baru?
        </p>
        <h3 class="font-serif font-bold text-lg text-slate-900 dark:text-white mt-6 mb-2">1. Infrastruktur Jalan Tol yang Menghubungkan Berbagai Kota</h3>
        <p class="mb-4">
          Selesainya pembangunan jalan <strong>Tol Serpong-Cinere (Pamulang)</strong> mengubah peta mobilitas warga Tangsel. Kini, perjalanan menuju Bandara Soekarno-Hatta, Depok, Bogor, maupun Jakarta Selatan dapat ditempuh dengan waktu yang jauh lebih cepat, bebas macet parah.
        </p>
        <h3 class="font-serif font-bold text-lg text-slate-900 dark:text-white mt-6 mb-2">2. Pusat Pendidikan dan Kampus Ternama</h3>
        <p class="mb-4">
          Pamulang dikenal luas sebagai pusatnya generasi muda dan akademisi berkat keberadaan <strong>Universitas Pamulang (UNPAM)</strong> yang menampung puluhan ribu mahasiswa. Hal ini mendongkrak denyut nadi bisnis retail, kuliner modern, serta kebutuhan sewa hunian dan kost, menciptakan ekosistem wilayah yang sangat hidup dan berkembang pesat.
        </p>
        <h3 class="font-serif font-bold text-lg text-slate-900 dark:text-white mt-6 mb-2">3. Kedekatan dengan CBD BSD & Bintaro</h3>
        <p class="mb-4">
          Penghuni Pamulang dapat dengan sangat mudah menjangkau pusat perkantoran, pusat perbelanjaan elit (AEON Mall BSD, Bintaro Exchange), dan rumah sakit bertaraf internasional di BSD atau Bintaro hanya dengan 15-20 menit berkendara. Ini memberikan gaya hidup modern yang serba praktis tanpa harus membayar harga tanah selangit.
        </p>
        <p class="mt-6 font-semibold text-primary dark:text-accent">
          Nara Home Pamulang menawarkan kesempatan emas memiliki rumah mewah eksklusif di jantung kawasan terfavorit ini dengan harga perdana yang sangat kompetitif. Amankan unit Anda sekarang sebelum kenaikan harga berikutnya!
        </p>
      `
    },
    {
      id: "cluster-murah-dekat-bsd-stasiun-sudimara",
      slug: "cluster-murah-dekat-bsd-stasiun-sudimara",
      title: "Mencari Cluster Murah di BSD? Ini Alasan Nara Home Pamulang Jadi Pilihan Terbaik",
      category: "Tips Membeli Rumah",
      summary: "Ingin punya rumah dekat BSD tapi budget terbatas? Simak ulasan perumahan cluster murah di BSD and rumah dekat Stasiun Sudimara yang siap huni dengan promo melimpah.",
      date: "14 Juli 2026",
      author: "Property Analyst Tangsel",
      readTime: "5 Menit Read",
      keywords: ["Cluster murah di BSD", "Rumah dekat Stasiun Sudimara", "Rumah dekat BSD", "Nara Home Pamulang", "Cluster murah dekat BSD"],
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      content: `
        <p class="lead font-medium text-slate-800 dark:text-gray-200 text-base mb-4">
          Memiliki hunian di dekat pusat pertumbuhan ekonomi seperti BSD City merupakan impian banyak orang. Namun, harga tanah dan rumah di kawasan inti BSD yang kian melambung tinggi sering kali menjadi kendala utama bagi keluarga muda. Menjawab kebutuhan tersebut, pencarian beralih ke <strong>cluster murah dekat BSD</strong> yang menawarkan akses cepat namun dengan harga yang jauh lebih ramah di kantong.
        </p>
        <p class="mb-4">
          Salah satu alternatif terbaik yang sedang ramai diperbincangkan adalah <strong>Nara Home Pamulang</strong>. Terletak strategis di perbatasan Pamulang dan BSD, cluster eksklusif ini menawarkan solusi hunian 2 lantai mewah dengan harga mulai dari Rp800 Jutaan saja. Mari kita bedah mengapa perumahan ini sangat layak Anda pertimbangkan:
        </p>
        <h3 class="font-serif font-bold text-lg text-slate-900 dark:text-white mt-6 mb-2">1. Solusi Cerdas Cluster Murah di BSD</h3>
        <p class="mb-4">
          Membeli rumah di kawasan BSD saat ini rata-rata membutuhkan budget di atas 1,5 hingga 2 Miliar Rupiah untuk tipe 2 lantai. Di Nara Home Pamulang, Anda bisa mendapatkan rumah dengan spesifikasi yang setara—bahkan dengan keunggulan dinding bata merah kokoh dan desain modern tropis minimalis—hanya dengan harga mulai Rp800 Jutaan. Dengan selisih harga yang signifikan ini, Anda bisa menghemat ratusan juta rupiah yang dapat dialokasikan untuk kebutuhan keluarga lainnya atau investasi masa depan.
        </p>
        <h3 class="font-serif font-bold text-lg text-slate-900 dark:text-white mt-6 mb-2">2. Kemudahan Commuting: Rumah Dekat Stasiun Sudimara</h3>
        <p class="mb-4">
          Bagi para pekerja komuter (commuter) yang beraktivitas di pusat kota Jakarta seperti Palmerah, Tanah Abang, Sudirman, dan Kuningan, akses transportasi publik yang cepat adalah kunci kebahagiaan hidup. Nara Home Pamulang hadir sebagai pilihan <strong>rumah dekat Stasiun Sudimara</strong>. Hanya membutuhkan waktu sekitar 12 menit berkendara, Anda sudah sampai di stasiun KRL terpadu ini untuk langsung naik kereta commuter line tanpa perlu bermacet-macetan di jalan raya.
        </p>
        <h3 class="font-serif font-bold text-lg text-slate-900 dark:text-white mt-6 mb-2">3. Promo Heboh Juli 2026: Cuma 5 Juta Langsung Akad!</h3>
        <p class="mb-4">
          Tidak hanya menawarkan harga yang terjangkau, Nara Home Pamulang juga memanjakan calon pembeli dengan skema pembiayaan yang sangat ringan. Khusus bulan Juli 2026, tersedia program <strong>5 Juta Rupiah langsung akad</strong> tanpa biaya-biaya tambahan yang memberatkan (Free BPHTB, AJB, balik nama, dan subsidi biaya KPR*). Selain itu, terdapat potongan harga atau diskon khusus hingga Rp200 Juta bagi Anda yang melakukan booking minggu ini.
        </p>
        <p class="mt-6 font-semibold text-primary dark:text-accent">
          Jangan lewatkan kesempatan langka memiliki hunian strategis di cluster murah dekat BSD ini. Hubungi tim marketing kami sekarang dan jadwalkan kunjungan show unit Anda sebelum kehabisan unit promonya!
        </p>
      `
    },
    {
      id: "investasi-rumah-dekat-stasiun-sudimara-pamulang",
      slug: "investasi-rumah-dekat-stasiun-sudimara-pamulang",
      title: "Investasi Cerdas: Keuntungan Finansial Membeli Rumah Dekat Stasiun Sudimara",
      category: "Investasi Properti",
      summary: "Memilih rumah dekat Stasiun Sudimara seperti Nara Home Pamulang bukan cuma soal kemudahan transportasi, tapi juga tentang percepatan nilai investasi aset Anda di Tangerang Selatan.",
      date: "12 Juli 2026",
      author: "Fintech & Property Expert",
      readTime: "6 Menit Read",
      keywords: ["Rumah dekat Stasiun Sudimara", "Rumah dijual di Pamulang", "Investasi Properti Tangerang Selatan", "Stasiun Sudimara KRL"],
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      content: `
        <p class="lead font-medium text-slate-800 dark:text-gray-200 text-base mb-4">
          Bagi masyarakat urban modern, waktu adalah aset yang paling berharga. Menghabiskan waktu berjam-jam terjebak kemacetan di jalan raya menuju tempat kerja tidak hanya menguras tenaga, tetapi juga menurunkan produktivitas. Itulah mengapa memiliki <strong>rumah dekat Stasiun Sudimara</strong> menjadi impian yang sangat logis dan menguntungkan.
        </p>
        <p class="mb-4">
          Stasiun Sudimara merupakan salah satu stasiun KRL terpadat dan paling strategis di Tangerang Selatan yang melayani rute langsung (Direct Line) Tanah Abang, Palmerah, Sudirman, hingga Bekasi. Mari kita bahas keuntungan finansial dan kenyamanan hidup dari investasi properti di dekat stasiun ini:
        </p>
        <h3 class="font-serif font-bold text-lg text-slate-900 dark:text-white mt-6 mb-2">1. Lonjakan Capital Gain yang Tinggi</h3>
        <p class="mb-4">
          Properti yang berlokasi dalam radius 10-15 menit dari stasiun kereta api utama terbukti mengalami kenaikan harga tahunan (capital gain) yang jauh lebih cepat dibandingkan dengan area terpencil. <strong>Nara Home Pamulang</strong> yang berjarak sekitar 12 menit saja dari Stasiun Sudimara menawarkan potensi pertumbuhan nilai investasi hingga 15% per tahun. Ini menjadikannya aset liquid yang sangat bernilai tinggi.
        </p>
        <h3 class="font-serif font-bold text-lg text-slate-900 dark:text-white mt-6 mb-2">2. Penghematan Biaya Transportasi Bulanan</h3>
        <p class="mb-4">
          Dengan beralih menggunakan KRL Commuter Line dari Stasiun Sudimara, Anda dapat memangkas pengeluaran bensin, tol harian, biaya parkir perkantoran, hingga biaya perawatan kendaraan pribadi secara drastis. Rata-rata keluarga komuter mampu menghemat Rp1,5 juta hingga Rp3 juta per bulan yang dapat dialokasikan langsung untuk cicilan flat KPR Syariah di Nara Home Pamulang.
        </p>
        <h3 class="font-serif font-bold text-lg text-slate-900 dark:text-white mt-6 mb-2">3. Hunian Nyaman dan Asri Sepulang Kerja</h3>
        <p class="mb-4">
          Meskipun dekat dengan stasiun kereta aktif, Nara Home Pamulang didesain sebagai cluster eksklusif satu pintu (One Gate System) yang tenang, aman, dan bebas dari kebisingan jalan raya utama. Suasana sejuk dengan sirkulasi udara optimal menyambut Anda seketika setelah pulang berkomuter dari pusat bisnis Jakarta yang padat.
        </p>
        <p class="mt-6 font-semibold text-primary dark:text-accent">
          Ingin merasakan kemudahan commuting harian sekaligus mengamankan aset investasi masa depan Anda? Hubungi marketing Nara Home Pamulang sekarang untuk survey lokasi show unit kami.
        </p>
      `
    },
    {
      id: "perbandingan-cluster-murah-di-bsd-vs-pamulang",
      slug: "perbandingan-cluster-murah-di-bsd-vs-pamulang",
      title: "Perbandingan Harga Rumah: Cluster Murah di BSD vs Nara Home Pamulang",
      category: "Tips Membeli Rumah",
      summary: "Ingin menikmati fasilitas modern kelas dunia ala BSD City tapi terkendala harga yang melangit? Cari tahu perbandingan riil harga cluster murah di BSD dengan alternatif terbaiknya di Pamulang.",
      date: "08 Juli 2026",
      author: "Analisis Pasar Properti Tangsel",
      readTime: "5 Menit Read",
      keywords: ["Cluster murah di BSD", "Rumah murah dekat BSD", "Harga Rumah Pamulang", "Nara Home Pamulang"],
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
      content: `
        <p class="lead font-medium text-slate-800 dark:text-gray-200 text-base mb-4">
          Siapa yang tidak tergiur dengan kemegahan BSD City? Pusat bisnis modern, pusat hiburan AEON Mall, The Breeze, ICE BSD, hingga jajaran sekolah internasional ada di sana. Namun, saat kita berbicara mengenai anggaran pembelian hunian, kenyataan sering kali memaksa kita berpikir realistis. Mencari <strong>cluster murah di BSD</strong> yang berkualitas kini hampir terasa mustahil bagi budget di bawah 1 Miliar Rupiah.
        </p>
        <p class="mb-4">
          Melalui artikel ini, kita akan membandingkan secara objektif antara realita harga hunian di kawasan inti BSD dengan alternatif cerdas terdekatnya, yaitu <strong>Nara Home Pamulang</strong> yang berlokasi strategis hanya beberapa menit dari gerbang perbatasan BSD.
        </p>
        <h3 class="font-serif font-bold text-lg text-slate-900 dark:text-white mt-6 mb-2">1. Realita Harga Cluster di BSD Saat Ini</h3>
        <p class="mb-4">
          Saat ini, harga unit rumah baru 2 lantai dengan luas tanah minimal di kawasan BSD City telah menyentuh angka Rp1,6 Miliar hingga Rp2,5 Miliar. Bagi kebanyakan pasangan muda yang baru merintis karier, nominal tersebut membutuhkan angsuran bulanan KPR yang sangat berat dan mengancam stabilitas keuangan keluarga harian.
        </p>
        <h3 class="font-serif font-bold text-lg text-slate-900 dark:text-white mt-6 mb-2">2. Nara Home Pamulang: Solusi Cerdas Proksimitas BSD</h3>
        <p class="mb-4">
          Bagi Anda yang bertekad mencari <strong>cluster murah dekat BSD</strong>, Nara Home Pamulang adalah jawaban paling presisi. Ditawarkan mulai dari harga Rp800 Jutaan saja, Anda mendapatkan spesifikasi premium (2 lantai, 3 kamar tidur, 2 toilet, dinding bata merah kokoh) dengan lokasi super strategis. Anda hanya membutuhkan waktu sekitar 15 menit saja berkendara untuk menikmati segala kemewahan infrastruktur komersial BSD City.
        </p>
        <h3 class="font-serif font-bold text-lg text-slate-900 dark:text-white mt-6 mb-2">3. Efisiensi Biaya dan Promo Pembelian</h3>
        <p class="mb-4">
          Dengan selisih harga mencapai Rp800 Juta lebih ekonomis daripada unit di dalam BSD, Anda mendapatkan keringanan cicilan bulanan yang signifikan. Ditambah lagi, Nara Home Pamulang menawarkan promo fantastis khusus bulan Juli 2026: <strong>Cuma 5 Juta Langsung Akad</strong>, tanpa perlu mencemaskan biaya BPHTB, AJB, hingga KPR yang semuanya sudah disubsidi gratis oleh developer.
        </p>
        <p class="mt-6 font-semibold text-primary dark:text-accent">
          Mengapa harus memaksakan diri mencicil rumah miliaran rupiah jika Anda bisa mendapatkan kemewahan dan fungsi yang setara di perbatasan BSD dengan harga setengahnya? Hubungi kami sekarang dan amankan salah satu dari 22 unit eksklusif Nara Home Pamulang!
        </p>
      `
    }
  ]
};
