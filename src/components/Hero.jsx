import React from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "./hero/AnimatedBackground";
import FloatingElements from "./hero/FloatingElements";
import ParticleLayer from "./hero/ParticleLayer";
import HeroContent from "./hero/HeroContent";
import HeroCarousel from "./hero/HeroCarousel";
import { slideLeft } from "./hero/variants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-20 flex items-center justify-center overflow-hidden bg-cream-gradient"
    >
      {/* Layer 0: Gradient blobs + mesh + light streaks */}
      <AnimatedBackground />

      {/* Layer 1: Glowing sparkle particles */}
      <ParticleLayer />

      {/* Layer 2: Floating ingredient emojis with parallax */}
      <FloatingElements />

      {/* Layer 3: Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" style={{ zIndex: 2 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">

          {/* Left: Marketing content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <HeroContent />
          </motion.div>

          {/* Right: Carousel */}
          <motion.div
            {...slideLeft(0.2)}
            className="flex justify-center items-center"
          >
            <HeroCarousel />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
