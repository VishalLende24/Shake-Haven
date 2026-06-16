import React, { useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useCarousel } from "../../hooks/useCarousel";
import imgStrawberry from "../../assets/strawberry_dream.png";
import imgChocolate  from "../../assets/chocolate_overload.png";
import imgMango      from "../../assets/mango_mania.png";
import imgBlueberry  from "../../assets/blueberry_bliss.png";
import imgOreo       from "../../assets/oreo_blast.png";

const SHAKES = [
  {
    src: imgStrawberry,
    label: "Strawberry Dream",
    sub: "Fresh · Fruity · Creamy",
    glow: "#FF5C8A",
    blobA: "rgba(255,92,138,0.18)",
    blobB: "rgba(255,183,3,0.10)",
    orbitEmoji: ["🍓", "🍓", "🌿", "✨"],
  },
  {
    src: imgChocolate,
    label: "Chocolate Overload",
    sub: "Rich · Velvety · Intense",
    glow: "#4A2C2A",
    blobA: "rgba(74,44,42,0.20)",
    blobB: "rgba(255,183,3,0.10)",
    orbitEmoji: ["🍫", "🍪", "🍫", "✨"],
  },
  {
    src: imgMango,
    label: "Mango Mania",
    sub: "Tropical · Sweet · Tangy",
    glow: "#FFB703",
    blobA: "rgba(255,183,3,0.20)",
    blobB: "rgba(255,92,138,0.10)",
    orbitEmoji: ["🥭", "🍊", "🌿", "✨"],
  },
  {
    src: imgBlueberry,
    label: "Blueberry Bliss",
    sub: "Bold · Berry · Luscious",
    glow: "#4D73B7",
    blobA: "rgba(77,115,183,0.20)",
    blobB: "rgba(143,214,148,0.10)",
    orbitEmoji: ["🫐", "🫐", "🌿", "✨"],
  },
  {
    src: imgOreo,
    label: "Oreo Blast",
    sub: "Crunchy · Dark · Decadent",
    glow: "#2D1B1A",
    blobA: "rgba(45,27,26,0.18)",
    blobB: "rgba(234,219,200,0.15)",
    orbitEmoji: ["🍪", "🍪", "🍫", "✨"],
  },
];

// Orbit: 4 items at corners around the image
const ORBIT = [
  { top: "2%",  left: "4%"  },
  { top: "2%",  right: "4%" },
  { bottom: "8%", left: "4%" },
  { bottom: "8%", right: "4%" },
];

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 120 : -120, scale: 0.9 }),
  center: {
    opacity: 1, x: 0, scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir) => ({
    opacity: 0, x: dir > 0 ? -120 : 120, scale: 0.9,
    transition: { duration: 0.4, ease: "easeIn" },
  }),
};

