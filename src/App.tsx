/**
 * Nara Home Pamulang - High Converting Premium Landing Page
 * Core Stack: React, TypeScript, Tailwind CSS, Lucide Icons, Custom Interactivity
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Home as HomeIcon,
  MapPin,
  Users,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Bed,
  Bath,
  Maximize2,
  Car,
  Layers,
  Zap,
  Droplet,
  Lock,
  Shield,
  Smile,
  Milestone,
  Video,
  Trees,
  Moon,
  Sun,
  Dribbble,
  Key,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  ArrowUp,
  Phone,
  Map,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Compass,
  Play,
  Check,
  Copy,
  ExternalLink,
  Volume2,
  Briefcase,
  Clock,
  Send,
  BookOpen,
  User,
  Tag,
  ArrowRight
} from "lucide-react";
import { PROPERTY_CONFIG } from "./config/propertyData";

// --- HELPER COMPONENTS FOR GRACEFUL FALLBACKS ---
interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc: string;
  alt?: string;
  className?: string;
  loading?: "lazy" | "eager";
}

function SafeImage({ src, fallbackSrc, alt, className, ...props }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasFailed(false);
  }, [src]);

  const handleError = () => {
    if (!hasFailed) {
      setImgSrc(fallbackSrc);
      setHasFailed(true);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={className}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}

function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  const [hasFailed, setHasFailed] = useState(false);
  
  if (hasFailed) {
    return (
      <div className="flex items-center space-x-2">
        <div className="p-1.5 bg-primary text-white rounded-lg">
          <HomeIcon className="h-5 w-5" />
        </div>
        <div>
          <span className="font-serif font-bold text-base tracking-wider block leading-none">NARA HOME</span>
          <span className="text-[8px] tracking-widest uppercase block text-accent font-semibold">Pamulang Residence</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 rounded-lg px-2.5 py-1.5 shadow-sm inline-flex items-center justify-center border border-slate-100">
      <img
        src={PROPERTY_CONFIG.logo}
        alt="Nara Home Logo"
        className={`${className} mix-blend-multiply`}
        onError={() => setHasFailed(true)}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

const SELLING_POINTS = [
  {
    title: "Sertifikat 100% SHM Sudah Pecah",
    desc: "Sertifikat siap per kavling untuk proses akad KPR cepat & aman.",
    icon: Key,
    color: "text-accent"
  },
  {
    title: "Akses Tol Pamulang Hanya 8 Menit",
    desc: "Konektivitas super cepat menuju Jakarta Selatan & BSD City.",
    icon: Milestone,
    color: "text-amber-400"
  },
  {
    title: "Struktur Dinding Bata Merah Real",
    desc: "Mutu bangunan premium, dinding kokoh & kedap suara alami.",
    icon: Layers,
    color: "text-emerald-400"
  },
  {
    title: "Stasiun KRL Sudimara 12 Menit",
    desc: "Kemudahan mobilisasi harian bebas macet menuju pusat kota.",
    icon: MapPin,
    color: "text-sky-400"
  },
  {
    title: "Pondasi Cakar Ayam Kokoh",
    desc: "Konstruksi tangguh yang siap untuk pengembangan masa depan.",
    icon: ShieldCheck,
    color: "text-purple-400"
  },
  {
    title: "Subsidi Biaya KPR s/d 20 Juta*",
    desc: "Dukungan finansial eksklusif untuk kemudahan akad Anda.",
    icon: Zap,
    color: "text-yellow-400"
  },
  {
    title: "Hanya 5 Menit ke Universitas Pamulang (UNPAM)",
    desc: "Dekat fasilitas pendidikan ternama, prospek sewa sangat prospektif.",
    icon: GraduationCap,
    color: "text-indigo-400"
  }
];

export default function App() {
  // Navigation & Scroll states
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Interaction states
  const [floorPlanLevel, setFloorPlanLevel] = useState<"1st" | "2nd">("1st");
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [activeGalleryTab, setActiveGalleryTab] = useState<string>("all");
  const [activeNearbyCategory, setActiveNearbyCategory] = useState<string>(PROPERTY_CONFIG.nearbyFacilities[0]?.category || "Pendidikan");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [floorPlanFormat, setFloorPlanFormat] = useState<"2d" | "3d" | "facade">("2d");
  const [denahPageIndex, setDenahPageIndex] = useState(0);
  const [facadePageIndex, setFacadePageIndex] = useState(0);
  const [selectedUnit, setSelectedUnit] = useState<any | null>(null);
  const [selectedModalFloor, setSelectedModalFloor] = useState<"1st" | "2nd">("1st");
  const [activeSpecTab, setActiveSpecTab] = useState<"layout" | "material">("layout");
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);

  // Dark mode state with localStorage persistence
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Apply dark class to document root when darkMode state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  
  // Modal states
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasTriggeredExitIntent, setHasTriggeredExitIntent] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(PROPERTY_CONFIG.address);
    setCopiedAddress(true);
    setTimeout(() => {
      setCopiedAddress(false);
    }, 2000);
  };

  // Form states
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");

  // Refs for scroll spy
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    why: useRef<HTMLElement>(null),
    highlights: useRef<HTMLElement>(null),
    specs: useRef<HTMLElement>(null),
    gallery: useRef<HTMLElement>(null),
    tour: useRef<HTMLElement>(null),
    location: useRef<HTMLElement>(null),
    facilities: useRef<HTMLElement>(null),
    lifestyle: useRef<HTMLElement>(null),
    developer: useRef<HTMLElement>(null),
    faq: useRef<HTMLElement>(null),
    articles: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  // Monitor scroll for nav styling, active link spy, and back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      // Is scrolled state
      setIsScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);

      // Scroll Spy active sections
      const scrollPosition = window.scrollY + 120;
      for (const [key, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop;
          const offsetHeight = ref.current.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(key);
            break;
          }
        }
      }
    };

    // Exit intent mouse tracking (desktop)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 30 && !hasTriggeredExitIntent) {
        setShowExitIntent(true);
        setHasTriggeredExitIntent(true);
      }
    };

    // Exit intent mobile timer (appears after 45 seconds if not triggered already)
    const mobileTimer = setTimeout(() => {
      if (!hasTriggeredExitIntent) {
        setShowExitIntent(true);
        setHasTriggeredExitIntent(true);
      }
    }, 45000);

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, [hasTriggeredExitIntent]);

  // Auto-scrolling timer for key selling points highlight cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHighlightIndex((prev) => (prev + 1) % SELLING_POINTS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Dynamic WhatsApp text helper
  const triggerWhatsApp = (customText?: string) => {
    const message = customText || PROPERTY_CONFIG.whatsappMessage;
    const url = `https://wa.me/${PROPERTY_CONFIG.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Site visit booking submit handler
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone) {
      alert("Mohon isi Nama dan Nomor WhatsApp Anda.");
      return;
    }
    const text = `Halo Nara Home Pamulang, saya ingin mengajukan Booking Site Visit:\n\n*Nama:* ${bookingName}\n*No. WA:* ${bookingPhone}\n*Rencana Tanggal Visit:* ${bookingDate || "Fleksibel"}\n*Catatan:* ${bookingMessage || "-"}`;
    triggerWhatsApp(text);
    setShowBookingModal(false);
  };

  const scrollTo = (id: keyof typeof sectionRefs) => {
    setMobileMenuOpen(false);
    const element = sectionRefs[id]?.current;
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Filter gallery items
  const filteredGallery = activeGalleryTab === "all"
    ? PROPERTY_CONFIG.gallery
    : PROPERTY_CONFIG.gallery.filter(item => item.category === activeGalleryTab);

  // SVG Room Details mapper for interactive floor plan
  const roomDetails: Record<string, { title: string; size: string; desc: string }> = {
    carport: { title: "Carport Premium", size: "5.0m x 3.0m", desc: "Kapasitas 1 Mobil MPV besar, dilapisi keramik bertekstur anti-slip." },
    garden: { title: "Backyard Garden", size: "3.0m x 2.5m", desc: "Taman belakang terbuka untuk sirkulasi udara sejuk, jemuran, atau area santai kopi sore." },
    living: { title: "Living & Dining Room", size: "5.0m x 3.5m", desc: "Konsep open plan luas menyatu dengan ruang makan, lengkap dengan void sirkulasi udara." },
    kitchen: { title: "Dapur Fungsional", size: "2.5m x 1.8m", desc: "Dapur bersih dengan instalasi air, ventilasi langsung menghadap ke taman belakang." },
    bath1: { title: "Kamar Mandi Lantai 1", size: "2.0m x 1.5m", desc: "Dilengkapi shower, kloset duduk American Standard, keramik estetis." },
    master: { title: "Master Bedroom", size: "4.0m x 3.0m", desc: "Kamar tidur utama super luas di lantai 2, dengan jendela besar berpemandangan asri." },
    bed2: { title: "Kamar Tidur Anak 1", size: "3.0m x 2.8m", desc: "Kamar anak bernuansa hangat dengan pencahayaan alami optimal untuk belajar." },
    bed3: { title: "Kamar Tidur Anak 2 / Kerja", size: "2.8m x 2.5m", desc: "Dapat difungsikan sebagai ruang tidur anak kedua atau ruang kerja WFH yang tenang." },
    bath2: { title: "Kamar Mandi Lantai 2", size: "2.0m x 1.5m", desc: "Akses mudah dari seluruh kamar tidur lantai 2, sanitari premium, ventilasi lancar." },
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans overflow-x-hidden selection:bg-accent selection:text-white">
      
      {/* 1. STICKY NAVIGATION BAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-md py-3 border-b border-gray-100 dark:border-slate-800"
            : "bg-gradient-to-b from-black/60 to-transparent text-white py-5"
        }`}
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => scrollTo("home")}
          >
            <Logo className="h-10 sm:h-12 w-auto object-contain" />
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <button
              onClick={() => scrollTo("home")}
              className={`hover:text-accent transition-colors ${activeSection === "home" ? "text-accent font-semibold underline underline-offset-4" : ""}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollTo("why")}
              className={`hover:text-accent transition-colors ${activeSection === "why" || activeSection === "highlights" ? "text-accent font-semibold underline underline-offset-4" : ""}`}
            >
              Mengapa Kami
            </button>
            <button
              onClick={() => scrollTo("specs")}
              className={`hover:text-accent transition-colors ${activeSection === "specs" ? "text-accent font-semibold underline underline-offset-4" : ""}`}
            >
              Spesifikasi
            </button>
            <button
              onClick={() => scrollTo("gallery")}
              className={`hover:text-accent transition-colors ${activeSection === "gallery" ? "text-accent font-semibold underline underline-offset-4" : ""}`}
            >
              Galeri
            </button>
            <button
              onClick={() => scrollTo("location")}
              className={`hover:text-accent transition-colors ${activeSection === "location" || activeSection === "facilities" ? "text-accent font-semibold underline underline-offset-4" : ""}`}
            >
              Lokasi
            </button>
            <button
              onClick={() => scrollTo("faq")}
              className={`hover:text-accent transition-colors ${activeSection === "faq" ? "text-accent font-semibold underline underline-offset-4" : ""}`}
            >
              FAQ
            </button>
            <button
              onClick={() => scrollTo("articles")}
              className={`hover:text-accent transition-colors ${activeSection === "articles" ? "text-accent font-semibold underline underline-offset-4" : ""}`}
            >
              Artikel & Edukasi
            </button>
          </nav>

          {/* Nav CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Theme Toggle Button Desktop */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border transition-all duration-300 flex items-center justify-center ${
                isScrolled
                  ? "border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-800 text-slate-700 dark:text-amber-400"
                  : "border-white/20 hover:bg-white/10 text-white hover:text-amber-300"
              }`}
              title={darkMode ? "Aktifkan Mode Terang" : "Aktifkan Mode Gelap"}
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            <button
              onClick={() => triggerWhatsApp()}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border border-accent hover:bg-accent hover:text-white rounded transition-all duration-300 ${
                isScrolled ? "text-slate-800 dark:text-white" : "text-white"
              }`}
            >
              Chat WhatsApp
            </button>
            <button
              onClick={() => setShowBookingModal(true)}
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300"
            >
              Book Site Visit
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Theme Toggle Button Mobile Sticky Header */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border transition-all duration-300 flex items-center justify-center ${
                isScrolled
                  ? "border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-800 text-slate-700 dark:text-amber-400"
                  : "border-white/20 hover:bg-white/10 text-white hover:text-amber-300"
              }`}
              title={darkMode ? "Aktifkan Mode Terang" : "Aktifkan Mode Gelap"}
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 rounded hover:bg-black/10 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent ${
                isScrolled ? "text-slate-800 dark:text-white" : "text-white"
              }`}
              aria-label="Buka Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-cream dark:bg-slate-900 p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between mb-8 border-b border-gray-100 dark:border-slate-800 pb-4">
              <Logo className="h-9 w-auto object-contain" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollTo("home");
                }}
                className="flex items-center space-x-3 text-left py-2 px-3 rounded hover:bg-primary/5 dark:hover:bg-slate-800 hover:text-accent dark:text-gray-200 font-medium transition-colors"
              >
                <HomeIcon className="h-5 w-5 text-primary dark:text-accent" />
                <span>Home</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollTo("why");
                }}
                className="flex items-center space-x-3 text-left py-2 px-3 rounded hover:bg-primary/5 dark:hover:bg-slate-800 hover:text-accent dark:text-gray-200 font-medium transition-colors"
              >
                <Users className="h-5 w-5 text-primary dark:text-accent" />
                <span>Mengapa Nara Home</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollTo("specs");
                }}
                className="flex items-center space-x-3 text-left py-2 px-3 rounded hover:bg-primary/5 dark:hover:bg-slate-800 hover:text-accent dark:text-gray-200 font-medium transition-colors"
              >
                <Layers className="h-5 w-5 text-primary dark:text-accent" />
                <span>Spesifikasi & Layout</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollTo("gallery");
                }}
                className="flex items-center space-x-3 text-left py-2 px-3 rounded hover:bg-primary/5 dark:hover:bg-slate-800 hover:text-accent dark:text-gray-200 font-medium transition-colors"
              >
                <Sparkles className="h-5 w-5 text-primary dark:text-accent" />
                <span>Galeri Show Unit</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollTo("location");
                }}
                className="flex items-center space-x-3 text-left py-2 px-3 rounded hover:bg-primary/5 dark:hover:bg-slate-800 hover:text-accent dark:text-gray-200 font-medium transition-colors"
              >
                <MapPin className="h-5 w-5 text-primary dark:text-accent" />
                <span>Lokasi & Fasilitas</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollTo("faq");
                }}
                className="flex items-center space-x-3 text-left py-2 px-3 rounded hover:bg-primary/5 dark:hover:bg-slate-800 hover:text-accent dark:text-gray-200 font-medium transition-colors"
              >
                <Compass className="h-5 w-5 text-primary dark:text-accent" />
                <span>FAQ</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollTo("articles");
                }}
                className="flex items-center space-x-3 text-left py-2 px-3 rounded hover:bg-primary/5 dark:hover:bg-slate-800 hover:text-accent dark:text-gray-200 font-medium transition-colors"
              >
                <BookOpen className="h-5 w-5 text-primary dark:text-accent" />
                <span>Artikel & Edukasi</span>
              </button>

              {/* Theme Toggle option inside menu */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center space-x-3 text-left py-2 px-3 rounded hover:bg-primary/5 dark:hover:bg-slate-800 hover:text-accent dark:text-gray-200 font-medium transition-colors w-full border-t border-gray-100 dark:border-slate-800 pt-4"
              >
                {darkMode ? (
                  <>
                    <Sun className="h-5 w-5 text-amber-400" />
                    <span>Mode Terang</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5 text-primary" />
                    <span>Mode Gelap</span>
                  </>
                )}
              </button>
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-gray-100 dark:border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setShowBookingModal(true);
              }}
              className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded font-semibold text-sm tracking-wider uppercase shadow-md transition-colors"
            >
              Book Site Visit
            </button>
            <button
              onClick={() => triggerWhatsApp()}
              className="w-full border border-accent text-slate-800 dark:text-gray-200 hover:bg-accent hover:text-white py-3 rounded font-semibold text-sm tracking-wider uppercase transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>WhatsApp Chat</span>
            </button>
          </div>
        </div>
      </div>


      {/* 2. HERO SECTION */}
      <section
        id="home"
        ref={sectionRefs.home}
        className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden"
      >
        {/* Full-bleed house image as background */}
        <div className="absolute inset-0">
          <SafeImage
            src={(PROPERTY_CONFIG as any).heroImage || PROPERTY_CONFIG.facade3D}
            fallbackSrc="/assets/images/img15.webp"
            alt="Nara Home Pamulang Premium Exterior Facade"
            className="w-full h-full object-cover object-center scale-105 animate-fade-in"
            loading="eager"
          />
          {/* Multi-layered luxurious gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 md:from-black/90 md:via-black/60 md:to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20 md:py-32 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text side */}
          <div className="lg:col-span-7 space-y-6 text-white text-left animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-accent/20 border border-accent/40 backdrop-blur-md px-3 py-1.5 rounded-full text-accent text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="h-4 w-4 text-accent animate-pulse" />
              <span>Exclusive cluster • Hanya 22 Unit Terbatas</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-wide drop-shadow-sm">
              Hunian Modern di Jantung Pamulang
            </h1>

            <p className="text-gray-200 text-base sm:text-lg lg:text-xl max-w-2xl font-light leading-relaxed">
              Rumah 2 Lantai Modern mulai <strong className="text-accent font-semibold">Rp800 Jutaan*</strong> dengan spesifikasi struktur bata merah, keamanan nonstop, dan lokasi premium Tangerang Selatan.
            </p>

            {/* Promo Hook Banner - July 2026 */}
            <div className="bg-gradient-to-r from-amber-500/20 to-red-500/20 border border-amber-500/40 backdrop-blur-md rounded-xl p-4 max-w-xl shadow-lg relative overflow-hidden">
              <span className="text-xs text-accent font-bold uppercase tracking-wider block mb-1">🔥 PROMO TERBATAS BULAN JULI 2026</span>
              <p className="text-sm text-white font-medium leading-relaxed">
                Dapatkan diskon up to <strong className="text-accent font-extrabold text-base">200 Juta</strong>, hanya dengan <strong className="text-accent font-extrabold text-base">5 Juta langsung akad</strong> dan unit siap huni!
              </p>
            </div>

            {/* Auto-cycling Key Selling Points Highlight Section */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 max-w-xl overflow-hidden relative shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-accent uppercase tracking-wider font-bold flex items-center gap-1.5">
                  <span className="flex h-1.5 w-1.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                  </span>
                  Keunggulan Utama Nara Home
                </span>
                <div className="flex gap-1">
                  {SELLING_POINTS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveHighlightIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeHighlightIndex ? "w-4 bg-accent" : "w-1.5 bg-white/30 hover:bg-white/55"
                      }`}
                      aria-label={`Go to highlight ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative h-14 sm:h-12 overflow-hidden flex items-center">
                <AnimatePresence mode="wait">
                  {SELLING_POINTS.map((point, index) => {
                    if (index !== activeHighlightIndex) return null;
                    const PointIcon = point.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="flex items-start space-x-3 w-full"
                      >
                        <div className="p-2 rounded-lg bg-white/10 flex-shrink-0 mt-0.5">
                          <PointIcon className={`h-5 w-5 ${point.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-sans text-sm font-semibold text-white leading-tight">
                            {point.title}
                          </h4>
                          <p className="text-gray-300 text-xs truncate">
                            {point.desc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

            {/* Micro Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 max-w-xl">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded text-left">
                <span className="text-[10px] text-gray-300 uppercase tracking-widest block font-bold">Kamar Tidur</span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-accent">3 Kamar Tidur</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded text-left">
                <span className="text-[10px] text-gray-300 uppercase tracking-widest block font-bold">Kamar Mandi</span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-accent">2 Kamar Mandi</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded text-left">
                <span className="text-[10px] text-gray-300 uppercase tracking-widest block font-bold">Luas Bangunan</span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-accent">74 m²</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded text-left">
                <span className="text-[10px] text-gray-300 uppercase tracking-widest block font-bold">Harga Perdana</span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-accent">Mulai 800an Jt*</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={() => setShowBookingModal(true)}
                className="bg-accent hover:bg-accent-dark text-white text-center py-4 px-8 rounded font-semibold text-sm uppercase tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Booking Kunjungan (Gratis)
              </button>
              <button
                onClick={() => triggerWhatsApp()}
                className="bg-transparent hover:bg-white/10 border border-white/30 text-white text-center py-4 px-8 rounded font-semibold text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Hubungi Marketing</span>
              </button>
            </div>

            {/* Bullet promos */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs text-gray-300 font-light">
              <span className="flex items-center gap-1"><Check className="h-3.5 w-3.5 text-accent" /> KPR Dibantu Penuh</span>
              <span className="flex items-center gap-1"><Check className="h-3.5 w-3.5 text-accent" /> Sertifikat SHM Pecah</span>
              <span className="flex items-center gap-1"><Check className="h-3.5 w-3.5 text-accent" /> Developer Terpercaya</span>
            </div>
          </div>

          {/* Floating Feature Cards on Right (Desktop only) */}
          <div className="hidden lg:col-span-5 lg:flex flex-col space-y-4 items-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white max-w-xs transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2.5 rounded-lg text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-900 text-sm">One Gate System</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Keamanan optimal dengan akses kartu pintar terbatas.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white max-w-xs transform hover:-translate-y-1 transition-transform duration-300 mr-8">
              <div className="flex items-center space-x-3">
                <div className="bg-accent/10 p-2.5 rounded-lg text-accent">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-900 text-sm">Double Height Void</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Sirkulasi sirkuler yang sejuk & pencahayaan hemat energi.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white max-w-xs transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2.5 rounded-lg text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-900 text-sm">Strategis & Bebas Macet</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Hanya 8 menit menuju Tol Pamulang & 12 menit ke Stasiun Sudimara.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* 3. WHY CHOOSE NARA HOME (SPLIT LAYOUT WITH STATS) */}
      <section
        id="why"
        ref={sectionRefs.why}
        className="py-20 md:py-28 bg-cream dark:bg-slate-900 transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image & Stats Card Left */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-6 relative"
            >
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-white dark:border-slate-800">
                <SafeImage
                  src="/assets/images/img3.webp"
                  fallbackSrc="/assets/images/nara_living_room_1783879443554.jpg"
                  alt="Nara Home Modern Living Room Interior"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-primary text-white p-6 rounded-2xl shadow-2xl max-w-[240px] border border-primary-light">
                <div className="space-y-1">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-accent block">100% SHM</span>
                  <p className="text-xs text-gray-200 font-light leading-relaxed">
                    Sertifikat Hak Milik (SHM) sudah pecah per kavling & IMB / PBG siap untuk akad KPR cepat.
                  </p>
                </div>
              </div>

              {/* Behind Accent Block */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/25 rounded-2xl -z-10" />
            </motion.div>

            {/* Copy Content Right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-6 space-y-6 text-left lg:pl-6"
            >
              <div className="inline-block bg-primary/10 border border-primary/20 text-primary dark:text-accent text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Solusi Rumah Impian Anda
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white font-bold leading-tight">
                Hunian Ideal Bebas Khawatir Untuk Keluarga Muda
              </h2>
              <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                Menemukan rumah pertama sering kali penuh dengan kompromi. Lokasi murah tapi sangat jauh, lokasi dekat tapi harganya tidak masuk akal, atau kualitas bangunan seadanya. 
              </p>
              <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                <strong>Nara Home Pamulang</strong> hadir mengeliminasi semua kecemasan tersebut. Kami menyatukan desain arsitektur modern minimalis berkelas, lokasi super strategis bebas macet, dan harga yang sangat masuk akal bagi pasangan muda berpenghasilan 15–40 Juta/bulan.
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="bg-accent/15 p-1.5 rounded text-accent mt-0.5">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-slate-950 dark:text-white text-sm">Finishing Mewah</h4>
                    <p className="text-slate-500 dark:text-gray-400 text-xs">Homogeneous Tile 60x60, cat jotun premium.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-accent/15 p-1.5 rounded text-accent mt-0.5">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-slate-950 dark:text-white text-sm">Bata Merah Kokoh</h4>
                    <p className="text-slate-500 dark:text-gray-400 text-xs">Bukan hebel tipis, menjamin kedap suara & suhu sejuk.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-accent/15 p-1.5 rounded text-accent mt-0.5">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-slate-950 dark:text-white text-sm">Lingkungan Bebas Banjir</h4>
                    <p className="text-slate-500 dark:text-gray-400 text-xs">Lokasi di dataran tinggi Benda Baru yang asri.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-accent/15 p-1.5 rounded text-accent mt-0.5">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-slate-950 dark:text-white text-sm">Kawasan Berkembang</h4>
                    <p className="text-slate-500 dark:text-gray-400 text-xs">Dekat CBD Tangerang Selatan, capital gain tinggi.</p>
                  </div>
                </div>
              </div>

              {/* Dual Action */}
              <div className="pt-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 px-6 rounded text-sm uppercase tracking-wider shadow-lg transition-colors"
                >
                  Jadwalkan Visit Show Unit
                </button>
                <button
                  onClick={() => triggerWhatsApp("Halo, saya mau tanya simulasi cicilan KPR Nara Home Pamulang.")}
                  className="border border-accent text-slate-800 dark:text-gray-200 hover:bg-accent hover:text-white font-semibold py-3.5 px-6 rounded text-sm uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>Dapatkan Brosur & KPR Info</span>
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* 4. PROJECT HIGHLIGHTS - 6 CARD GRID */}
      <section
        id="highlights"
        ref={sectionRefs.highlights}
        className="py-20 md:py-24 bg-white dark:bg-slate-950 border-y border-gray-100 dark:border-slate-900 transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          >
            <span className="text-accent text-xs font-bold uppercase tracking-widest">Premium Living Standard</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white font-bold leading-tight">
              Keunggulan Utama Nara Home Pamulang
            </h2>
            <p className="text-slate-500 dark:text-gray-400 text-sm sm:text-base">
              Setiap sudut cluster kami dirancang dengan penuh dedikasi untuk mendukung kehidupan keluarga harmonis dan investasi properti bernilai tinggi.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROPERTY_CONFIG.highlights.map((item, index) => {
              // Icon selector
              let IconComp = HomeIcon;
              if (item.icon === "MapPin") IconComp = MapPin;
              else if (item.icon === "Users") IconComp = Users;
              else if (item.icon === "TrendingUp") IconComp = TrendingUp;
              else if (item.icon === "ShieldCheck") IconComp = ShieldCheck;
              else if (item.icon === "Sparkles") IconComp = Sparkles;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  className="group bg-cream dark:bg-slate-900 p-8 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-primary group-hover:bg-accent text-white p-3.5 rounded-xl inline-block transition-colors mb-6 shadow-md">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white group-hover:text-white mb-3 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300 group-hover:text-gray-200 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => triggerWhatsApp("Halo, saya ingin bertanya lebih lanjut mengenai keunggulan cluster Nara Home.")}
              className="bg-accent hover:bg-accent-dark text-white px-8 py-3.5 rounded font-semibold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Diskusikan Dengan Property Consultant Kami</span>
              <ExternalLink className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>


      {/* 5. HOUSE TYPE & INTERACTIVE FLOOR PLAN */}
      <section
        id="specs"
        ref={sectionRefs.specs}
        className="py-20 md:py-28 bg-cream dark:bg-slate-900 transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-accent text-xs font-bold uppercase tracking-widest">Spesifikasi & Denah Ruang</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white font-bold leading-tight">
              Tipe Eksklusif: 2 Lantai Modern Minimalist
            </h2>
            <p className="text-slate-500 dark:text-gray-400 text-sm sm:text-base">
              Nikmati luas bangunan ideal 74 m² yang ditata sangat fungsional tanpa ada ruang yang terbuang sia-sia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* SVG Floor Plan Area - 7 Columns */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-lg relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 dark:border-slate-800 pb-6 mb-6 gap-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white">Tata Ruang & Denah</h3>
                  <p className="text-xs text-slate-500 dark:text-gray-400">Visualisasi layout rumah impian 2 lantai Anda</p>
                </div>
                
                <div className="flex flex-wrap items-center gap-3">
                  {/* Format Toggle (2D vs 3D) */}
                  <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-lg flex space-x-1">
                    <button
                      onClick={() => setFloorPlanFormat("2d")}
                      className={`px-3 py-1.5 rounded text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 ${
                        floorPlanFormat === "2d" ? "bg-primary text-white shadow" : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      Interactive 2D Layout
                    </button>
                    <button
                      onClick={() => { setFloorPlanFormat("facade"); setSelectedRoom(null); }}
                      className={`px-3 py-1.5 rounded text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 ${
                        floorPlanFormat === "facade" ? "bg-primary text-white shadow" : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      Facade & Site 3D
                    </button>
                  </div>

                  {/* Level Tabs (only relevant or active in 2D) */}
                  {floorPlanFormat === "2d" && (
                    <div className="bg-cream dark:bg-slate-800 p-1 rounded-lg flex space-x-1 border border-gray-150 dark:border-slate-700">
                      <button
                        onClick={() => { setFloorPlanLevel("1st"); setSelectedRoom(null); }}
                        className={`px-2.5 py-1.5 rounded text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                          floorPlanLevel === "1st" ? "bg-accent text-white shadow" : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        Lantai 1
                      </button>
                      <button
                        onClick={() => { setFloorPlanLevel("2nd"); setSelectedRoom(null); }}
                        className={`px-2.5 py-1.5 rounded text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                          floorPlanLevel === "2nd" ? "bg-accent text-white shadow" : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        Lantai 2
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Floor Plan Content Wrapper */}
              {floorPlanFormat === "3d" ? (
                <div className="flex flex-col items-center justify-center p-2">
                  <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden border border-gray-150 bg-cream/30 p-2 shadow-inner group flex items-center justify-center">
                    <SafeImage
                      src={(PROPERTY_CONFIG as any).denah3DPages[denahPageIndex]}
                      fallbackSrc="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                      alt={`Denah 3D Perspektif Nara Home Pamulang - Halaman ${denahPageIndex + 1}`}
                      className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                    
                    {/* Page navigation overlay arrows */}
                    <button
                      onClick={() => setDenahPageIndex(prev => (prev > 0 ? prev - 1 : (PROPERTY_CONFIG as any).denah3DPages.length - 1))}
                      className="absolute left-4 bg-slate-900/60 hover:bg-slate-900/80 text-white p-2 rounded-full backdrop-blur-sm transition-colors cursor-pointer z-10"
                      title="Halaman Sebelumnya"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setDenahPageIndex(prev => (prev < (PROPERTY_CONFIG as any).denah3DPages.length - 1 ? prev + 1 : 0))}
                      className="absolute right-4 bg-slate-900/60 hover:bg-slate-900/80 text-white p-2 rounded-full backdrop-blur-sm transition-colors cursor-pointer z-10"
                      title="Halaman Selanjutnya"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Page indicator pill */}
                    <div className="absolute bottom-4 bg-slate-900/80 text-white text-[10px] px-3 py-1 rounded-full font-semibold uppercase tracking-wider backdrop-blur-sm shadow-md z-10">
                      Halaman {denahPageIndex + 1} dari {(PROPERTY_CONFIG as any).denah3DPages.length}
                    </div>
                  </div>
                  
                  {/* Thumbnail Indicators */}
                  <div className="flex justify-center space-x-2 mt-4">
                    {(PROPERTY_CONFIG as any).denah3DPages.map((_: any, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => setDenahPageIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          denahPageIndex === idx ? "bg-accent scale-125" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        title={`Pindah ke Halaman ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row items-center justify-between w-full gap-4 pt-3 border-t border-gray-100">
                    <p className="text-[10px] text-slate-500 font-light text-left">
                      *Tampilan brosur 3D Denah Resmi. Hubungi marketing kami untuk mendapatkan file PDF resolusi tinggi lengkap.
                    </p>
                    <button
                      onClick={() => triggerWhatsApp(`Halo Nara Home Pamulang, saya mau minta file PDF Denah 3D Lengkap (Halaman ${denahPageIndex + 1}).`)}
                      className="bg-primary hover:bg-primary-dark text-white text-[10px] uppercase font-bold py-2 px-4 rounded tracking-wider transition-colors shadow flex items-center space-x-1.5"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      <span>Minta PDF Denah Page {denahPageIndex + 1} via WA</span>
                    </button>
                  </div>
                </div>
              ) : floorPlanFormat === "facade" ? (
                <div className="flex flex-col items-center justify-center p-2">
                  <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden border border-gray-150 bg-cream/30 p-2 shadow-inner group flex items-center justify-center">
                    <SafeImage
                      src={(PROPERTY_CONFIG as any).facade3DPages[facadePageIndex]}
                      fallbackSrc="/assets/images/nara_exterior_hero_1783879429976.jpg"
                      alt={`3D Facade & Site Plan Nara Home Pamulang - Halaman ${facadePageIndex + 1}`}
                      className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                    
                    {/* Page navigation overlay arrows */}
                    <button
                      onClick={() => setFacadePageIndex(prev => (prev > 0 ? prev - 1 : (PROPERTY_CONFIG as any).facade3DPages.length - 1))}
                      className="absolute left-4 bg-slate-900/60 hover:bg-slate-900/80 text-white p-2 rounded-full backdrop-blur-sm transition-colors cursor-pointer z-10"
                      title="Halaman Sebelumnya"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setFacadePageIndex(prev => (prev < (PROPERTY_CONFIG as any).facade3DPages.length - 1 ? prev + 1 : 0))}
                      className="absolute right-4 bg-slate-900/60 hover:bg-slate-900/80 text-white p-2 rounded-full backdrop-blur-sm transition-colors cursor-pointer z-10"
                      title="Halaman Selanjutnya"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Page indicator pill */}
                    <div className="absolute bottom-4 bg-slate-900/80 text-white text-[10px] px-3 py-1 rounded-full font-semibold uppercase tracking-wider backdrop-blur-sm shadow-md z-10">
                      Halaman {facadePageIndex + 1} dari {(PROPERTY_CONFIG as any).facade3DPages.length}
                    </div>
                  </div>
                  
                  {/* Thumbnail Indicators */}
                  <div className="flex justify-center space-x-2 mt-4">
                    {(PROPERTY_CONFIG as any).facade3DPages.map((_: any, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => setFacadePageIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          facadePageIndex === idx ? "bg-accent scale-125" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        title={`Pindah ke Halaman ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row items-center justify-between w-full gap-4 pt-3 border-t border-gray-100">
                    <p className="text-[10px] text-slate-500 font-light text-left">
                      *Tampilan brosur 3D Fasad & Site Plan Resmi. Hubungi marketing kami untuk mendapatkan file PDF lengkap.
                    </p>
                    <button
                      onClick={() => triggerWhatsApp(`Halo Nara Home Pamulang, saya mau minta brosur PDF Facade & Site Plan Lengkap (Halaman ${facadePageIndex + 1}).`)}
                      className="bg-primary hover:bg-primary-dark text-white text-[10px] uppercase font-bold py-2 px-4 rounded tracking-wider transition-colors shadow flex items-center space-x-1.5"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      <span>Minta Brosur Facade Page {facadePageIndex + 1} via WA</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Render the Interactive SVG Vector Floor Plan */
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Left Side: Real 3D Floor Plan Image */}
                <div className="md:col-span-7 bg-white p-2 rounded-xl border border-gray-150 flex justify-center items-center shadow-md aspect-4/3 relative overflow-hidden group">
                  {floorPlanLevel === "1st" ? (
                    <SafeImage
                      src="/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0005.webp"
                      fallbackSrc="/assets/images/nara_living_room_1783879443554.jpg"
                      alt="Denah 3D Lantai 1 Nara Home Pamulang"
                      className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="eager"
                    />
                  ) : (
                    <SafeImage
                      src="/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0006.webp"
                      fallbackSrc="/assets/images/nara_bedroom_1783879457070.jpg"
                      alt="Denah 3D Lantai 2 Nara Home Pamulang"
                      className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="eager"
                    />
                  )}
                  <div className="absolute bottom-2 left-2 bg-slate-900/75 text-white text-[9px] px-2.5 py-1 rounded font-semibold tracking-wider">
                    Denah Perspektif 3D Resmi - Lantai {floorPlanLevel === "1st" ? "1" : "2"}
                  </div>
                </div>

                {/* Right Side: Interactive Room Details with Selection Chips */}
                <div className="md:col-span-5 text-left flex flex-col justify-center h-full space-y-4">
                  <div className="bg-primary/5 dark:bg-slate-900/40 p-4 rounded-xl border border-primary/10 dark:border-slate-800">
                    <span className="text-xs text-primary dark:text-accent font-bold block mb-1">Eksplorasi Ruangan (Lantai {floorPlanLevel === "1st" ? "1" : "2"})</span>
                    <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed mb-3">
                      Ketuk salah satu ruangan di bawah ini untuk melihat ukuran ideal serta penjelasan tata letak fungsinya secara detail:
                    </p>
                    
                    {/* Interactive Selector Chips */}
                    <div className="flex flex-wrap gap-2">
                      {floorPlanLevel === "1st" ? (
                        <>
                          <button
                            onClick={() => setSelectedRoom(selectedRoom === "carport" ? null : "carport")}
                            className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded border transition-all ${
                              selectedRoom === "carport" 
                                ? "bg-accent text-white border-accent shadow-sm" 
                                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-gray-200 border-gray-200 dark:border-slate-700 hover:border-accent"
                            }`}
                          >
                            Carport
                          </button>
                          <button
                            onClick={() => setSelectedRoom(selectedRoom === "living" ? null : "living")}
                            className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded border transition-all ${
                              selectedRoom === "living" 
                                ? "bg-accent text-white border-accent shadow-sm" 
                                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-gray-200 border-gray-200 dark:border-slate-700 hover:border-accent"
                            }`}
                          >
                            Ruang Tamu
                          </button>
                          <button
                            onClick={() => setSelectedRoom(selectedRoom === "kitchen" ? null : "kitchen")}
                            className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded border transition-all ${
                              selectedRoom === "kitchen" 
                                ? "bg-accent text-white border-accent shadow-sm" 
                                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-gray-200 border-gray-200 dark:border-slate-700 hover:border-accent"
                            }`}
                          >
                            Dapur
                          </button>
                          <button
                            onClick={() => setSelectedRoom(selectedRoom === "bath1" ? null : "bath1")}
                            className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded border transition-all ${
                              selectedRoom === "bath1" 
                                ? "bg-accent text-white border-accent shadow-sm" 
                                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-gray-200 border-gray-200 dark:border-slate-700 hover:border-accent"
                            }`}
                          >
                            WC 1
                          </button>
                          <button
                            onClick={() => setSelectedRoom(selectedRoom === "garden" ? null : "garden")}
                            className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded border transition-all ${
                              selectedRoom === "garden" 
                                ? "bg-accent text-white border-accent shadow-sm" 
                                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-gray-200 border-gray-200 dark:border-slate-700 hover:border-accent"
                            }`}
                          >
                            Taman
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => setSelectedRoom(selectedRoom === "master" ? null : "master")}
                            className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded border transition-all ${
                              selectedRoom === "master" 
                                ? "bg-accent text-white border-accent shadow-sm" 
                                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-gray-200 border-gray-200 dark:border-slate-700 hover:border-accent"
                            }`}
                          >
                            Kamar Utama
                          </button>
                          <button
                            onClick={() => setSelectedRoom(selectedRoom === "bed2" ? null : "bed2")}
                            className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded border transition-all ${
                              selectedRoom === "bed2" 
                                ? "bg-accent text-white border-accent shadow-sm" 
                                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-gray-200 border-gray-200 dark:border-slate-700 hover:border-accent"
                            }`}
                          >
                            Kamar Anak 1
                          </button>
                          <button
                            onClick={() => setSelectedRoom(selectedRoom === "bed3" ? null : "bed3")}
                            className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded border transition-all ${
                              selectedRoom === "bed3" 
                                ? "bg-accent text-white border-accent shadow-sm" 
                                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-gray-200 border-gray-200 dark:border-slate-700 hover:border-accent"
                            }`}
                          >
                            Kamar Anak 2
                          </button>
                          <button
                            onClick={() => setSelectedRoom(selectedRoom === "bath2" ? null : "bath2")}
                            className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded border transition-all ${
                              selectedRoom === "bath2" 
                                ? "bg-accent text-white border-accent shadow-sm" 
                                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-gray-200 border-gray-200 dark:border-slate-700 hover:border-accent"
                            }`}
                          >
                            WC 2
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {selectedRoom && roomDetails[selectedRoom] ? (
                    <div className="bg-accent/10 border border-accent/20 p-4 rounded-xl animate-fade-in">
                      <span className="text-[9px] text-accent uppercase font-bold tracking-widest block">Spesifikasi Detail</span>
                      <h4 className="font-serif text-base font-bold text-slate-900 dark:text-white mt-0.5">{roomDetails[selectedRoom].title}</h4>
                      <p className="text-xs font-semibold text-primary dark:text-accent mt-0.5">Dimensi: {roomDetails[selectedRoom].size}</p>
                      <p className="text-xs text-slate-600 dark:text-gray-300 mt-2 leading-relaxed">{roomDetails[selectedRoom].desc}</p>
                    </div>
                  ) : (
                    <div className="space-y-2 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-gray-150 dark:border-slate-800">
                      <div className="flex items-center space-x-2 text-xs text-slate-700 dark:text-gray-300">
                        <Check className="h-4 w-4 text-accent flex-shrink-0" />
                        <span>Tata ruang ideal, fungsional tanpa waste of space</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-slate-700 dark:text-gray-300">
                        <Check className="h-4 w-4 text-accent flex-shrink-0" />
                        <span>Ketinggian plafon tinggi mendukung udara tropis sejuk</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-slate-700 dark:text-gray-300">
                        <Check className="h-4 w-4 text-accent flex-shrink-0" />
                        <span>Setiap ruangan memiliki sirkulasi udara dan cahaya langsung</span>
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      onClick={() => triggerWhatsApp("Halo marketing, saya ingin dikirimkan PDF Denah & Layout unit Nara Home Pamulang.")}
                      className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-4 rounded text-xs uppercase tracking-wider shadow flex items-center justify-center space-x-2 transition-colors"
                    >
                      <span>Download PDF Floor Plan</span>
                    </button>
                  </div>
                </div>
              </div>
              )}
            </div>

            {/* Specifications Details - 5 Columns */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-lg text-left">
              <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <span>Spesifikasi Teknis Premium</span>
              </h3>

              {/* Specification Tab Buttons */}
              <div className="flex border-b border-gray-200 dark:border-slate-800 mb-6">
                <button
                  onClick={() => setActiveSpecTab("layout")}
                  className={`flex-1 pb-3 text-xs uppercase font-bold tracking-wider border-b-2 transition-all ${
                    activeSpecTab === "layout"
                      ? "border-accent text-accent font-extrabold"
                      : "border-transparent text-slate-400 hover:text-slate-700 dark:hover:text-gray-300"
                  }`}
                >
                  Dimensi & Layout
                </button>
                <button
                  onClick={() => setActiveSpecTab("material")}
                  className={`flex-1 pb-3 text-xs uppercase font-bold tracking-wider border-b-2 transition-all ${
                    activeSpecTab === "material"
                      ? "border-accent text-accent font-extrabold"
                      : "border-transparent text-slate-400 hover:text-slate-700 dark:hover:text-gray-300"
                  }`}
                >
                  Material Bangunan (SEO)
                </button>
              </div>

              {activeSpecTab === "layout" ? (
                <div className="space-y-4 text-sm animate-fade-in">
                  <div className="flex justify-between border-b border-slate-50 dark:border-slate-900 pb-2">
                    <span className="text-slate-500 dark:text-gray-400 flex items-center gap-2"><Maximize2 className="h-4 w-4 text-accent" /> Luas Bangunan / Tanah</span>
                    <span className="font-semibold text-slate-800 dark:text-white">74 m² / 60 m²</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 dark:border-slate-900 pb-2">
                    <span className="text-slate-500 dark:text-gray-400 flex items-center gap-2"><Layers className="h-4 w-4 text-accent" /> Jumlah Lantai</span>
                    <span className="font-semibold text-slate-800 dark:text-white">{PROPERTY_CONFIG.specs.floors} Lantai</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 dark:border-slate-900 pb-2">
                    <span className="text-slate-500 dark:text-gray-400 flex items-center gap-2"><Bed className="h-4 w-4 text-accent" /> Kamar Tidur</span>
                    <span className="font-semibold text-slate-800 dark:text-white">{PROPERTY_CONFIG.specs.bedrooms} Kamar Tidur</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 dark:border-slate-900 pb-2">
                    <span className="text-slate-500 dark:text-gray-400 flex items-center gap-2"><Bath className="h-4 w-4 text-accent" /> Kamar Mandi</span>
                    <span className="font-semibold text-slate-800 dark:text-white">{PROPERTY_CONFIG.specs.bathrooms} Toilet</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 dark:border-slate-900 pb-2">
                    <span className="text-slate-500 dark:text-gray-400 flex items-center gap-2"><Car className="h-4 w-4 text-accent" /> Kapasitas Carport</span>
                    <span className="font-semibold text-slate-800 dark:text-white">{PROPERTY_CONFIG.specs.carport} Mobil (SUV Size)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 dark:border-slate-900 pb-2">
                    <span className="text-slate-500 dark:text-gray-400 flex items-center gap-2"><Zap className="h-4 w-4 text-accent" /> Daya Listrik</span>
                    <span className="font-semibold text-slate-800 dark:text-white">{PROPERTY_CONFIG.specs.electricity}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 dark:border-slate-900 pb-2">
                    <span className="text-slate-500 dark:text-gray-400 flex items-center gap-2"><Droplet className="h-4 w-4 text-accent" /> Suplai Air Bersih</span>
                    <span className="font-semibold text-slate-800 dark:text-white">{PROPERTY_CONFIG.specs.waterSupply}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 dark:border-slate-900 pb-2">
                    <span className="text-slate-500 dark:text-gray-400 flex items-center gap-2"><Shield className="h-4 w-4 text-accent" /> Struktur Dinding</span>
                    <span className="font-semibold text-slate-800 dark:text-white">{PROPERTY_CONFIG.specs.structure}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 dark:border-slate-900 pb-2">
                    <span className="text-slate-500 dark:text-gray-400 flex items-center gap-2"><HomeIcon className="h-4 w-4 text-accent" /> Finishing Lantai</span>
                    <span className="font-semibold text-slate-800 dark:text-white">{PROPERTY_CONFIG.specs.floorFinishing}</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3.5 text-xs animate-fade-in max-h-[420px] overflow-y-auto pr-2 scrollbar-thin">
                  {((PROPERTY_CONFIG as any).materialSpecs || []).map((item: any, idx: number) => (
                    <div key={idx} className="flex justify-between items-start border-b border-slate-50 dark:border-slate-900 pb-2 gap-4">
                      <span className="text-slate-500 dark:text-gray-400 font-medium whitespace-nowrap">{item.label}</span>
                      <span className="font-semibold text-slate-800 dark:text-white text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              )}
 
              <div className="bg-primary/5 dark:bg-slate-900/40 p-4 rounded-xl border border-primary/10 dark:border-slate-800 mt-6 text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
                <span className="font-bold text-primary dark:text-accent block mb-1">Garansi Kualitas Material Resmi:</span>
                Spesifikasi di atas merupakan jaminan mutu resmi dari Nara Home Pamulang demi mewujudkan investasi properti premium jangka panjang Anda.
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* INTERACTIVE SITE PLAN & UNIT AVAILABILITY GRID (Kavling 01 - 19) */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-gray-100 dark:border-slate-800 text-left transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block">Unit Availability</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white font-bold leading-tight">
              Peta Unit & Status Ketersediaan Kavling
            </h2>
            <p className="text-slate-500 dark:text-gray-400 text-sm sm:text-base">
              Nara Home Pamulang dibangun secara eksklusif hanya <strong>22 Unit</strong>. Pilih nomor kavling idaman Anda di bawah ini untuk melihat detail rancangan arsitektur dan spesifikasi unit secara instan.
            </p>
          </div>

          {/* Unit Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {PROPERTY_CONFIG.units.map((unit) => {
              const statusColors = {
                Available: { bg: "bg-emerald-50 dark:bg-emerald-950/45 text-emerald-700 dark:text-emerald-400 border-emerald-150 dark:border-emerald-900", text: "Tersedia" },
                Reserved: { bg: "bg-amber-50 dark:bg-amber-950/45 text-amber-700 dark:text-amber-400 border-amber-150 dark:border-amber-900", text: "Dipesan" },
                Sold: { bg: "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-700", text: "Terjual" },
                "Coming Soon": { bg: "bg-blue-50 dark:bg-blue-950/45 text-blue-600 dark:text-blue-400 border-blue-150 dark:border-blue-900", text: "Coming Soon" }
              };
              const badge = statusColors[unit.status as keyof typeof statusColors];

              return (
                <div
                  key={unit.id}
                  onClick={() => { setSelectedUnit(unit); setSelectedModalFloor("1st"); }}
                  className={`bg-white dark:bg-slate-950 rounded-xl p-4 border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between ${
                    selectedUnit?.id === unit.id ? "border-accent ring-2 ring-accent/20" : "border-gray-150 dark:border-slate-800"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-serif font-bold text-slate-900 dark:text-white text-sm">{unit.number}</span>
                      <div className="flex flex-col items-end gap-1">
                        <span className={`text-[9px] px-2 py-0.5 rounded-full border font-bold uppercase tracking-wider ${badge.bg}`}>
                          {badge.text}
                        </span>
                        <span className={`text-[8px] px-1.5 py-0.5 rounded font-medium border ${
                          unit.isReady 
                            ? "bg-emerald-50 dark:bg-emerald-950/45 text-emerald-800 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900" 
                            : "bg-amber-50 dark:bg-amber-950/45 text-amber-800 dark:text-amber-400 border-amber-200 dark:border-amber-900"
                        }`}>
                          {unit.isReady ? "Ready (Contoh)" : "Inden"}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1 text-[11px] text-slate-500 dark:text-gray-400">
                      <div className="flex justify-between">
                        <span>Luas Tanah:</span>
                        <span className="font-semibold text-slate-700 dark:text-gray-250">{unit.specs.land} m²</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Luas Bangunan:</span>
                        <span className="font-semibold text-slate-700 dark:text-gray-250">{unit.specs.building} m²</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-accent">
                    <span>Lihat Detail</span>
                    <span>→</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-white dark:bg-slate-950 border border-gray-150 dark:border-slate-800 rounded-xl p-4 text-center max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-xs text-slate-500 dark:text-gray-400 font-light">
              *Kavling bertanda <strong>Tersedia</strong> dapat di-booking hari ini. Hubungi konsultan pemasaran kami untuk verifikasi ketersediaan terbaru.
            </span>
            <button
              onClick={() => triggerWhatsApp("Halo marketing Nara Home Pamulang, saya ingin tanya update list kavling yang masih kosong.")}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold uppercase py-2.5 px-4 rounded tracking-wider transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <Phone className="h-4 w-4" />
              <span>Cek Update Kavling</span>
            </button>
          </div>
        </div>

        {/* Selected Unit Modal / Detail Overlay */}
        {selectedUnit && (
          <div className="fixed inset-0 z-55 bg-black/75 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
            <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-slate-800 w-full max-w-4xl max-h-[90vh] flex flex-col">
              <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-slate-800 bg-cream/30 dark:bg-slate-950/40">
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white flex flex-wrap items-center gap-2">
                    <span>Spesifikasi Kavling: {selectedUnit.number}</span>
                    <span className={`text-[10px] px-2.5 py-0.5 rounded-full border font-bold uppercase tracking-wider ${
                      selectedUnit.status === "Available" ? "bg-emerald-50 dark:bg-emerald-950/45 text-emerald-700 dark:text-emerald-400 border-emerald-150 dark:border-emerald-900" :
                      selectedUnit.status === "Reserved" ? "bg-amber-50 dark:bg-amber-950/45 text-amber-700 dark:text-amber-400 border-amber-150 dark:border-amber-900" :
                      selectedUnit.status === "Coming Soon" ? "bg-blue-50 dark:bg-blue-950/45 text-blue-600 dark:text-blue-400 border-blue-150 dark:border-blue-900" :
                      "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-700"
                    }`}>
                      {selectedUnit.status === "Available" ? "Tersedia" : selectedUnit.status === "Reserved" ? "Dipesan" : selectedUnit.status === "Coming Soon" ? "Coming Soon" : "Terjual"}
                    </span>
                    <span className={`text-[10px] px-2.5 py-0.5 rounded-full border font-bold uppercase tracking-wider ${
                      selectedUnit.isReady 
                        ? "bg-emerald-50 dark:bg-emerald-950/45 text-emerald-800 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900" 
                        : "bg-amber-50 dark:bg-amber-950/45 text-amber-800 dark:text-amber-400 border-amber-200 dark:border-amber-900"
                    }`}>
                      {selectedUnit.isReady ? "Ready (Rumah Contoh)" : "Pembangunan Inden"}
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">Tipe {selectedUnit.specs.building}/{selectedUnit.specs.land} • 2 Lantai Eksklusif</p>
                </div>
                <button
                  onClick={() => setSelectedUnit(null)}
                  className="p-2 text-slate-400 dark:text-gray-400 hover:text-slate-600 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="overflow-y-auto p-6 md:p-8 flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  
                  {/* Left Side: Layout Detail Image */}
                  <div className="flex flex-col space-y-4 w-full">
                    {/* Floor Toggle Tabs inside Modal */}
                    {selectedUnit.status !== "Coming Soon" && (
                      <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg w-fit mx-auto border border-gray-150 dark:border-slate-700/80">
                        <button
                          onClick={() => setSelectedModalFloor("1st")}
                          className={`px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                            selectedModalFloor === "1st" 
                              ? "bg-primary text-white shadow-sm" 
                              : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                          }`}
                        >
                          Lantai 1
                        </button>
                        <button
                          onClick={() => setSelectedModalFloor("2nd")}
                          className={`px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                            selectedModalFloor === "2nd" 
                              ? "bg-primary text-white shadow-sm" 
                              : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                          }`}
                        >
                          Lantai 2
                        </button>
                      </div>
                    )}

                    <div className="relative aspect-[3/4] md:aspect-auto md:h-[400px] bg-slate-50 dark:bg-slate-950 border border-gray-150 dark:border-slate-800 rounded-xl overflow-hidden flex items-center justify-center p-4">
                      {selectedUnit.status === "Coming Soon" ? (
                        <div className="text-center p-6 space-y-4 max-w-sm">
                          <div className="w-16 h-16 bg-blue-50 dark:bg-blue-950/45 rounded-full flex items-center justify-center mx-auto text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900">
                            <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: "12s" }} />
                          </div>
                          <h4 className="font-serif font-bold text-slate-800 dark:text-white text-base">Layout Inden (Coming Soon)</h4>
                          <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                            Desain spesifik tata ruang dan detail 3D untuk unit <strong>{selectedUnit.number}</strong> sedang dalam proses finalisasi oleh tim arsitek Nara. Hubungi marketing via WhatsApp untuk info pra-pemesanan.
                          </p>
                        </div>
                      ) : (
                        <>
                          <SafeImage
                            src={selectedModalFloor === "1st" ? (selectedUnit.image || "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0005.webp") : (selectedUnit.imageLantai2 || "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0006.webp")}
                            fallbackSrc={selectedModalFloor === "1st" ? "/assets/images/nara_living_room_1783879443554.jpg" : "/assets/images/nara_bedroom_1783879457070.jpg"}
                            alt={`Layout Lantai ${selectedModalFloor === "1st" ? "1" : "2"} unit ${selectedUnit.number}`}
                            className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-500"
                          />
                          <div className="absolute bottom-3 left-3 bg-slate-900/80 text-white text-[9px] px-2.5 py-1 rounded font-semibold">
                            Ilustrasi Tipe Unit {selectedUnit.number} - Lantai {selectedModalFloor === "1st" ? "1" : "2"}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Right Side: Specifications & CTA */}
                  <div className="space-y-6 text-left">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-slate-900 dark:text-white">Rincian Luas & Tata Ruang</h4>
                      <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">Konstruksi kokoh dengan material premium pilihan.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-cream/40 dark:bg-slate-950 border border-gray-100 dark:border-slate-800 p-3.5 rounded-xl">
                        <span className="text-[10px] text-slate-500 dark:text-gray-400 uppercase tracking-wider block">Luas Tanah</span>
                        <span className="font-serif text-lg font-bold text-primary dark:text-accent block mt-0.5">{selectedUnit.specs.land} m²</span>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">Panjang x Lebar ideal</p>
                      </div>
                      <div className="bg-cream/40 dark:bg-slate-950 border border-gray-100 dark:border-slate-800 p-3.5 rounded-xl">
                        <span className="text-[10px] text-slate-500 dark:text-gray-400 uppercase tracking-wider block">Luas Bangunan</span>
                        <span className="font-serif text-lg font-bold text-primary dark:text-accent block mt-0.5">{selectedUnit.specs.building} m²</span>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">2 Lantai fungsional</p>
                      </div>
                    </div>

                    <div className="space-y-3 bg-slate-50 dark:bg-slate-950 border border-gray-150 dark:border-slate-800 p-4 rounded-xl text-xs text-slate-600 dark:text-gray-350">
                      <div className="flex items-center justify-between border-b border-gray-100 dark:border-slate-800 pb-2">
                        <span className="flex items-center gap-1.5"><Bed className="h-4 w-4 text-accent" /> Kamar Tidur</span>
                        <span className="font-bold text-slate-800 dark:text-white">3 Kamar Tidur Suite</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-gray-100 dark:border-slate-800 pb-2">
                        <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-accent" /> Kamar Mandi</span>
                        <span className="font-bold text-slate-800 dark:text-white">2 Toilet Sanitary Toto</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-gray-100 dark:border-slate-800 pb-2">
                        <span className="flex items-center gap-1.5"><Car className="h-4 w-4 text-accent" /> Carport Mobil</span>
                        <span className="font-bold text-slate-800 dark:text-white">1 Carport Luas + Kanopi</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-accent" /> Daya Listrik</span>
                        <span className="font-bold text-slate-800 dark:text-white">2200 VA (Token)</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 dark:border-slate-800 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500 dark:text-gray-400 font-medium">Harga Perkiraan Unit:</span>
                        {["C-01", "C-02", "C-03", "C-04", "C-05", "C-06"].includes(selectedUnit.number) ? (
                          <span className="font-serif text-2xl font-bold text-accent">{selectedUnit.price}</span>
                        ) : (
                          <button
                            onClick={() => triggerWhatsApp(`Halo marketing Nara Home Pamulang, saya mau tanya harga resmi, rincian biaya, dan promo terbaru untuk unit ${selectedUnit.number} (Tipe ${selectedUnit.specs.building}/${selectedUnit.specs.land}).`)}
                            className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-[11px] font-bold uppercase py-2 px-4 rounded tracking-wider transition-colors flex items-center gap-1.5 shadow"
                          >
                            <Phone className="h-3.5 w-3.5" />
                            <span>Tanya Harga via WA</span>
                          </button>
                        )}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button
                          onClick={() => triggerWhatsApp(`Halo marketing Nara Home Pamulang, saya sangat tertarik untuk bertanya ketersediaan promo dan berkonsultasi mengenai unit ${selectedUnit.number} (Tipe ${selectedUnit.specs.building}/${selectedUnit.specs.land}).`)}
                          className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3.5 px-6 rounded text-xs uppercase tracking-wider shadow transition-colors flex items-center justify-center gap-2"
                        >
                          <Phone className="h-4 w-4" />
                          <span>Tanyakan via WhatsApp</span>
                        </button>
                        <button
                          onClick={() => {
                            setSelectedUnit(null);
                            setShowBookingModal(true);
                          }}
                          className="flex-1 bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-6 rounded text-xs uppercase tracking-wider transition-colors"
                        >
                          Booking Site Visit Unit Ini
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>


      {/* 6. INTERACTIVE PHOTO GALLERY TABS */}
      <section
        id="gallery"
        ref={sectionRefs.gallery}
        className="py-20 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-accent text-xs font-bold uppercase tracking-widest">Real marketing assets</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white font-bold leading-tight">
              Galeri Kunjungan Show Unit Nara
            </h2>
            <p className="text-slate-500 dark:text-gray-400 text-sm sm:text-base">
              Nikmati keindahan detail pengerjaan finishing, arsitektur tropis, dan tata letak interior yang megah.
            </p>
          </div>

          {/* Navigation Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["all", "living-room", "bedroom", "kitchen"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveGalleryTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeGalleryTab === tab
                    ? "bg-primary text-white"
                    : "bg-cream dark:bg-slate-900 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white border border-gray-100 dark:border-slate-800"
                }`}
              >
                {tab === "all" ? "Semua" : tab === "living-room" ? "Living Room" : tab === "bedroom" ? "Kamar Tidur" : tab === "kitchen" ? "Dapur" : tab.replace("-", " ")}
              </button>
            ))}
          </div>

          {/* Masonry Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, idx) => (
              <div
                key={item.id}
                className={`relative group overflow-hidden rounded-2xl shadow-md border border-slate-50 dark:border-slate-900 transform hover:-translate-y-1 transition-all duration-300 ${
                  idx === 0 ? "md:col-span-2 lg:row-span-1" : ""
                }`}
              >
                <div className={`relative ${idx === 0 ? "aspect-[21/9]" : "aspect-[4/3]"} overflow-hidden bg-cream-dark`}>
                  <SafeImage
                    src={item.image}
                    fallbackSrc={item.fallback}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 transition-opacity" />
                </div>
                
                {/* Descriptive card overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                  <span className="bg-accent text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded inline-block mb-2">
                    {item.category.replace("-", " ")}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-white mb-1 drop-shadow-sm">
                    {item.title}
                  </h4>
                  <p className="text-gray-200 text-xs font-light leading-relaxed drop-shadow-sm max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-cream dark:bg-slate-900 p-8 rounded-2xl border border-gray-100 dark:border-slate-800 text-center max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h4 className="font-serif text-xl font-bold text-slate-900 dark:text-white">Ingin Mengunjungi Rumah Contoh Kami?</h4>
              <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm mt-1">Kami menyediakan {PROPERTY_CONFIG.showHousesCount} Show Unit siap visit gratis setiap hari mulai jam 08:00 - 18:00 WIB.</p>
            </div>
            <button
              onClick={() => setShowBookingModal(true)}
              className="bg-accent hover:bg-accent-dark text-white px-6 py-3.5 rounded font-semibold text-xs tracking-wider uppercase shadow-md transition-colors whitespace-nowrap"
            >
              Book Site Visit Gratis
            </button>
          </div>

        </div>
      </section>


      {/* 7. VIRTUAL TOUR SECTION */}
      <section
        id="tour"
        ref={sectionRefs.tour}
        className="relative py-28 md:py-36 bg-slate-950 text-white overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="/assets/images/nara_living_room_1783879443554.jpg"
            alt="Nara Home Living Room Double Void"
            className="w-full h-full object-cover opacity-35 scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 z-10">
          <div className="inline-block bg-accent/20 border border-accent/30 text-accent text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Video Tour
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            Rasakan Kemewahan Ruang Secara Virtual Dari Gadget Anda
          </h2>
          
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Tidak punya waktu luang berkunjung langsung? Jangan khawatir. Kami menyediakan video tour definisi tinggi eksklusif untuk mengeksplorasi tata ruang Nara Home secara mendalam.
          </p>

          {/* Pulse Play Button */}
          <div className="py-8 flex justify-center">
            <button
              onClick={() => setShowVideoModal(true)}
              className="relative w-20 h-20 bg-accent hover:bg-accent-light rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent/50 group"
              aria-label="Putar Video Tour"
            >
              <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping group-hover:animate-none" />
              <Play className="h-8 w-8 fill-white ml-1 text-white" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => triggerWhatsApp("Halo marketing, saya ingin dikirimkan link HD Video Virtual Tour Nara Home Pamulang.")}
              className="bg-accent hover:bg-accent-dark text-white font-semibold py-3.5 px-8 rounded text-xs uppercase tracking-widest shadow-lg transition-colors w-full sm:w-auto"
            >
              Request Video Tour Via WhatsApp
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="bg-transparent hover:bg-white/10 border border-white/20 text-white font-semibold py-3.5 px-8 rounded text-xs uppercase tracking-widest transition-colors w-full sm:w-auto"
            >
              Jadwalkan Visit Offline
            </button>
          </div>
        </div>
      </section>


      {/* 8. LOCATION SECTION (EMBEDDED GOOGLE MAPS & TRAVEL TIMES) */}
      <section
        id="location"
        ref={sectionRefs.location}
        className="py-20 md:py-24 bg-cream dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-accent text-xs font-bold uppercase tracking-widest">Konektivitas Strategis</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white font-bold leading-tight">
              Aksesibilitas Sempurna di Tangerang Selatan
            </h2>
            <p className="text-slate-500 dark:text-gray-400 text-sm sm:text-base">
              Berlokasi di Jl. Kalimantan No.24, Benda Baru, Pamulang. Akses langsung menuju tol BSD-Bintaro-Jakarta.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Embedded Google Map Iframe - 7 Columns */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-950 p-4 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-lg flex flex-col justify-between h-[450px] lg:h-auto min-h-[350px]">
              <div className="w-full h-full rounded-xl overflow-hidden bg-gray-100 dark:bg-slate-900 border border-gray-50 dark:border-slate-800 relative">
                <iframe
                  title="Peta Lokasi Nara Home Pamulang"
                  src={PROPERTY_CONFIG.googleMapsIframeUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>Jl. Kalimantan No.24, Benda Baru, Pamulang</span>
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-gray-400 mt-0.5">Sangat dekat dengan Universitas Pamulang, perbatasan BSD & Tangerang Selatan.</p>
                </div>
                <a
                  href={PROPERTY_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded text-xs uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap transition-colors"
                >
                  <Compass className="h-3.5 w-3.5" />
                  <span>Buka Di Google Maps</span>
                </a>
              </div>
            </div>

            {/* Travel Times Landmarks - 5 Columns */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-lg text-left flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Map className="h-5 w-5 text-primary" />
                  <span>Jarak & Waktu Tempuh Terdekat</span>
                </h3>

                {/* Facilities Tab Switches */}
                <div className="flex flex-wrap gap-1 mb-6 bg-cream dark:bg-slate-900 p-1 rounded-lg">
                  {PROPERTY_CONFIG.nearbyFacilities.map((fac) => (
                    <button
                      key={fac.category}
                      onClick={() => setActiveNearbyCategory(fac.category)}
                      className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider transition-colors ${
                        activeNearbyCategory === fac.category
                          ? "bg-primary text-white"
                          : "text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      {fac.category}
                    </button>
                  ))}
                </div>

                {/* List Landmarks */}
                <div className="space-y-4">
                  {PROPERTY_CONFIG.nearbyFacilities
                    .find(fac => fac.category === activeNearbyCategory)
                    ?.places.map((place, idx) => (
                      <div key={idx} className="flex items-center justify-between border-b border-gray-50 dark:border-slate-900 pb-2.5">
                        <div className="flex items-center space-x-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span
                            className="text-xs sm:text-sm font-medium text-slate-800 dark:text-gray-250"
                            style={darkMode ? {
                              color: idx === 0 ? "#ffffff" : idx === 1 ? "#ffffff" : idx === 2 ? "#ffffff" : idx === 3 ? "#ffffff" : undefined
                            } : undefined}
                          >
                            {place.name}
                          </span>
                        </div>
                        <span className="bg-primary/10 text-primary dark:text-accent text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                          {place.time}
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-slate-800 text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Catatan Kecepatan Akses:</span>
                *Waktu tempuh di atas dihitung berdasarkan berkendara normal pada jam non-sibuk menggunakan Google Maps Navigation.
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 9. FACILITIES - 10-CARD GRID */}
      <section
        id="facilities"
        ref={sectionRefs.facilities}
        className="py-20 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-accent text-xs font-bold uppercase tracking-widest">Premium Cluster Facilities</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white font-bold leading-tight">
              Fasilitas Keamanan & Kenyamanan Internal
            </h2>
            <p className="text-slate-500 dark:text-gray-400 text-sm sm:text-base">
              Nikmati fasilitas penunjang lengkap yang eksklusif hanya untuk para penghuni Nara Home Pamulang.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {PROPERTY_CONFIG.facilities.map((fac, idx) => {
              // Icon selector helper
              let IconComp = Shield;
              if (fac.icon === "Lock") IconComp = Lock;
              else if (fac.icon === "Smile") IconComp = Smile;
              else if (fac.icon === "Milestone") IconComp = Milestone;
              else if (fac.icon === "Video") IconComp = Video;
              else if (fac.icon === "Trees") IconComp = Trees;
              else if (fac.icon === "Zap") IconComp = Zap;
              else if (fac.icon === "Moon") IconComp = Moon;
              else if (fac.icon === "Dribbble") IconComp = Dribbble;
              else if (fac.icon === "Key") IconComp = Key;

              return (
                <div
                  key={idx}
                  className="bg-cream dark:bg-slate-900 p-6 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm text-left hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="bg-primary text-white p-2.5 rounded-lg inline-block w-fit mb-4">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-slate-900 dark:text-white text-sm mb-1 tracking-wide">{fac.name}</h4>
                    <p className="text-slate-500 dark:text-gray-400 text-[11px] font-light leading-relaxed">{fac.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* 10. LIFESTYLE SECTION (DEEP GREEN EDITORIAL) */}
      <section
        id="lifestyle"
        ref={sectionRefs.lifestyle}
        className="py-24 md:py-28 bg-primary text-white relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Copy Side Left */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-accent text-xs font-bold uppercase tracking-widest block">Tropical Modern Living</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Mulai Babak Baru Kehidupan Bahagia Bersama Keluarga
              </h2>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-light">
                Rumah bukan sekadar bangunan kokoh berselimut semen. Rumah adalah rahim tempat memori pertama anak Anda dilahirkan, tempat tawa renyah meredakan letih bekerja, dan perlindungan terhangat di setiap senja.
              </p>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-light">
                Nara Home Pamulang mengusung konsep <strong className="text-accent font-semibold">Healthy Home Living</strong>. Langit-langit yang tinggi memberikan limpahan sirkulasi udara sirkuler konvektif yang sejuk sehingga menghemat penggunaan pendingin udara (AC). Jendela-jendela kaca besar mengoptimalkan asupan vitamin D alami dari mentari pagi.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="bg-accent hover:bg-accent-dark text-white font-semibold py-3.5 px-6 rounded text-xs uppercase tracking-wider shadow-lg transition-colors text-center"
                >
                  Jadwalkan Survey Lokasi Sekarang
                </button>
                <button
                  onClick={() => triggerWhatsApp("Halo, saya mau dikirimkan e-brochure lengkap Nara Home Pamulang.")}
                  className="bg-transparent hover:bg-white/10 border border-white/20 text-white font-semibold py-3.5 px-6 rounded text-xs uppercase tracking-wider transition-colors text-center"
                >
                  Minta E-Brochure Lengkap (PDF)
                </button>
              </div>
            </div>

            {/* Collage Images Side Right */}
            <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-center">
              
              {/* Left Column 1 Image */}
              <div className="col-span-6 space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl border border-primary-light">
                  <SafeImage
                    src="/assets/images/img7.webp"
                    fallbackSrc="/assets/images/nara_bedroom_1783879457070.jpg"
                    alt="Luxury Bedroom Suite Interior"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column 2 Images */}
              <div className="col-span-6 space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[1/1] shadow-2xl border border-primary-light">
                  <SafeImage
                    src="/assets/images/img11.webp"
                    fallbackSrc="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
                    alt="Cozy Minimalist Kitchen"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl border border-primary-light bg-cream-dark">
                  <SafeImage
                    src="/assets/images/img19.webp"
                    fallbackSrc="/assets/images/nara_exterior_hero_1783879429976.jpg"
                    alt="Nara Home Modern Exterior detailing"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* 11. DEVELOPER SECTION (TRUST CREDENTIALS) */}
      <section
        id="developer"
        ref={sectionRefs.developer}
        className="py-20 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Aerial/Trust Image Left */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-slate-800 bg-cream dark:bg-slate-900">
                <img
                  src="/assets/images/narahome.webp"
                  alt="Aerial Developer Construction Site Visit"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              {/* Floating Credential Box */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-5 rounded-xl border border-gray-150 dark:border-slate-800 shadow-xl text-left">
                <p className="font-serif font-bold text-slate-900 dark:text-white text-sm">Developer Berkomitmen Tinggi</p>
                <p className="text-slate-500 dark:text-gray-400 text-xs mt-1">Mengutamakan penyelesaian konstruksi tepat waktu dengan kualitas fisik bangunan 100% real.</p>
              </div>
            </div>

            {/* Content Copy Right */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="text-accent text-xs font-bold uppercase tracking-widest block">Pengembang Berkomitmen Tinggi</span>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white font-bold leading-tight">
                Dipersembahkan Dengan Integritas oleh Nara Home Pamulang
              </h2>

              <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                Nara Home Pamulang telah dikembangkan atas dasar integritas tinggi, komitmen terhadap kualitas, dan kepuasan pelanggan yang mutlak. Kami percaya bahwa perumahan yang baik adalah perumahan yang dibangun menggunakan hati dan kejujuran spesifikasi.
              </p>

              <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                Nara Home Pamulang telah mengantongi semua aspek perizinan legalitas krusial. Hak kepemilikan tanah dijamin aman tanpa hambatan sengketa di masa mendatang.
              </p>

              {/* Trust Indicators Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-cream dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-800 text-center">
                  <span className="font-serif text-2xl font-bold text-primary dark:text-accent block">100%</span>
                  <span className="text-[10px] text-slate-500 dark:text-gray-400 uppercase tracking-widest font-bold">Legalitas Aman</span>
                </div>
                <div className="bg-cream dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-800 text-center">
                  <span className="font-serif text-2xl font-bold text-primary dark:text-accent block">SHM</span>
                  <span className="text-[10px] text-slate-500 dark:text-gray-400 uppercase tracking-widest font-bold">Pecah Per Kavling</span>
                </div>
                <div className="bg-cream dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-800 text-center">
                  <span className="font-serif text-2xl font-bold text-primary dark:text-accent block">Bank Partner</span>
                  <span className="text-[10px] text-slate-500 dark:text-gray-400 uppercase tracking-widest font-bold">Nasional Terkemuka</span>
                </div>
              </div>

              {/* Legal Note Accordion look */}
              <div className="bg-primary/5 dark:bg-slate-900/40 p-4 rounded-xl border border-primary/10 dark:border-slate-800 text-xs text-slate-600 dark:text-gray-300">
                <span className="font-bold text-primary dark:text-accent block mb-1">Informasi Hukum & Perizinan:</span>
                Seluruh unit di cluster Nara Home Pamulang telah lolos verifikasi Badan Pertanahan Nasional (BPN), dilengkapi persetujuan PBG (Persetujuan Bangunan Gedung) / IMB, dan memiliki izin lingkungan setempat yang sah.
              </div>

              <div className="pt-2">
                <button
                  onClick={() => triggerWhatsApp("Halo, saya mau dikirimkan berkas legalitas legalitas perizinan Nara Home.")}
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded text-xs uppercase tracking-wider shadow-md transition-colors"
                >
                  Tanyakan Legalitas & Izin Lengkap
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 12. FAQ - SEO OPTIMIZED ACCORDION */}
      <section
        id="faq"
        ref={sectionRefs.faq}
        className="py-20 md:py-24 bg-cream dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 transition-colors duration-500"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-accent text-xs font-bold uppercase tracking-widest text-center block">Frequently Asked Questions</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white font-bold leading-tight text-center">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h2>
            <p className="text-slate-500 dark:text-gray-400 text-sm text-center">
              Temukan jawaban cepat atas pertanyaan-pertanyaan administratif, keuangan, dan lokasi seputar Nara Home Pamulang.
            </p>
          </div>

          <div className="space-y-4">
            {PROPERTY_CONFIG.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-950 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between font-serif font-bold text-slate-900 dark:text-white text-sm sm:text-base hover:text-accent transition-colors focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-accent flex-shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0 ml-4" />
                    )}
                  </button>
                  
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[300px] border-t border-gray-50 dark:border-slate-800 p-6 bg-cream/30 dark:bg-slate-900/40" : "max-h-0 pointer-events-none opacity-0"
                    }`}
                  >
                    <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prompt to ask custom FAQ */}
          <div className="mt-8 text-center bg-white dark:bg-slate-950 p-6 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm max-w-2xl mx-auto">
            <p className="text-slate-600 dark:text-gray-300 text-xs">Punya pertanyaan spesifik lainnya tentang skema KPR, cash bertahap, atau diskon harga perdana?</p>
            <button
              onClick={() => triggerWhatsApp("Halo marketing, saya ingin bertanya tentang Nara Home Pamulang.")}
              className="text-primary dark:text-accent hover:text-accent font-bold text-xs uppercase tracking-wider mt-2 inline-flex items-center gap-1.5 focus:outline-none"
            >
              <span>Tanyakan Langsung Via WhatsApp</span>
              <ExternalLink className="h-4.5 w-4.5" />
            </button>
          </div>

        </div>
      </section>


      {/* 13. TESTIMONIALS (3 CUSTOMER CARDS WITH AVATARS) */}
      <section className="py-20 bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-accent text-xs font-bold uppercase tracking-widest text-center block">Testimonials</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white font-bold leading-tight text-center">
              Apa Kata Mereka Tentang Nara Home
            </h2>
            <p className="text-slate-500 dark:text-gray-400 text-sm text-center">
              Ulasan jujur dari keluarga muda dan investor pembeli pertama unit eksklusif Nara Home Pamulang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROPERTY_CONFIG.testimonials.map((test, idx) => (
              <div
                key={idx}
                className="bg-cream dark:bg-slate-900 p-8 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex space-x-1 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm font-light leading-relaxed italic">
                    "{test.text}"
                  </p>
                </div>

                <div className="flex items-center space-x-3 mt-6 pt-4 border-t border-gray-100 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs">
                    {test.avatar}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-slate-900 dark:text-white text-sm">{test.name}</h4>
                    <p className="text-slate-500 dark:text-gray-400 text-[10px] font-medium">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 13.5 ARTICLES & SEO SECTION */}
      <section
        id="articles"
        ref={sectionRefs.articles}
        className="py-20 bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800 transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-accent text-xs font-bold uppercase tracking-widest text-center block">Edukasi & Tips Properti</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white font-bold leading-tight text-center">
              Informasi Terkini & Tips Memilih Hunian
            </h2>
            <p className="text-slate-500 dark:text-gray-400 text-sm text-center">
              Temukan berbagai panduan, tips pembelian rumah pertama, kelebihan desain arsitektur modern, dan peluang investasi menjanjikan di Pamulang Tangerang Selatan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROPERTY_CONFIG.articles?.map((article: any) => (
              <div
                key={article.id}
                className="bg-cream dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-800/80 shadow-sm flex flex-col hover:shadow-lg transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                {/* Article Image */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded">
                    {article.readTime}
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Date and Author */}
                    <div className="flex items-center space-x-4 text-[10px] text-slate-500 dark:text-gray-400 font-medium">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {article.author}
                      </span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif font-bold text-slate-900 dark:text-white text-base sm:text-lg group-hover:text-accent transition-colors leading-snug">
                      {article.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-slate-600 dark:text-gray-350 text-xs font-light leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>

                  {/* Keywords tags & action */}
                  <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="flex flex-wrap gap-1">
                      {article.keywords.slice(0, 2).map((kw: string, i: number) => (
                        <span key={i} className="text-[9px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-gray-400 px-2 py-0.5 rounded flex items-center gap-1">
                          <Tag className="h-2 w-2 text-accent" />
                          {kw}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-primary dark:text-accent group-hover:underline inline-flex items-center gap-1">
                      <span>Baca Selengkapnya</span>
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 14. CONTACT SECTION */}
      <section
        id="contact"
        ref={sectionRefs.contact}
        className="py-20 md:py-24 bg-cream dark:bg-slate-900 transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Form & Info Left - 6 Columns */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <div>
                <span className="text-accent text-xs font-bold uppercase tracking-widest block">Direct Connection</span>
                <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white font-bold leading-tight mt-2">
                  Hubungi Kantor Pemasaran Resmi Kami
                </h2>
                <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed font-light mt-3">
                  Punya pertanyaan seputar ketersediaan unit, simulasi KPR, atau ingin membuat janji site visit hari ini? Kirimkan pesan singkat, tim marketing ramah kami akan membalas secepat mungkin.
                </p>
              </div>

              {/* Direct Info list */}
              <div className="space-y-4 py-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white p-2.5 rounded-lg mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-serif font-bold text-slate-950 dark:text-white text-sm">Alamat Lokasi Cluster</h4>
                      <div className="relative group shrink-0">
                        <button
                          onClick={handleCopyAddress}
                          className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-600 dark:text-gray-300 text-[10px] transition-all duration-250 focus:outline-none active:scale-95 shrink-0"
                          title="Salin alamat ke clipboard"
                          id="btn-copy-address"
                        >
                          {copiedAddress ? (
                            <>
                              <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400 animate-pulse" />
                              <span className="font-medium text-emerald-600 dark:text-emerald-400">Tersalin!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3" />
                              <span>Salin Alamat</span>
                            </>
                          )}
                        </button>
                        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-slate-900/95 dark:bg-slate-850 text-white text-[10px] rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-30 font-semibold border border-slate-700/50">
                          Klik untuk menyalin alamat
                          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900/95 dark:border-t-slate-850" />
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-gray-350 text-xs mt-1 leading-relaxed">{PROPERTY_CONFIG.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white p-2.5 rounded-lg mt-0.5">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-slate-950 dark:text-white text-sm">WhatsApp Marketing Nonstop</h4>
                    <p className="text-slate-600 dark:text-gray-350 text-xs mt-1 leading-relaxed">
                      <a href={`tel:${PROPERTY_CONFIG.whatsappNumber}`} className="hover:underline font-bold text-primary dark:text-accent">{PROPERTY_CONFIG.whatsappNumber}</a> (Support Chat & Call)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white p-2.5 rounded-lg mt-0.5">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-slate-950 dark:text-white text-sm">Jam Operasional Show Unit</h4>
                    <p className="text-slate-600 dark:text-gray-350 text-xs mt-1 leading-relaxed">Buka setiap hari (termasuk Sabtu, Minggu, & hari libur nasional) • Pukul 08:00 - 18:00 WIB</p>
                  </div>
                </div>
              </div>

              {/* CTA Dual Triggers */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 px-6 rounded text-xs uppercase tracking-wider text-center shadow-md transition-colors"
                >
                  Jadwalkan Survey Lokasi (Gratis)
                </button>
                <button
                  onClick={() => triggerWhatsApp("Halo Nara Home Pamulang, saya mau tanya harga ruko / cluster perumahan terupdate.")}
                  className="border border-accent text-slate-800 dark:text-white hover:bg-accent hover:text-white font-semibold py-3.5 px-6 rounded text-xs uppercase tracking-wider transition-colors text-center flex items-center justify-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>Minta Pricelist Terbaru</span>
                </button>
              </div>
            </div>

            {/* Quick Interactive Map right - 6 Columns */}
            <div className="lg:col-span-6 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-950 dark:text-white mb-2">Formulir Pertanyaan & Site Visit</h3>
                <p className="text-slate-500 dark:text-gray-400 text-xs mb-6">Silakan lengkapi formulir di bawah ini untuk mendapatkan antrean site visit resmi tanpa dipungut biaya apapun.</p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label htmlFor="form_name" className="block text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider mb-1">Nama Lengkap*</label>
                  <input
                    id="form_name"
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={bookingName}
                    onChange={(e) => setBookingName(e.target.value)}
                    className="w-full px-4 py-2 text-sm bg-cream dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded focus:outline-none focus:border-accent text-slate-800 dark:text-white transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="form_phone" className="block text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider mb-1">Nomor WhatsApp*</label>
                  <input
                    id="form_phone"
                    type="tel"
                    required
                    placeholder="Contoh: 08123456789"
                    value={bookingPhone}
                    onChange={(e) => setBookingPhone(e.target.value)}
                    className="w-full px-4 py-2 text-sm bg-cream dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded focus:outline-none focus:border-accent text-slate-800 dark:text-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form_date" className="block text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider mb-1">Rencana Tanggal Visit</label>
                    <input
                      id="form_date"
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full px-4 py-2 text-sm bg-cream dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded focus:outline-none focus:border-accent text-slate-800 dark:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="form_msg" className="block text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider mb-1">Catatan Tambahan</label>
                    <input
                      id="form_msg"
                      type="text"
                      placeholder="e.g. Ingin jam 10 pagi, KPR info"
                      value={bookingMessage}
                      onChange={(e) => setBookingMessage(e.target.value)}
                      className="w-full px-4 py-2 text-sm bg-cream dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded focus:outline-none focus:border-accent text-slate-800 dark:text-white transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 px-4 rounded text-xs uppercase tracking-widest shadow-md transition-colors flex items-center justify-center space-x-2 pt-3"
                >
                  <Send className="h-4 w-4" />
                  <span>Kirim Pengajuan Via WhatsApp</span>
                </button>
              </form>

              <p className="text-[10px] text-slate-400 dark:text-gray-500 mt-4 text-center">
                *Data Anda dilindungi penuh, aman tanpa spam, dan hanya digunakan untuk kepentingan verifikasi antrean kunjungan Nara Home.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* 15. FINAL CTA BANNER (FULL-BLEED LUXURY OVERLAY) */}
      <section className="relative py-24 bg-primary text-white overflow-hidden border-t border-primary-light">
        {/* Background house parallax styled */}
        <div className="absolute inset-0">
          <img
            src="/assets/images/nara_exterior_hero_1783879429976.jpg"
            alt="Nara Home Modern Night Facade"
            className="w-full h-full object-cover opacity-15"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary-dark" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 z-10">
          <span className="text-accent text-xs font-bold uppercase tracking-widest block">Limited Units remaining</span>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Amankan Kavling Terbaik Anda Sebelum Kehabisan Promo Bulan Ini
          </h2>

          <p className="text-gray-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Sisa unit perumahan premium 2 lantai Nara Home Pamulang semakin menipis. Dapatkan promo subsidi biaya asuransi, free kanopi, dan diskon booking fee menarik hanya untuk pendaftar minggu ini.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setShowBookingModal(true)}
              className="bg-accent hover:bg-accent-dark text-white font-semibold py-4 px-8 rounded text-xs uppercase tracking-widest shadow-xl transition-colors w-full sm:w-auto"
            >
              Book Site Visit Offline Sekarang
            </button>
            <button
              onClick={() => triggerWhatsApp("Halo Nara Home Pamulang, saya mau info diskon promo dan sisa kavling kosong.")}
              className="bg-transparent hover:bg-white/10 border border-white/30 text-white font-semibold py-4 px-8 rounded text-xs uppercase tracking-widest transition-colors w-full sm:w-auto flex items-center justify-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>Tanya Diskon Promo Via WhatsApp</span>
            </button>
          </div>
        </div>
      </section>


      {/* FOOTER - 4 COLUMN STRUCTURED GRID */}
      <footer className="bg-slate-950 text-white pt-16 pb-28 md:pb-12 border-t border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Brand & Desc */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <Logo className="h-10 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Cluster hunian eksklusif bergaya arsitektur tropis modern minimalis di Tangerang Selatan. Memadukan estetika, kekuatan struktur bangunan nyata, dan kenyamanan asri keluarga.
            </p>
            <p className="text-gray-500 text-[10px]">
              Dikembangkan oleh Nara Home Pamulang.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-accent text-sm tracking-wide">Navigasi Link</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><button onClick={() => scrollTo("home")} className="hover:text-accent transition-colors">Utama / Hero</button></li>
              <li><button onClick={() => scrollTo("why")} className="hover:text-accent transition-colors">Mengapa Nara</button></li>
              <li><button onClick={() => scrollTo("specs")} className="hover:text-accent transition-colors">Spesifikasi Unit</button></li>
              <li><button onClick={() => scrollTo("gallery")} className="hover:text-accent transition-colors">Galeri Kunjungan</button></li>
              <li><button onClick={() => scrollTo("location")} className="hover:text-accent transition-colors">Peta & Jarak Akses</button></li>
              <li><button onClick={() => scrollTo("faq")} className="hover:text-accent transition-colors">FAQ</button></li>
              <li><button onClick={() => scrollTo("articles")} className="hover:text-accent transition-colors">Artikel & Edukasi</button></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-accent text-sm tracking-wide">Informasi Kontak</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex items-start gap-1.5">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Jl. Kalimantan No.24, Benda Baru, Pamulang, Tangerang Selatan</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span>{PROPERTY_CONFIG.whatsappNumber}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-accent flex-shrink-0" />
                <span>{PROPERTY_CONFIG.email}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal / Disclaimer */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-accent text-sm tracking-wide">Kepatuhan Hukum & Disclaimer</h4>
            <p className="text-gray-500 text-[10px] leading-relaxed">
              Seluruh gambar, spesifikasi, dan deskripsi ilustrasi dalam situs landing page ini merupakan materi promosi resmi Nara Home Pamulang. Perubahan detail spesifikasi teknik dapat sewaktu-waktu dilakukan demi peningkatan kualitas tanpa melanggar ketentuan akad perikatan jual beli resmi.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors" aria-label="Facebook"><Smile className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors" aria-label="Instagram"><Dribbble className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors" aria-label="LinkedIn"><Moon className="h-5 w-5" /></a>
            </div>
          </div>

        </div>

        {/* Line divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-slate-900 text-center text-xs text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 Nara Home Pamulang. All rights reserved.</p>
          <div className="flex space-x-4 text-[10px]">
            <a href="#" className="hover:underline">Kebijakan Privasi</a>
            <a href="#" className="hover:underline">Syarat & Ketentuan</a>
            <a href="#" className="hover:underline">KPR Disclaimer</a>
          </div>
        </div>
      </footer>


      {/* --- FLOATING ELEMENTS --- */}

      {/* Floating WhatsApp FAB (Bottom-Left) */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
        <button
          onClick={() => triggerWhatsApp("Halo marketing Nara Home Pamulang, saya mau tanya brosur dan pricelist.")}
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-400/50 group"
          aria-label="Chat WhatsApp Nonstop"
        >
          <Phone className="h-6 w-6 fill-white" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-xs font-bold uppercase tracking-wider whitespace-nowrap">
            Chat WhatsApp
          </span>
        </button>
      </div>

      {/* Back-To-Top Button (Bottom-Right, appears after scroll) */}
      <div className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${showBackToTop ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-primary hover:bg-primary-dark text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-colors focus:outline-none focus:ring-4 focus:ring-primary/50"
          aria-label="Kembali Ke Atas"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Sticky CTA Bar (Bottom, screen < md only) */}
      <div className="fixed bottom-0 left-0 w-full z-45 bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800 p-3 shadow-2xl flex items-center justify-between gap-3 md:hidden">
        <button
          onClick={() => triggerWhatsApp()}
          className="flex-1 border border-accent text-slate-800 dark:text-white font-bold py-3 px-2 rounded text-xs uppercase tracking-wider flex items-center justify-center gap-1 text-center"
        >
          <Phone className="h-4 w-4" />
          <span>WhatsApp Chat</span>
        </button>
        <button
          onClick={() => setShowBookingModal(true)}
          className="flex-1 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-2 rounded text-xs uppercase tracking-wider text-center"
        >
          Book Site Visit
        </button>
      </div>


      {/* --- MODAL DIALOGS --- */}

      {/* 1. Video Virtual Tour Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 w-full max-w-3xl">
            <div className="flex items-center justify-between p-4 border-b border-slate-800 text-white">
              <h3 className="font-serif font-bold text-sm sm:text-base">HD Video Virtual Tour - Nara Home Pamulang</h3>
              <button
                onClick={() => setShowVideoModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="aspect-video bg-black relative flex items-center justify-center">
              {/* Luxury simulated video player design */}
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/nara_living_room_1783879443554.jpg')" }} />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
              
              <div className="relative z-10 text-center max-w-md p-6 text-white space-y-4">
                <div className="bg-accent text-white p-3.5 rounded-full inline-block animate-bounce shadow-lg">
                  <Volume2 className="h-6 w-6" />
                </div>
                <h4 className="font-serif font-bold text-lg">Minta Link HD Tour Video Resmi</h4>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  Untuk memberikan pengalaman kualitas visual HD terbaik tanpa kompresi, kami mengirimkan tautan video resmi langsung ke chat WhatsApp Anda.
                </p>
                <button
                  onClick={() => {
                    setShowVideoModal(false);
                    triggerWhatsApp("Halo Nara Home, saya mau minta link video virtual tour HD nya.");
                  }}
                  className="bg-accent hover:bg-accent-dark text-white font-bold py-3 px-6 rounded text-xs uppercase tracking-widest transition-colors w-full"
                >
                  Kirim Link Ke WhatsApp Saya
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Site Visit Booking Form Dialog */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100 w-full max-w-md text-left p-6 relative">
            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6">
              <span className="bg-accent/10 border border-accent/20 text-accent text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded inline-block">
                Reservasi Kunjungan Gratis
              </span>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mt-2">Jadwalkan Kunjungan Show Unit</h3>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                Pilih waktu survey ternyaman untuk Anda & keluarga. Kami menyediakan tim property consultant yang mendampingi dengan ramah.
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label htmlFor="modal_name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Nama Lengkap*</label>
                <input
                  id="modal_name"
                  type="text"
                  required
                  placeholder="e.g. Andy Wijaya"
                  value={bookingName}
                  onChange={(e) => setBookingName(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-cream border border-gray-200 rounded focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="modal_phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Nomor WhatsApp*</label>
                <input
                  id="modal_phone"
                  type="tel"
                  required
                  placeholder="e.g. 0812345678"
                  value={bookingPhone}
                  onChange={(e) => setBookingPhone(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-cream border border-gray-200 rounded focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="modal_date" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Rencana Tanggal Survey</label>
                <input
                  id="modal_date"
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-cream border border-gray-200 rounded focus:outline-none focus:border-accent text-slate-600"
                />
              </div>

              <div>
                <label htmlFor="modal_message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Kebutuhan Informasi Tambahan</label>
                <input
                  id="modal_message"
                  type="text"
                  placeholder="e.g. Mau info cara KPR, promo cashback"
                  value={bookingMessage}
                  onChange={(e) => setBookingMessage(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-cream border border-gray-200 rounded focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-4 rounded text-xs uppercase tracking-widest shadow-md transition-colors flex items-center justify-center space-x-2 pt-4"
              >
                <Send className="h-4 w-4" />
                <span>Kirim Pengajuan Survey Via WA</span>
              </button>
            </form>

            <p className="text-[10px] text-slate-400 mt-4 text-center leading-relaxed">
              *Setelah menekan tombol kirim, Anda akan diarahkan ke WhatsApp kami untuk konfirmasi slot antrean tercepat secara real-time.
            </p>
          </div>
        </div>
      )}

      {/* 3. Non-Intrusive Exit Intent Modal Banner */}
      {showExitIntent && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-end sm:items-center justify-center p-4">
          <div className="bg-cream rounded-2xl overflow-hidden shadow-2xl border border-white w-full max-w-lg text-left relative p-6 sm:p-8 animate-fade-in">
            <button
              onClick={() => setShowExitIntent(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-gray-150"
              aria-label="Tutup Penawaran"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-primary text-xs font-bold uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
                <span>Promo Terbatas KPR Minggu Ini</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 leading-tight">
                Tunggu! Jangan Lewatkan Bonus Spesial Pertama Anda
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                Hanya bagi pengunjung yang menghubungi kami hari ini, dapatkan voucher <strong className="text-primary font-bold">Subsidi Biaya KPR hingga 20 Juta*</strong>, gratis kanopi carport modern, dan kemudahan booking fee refundable!
              </p>

              {/* Promo list */}
              <div className="bg-white p-4 rounded-xl border border-gray-150 space-y-2 text-xs">
                <div className="flex items-center space-x-2 text-slate-700">
                  <Check className="h-4 w-4 text-accent" />
                  <span>Gratis Kanopi Carport Kaca Tempered</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-700">
                  <Check className="h-4 w-4 text-accent" />
                  <span>Subsidi Biaya Asuransi Jiwa KPR</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-700">
                  <Check className="h-4 w-4 text-accent" />
                  <span>Sertifikat SHM Langsung Atas Nama Anda</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => {
                    setShowExitIntent(false);
                    triggerWhatsApp("Halo Nara Home, saya mau ambil penawaran spesial KPR promo subsidi biaya di exit-intent banner.");
                  }}
                  className="bg-accent hover:bg-accent-dark text-white font-bold py-3.5 px-6 rounded text-xs uppercase tracking-widest shadow-lg text-center transition-colors"
                >
                  Ambil Promo Spesial Ini (WA)
                </button>
                <button
                  onClick={() => setShowExitIntent(false)}
                  className="bg-transparent hover:bg-gray-100 text-slate-600 font-bold py-3.5 px-6 rounded text-xs uppercase tracking-widest text-center transition-colors"
                >
                  Nanti Saja
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Rich Article Detail Reader Modal (SEO Optimizing Keywords & Experience) */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-slate-800 w-full max-w-2xl text-left relative max-h-[90vh] flex flex-col">
            
            {/* Header / Top actions */}
            <div className="p-6 border-b border-gray-100 dark:border-slate-800/80 flex items-center justify-between sticky top-0 bg-white dark:bg-slate-900 z-10">
              <span className="text-[10px] uppercase bg-primary/10 dark:bg-accent/10 border border-primary/20 dark:border-accent/20 text-primary dark:text-accent font-bold tracking-widest px-2.5 py-1 rounded inline-block">
                {selectedArticle.readTime}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="overflow-y-auto p-6 space-y-6 flex-1">
              
              {/* Feature Image inside Modal */}
              <div className="h-64 sm:h-72 w-full rounded-xl overflow-hidden relative shadow-sm">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Metadata */}
              <div className="space-y-3">
                <div className="flex items-center space-x-4 text-xs text-slate-500 dark:text-gray-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-accent" />
                    {selectedArticle.author}
                  </span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                </div>
                
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                  {selectedArticle.title}
                </h2>

                {/* Keyword Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedArticle.keywords.map((kw: string, i: number) => (
                    <span key={i} className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-gray-400 px-2.5 py-1 rounded flex items-center gap-1 font-medium">
                      <Tag className="h-2.5 w-2.5 text-accent" />
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* HTML Content */}
              <div
                className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-gray-250 text-sm sm:text-base leading-relaxed space-y-4 font-light border-t border-slate-100 dark:border-slate-800 pt-6"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />

            </div>

            {/* Modal Footer / Call to action */}
            <div className="p-6 border-t border-gray-100 dark:border-slate-800/80 bg-cream/30 dark:bg-slate-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0">
              <div className="text-left">
                <p className="text-slate-500 dark:text-gray-400 text-xs">Tertarik dengan hunian di Nara Home?</p>
                <p className="text-slate-950 dark:text-white text-xs font-bold font-serif">Sisa 22 unit eksklusif di Benda Baru Pamulang!</p>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    setShowBookingModal(true);
                  }}
                  className="flex-1 sm:flex-none bg-primary text-white hover:bg-primary-dark font-semibold py-2.5 px-5 rounded text-xs uppercase tracking-widest transition-colors shadow-sm"
                >
                  Book Show Unit Visit
                </button>
                <button
                  onClick={() => {
                    triggerWhatsApp(`Halo Nara Home Pamulang, saya baru membaca artikel "${selectedArticle.title}" dan tertarik dengan unit perumahan Pamulang.`);
                  }}
                  className="flex-1 sm:flex-none bg-[#25D366] text-white hover:bg-[#20BA5A] font-semibold py-2.5 px-5 rounded text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="h-4 w-4 fill-white" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
