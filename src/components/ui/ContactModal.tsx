"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Calendar, Users, Sparkles, Send } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "wedding",
    guests: "50-100",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "wedding",
      guests: "50-100",
      date: "",
      message: "",
    });
    onClose();
  };

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
            className="relative w-full max-w-2xl bg-[#FAF6EE] text-[#38261A] rounded-3xl p-8 md:p-12 shadow-2xl z-10 border border-[#38261A]/10 my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#38261A]/5 hover:bg-[#38261A]/10 text-[#38261A] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-8"
              >
                <div className="w-16 h-16 bg-[#FFC0CB] rounded-full flex items-center justify-center mb-6 text-[#38261A]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display text-5xl md:text-6xl text-[#38261A] mb-4">
                  Thank You!
                </h3>
                <p className="font-body text-base md:text-lg text-[#38261A]/80 max-w-md mb-8 leading-relaxed">
                  Chef Patricia and our catering team have received your request. We’ll review your details and reach out within 24 hours.
                </p>
                <button
                  onClick={handleReset}
                  className="bg-[#38261A] text-[#FAF6EE] font-ui uppercase tracking-wider text-xs md:text-sm px-8 py-3.5 rounded-full hover:scale-95 transition-transform"
                >
                  Close Window
                </button>
              </motion.div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2 text-[#38261A]">
                  <Sparkles className="w-4 h-4 text-[#FFC0CB]" />
                  <span className="font-ui uppercase tracking-widest text-xs font-semibold">
                    Get a Custom Consultation
                  </span>
                </div>

                <h2 className="font-display text-4xl md:text-6xl text-[#38261A] mb-3 leading-none">
                  Let's Plan Your Event
                </h2>
                <p className="font-body text-sm text-[#38261A]/70 mb-8">
                  Fill out the form below to receive a personalized catering quote from Unique.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-ui uppercase tracking-wider text-[#38261A] font-semibold mb-1.5">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Patricia Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-[#38261A]/15 rounded-xl px-4 py-2.5 text-sm text-[#38261A] focus:outline-none focus:border-[#38261A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-ui uppercase tracking-wider text-[#38261A] font-semibold mb-1.5">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="patricia@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-[#38261A]/15 rounded-xl px-4 py-2.5 text-sm text-[#38261A] focus:outline-none focus:border-[#38261A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-ui uppercase tracking-wider text-[#38261A] font-semibold mb-1.5">
                        Event Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full bg-white border border-[#38261A]/15 rounded-xl px-3 py-2.5 text-sm text-[#38261A] focus:outline-none focus:border-[#38261A]"
                      >
                        <option value="wedding">Wedding Catering</option>
                        <option value="corporate">Corporate Gala</option>
                        <option value="custom-cake">Custom Cake / Bakery</option>
                        <option value="private-party">Private Party</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-ui uppercase tracking-wider text-[#38261A] font-semibold mb-1.5 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" /> Guest Count
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-white border border-[#38261A]/15 rounded-xl px-3 py-2.5 text-sm text-[#38261A] focus:outline-none focus:border-[#38261A]"
                      >
                        <option value="1-25">1 - 25 Guests</option>
                        <option value="25-50">25 - 50 Guests</option>
                        <option value="50-100">50 - 100 Guests</option>
                        <option value="100+">100+ Guests</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-ui uppercase tracking-wider text-[#38261A] font-semibold mb-1.5 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> Event Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-white border border-[#38261A]/15 rounded-xl px-3 py-2 text-sm text-[#38261A] focus:outline-none focus:border-[#38261A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-ui uppercase tracking-wider text-[#38261A] font-semibold mb-1.5">
                      Tell Us About Your Vision
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share details about menu preferences, dietary needs, or aesthetic theme..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-[#38261A]/15 rounded-xl px-4 py-2.5 text-sm text-[#38261A] focus:outline-none focus:border-[#38261A] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#38261A] hover:bg-black text-[#FAF6EE] font-ui uppercase tracking-wider text-xs md:text-sm font-semibold py-3.5 rounded-full hover:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-2 shadow-lg"
                  >
                    <Send className="w-4 h-4" /> Send Quote Request
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
