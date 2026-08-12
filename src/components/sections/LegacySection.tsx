"use client";

import { useState, useEffect } from "react";
import { AnimatedContainer } from "../ui/AnimatedContainer";

interface LegacySectionProps {
  onOpenContact: () => void;
}

export function LegacySection({ onOpenContact }: LegacySectionProps) {
  const bgImages = [
    "/arreglo1.png",
    "/galleta.png",
    "/arreglo.png",
    "/croassant.png",
    "/alfajor.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [bgImages.length]);

  return (
    <section id="story" className="w-full relative min-h-[600px] md:min-h-[800px] flex items-center justify-end overflow-hidden">
      {/* Background Image Carousel - Full width */}
      <div className="absolute inset-0 z-0 bg-[#38261A]">
        {bgImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Experience Exceptional Background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Subtle dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Pink Card - Floating on right */}
      <AnimatedContainer 
        className="relative z-10 w-full md:w-[45%] max-w-[550px] bg-pink p-12 md:p-16 rounded-none shadow-2xl flex flex-col items-start md:mr-32"
      >
        <h2 className="font-display text-[50px] md:text-[75px] leading-[0.9] text-cacao tracking-tight mb-8">
          Experience<br />
          Exceptional.
        </h2>
        
        <p className="font-body text-cacao/90 text-sm md:text-base leading-relaxed mb-10">
          Transforming special events and moments into memorable culinary experiences, fusing operational catering precision with artisanal delicacy.
        </p>

        <button 
          onClick={onOpenContact}
          className="bg-cacao text-offwhite font-ui uppercase tracking-wider text-sm px-6 py-3 rounded-full hover:scale-95 transition-transform shadow-md"
        >
          Book Your Event
        </button>
      </AnimatedContainer>
    </section>
  );
}
