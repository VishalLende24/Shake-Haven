import React from "react";
import { motion } from "framer-motion";
import { FiChevronRight, FiCoffee, FiStar } from "react-icons/fi";

export default function Hero() {
  // Floating elements animation variant
  const floatVariant = (duration = 5, yDist = 20) => ({
    animate: {
      y: [0, -yDist, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  });

  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-16 flex items-center justify-center relative overflow-hidden bg-cream-gradient"
    >
      {/* Background Ambient Blur Blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-strawberry-light/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-mango-light/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

      {/* Floating ingredients placeholders / abstract elements for luxury dessert theme */}
      <motion.div
        variants={floatVariant(6, 25)}
        animate="animate"
        className="absolute top-32 left-[12%] text-strawberry/40 hidden md:block"
      >
        <span className="text-4xl">🍓</span>
      </motion.div>
      <motion.div
        variants={floatVariant(7, 20)}
        animate="animate"
        className="absolute bottom-32 left-[8%] text-chocolate/30 hidden md:block"
      >
        <span className="text-4xl">🍫</span>
      </motion.div>
      <motion.div
        variants={floatVariant(5, 15)}
        animate="animate"
        className="absolute top-40 right-[15%] text-mint/40 hidden md:block"
      >
        <span className="text-3xl">🍃</span>
      </motion.div>
      <motion.div
        variants={floatVariant(8, 30)}
        animate="animate"
        className="absolute bottom-40 right-[8%] text-mango/40 hidden md:block"
      >
        <span className="text-4xl">🍪</span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col text-center lg:text-left items-center lg:items-start"
          >
            {/* Tagline */}
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-strawberry/10 text-strawberry font-bold text-xs uppercase tracking-widest mb-6">
              <FiStar className="fill-current" /> LUXURY THICK SHAKES
            </span>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold text-chocolate tracking-tight leading-[1.1] mb-6">
              Every Sip Feels <br />
              <span className="text-strawberry text-glow-pink">Like Dessert</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-chocolate/80 font-normal max-w-xl mb-8 leading-relaxed">
              Indulge in artisanal, ultra-thick shakes hand-crafted with premium double-churned milk fat, Belgian chocolates, and fresh farm-sourced fruits. It's not just a beverage; it's an experience.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-chocolate hover:bg-strawberry text-cream font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-strawberry/20 hover-shine transition-all duration-300 text-base text-center flex items-center justify-center gap-2"
              >
                Order Now <FiChevronRight />
              </motion.a>
              <motion.a
                href="#featured"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-chocolate/30 hover:border-chocolate text-chocolate font-bold px-8 py-4 rounded-full transition-all duration-300 text-base text-center"
              >
                View Menu
              </motion.a>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-chocolate/10 w-full justify-center lg:justify-start">
              <div>
                <span className="block text-3xl font-bold font-serif text-chocolate">4.9★</span>
                <span className="text-xs uppercase tracking-wider text-chocolate/60">Google Rating</span>
              </div>
              <div className="h-8 w-px bg-chocolate/15"></div>
              <div>
                <span className="block text-3xl font-bold font-serif text-chocolate">100%</span>
                <span className="text-xs uppercase tracking-wider text-chocolate/60">Pure Milk Fat</span>
              </div>
              <div className="h-8 w-px bg-chocolate/15"></div>
              <div>
                <span className="block text-3xl font-bold font-serif text-chocolate">30+</span>
                <span className="text-xs uppercase tracking-wider text-chocolate/60">Gourmet Flavors</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center items-center relative"
          >
            {/* Behind Glow Circle */}
            <div className="absolute w-[80%] aspect-square bg-gradient-to-tr from-strawberry/20 to-mango/20 rounded-full blur-3xl animate-pulse-slow"></div>

            {/* Main Image Container */}
            <motion.div
              variants={floatVariant(6, 18)}
              animate="animate"
              className="relative max-w-sm sm:max-w-md w-full"
            >
              {/* Outer Dessert Ring decoration */}
              <div className="absolute -inset-4 border-2 border-dashed border-strawberry/20 rounded-full animate-[spin_40s_linear_infinite] pointer-events-none"></div>

              {/* Real Generated Asset */}
              <img
                src="/assets/hero_shake.png"
                alt="Signature Shake Haven Thick Shake"
                className="w-full h-auto drop-shadow-[0_20px_40px_rgba(74,44,42,0.25)] relative z-10 hover:scale-105 transition-transform duration-500 rounded-3xl"
              />

              {/* floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -top-4 -right-4 bg-mango text-chocolate-dark font-extrabold text-xs tracking-wider uppercase px-4 py-3 rounded-2xl shadow-xl z-20 flex flex-col items-center justify-center rotate-12"
              >
                <span>SIGNATURE</span>
                <span className="text-[10px] opacity-85">Double Thick</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
