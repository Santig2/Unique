"use client";

import { motion } from "framer-motion";

export function GallerySection() {
  const images = [
    "/mesa1.png",
    "/pastel1.png",
    "/cake-pops.png",
    "/mesa2.png",
    "/pastel2.png",
    "/cupcake1.png",
    "/mesa3.png",
    "/pastel3.png",
    "/cake-pop2.png",
    "/pastel4.png",
  ];

  // Duplicar el array de imágenes para crear un bucle continuo e infinito perfecto
  const doubledImages = [...images, ...images];

  return (
    <section className="w-full relative overflow-hidden bg-cream h-[380px] md:h-[550px] flex items-center">
      {/* Track infinito de velocidad lenta e ininterrumpida */}
      <motion.div
        className="flex h-full w-max"
        animate={{
          x: [0, "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 45, // Deslizamiento pausado y muy elegante
            ease: "linear",
          },
        }}
      >
        {doubledImages.map((src, index) => (
          <div 
            key={index} 
            className="h-full w-[280px] sm:w-[350px] md:w-[450px] flex-shrink-0 relative border-r border-white/20"
          >
            <img 
              src={src} 
              alt={`Gallery item ${(index % images.length) + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
