import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiChevronRight, FiShoppingCart } from "react-icons/fi";

export default function FloatingWidgets() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 1. Floating WhatsApp Button (Fades in on scroll) */}
      <AnimatePresence>
        {isVisible && (
          <motion.a
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://wa.me/15559876543?text=Hi%20Shake%20Haven!%20I'd%20like%20to%20order%20some%20gourmet%20thick%20shakes."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-cream w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba59] transition-colors duration-300 group cursor-pointer"
            aria-label="Order via WhatsApp"
          >
            {/* Soft pulsing halo */}
            <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping -z-10 group-hover:animate-none"></span>
            
            <FaWhatsapp size={28} />
          </motion.a>
        )}
      </AnimatePresence>

      {/* 2. Sticky Mobile Order Action Bar (Visible only on small viewports) */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-cream/80 backdrop-blur-lg border-t border-chocolate/5 px-4 py-3 md:hidden flex items-center justify-between shadow-2xl">
        <div>
          <span className="text-[10px] text-chocolate/55 uppercase font-bold tracking-wider block">Craving Sweets?</span>
          <span className="text-sm font-bold text-chocolate">Free Delivery Today ⚡</span>
        </div>
        <motion.a
          href="#contact"
          whileTap={{ scale: 0.95 }}
          className="bg-strawberry hover:bg-chocolate text-cream font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-xl shadow-lg flex items-center gap-1.5"
        >
          <FiShoppingCart /> Order Now <FiChevronRight />
        </motion.a>
      </div>
    </>
  );
}
