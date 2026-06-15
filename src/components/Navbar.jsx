import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#featured" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Best Sellers", href: "#best-sellers" },
    { name: "Offers", href: "#offers" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-3 shadow-md bg-opacity-95"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="text-2xl md:text-3xl font-serif font-extrabold tracking-tight text-chocolate flex items-center">
              SHAKE
              <span className="text-strawberry ml-1 font-sans italic text-glow-pink">HAVEN</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-chocolate font-medium hover:text-strawberry transition-colors duration-200 text-sm tracking-wide relative group"
              >
                {link.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-strawberry transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-chocolate hover:bg-strawberry text-cream font-bold px-6 py-2.5 rounded-full shadow-lg hover:shadow-strawberry/20 hover-shine transition-all duration-300 text-sm tracking-wide"
            >
              Order Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-chocolate focus:outline-none p-1.5 rounded-full hover:bg-chocolate/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-cream-light border-b border-chocolate/10 shadow-xl lg:hidden flex flex-col items-center py-6 gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-chocolate font-semibold text-lg hover:text-strawberry transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              whileTap={{ scale: 0.95 }}
              className="w-4/5 text-center bg-strawberry hover:bg-chocolate text-cream font-bold py-3 rounded-full shadow-lg mt-2 transition-all duration-300"
            >
              Order Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
