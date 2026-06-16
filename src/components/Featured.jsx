import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiShoppingCart, FiHeart, FiStar, FiZap } from "react-icons/fi";
import imgChocolate  from "../assets/chocolate_overload.png";
import imgOreo       from "../assets/oreo_blast.png";
import imgHero       from "../assets/hero_shake.png";
import imgStrawberry from "../assets/strawberry_dream.png";
import imgMango      from "../assets/mango_mania.png";
import imgBlueberry  from "../assets/blueberry_bliss.png";

const SHAKES = [
  {
    id: "chocolate-overload",
    name: "Chocolate Overload",
    price: 8.49,
    tag: "Choco Premium",
    category: "chocolate",
    image: imgChocolate,
    description: "Triple Belgian chocolate ganache blended with fudge brownie chunks and dark chocolate flakes.",
    rating: 4.9,
    reviews: 284,
    calories: "520 kcal",
    badge: "Best Seller",
    badgeColor: "bg-chocolate text-cream",
    glow: "rgba(74,44,42,0.25)",
    gradientFrom: "#4A2C2A18",
    gradientTo: "#FFB70312",
    accent: "#4A2C2A",
  },
  {
    id: "oreo-blast",
    name: "Oreo Blast",
    price: 7.99,
    tag: "Cookies & Cream",
    category: "chocolate",
    image: imgOreo,
    description: "Crunchy Oreo crumbles hand-blended with vanilla-cream milk fat and a chocolate syrup swirl.",
    rating: 4.8,
    reviews: 196,
    calories: "490 kcal",
    badge: null,
    glow: "rgba(45,27,26,0.22)",
    gradientFrom: "#2D1B1A15",
    gradientTo: "#EADBC812",
    accent: "#2D1B1A",
  },
  {
    id: "kitkat-crunch",
    name: "KitKat Crunch",
    price: 8.29,
    tag: "Choco Crunch",
    category: "chocolate",
    image: imgHero,
    description: "Crispy KitKat wafer bars crushed and double-churned into a creamy chocolate malt base.",
    rating: 4.7,
    reviews: 151,
    calories: "510 kcal",
    badge: "New",
    badgeColor: "bg-mango text-chocolate-dark",
    glow: "rgba(74,44,42,0.20)",
    gradientFrom: "#4A2C2A14",
    gradientTo: "#FFB70310",
    accent: "#724E4B",
  },
  {
    id: "strawberry-dream",
    name: "Strawberry Dream",
    price: 7.99,
    tag: "Fresh Fruit",
    category: "fruit",
    image: imgStrawberry,
    description: "Hand-picked summer strawberries blended with vanilla bean gelato and strawberry glaze.",
    rating: 4.9,
    reviews: 312,
    calories: "380 kcal",
    badge: "Best Seller",
    badgeColor: "bg-strawberry text-cream",
    glow: "rgba(255,92,138,0.25)",
    gradientFrom: "#FF5C8A18",
    gradientTo: "#FFB70312",
    accent: "#FF5C8A",
  },
  {
    id: "mango-mania",
    name: "Mango Mania",
    price: 8.49,
    tag: "Tropical Bliss",
    category: "fruit",
    image: imgMango,
    description: "Sweet Alphonso mango chunks blended with organic milk fat and fresh mango coulis drizzle.",
    rating: 4.8,
    reviews: 228,
    calories: "410 kcal",
    badge: null,
    glow: "rgba(255,183,3,0.28)",
    gradientFrom: "#FFB70318",
    gradientTo: "#FF5C8A10",
    accent: "#FFB703",
  },
  {
    id: "blueberry-bliss",
    name: "Blueberry Bliss",
    price: 8.99,
    tag: "Exotic Berry",
    category: "fruit",
    image: imgBlueberry,
    description: "Wild forest blueberries folded with rich clotted cream and topped with white chocolate shreds.",
    rating: 4.9,
    reviews: 267,
    calories: "430 kcal",
    badge: "Fan Fav",
    badgeColor: "bg-blueberry text-cream",
    glow: "rgba(77,115,183,0.25)",
    gradientFrom: "#4D73B718",
    gradientTo: "#8FD69412",
    accent: "#4D73B7",
  },
];

const FILTERS = [
  { key: "all",       label: "All Shakes", emoji: "🥤" },
  { key: "chocolate", label: "Chocolate",  emoji: "🍫" },
  { key: "fruit",     label: "Fruit",      emoji: "🍓" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.08 },
  }),
};

function StarRating({ rating }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <FiStar
          key={s}
          size={11}
          className={s <= Math.round(rating) ? "fill-mango text-mango" : "text-chocolate/20"}
        />
      ))}
    </span>
  );
}

