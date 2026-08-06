"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface MenuSectionProps {
  onOpenContact: () => void;
}

export function MenuSection({ onOpenContact }: MenuSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth scroll tracking across the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax Y-axis translation for background image
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  // Rotación en el eje horizontal (3D Y-axis rotation de izquierda a derecha)
  const cardRotateY = useTransform(scrollYProgress, [0.1, 0.85], [-45, 45]);

  // Carrusel automático de imágenes de fondo (rotación de 2.5 segundos)
  const carouselImages = [
    "/pastel1.png",
    "/pastel2.png",
    "/pastel3.png",
    "/pastel4.png",
  ];
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % carouselImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const menuItems = [
    { name: "Custom Cakes", price: "from $85" },
    { name: "Fondant Cookies", price: "$45/dz" },
    { name: "Alfajores", price: "$30/dz" },
    { name: "Chocolate Dipped Strawberries", price: "$40/dz" },
  ];

  return (
    <section
      id="menu"
      ref={containerRef}
      className="w-full flex flex-col md:flex-row min-h-[800px] relative overflow-hidden"
    >
      {/* Left Side: Off-White Canvas Background & Massive Typography */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-12 md:pl-24 md:pr-12 bg-[#F9F9F9] z-10 relative overflow-hidden">
        {/* Background Watermark Icon */}
        <img 
          src="/icono-unique-gris.png" 
          alt="" 
          className="absolute opacity-[0.12] pointer-events-none w-[350px] md:w-[500px] object-contain -left-12 -bottom-10 z-0"
        />

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="font-display text-6xl md:text-[5.5rem] lg:text-[7.5rem] leading-[0.9] text-[#38261A] tracking-tighter relative z-10"
        >
          Unique<br />Flavors.
        </motion.h2>
      </div>

      {/* Right Side: Sourdough Texture & Floating Cream Card */}
      <div className="w-full md:w-1/2 relative min-h-[650px] overflow-hidden flex items-center justify-center bg-[#E5D5C0]">
        {/* Layer 0: Parallax Background Auto-Carousel */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0 scale-125"
        >
          {carouselImages.map((imgSrc, idx) => (
            <img
              key={imgSrc}
              src={imgSrc}
              alt={`Artisan Cake Background ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                idx === currentBgIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          {/* Light dark overlay so text and rotating ticket card remain crystal clear */}
          <div className="absolute inset-0 bg-black/15 pointer-events-none" />
        </motion.div>

        {/* Layer 1: Container with Perspective for 3D Card Rotation */}
        <div className="relative z-10 flex items-center justify-center w-full h-full p-6 [perspective:1200px]">
          
          {/* Card Anchor Wrapper (Encloses rotating card & locks stationary stickers to card corners) */}
          <div className="relative w-full max-w-[420px] flex justify-center items-center">
            
            {/* STATIC STICKER TOP-RIGHT (Overlaps Top-Right Corner of Card) */}
            <div className="absolute -top-5 -right-5 md:-right-7 z-30 rotate-[14deg] pointer-events-none">
              <div className="bg-[#FFAEE3] text-[#3B2314] font-serif italic font-medium text-2xl md:text-3xl px-6 py-2 rounded-[100%] border border-[#3B2314]/40 shadow-lg">
                <span>Catering</span>
              </div>
            </div>

            {/* STATIC STICKER BOTTOM-LEFT (Overlaps Bottom-Left Corner of Card) */}
            <div className="absolute -bottom-5 -left-5 md:-left-7 z-30 -rotate-[14deg] pointer-events-none">
              <div className="bg-[#FFAEE3] text-[#3B2314] font-serif italic font-medium text-2xl md:text-3xl px-6 py-2 rounded-[100%] border border-[#3B2314]/40 shadow-lg">
                <span>Bakery</span>
              </div>
            </div>

            {/* ROTATING 3D TICKET CARD (ONLY the card rotates on scroll) */}
            <motion.div
              style={{ rotateY: cardRotateY, transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full bg-[#FAF6EE] px-10 pt-12 pb-14 flex flex-col items-center shadow-2xl rounded-t-sm"
            >
              {/* Card Title (Playfair Serif Title exact to reference) */}
              <h3 className="font-serif text-[3.2rem] md:text-[3.6rem] leading-none mb-10 text-center font-normal tracking-tight text-[#3B2314]">
                Artisan Selection
              </h3>

              {/* Menu Items (Playfair Serif Italic exact to reference) */}
              <div className="w-full flex flex-col gap-6 mb-8">
                {menuItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-baseline gap-4 w-full">
                    <span className="font-serif italic text-lg md:text-xl text-[#3B2314] whitespace-nowrap">{item.name}</span>
                    <span className="font-serif italic text-base md:text-lg text-[#3B2314]/90">{item.price}</span>
                  </div>
                ))}
              </div>

              {/* Fine Dashed Line */}
              <div className="w-full border-t border-dashed border-[#3B2314]/35 mb-8"></div>

              {/* CTA Button (Playfair Serif Button exact to reference) */}
              <button 
                onClick={onOpenContact}
                className="bg-[#2D1C11] text-[#FAF6EE] font-serif text-base md:text-lg px-8 py-3 rounded-full hover:scale-95 transition-transform duration-200 ease-out active:scale-95 shadow-md"
              >
                Explore Menu / Request Quote
              </button>

              {/* Sawtooth / ZigZag Bottom Edge Cut (Exact Vector SVG attached to bottom) */}
              <div className="absolute top-full left-0 right-0 h-4 overflow-hidden pointer-events-none">
                <svg 
                  className="w-full h-full text-[#FAF6EE] fill-current" 
                  viewBox="0 0 100 10" 
                  preserveAspectRatio="none"
                >
                  <polygon points="0,0 2.5,10 5,0 7.5,10 10,0 12.5,10 15,0 17.5,10 20,0 22.5,10 25,0 27.5,10 30,0 32.5,10 35,0 37.5,10 40,0 42.5,10 45,0 47.5,10 50,0 52.5,10 55,0 57.5,10 60,0 62.5,10 65,0 67.5,10 70,0 72.5,10 75,0 77.5,10 80,0 82.5,10 85,0 87.5,10 90,0 92.5,10 95,0 97.5,10 100,0 100,0 0,0" />
                </svg>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
