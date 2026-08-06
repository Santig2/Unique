"use client";

import { motion } from "framer-motion";
import { Award, Heart, Sparkles, ChefHat } from "lucide-react";

interface ChefSectionProps {
  onOpenContact: () => void;
}

export function ChefSection({ onOpenContact }: ChefSectionProps) {
  return (
    <section id="chef" className="w-full bg-[#F9F9F9] py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Left Side: Chef Image with Decorative Accents */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 relative flex justify-center"
        >
          {/* Pink Accent Card Background */}
          <div className="absolute -inset-4 bg-pink/50 rounded-[40px] transform -rotate-3 z-0" />

          {/* Main Photo */}
          <div className="relative z-10 w-full max-w-[500px] h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-black/10">
            <img 
              src="/owner3.jpeg" 
              alt="Chef Patricia" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Sticker Badge */}
          <motion.div 
            initial={{ scale: 0.8, rotate: 12 }}
            whileInView={{ scale: 1, rotate: 12 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -bottom-6 -right-2 md:right-4 z-20 bg-pink text-[#38261A] font-body italic font-medium text-xl md:text-2xl px-6 py-3 rounded-full border border-black/20 shadow-lg flex items-center gap-2"
          >
            <ChefHat className="w-6 h-6" />
            <span>Master Baker</span>
          </motion.div>
        </motion.div>

        {/* Right Side: Chef Biography & Philosophy */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 flex flex-col items-start z-10"
        >
          <div className="flex items-center gap-2 mb-3 text-[#38261A]">
            <Sparkles className="w-5 h-5 text-pink" />
            <span className="font-ui uppercase tracking-widest text-xs font-semibold">
              The Soul Behind Unique
            </span>
          </div>

          <h2 className="font-display text-6xl md:text-[6rem] leading-[0.85] text-[#38261A] tracking-tighter mb-8">
            Meet Chef<br />Patricia.
          </h2>

          <p className="font-body text-[#38261A]/85 text-base md:text-lg leading-relaxed mb-6 font-normal">
            With over 12 years of culinary expertise, Chef Patricia founded **Unique Catering & Bakery** with the vision to elevate social and corporate events in Austin, TX.
          </p>

          <p className="font-body italic text-[#38261A]/80 text-base md:text-lg leading-relaxed mb-10">
            "For me, every dessert and catering display is an edible work of art. We blend operational precision with a passion for scratch-made pastries."
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6 w-full mb-10 font-ui text-xs md:text-sm uppercase tracking-wider font-semibold text-[#38261A]">
            <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-black/5 shadow-sm">
              <Award className="w-5 h-5 text-pink flex-shrink-0" />
              <span>Artisan Excellence</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-black/5 shadow-sm">
              <Heart className="w-5 h-5 text-pink flex-shrink-0" />
              <span>Tailored Menus</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onOpenContact}
            className="bg-[#38261A] text-[#FAF6EE] font-ui uppercase tracking-wider text-xs md:text-sm font-semibold px-9 py-4 rounded-full hover:scale-95 transition-transform shadow-lg active:scale-95"
          >
            Book Chef Patricia
          </button>
        </motion.div>

      </div>
    </section>
  );
}
