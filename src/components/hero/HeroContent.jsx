import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronRight, FiStar, FiZap } from "react-icons/fi";
import { fadeUp, staggerContainer, staggerItem, bounceIn, revealText } from "./variants";

// --- Word-by-word heading reveal ---
const HEADING_LINE1 = ["Every", "Sip", "Feels"];
const HEADING_LINE2 = ["Like", "Dessert"];

function WordReveal({ words, className, delay = 0 }) {
  return (
    <span className={`inline-flex flex-wrap gap-x-3 ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            variants={revealText}
            initial="hidden"
            animate="show"
            transition={{ delay: delay + i * 0.12, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// --- Animated counter ---
function Counter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const isFloat = String(target).includes(".");
          const end = parseFloat(target);
          const steps = 50;
          const stepVal = end / steps;
          let cur = 0;
          const t = setInterval(() => {
            cur += stepVal;
            if (cur >= end) { setCount(end); clearInterval(t); }
            else setCount(isFloat ? parseFloat(cur.toFixed(1)) : Math.floor(cur));
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const STATS = [
  { target: "4.9", suffix: "★", label: "Google Rating" },
  { target: "100", suffix: "%", label: "Pure Milk" },
  { target: "30",  suffix: "+", label: "Flavors" },
];

const HIGHLIGHTS = [
  { emoji: "🍓", label: "Fresh Fruits" },
  { emoji: "🍫", label: "Belgian Choc" },
  { emoji: "🥛", label: "Double Churned" },
  { emoji: "🌿", label: "No Preservatives" },
];

// --- Magnetic CTA button ---
function MagneticButton({ href, children, primary }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({ x: (e.clientX - cx) * 0.25, y: (e.clientY - cy) * 0.25 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      whileTap={{ scale: 0.93 }}
      className={`relative overflow-hidden flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full transition-all duration-300 text-base cursor-pointer ${
        primary
          ? "bg-chocolate text-cream shadow-xl hover:shadow-strawberry/30 hover-shine group"
          : "border-2 border-chocolate/30 text-chocolate hover:border-strawberry hover:text-strawberry"
      }`}
    >
      {primary && (
        <motion.span
          className="absolute inset-0 rounded-full bg-strawberry opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ zIndex: 0 }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.a>
  );
}

export default function HeroContent() {
  return (
    <div className="flex flex-col text-center lg:text-left items-center lg:items-start gap-5 relative z-10">

      {/* Offer badge — bounce entrance + float */}
      <motion.div
        {...bounceIn(0.1)}
        className="flex items-center gap-2"
      >
        <motion.span
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-strawberry/15 to-mango/15 border border-strawberry/20 text-strawberry font-bold text-xs uppercase tracking-widest shadow-sm"
        >
          <FiZap className="fill-current" size={12} />
          Luxury Thick Shakes
        </motion.span>
        <motion.span
          {...bounceIn(0.3)}
          className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-mango text-chocolate-dark font-extrabold text-[10px] uppercase tracking-wide shadow-md"
        >
          🔥 New Flavors
        </motion.span>
      </motion.div>

      {/* Heading — word-by-word reveal */}
      <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-serif font-extrabold text-chocolate tracking-tight leading-[1.1]">
        <WordReveal words={HEADING_LINE1} className="block mb-1" delay={0.15} />
        <span className="block overflow-hidden">
          <WordReveal
            words={HEADING_LINE2}
            delay={0.55}
            className="bg-gradient-to-r from-strawberry to-mango bg-clip-text text-transparent"
          />
        </span>
      </h1>

      {/* Description */}
      <motion.p
        {...fadeUp(0.75)}
        className="text-base sm:text-lg text-chocolate/70 max-w-lg leading-relaxed"
      >
        Artisanal, ultra-thick shakes hand-crafted with premium double-churned
        milk fat, Belgian chocolates, and fresh farm-sourced fruits. Not just a
        beverage —{" "}
        <span className="text-strawberry font-semibold">an experience</span>.
      </motion.p>

      {/* Product highlight badges */}
      <motion.div
        variants={staggerContainer(0.1, 0.85)}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-2 justify-center lg:justify-start"
      >
        {HIGHLIGHTS.map((h) => (
          <motion.span
            key={h.label}
            variants={staggerItem}
            whileHover={{ scale: 1.08, y: -3, boxShadow: "0 8px 24px rgba(255,92,138,0.15)" }}
            className="glass-card flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-chocolate shadow-sm cursor-default"
          >
            {h.emoji} {h.label}
          </motion.span>
        ))}
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        variants={staggerContainer(0.12, 1.0)}
        initial="hidden"
        animate="show"
        className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
      >
        <motion.div variants={staggerItem}>
          <MagneticButton href="#contact" primary>
            Order Now <FiChevronRight />
          </MagneticButton>
        </motion.div>
        <motion.div variants={staggerItem}>
          <MagneticButton href="#featured">
            Explore Menu
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Animated stats */}
      <motion.div
        {...fadeUp(1.2)}
        className="flex items-center gap-5 sm:gap-8 pt-5 mt-1 border-t border-chocolate/10 w-full justify-center lg:justify-start"
      >
        {STATS.map((s, i) => (
          <React.Fragment key={s.label}>
            {i > 0 && <div className="h-8 w-px bg-chocolate/12" />}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center lg:text-left cursor-default"
            >
              <span className="block text-2xl sm:text-3xl font-extrabold font-serif text-chocolate leading-none">
                <Counter target={s.target} suffix={s.suffix} />
              </span>
              <span className="text-[11px] uppercase tracking-wider text-chocolate/50 mt-0.5 block">{s.label}</span>
            </motion.div>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
