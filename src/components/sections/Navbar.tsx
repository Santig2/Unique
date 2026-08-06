"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  onOpenContact: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex justify-center px-4 md:px-12 pt-4 md:pt-6 z-50 fixed top-0 left-0 right-0 pointer-events-none">
      <nav className="w-full max-w-[1400px] bg-pink/95 backdrop-blur-md text-cacao rounded-3xl px-6 md:px-12 py-3 md:py-4 flex items-center justify-between shadow-md pointer-events-auto">
        <Link href="#home" onClick={(e) => { e.preventDefault(); scrollTo("home"); }} className="flex items-center">
          <img 
            src="/icono-unique-negro.png" 
            alt="Unique Logo" 
            className="h-9 md:h-11 w-auto object-contain hover:opacity-80 transition-opacity" 
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 font-ui uppercase tracking-widest text-[13px] font-semibold">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("home"); }} className="hover:opacity-70 transition-opacity cursor-pointer">Home</a>
          <a href="#story" onClick={(e) => { e.preventDefault(); scrollTo("story"); }} className="hover:opacity-70 transition-opacity cursor-pointer">Our Story</a>
          <a href="#chef" onClick={(e) => { e.preventDefault(); scrollTo("chef"); }} className="hover:opacity-70 transition-opacity cursor-pointer">Meet Chef Patricia</a>
          <a href="#menu" onClick={(e) => { e.preventDefault(); scrollTo("menu"); }} className="hover:opacity-70 transition-opacity cursor-pointer">Catering & Bakery</a>
          <a href="#location" onClick={(e) => { e.preventDefault(); scrollTo("location"); }} className="hover:opacity-70 transition-opacity cursor-pointer">Where We Operate</a>
          <button 
            onClick={onOpenContact} 
            className="bg-[#38261A] text-white px-5 py-2 rounded-full hover:scale-95 transition-transform text-xs uppercase tracking-wider font-semibold shadow-sm"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden flex items-center text-cacao" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-[100%] left-0 w-full mt-2 bg-pink flex flex-col items-center py-6 gap-5 md:hidden rounded-3xl shadow-xl border border-cacao/10 animate-in slide-in-from-top-2">
            <a href="#home" className="font-ui uppercase tracking-widest text-sm font-semibold hover:opacity-70 transition-opacity" onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>Home</a>
            <a href="#story" className="font-ui uppercase tracking-widest text-sm font-semibold hover:opacity-70 transition-opacity" onClick={(e) => { e.preventDefault(); scrollTo("story"); }}>Our Story</a>
            <a href="#chef" className="font-ui uppercase tracking-widest text-sm font-semibold hover:opacity-70 transition-opacity" onClick={(e) => { e.preventDefault(); scrollTo("chef"); }}>Meet Chef Patricia</a>
            <a href="#menu" className="font-ui uppercase tracking-widest text-sm font-semibold hover:opacity-70 transition-opacity" onClick={(e) => { e.preventDefault(); scrollTo("menu"); }}>Catering & Bakery</a>
            <button 
              onClick={() => { setIsOpen(false); onOpenContact(); }}
              className="bg-[#38261A] text-white px-6 py-2.5 rounded-full uppercase tracking-wider text-xs font-semibold shadow-md mt-2"
            >
              Get a Quote
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
