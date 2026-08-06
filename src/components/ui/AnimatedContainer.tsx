"use client";

import { motion } from "framer-motion";
import React from "react";

export function AnimatedContainer({ 
  children, 
  className,
  delay = 0,
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.23, 1, 0.32, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
