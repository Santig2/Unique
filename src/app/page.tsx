"use client";

import { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { MenuSection } from "@/components/sections/MenuSection";
import { LegacySection } from "@/components/sections/LegacySection";
import { ChefSection } from "@/components/sections/ChefSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { GallerySection } from "@/components/sections/GallerySection";
import { Footer } from "@/components/sections/Footer";
import { ContactModal } from "@/components/ui/ContactModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <main className="w-full min-h-screen bg-cream">
      <div className="w-full mx-auto relative overflow-hidden">
        <Navbar onOpenContact={handleOpenContact} />
        <Hero onOpenContact={handleOpenContact} />
        <MenuSection onOpenContact={handleOpenContact} />
        <LegacySection onOpenContact={handleOpenContact} />
        <ChefSection onOpenContact={handleOpenContact} />
        <LocationSection onOpenContact={handleOpenContact} />
        <Testimonials />
        <GallerySection />
        <Footer onOpenContact={handleOpenContact} />

        <ContactModal 
          isOpen={isContactOpen} 
          onClose={handleCloseContact} 
        />
      </div>
    </main>
  );
}
