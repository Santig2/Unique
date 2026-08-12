"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, MessageSquare, Phone, ArrowRight } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const phoneNumber = "+1 (512) 621-4389";
  const whatsappUrl = "https://wa.me/15126214389?text=Hello!%20I%20would%20like%20to%20get%20more%20information%20about%20Unique%20Catering%20%26%20Bakery.";
  const smsUrl = "sms:+15126214389?body=Hello!%20I%20would%20like%20to%20get%20more%20information%20about%20Unique%20Catering%20%26%20Bakery.";
  const callUrl = "tel:+15126214389";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-full max-w-lg bg-[#FAF6EE] text-[#38261A] rounded-3xl p-8 md:p-10 shadow-2xl z-10 border border-[#38261A]/10 my-auto overflow-hidden"
          >
            {/* Background Watermark */}
            <img 
              src="/icono-unique-gris.png" 
              alt="" 
              className="absolute opacity-[0.07] pointer-events-none w-[350px] object-contain -right-12 -bottom-12 z-0"
            />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#38261A]/5 hover:bg-[#38261A]/10 text-[#38261A] transition-colors z-20"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3 text-[#38261A]">
                <Sparkles className="w-4 h-4 text-[#FFC0CB]" />
                <span className="font-ui uppercase tracking-widest text-xs font-semibold">
                  Contact Chef Patricia
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl text-[#38261A] mb-3 leading-none">
                How would you like to connect?
              </h2>
              <p className="font-body text-sm md:text-base text-[#38261A]/80 mb-8 leading-relaxed">
                Select your preferred messaging option to get a quote or place your order directly.
              </p>

              {/* Contact Method Buttons */}
              <div className="flex flex-col gap-4 mb-6">
                
                {/* 1. WhatsApp Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="group flex items-center justify-between bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 md:p-5 rounded-2xl shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-2.5 rounded-xl">
                      <svg 
                        className="w-6 h-6 fill-current text-white" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.754zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="font-ui font-bold text-base md:text-lg uppercase tracking-wider">
                        WhatsApp Chat
                      </div>
                      <div className="font-body text-xs md:text-sm opacity-90">
                        Chat directly on WhatsApp
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* 2. Text Message (SMS) Button */}
                <a
                  href={smsUrl}
                  onClick={onClose}
                  className="group flex items-center justify-between bg-[#38261A] hover:bg-black text-[#FAF6EE] p-4 md:p-5 rounded-2xl shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2.5 rounded-xl">
                      <MessageSquare className="w-6 h-6 text-pink" />
                    </div>
                    <div className="text-left">
                      <div className="font-ui font-bold text-base md:text-lg uppercase tracking-wider">
                        Text Message (SMS)
                      </div>
                      <div className="font-body text-xs md:text-sm text-[#FAF6EE]/80">
                        Send a traditional text message
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-pink group-hover:translate-x-1 transition-transform" />
                </a>

                {/* 3. Direct Phone Call */}
                <a
                  href={callUrl}
                  onClick={onClose}
                  className="group flex items-center justify-between bg-white border border-[#38261A]/15 hover:border-[#38261A]/40 text-[#38261A] p-4 md:p-5 rounded-2xl shadow-sm transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-[#38261A]/5 p-2.5 rounded-xl">
                      <Phone className="w-6 h-6 text-[#38261A]" />
                    </div>
                    <div className="text-left">
                      <div className="font-ui font-bold text-sm md:text-base uppercase tracking-wider">
                        Direct Phone Call
                      </div>
                      <div className="font-body text-xs md:text-sm text-[#38261A]/70 font-semibold">
                        {phoneNumber}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#38261A]/60" />
                </a>

              </div>

              {/* Footer Phone Info */}
              <div className="text-center font-ui text-xs text-[#38261A]/60 uppercase tracking-widest font-medium">
                Phone / WhatsApp: <span className="font-semibold text-[#38261A]">{phoneNumber}</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