function ShakeCard({ shake, index }) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      className="group relative flex flex-col rounded-[2rem] overflow-hidden bg-cream-light border border-chocolate/[0.07] shadow-md hover:shadow-2xl transition-shadow duration-500"
      style={{ boxShadow: `0 4px 24px ${shake.glow}` }}
    >
      {/* ── Image Area ── */}
      <div
        className="relative overflow-hidden"
        style={{
          background: `radial-gradient(circle at 50% 80%, ${shake.gradientFrom} 0%, ${shake.gradientTo} 60%, #FFFDFB 100%)`,
          minHeight: 240,
        }}
      >
        {/* Animated glow blob behind image */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 70%, ${shake.glow} 0%, transparent 65%)`,
          }}
        />

        {/* Badge */}
        {shake.badge && (
          <motion.span
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.08 }}
            viewport={{ once: true }}
            className={`absolute top-4 left-4 z-10 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md ${shake.badgeColor}`}
          >
            {shake.badge}
          </motion.span>
        )}

        {/* Like button */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.85 }}
          onClick={() => setLiked((p) => !p)}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full glass-card shadow-md flex items-center justify-center transition-colors duration-200"
          aria-label="Like"
        >
          <FiHeart
            size={16}
            className={`transition-all duration-300 ${liked ? "fill-strawberry text-strawberry scale-110" : "text-chocolate/40"}`}
          />
        </motion.button>

        {/* Shake image */}
        <div className="flex items-end justify-center px-8 pt-8 pb-4 h-60">
          <motion.img
            src={shake.image}
            alt={shake.name}
            loading="lazy"
            draggable={false}
            className="h-full w-auto object-contain rounded-2xl"
            style={{ filter: `drop-shadow(0 16px 32px ${shake.glow})` }}
            whileHover={{ scale: 1.07, y: -6 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        </div>

        {/* Bottom gradient fade into card body */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-cream-light to-transparent pointer-events-none" />
      </div>

      {/* ── Card Body ── */}
      <div className="flex flex-col flex-grow p-6 pt-4">

        {/* Tag + calories row */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border"
            style={{ color: shake.accent, borderColor: `${shake.accent}30`, backgroundColor: `${shake.accent}10` }}
          >
            {shake.tag}
          </span>
          <span className="text-[11px] text-chocolate/45 font-medium">{shake.calories}</span>
        </div>

        {/* Name */}
        <h3
          className="text-xl font-serif font-extrabold text-chocolate mb-1.5 leading-tight transition-colors duration-200 group-hover:text-strawberry"
        >
          {shake.name}
        </h3>

        {/* Rating row */}
        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={shake.rating} />
          <span className="text-xs font-bold text-mango-dark">{shake.rating}</span>
          <span className="text-xs text-chocolate/40">({shake.reviews} reviews)</span>
        </div>

        {/* Description */}
        <p className="text-[13px] text-chocolate/60 leading-relaxed mb-5 flex-grow line-clamp-2">
          {shake.description}
        </p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-chocolate/[0.07] mt-auto">
          <div>
            <span className="text-[10px] text-chocolate/40 uppercase tracking-wider block leading-none mb-0.5">Price</span>
            <span className="text-2xl font-black font-serif text-chocolate leading-none">
              ${shake.price.toFixed(2)}
            </span>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: `0 8px 24px ${shake.glow}` }}
            whileTap={{ scale: 0.93 }}
            className="hover-shine flex items-center gap-2 text-cream font-bold px-5 py-3 rounded-2xl text-sm shadow-lg transition-all duration-300"
            style={{ background: `linear-gradient(135deg, ${shake.accent}, ${shake.accent}cc)` }}
          >
            <FiShoppingCart size={15} />
            Order Now
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Featured() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? SHAKES
    : SHAKES.filter((s) => s.category === activeFilter);

  return (
    <section id="featured" className="relative py-28 overflow-hidden">

      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-[#FFF5EC] to-cream-light pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-strawberry/[0.05] rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mango/[0.06] rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blueberry/[0.04] rounded-full blur-[70px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-strawberry/10 border border-strawberry/20 mb-4"
          >
            <FiZap size={12} className="text-strawberry fill-strawberry" />
            <span className="text-strawberry font-bold uppercase tracking-widest text-[11px]">
              Signature Menu
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-chocolate leading-tight mb-4"
          >
            Crafted to{" "}
            <span className="bg-gradient-to-r from-strawberry to-mango bg-clip-text text-transparent">
              Perfection
            </span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="w-16 h-1 bg-gradient-to-r from-strawberry to-mango mx-auto rounded-full mb-4 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-chocolate/60 text-base leading-relaxed"
          >
            Thick-blended masterpieces made with premium ingredients — designed to
            elevate your senses and leave you craving more.
          </motion.p>
        </div>

        {/* ── Filter Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex items-center justify-center gap-3 mb-12 flex-wrap"
        >
          {FILTERS.map((f) => (
            <motion.button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold border transition-all duration-300 ${
                activeFilter === f.key
                  ? "bg-chocolate text-cream border-chocolate shadow-lg shadow-chocolate/20"
                  : "bg-cream-light text-chocolate/60 border-chocolate/10 hover:border-chocolate/30 hover:text-chocolate"
              }`}
            >
              <span>{f.emoji}</span>
              {f.label}
              {activeFilter === f.key && (
                <motion.span
                  layoutId="filter-pill"
                  className="w-1.5 h-1.5 rounded-full bg-strawberry"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* ── Cards Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {filtered.map((shake, i) => (
              <ShakeCard key={shake.id} shake={shake} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-chocolate/50 text-sm mb-4">
            Can't decide? Try our Shake of the Day 🎉
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 16px 40px rgba(255,92,138,0.25)" }}
            whileTap={{ scale: 0.95 }}
            className="hover-shine inline-flex items-center gap-2 bg-gradient-to-r from-strawberry to-strawberry-dark text-cream font-bold px-10 py-4 rounded-full shadow-xl text-base transition-all duration-300"
          >
            <FiShoppingCart size={16} />
            View Full Menu & Order
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