export default function HeroCarousel() {
  const { index, direction, next, prev, go, resetTimer } = useCarousel(SHAKES.length, 4000);
  const wrapRef = useRef(null);

  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, -60]);

  const shake = SHAKES[index];
  const handleNav = (fn) => { fn(); resetTimer(); };

  return (
    <div className="relative flex flex-col items-center justify-center select-none w-full max-w-[360px] sm:max-w-[420px] mx-auto">

      {/* ── Animated glow blob ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`blob-${index}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 60%, ${shake.blobA} 0%, ${shake.blobB} 50%, transparent 75%)`,
            filter: "blur(48px)",
            zIndex: 0,
          }}
        />
      </AnimatePresence>

      {/* ── Spinning rings ── */}
      <motion.div
        className="absolute rounded-full border-2 border-dashed border-strawberry/[0.12] pointer-events-none"
        style={{ width: 320, height: 320, zIndex: 0 }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute rounded-full border border-mango/[0.08] pointer-events-none"
        style={{ width: 390, height: 390, zIndex: 0 }}
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Image stage ── */}
      <div ref={wrapRef} className="relative w-full" style={{ zIndex: 1 }}>

        {/* Orbit emojis — absolutely positioned relative to this div */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`orbit-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 pointer-events-none hidden sm:block"
            style={{ zIndex: 2 }}
          >
            {ORBIT.map((pos, i) => (
              <motion.span
                key={i}
                className="absolute text-2xl"
                style={pos}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 260, damping: 18 }}
              >
                <motion.span
                  className="block"
                  animate={{ y: [0, -8, 0], rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 3 + i * 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                >
                  {shake.orbitEmoji[i]}
                </motion.span>
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Slide transition wrapper */}
        <div className="relative overflow-hidden" style={{ height: 360 }}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Parallax + float wrapper */}
              <motion.div
                style={{ y: parallaxY }}
                className="w-full h-full flex items-center justify-center"
              >
                {/* Zoom-in on first mount, hover scale */}
                <motion.div
                  initial={{ scale: 0.72, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.75, ease: [0.34, 1.56, 0.64, 1] }}
                  whileHover={{ scale: 1.06, transition: { duration: 0.3 } }}
                  className="relative w-full h-full flex items-end justify-center pb-4 rounded-3xl overflow-hidden"
                >
                  {/* Float animation only on the image itself */}
                  <motion.img
                    src={shake.src}
                    alt={shake.label}
                    loading="lazy"
                    draggable={false}
                    animate={{ y: [0, -18, 0], rotate: [0, 1, -1, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-auto max-w-[220px] sm:max-w-[260px] md:max-w-[300px] h-auto object-contain rounded-3xl"
                    style={{
                      filter: `drop-shadow(0px 32px 40px ${shake.glow}55) drop-shadow(0px 8px 16px ${shake.glow}33)`,
                      maxHeight: 300,
                      borderRadius: "2rem",
                    }}
                  />

                  {/* Ground glow */}
                  <div
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
                    style={{
                      width: 120,
                      height: 18,
                      background: shake.glow,
                      filter: "blur(18px)",
                      opacity: 0.35,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Flavor label card — outside the overflow:hidden stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`label-${index}`}
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 }}
            className="mt-4 mx-auto glass-card px-6 py-3 rounded-2xl shadow-lg text-center w-fit"
            style={{ zIndex: 3 }}
          >
            <p className="text-sm font-extrabold uppercase tracking-widest text-chocolate">{shake.label}</p>
            <p className="text-[11px] text-chocolate/50 mt-0.5 tracking-wide">{shake.sub}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Nav arrows ── */}
      {[
        { fn: prev, Icon: FiChevronLeft,  cls: "left-0 -translate-x-4 sm:-translate-x-6" },
        { fn: next, Icon: FiChevronRight, cls: "right-0 translate-x-4 sm:translate-x-6"  },
      ].map(({ fn, Icon, cls }) => (
        <motion.button
          key={cls}
          onClick={() => handleNav(fn)}
          whileHover={{ scale: 1.12, backgroundColor: "#FF5C8A", color: "#FFF8F0" }}
          whileTap={{ scale: 0.88 }}
          style={{ top: "42%", zIndex: 10 }}
          className={`absolute ${cls} -translate-y-1/2 w-10 h-10 rounded-full glass-card shadow-lg flex items-center justify-center text-chocolate transition-colors duration-200`}
        >
          <Icon size={18} />
        </motion.button>
      ))}

      {/* ── Dot indicators ── */}
      <div className="flex items-center gap-2 mt-5" style={{ zIndex: 3 }}>
        {SHAKES.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => { go(i); resetTimer(); }}
            whileHover={{ scale: 1.4 }}
            className={`rounded-full transition-all duration-300 ${
              i === index
                ? "w-7 h-2.5 bg-strawberry shadow-sm shadow-strawberry/50"
                : "w-2.5 h-2.5 bg-chocolate/20 hover:bg-chocolate/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
