"use client";

import { motion } from "framer-motion";

export function GallerySection() {
  const images = [
    "/pastel1.png",
    "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=800&auto=format&fit=crop", // Pink cupcakes
    "/pastel2.png",
    "https://images.unsplash.com/photo-1514517521153-1be72277b32f?q=80&w=800&auto=format&fit=crop", // Tarts / desserts
    "/pastel3.png",
    "https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?q=80&w=800&auto=format&fit=crop", // Charcuterie board
    "/pastel4.png",
    "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop", // Pastries
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
