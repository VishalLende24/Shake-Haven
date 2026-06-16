import React from "react";
import { motion } from "framer-motion";

const HIGHLIGHTS = [
  { emoji: "🍓", label: "Fresh Fruits" },
  { emoji: "🍫", label: "Belgian Choc" },
  { emoji: "🥛", label: "Double Churned" },
  { emoji: "🌿", label: "No Preservatives" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } },
};

const item = {
  hidden: { opacity: 0, x: -24 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ProductHighlights() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-wrap gap-2 justify-center lg:justify-start"
    >
      {HIGHLIGHTS.map((h) => (
        <motion.span
          key={h.label}
          variants={item}
          whileHover={{ scale: 1.08, y: -2 }}
          className="glass-card flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-chocolate shadow-sm cursor-default"
        >
          <span>{h.emoji}</span> {h.label}
        </motion.span>
      ))}
    </motion.div>
  );
}
