"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Movimiento horizontal en tiempo real sincronizado con el scroll (se devuelve hacia la derecha al subir)
  const card1X = useTransform(scrollYProgress, [0.05, 0.35], ["180px", "0px"]);
  const card2X = useTransform(scrollYProgress, [0.15, 0.45], ["220px", "0px"]);
  const card3X = useTransform(scrollYProgress, [0.25, 0.55], ["260px", "0px"]);

  const cardTransforms = [card1X, card2X, card3X];

  const testimonials = [
    {
      text: '"Unique catered our wedding in Austin, and it was phenomenal. The food was exquisite and the presentation flawless. Everyone is still talking about it!"',
      author: "Sarah & Mike",
      bgColor: "bg-[#FAF6EE]",
      textColor: "text-[#38261A]",
      offset: "md:-ml-24 md:w-[calc(100%+6rem)]",
    },
    {
      text: '"Our corporate gala needed a premium touch, and Patricia delivered. From the savory charcuterie boards to the customized fondant cookies, every detail was perfect."',
      author: "TechCorp Austin",
      bgColor: "bg-[#FCEAB6]", // Creamy pastel yellow
      textColor: "text-[#38261A]",
      offset: "md:ml-12 md:w-[calc(100%-3rem)]",
    },
    {
      text: '"The artisan quality is unmatched. I ordered a custom fondant cake and a spread for a baby shower. It was beautiful, modern, and absolutely delicious."',
      author: "Elena R.",
      bgColor: "bg-[#38261A]", // Dark chocolate cacao
      textColor: "text-[#FAF6EE]",
      offset: "md:ml-0 md:w-full",
    }
  ];

  return (
    <section ref={sectionRef} className="w-full flex flex-col md:flex-row bg-pink min-h-[650px] md:min-h-[800px] overflow-hidden">
      {/* Left Side: Title (Vertically Centered & Large) */}
      <div className="w-full md:w-1/2 p-12 md:p-20 flex items-center justify-center relative overflow-hidden">
        {/* Background Watermark Icon */}
        <img 
          src="/icono-unique-gris.png" 
          alt="" 
          className="absolute opacity-[0.12] pointer-events-none w-[350px] md:w-[520px] object-contain left-4 md:left-12 z-0"
        />

        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl md:text-[5.5rem] lg:text-[7.5rem] leading-[0.88] text-cacao tracking-tighter relative z-10"
        >
          From Our<br />Clients
        </motion.h2>
      </div>

      {/* Right Side: Cascading Cards with Scroll-Driven Real-time Animation */}
      <div className="w-full md:w-1/2 flex flex-col justify-center py-12 pr-0 pl-4 md:pl-0 gap-4 md:gap-0">
        {testimonials.map((t, index) => (
          <motion.div 
            key={index} 
            style={{ x: cardTransforms[index] }}
            className={`
              w-full p-8 md:p-12 z-10 rounded-l-2xl md:rounded-l-3xl rounded-r-none shadow-xl
              ${t.bgColor} ${t.textColor} ${t.offset}
            `}
          >
            <p className="font-body italic text-[20px] md:text-[25px] leading-[1.35] mb-6 font-medium">
              {t.text}
            </p>
            <p className="font-ui uppercase tracking-widest text-xs md:text-sm font-semibold opacity-90">
              {t.author}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
