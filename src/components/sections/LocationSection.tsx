"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles, Navigation, CheckCircle2 } from "lucide-react";

interface LocationSectionProps {
  onOpenContact: () => void;
}

export function LocationSection({ onOpenContact }: LocationSectionProps) {
  const serviceAreas = [
    "Downtown Austin & Central TX",
    "Westlake, Lakeway & Bee Cave",
    "Round Rock & Cedar Park",
    "Dripping Springs (Wedding Capital)",
    "Georgetown & San Marcos Area",
  ];

  return (
    <section id="location" className="w-full bg-[#F4EDD3]/40 py-20 px-6 md:px-16 overflow-hidden relative border-t border-b border-black/5">
      {/* Subtle Background Watermark */}
      <img 
        src="/icono-unique-gris.png" 
        alt="" 
        className="absolute opacity-[0.08] pointer-events-none w-[450px] md:w-[650px] object-contain right-0 bottom-0 z-0"
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3 text-[#38261A]">
            <Sparkles className="w-5 h-5 text-pink" />
            <span className="font-ui uppercase tracking-widest text-xs font-semibold">
              Coverage & Locations
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-[6.5rem] leading-[0.9] text-[#38261A] tracking-tighter mb-6">
            Where Do We Operate?
          </h2>

          <p className="font-body italic text-[#38261A]/85 text-lg md:text-xl max-w-[650px] leading-relaxed">
            Proudly based in <strong className="font-semibold text-[#38261A]">Austin, Texas</strong>. We offer full-service catering and artisanal bakery delivery throughout the metropolitan area.
          </p>
        </div>

        {/* Content Layout: Left Texas Map Graphic, Right Coverage Info */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left: Transparent Background Texas Map Image with Pulsing Unique Icon Marker */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 flex items-center justify-center relative p-2"
          >
            <div className="relative w-full max-w-[500px] flex items-center justify-center">
              
              {/* Texas State Transparent PNG Image */}
              <img 
                src="/texas.png" 
                alt="State of Texas Map" 
                className="w-full h-auto object-contain drop-shadow-md"
              />

              {/* Austin TX Location Marker over Texas map */}
              <div className="absolute top-[52%] left-[54%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                
                {/* Animated Pulsing Ring */}
                <span className="absolute w-14 h-14 rounded-full bg-pink/70 animate-ping" />
                <span className="absolute w-20 h-20 rounded-full bg-pink/30 animate-pulse" />

                {/* Unique Brand Pin Icon */}
                <div className="relative z-10 bg-white p-2 rounded-full shadow-2xl border-2 border-[#38261A] hover:scale-110 transition-transform cursor-pointer group">
                  <img 
                    src="/icono-unique.png" 
                    alt="Austin, TX Unique Base" 
                    className="w-9 h-9 md:w-11 md:h-11 object-contain"
                  />
                  
                  {/* Tooltip Badge */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 hidden group-hover:flex flex-col items-center whitespace-nowrap z-30">
                    <div className="bg-[#38261A] text-[#FAF6EE] text-xs font-ui uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-pink" />
                      <span>Austin, TX — Main Kitchen</span>
                    </div>
                  </div>
                </div>

                {/* City Label Badge */}
                <div className="mt-2.5 bg-[#38261A] text-[#FAF6EE] font-serif italic text-sm md:text-base px-4 py-1 rounded-full shadow-md border border-white/20 flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-pink" />
                  <span>Austin, TX (HQ)</span>
                </div>

              </div>

            </div>
          </motion.div>

          {/* Right: Detailed Service Information & Interactive Checklist */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <div className="bg-pink text-[#38261A] font-serif italic text-lg px-5 py-2 rounded-full mb-6 border border-black/10 shadow-sm">
              Covers up to 50 miles from Central Austin
            </div>

            <h3 className="font-serif text-3xl md:text-4xl text-[#38261A] font-normal mb-6 leading-snug">
              Full-Service Catering & Scheduled Local Deliveries
            </h3>

            <p className="font-body text-[#38261A]/85 text-base md:text-lg leading-relaxed mb-8">
              We bring our culinary creations and fine pastry displays directly to your venue or residence. Serving weddings, corporate galas, and special celebrations across:
            </p>

            {/* Service Areas Checklist */}
            <div className="flex flex-col gap-3.5 w-full mb-10">
              {serviceAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/80 p-3.5 rounded-xl border border-black/5 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-pink flex-shrink-0" />
                  <span className="font-ui text-sm md:text-base text-[#38261A] font-medium">{area}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenContact}
              className="bg-[#38261A] text-[#FAF6EE] font-ui uppercase tracking-wider text-xs md:text-sm font-semibold px-9 py-4 rounded-full hover:scale-95 transition-transform shadow-lg active:scale-95 flex items-center gap-3"
            >
              <span>Check Delivery Availability</span>
              <MapPin className="w-4 h-4 text-pink" />
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
