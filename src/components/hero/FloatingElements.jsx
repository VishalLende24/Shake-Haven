import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ELEMENTS = [
  { emoji: "🍓", size: "text-3xl", top: "12%",  left: "4%",   yDist: 28, rot: 8,  dur: 6.2, delay: 0,   parallax: 0.08 },
  { emoji: "🍓", size: "text-xl",  top: "55%",  left: "2%",   yDist: 18, rot: -5, dur: 7.5, delay: 1.2, parallax: 0.05 },
  { emoji: "🫐", size: "text-2xl", top: "25%",  left: "8%",   yDist: 22, rot: 6,  dur: 5.8, delay: 0.5, parallax: 0.1  },
  { emoji: "🫐", size: "text-lg",  top: "78%",  left: "6%",   yDist: 14, rot: -4, dur: 8.1, delay: 2.0, parallax: 0.06 },
  { emoji: "🍫", size: "text-2xl", top: "42%",  left: "3%",   yDist: 20, rot: 10, dur: 7.0, delay: 1.5, parallax: 0.07 },
  { emoji: "🍪", size: "text-3xl", top: "70%",  left: "10%",  yDist: 24, rot: -7, dur: 6.5, delay: 0.8, parallax: 0.09 },
  { emoji: "🧊", size: "text-2xl", top: "88%",  left: "18%",  yDist: 16, rot: 5,  dur: 9.0, delay: 1.8, parallax: 0.04 },
  { emoji: "🍃", size: "text-xl",  top: "18%",  right: "5%",  yDist: 20, rot: -8, dur: 5.5, delay: 0.3, parallax: 0.08 },
  { emoji: "🍃", size: "text-lg",  top: "60%",  right: "3%",  yDist: 15, rot: 6,  dur: 7.8, delay: 2.5, parallax: 0.05 },
  { emoji: "🍓", size: "text-2xl", top: "82%",  right: "8%",  yDist: 22, rot: -6, dur: 6.8, delay: 1.0, parallax: 0.07 },
  { emoji: "🍪", size: "text-xl",  top: "30%",  right: "2%",  yDist: 18, rot: 9,  dur: 8.4, delay: 0.7, parallax: 0.06 },
  { emoji: "🍫", size: "text-3xl", top: "48%",  right: "11%", yDist: 26, rot: -5, dur: 7.2, delay: 1.6, parallax: 0.09 },
  { emoji: "🧊", size: "text-xl",  top: "92%",  right: "20%", yDist: 12, rot: 4,  dur: 10,  delay: 2.8, parallax: 0.03 },
  { emoji: "🫐", size: "text-lg",  top: "8%",   right: "25%", yDist: 20, rot: -7, dur: 6.0, delay: 0.4, parallax: 0.1  },
  { emoji: "✨", size: "text-lg",  top: "35%",  left: "15%",  yDist: 30, rot: 0,  dur: 4.5, delay: 0.2, parallax: 0.12 },
  { emoji: "✨", size: "text-sm",  top: "65%",  right: "15%", yDist: 25, rot: 0,  dur: 5.2, delay: 1.4, parallax: 0.08 },
  { emoji: "💧", size: "text-xl",  top: "20%",  left: "22%",  yDist: 18, rot: 3,  dur: 8.0, delay: 0.9, parallax: 0.06 },
  { emoji: "💧", size: "text-lg",  top: "75%",  right: "22%", yDist: 14, rot: -3, dur: 7.3, delay: 2.1, parallax: 0.05 },
];

function FloatingItem({ el }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -600 * el.parallax]);

  return (
    <motion.div
      className={`absolute select-none pointer-events-none hidden md:block ${el.size}`}
      style={{ top: el.top, left: el.left, right: el.right, y }}
      animate={{
        y: [0, -el.yDist, 0],
        rotate: [0, el.rot, -el.rot * 0.5, 0],
        opacity: [0.55, 0.85, 0.55],
      }}
      transition={{ duration: el.dur, repeat: Infinity, ease: "easeInOut", delay: el.delay }}
    >
      {el.emoji}
    </motion.div>
  );
}

export default function FloatingElements() {
  return (
    <>
      {ELEMENTS.map((el, i) => (
        <FloatingItem key={i} el={el} />
      ))}
    </>
  );
}
