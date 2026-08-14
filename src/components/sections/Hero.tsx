"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedContainer } from "../ui/AnimatedContainer";

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Smooth real-time scroll tracking for horizontal carousel shift
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  // Moves to the left on scroll down, moves back to the right on scroll up
  const scrollX = useTransform(scrollYProgress, [0.05, 0.85], ["120px", "-750px"]);

  return (
    <section id="home" className="w-full bg-[#F9F9F9] relative flex flex-col overflow-hidden">
      
      {/* Upper Section: Contains Video Background, Logo, Text */}
      <div className="relative w-full pt-32 md:pt-44 flex flex-col justify-end overflow-hidden pb-8 md:pb-12">
        {/* Background Video with Very Light Delicate Pink Overlay */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="/vid-hero.mp4" type="video/mp4" />
          </video>
          {/* Extremely light, subtle pink overlay */}
          <div className="absolute inset-0 bg-[#FFC0CB]/15 backdrop-blur-[0.5px]" />
        </div>

        <AnimatedContainer className="relative z-10 flex flex-col md:flex-row md:items-end justify-between px-6 md:px-12 w-full">
          <div className="w-full md:w-3/5 flex items-center justify-center md:justify-start mb-8 md:mb-0">
            <img 
              src="/unique-logo1.png" 
              alt="Unique Logo" 
              className="w-full max-w-[400px] md:max-w-[700px] h-auto object-contain drop-shadow-md" 
            />
          </div>
          <div className="w-full md:w-2/5 flex flex-col justify-center items-center md:items-start md:pb-8 md:pl-10">
            <h2 className="font-ui uppercase tracking-widest text-2xl md:text-[32px] text-cacao leading-tight font-semibold drop-shadow-sm text-center md:text-left mb-3">
              CATERING & BAKERY
            </h2>
            <p className="font-body italic text-cacao/90 text-base md:text-lg leading-relaxed text-center md:text-left max-w-[380px] drop-shadow-sm font-medium">
              Premium artisanal bakery and exclusive catering for weddings, social gatherings, and corporate events in Austin, Texas.
            </p>
          </div>
        </AnimatedContainer>
      </div>

      {/* Scroll-Driven Interactive Horizontal Carousel Track */}
      <div ref={scrollRef} className="relative z-10 w-full overflow-hidden pb-8 md:pb-12 mt-8 md:mt-12">
        <motion.div 
          style={{ x: scrollX }}
          className="flex gap-4 md:gap-6 px-6 md:px-12 w-max"
        >
          {/* Card 1: Pastel 1 */}
          <div className="w-[280px] sm:w-[350px] md:w-[420px] h-[360px] md:h-[550px] flex-shrink-0 overflow-hidden relative rounded-3xl md:rounded-[40px] shadow-xl border border-black/5">
            <img 
              src="/pastel1.png" 
              alt="Artisan Cake 1" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 2: Pastel 2 */}
          <div className="w-[280px] sm:w-[350px] md:w-[420px] h-[360px] md:h-[550px] flex-shrink-0 overflow-hidden relative rounded-3xl md:rounded-[40px] shadow-xl border border-black/5">
            <img 
              src="/pastel2.png" 
              alt="Artisan Cake 2" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 3: Pink CTA Card */}
          <div className="w-[280px] sm:w-[350px] md:w-[420px] h-[360px] md:h-[550px] flex-shrink-0 bg-pink p-8 md:p-12 flex flex-col justify-between rounded-3xl md:rounded-[40px] shadow-xl">
            <div className="flex justify-center pt-8">
              <button 
                onClick={onOpenContact}
                className="bg-cacao text-offwhite font-ui font-medium px-8 py-3.5 rounded-full text-xs md:text-sm hover:scale-95 transition-transform uppercase tracking-wider shadow-md active:scale-95"
              >
                Request Consultation
              </button>
            </div>
            <div className="font-body text-cacao italic text-2xl md:text-3xl leading-snug pb-4 text-center md:text-left font-medium">
              Austin, TX
            </div>
          </div>

          {/* Card 4: Pastel 3 */}
          <div className="w-[280px] sm:w-[350px] md:w-[420px] h-[360px] md:h-[550px] flex-shrink-0 overflow-hidden relative rounded-3xl md:rounded-[40px] shadow-xl border border-black/5">
            <img 
              src="/pastel3.png" 
              alt="Artisan Cake 3" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 5: Pastel 4 */}
          <div className="w-[280px] sm:w-[350px] md:w-[420px] h-[360px] md:h-[550px] flex-shrink-0 overflow-hidden relative rounded-3xl md:rounded-[40px] shadow-xl border border-black/5">
            <img 
              src="/pastel4.png" 
              alt="Artisan Cake 4" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 6: Pastel 1 (2) */}
          <div className="w-[280px] sm:w-[350px] md:w-[420px] h-[360px] md:h-[550px] flex-shrink-0 overflow-hidden relative rounded-3xl md:rounded-[40px] shadow-xl border border-black/5">
            <img 
              src="/pastel1 (2).png" 
              alt="Artisan Cake 5" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 7: Fondant Gourmet Cake */}
          <div className="w-[280px] sm:w-[350px] md:w-[420px] h-[360px] md:h-[550px] flex-shrink-0 overflow-hidden relative rounded-3xl md:rounded-[40px] shadow-xl border border-black/5">
            <img 
              src="/mesa1.png" 
              alt="Gourmet Catering Table" 
              className="w-full h-full object-cover"
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
}
