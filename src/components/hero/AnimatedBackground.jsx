import React from "react";
import { motion } from "framer-motion";

const BLOBS = [
  { className: "w-[600px] h-[600px] -top-48 -left-48 bg-strawberry/[0.07]", dur: 9, delay: 0 },
  { className: "w-[500px] h-[500px] -bottom-32 -right-32 bg-mango/[0.08]",  dur: 11, delay: 2 },
  { className: "w-[400px] h-[400px] top-1/3 right-1/4 bg-blueberry/[0.05]", dur: 13, delay: 4 },
  { className: "w-[350px] h-[350px] bottom-1/4 left-1/3 bg-mint/[0.05]",    dur: 10, delay: 1 },
  { className: "w-[300px] h-[300px] top-1/2 left-1/2 bg-strawberry/[0.04]", dur: 8,  delay: 3 },
];

const STREAKS = [
  { w: 180, top: "18%", left: "20%", rotate: -30, dur: 4, delay: 0 },
  { w: 120, top: "65%", left: "70%", rotate: 20,  dur: 5, delay: 1.5 },
  { w: 90,  top: "40%", left: "85%", rotate: -15, dur: 3.5, delay: 0.8 },
  { w: 140, top: "80%", left: "10%", rotate: 35,  dur: 6, delay: 2.2 },
];

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Animated gradient mesh background */}
      <motion.div
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 20%, rgba(255,92,138,0.12) 0%, transparent 60%)," +
            "radial-gradient(ellipse at 80% 80%, rgba(255,183,3,0.10) 0%, transparent 60%)," +
            "radial-gradient(ellipse at 50% 50%, rgba(77,115,183,0.06) 0%, transparent 70%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Pulsing radial blobs */}
      {BLOBS.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[90px] ${b.className}`}
          animate={{ scale: [1, 1.18, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: b.dur, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
        />
      ))}

      {/* Light streaks */}
      {STREAKS.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: s.w,
            height: 2,
            top: s.top,
            left: s.left,
            rotate: s.rotate,
            background: "linear-gradient(90deg, transparent, rgba(255,92,138,0.2), transparent)",
          }}
          animate={{ opacity: [0, 0.8, 0], scaleX: [0.5, 1, 0.5] }}
          transition={{ duration: s.dur, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
        />
      ))}

      {/* Decorative concentric rings */}
      {[600, 800, 1000].map((size, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full border border-strawberry/[0.04]"
          style={{ width: size, height: size, marginRight: -(size / 2) }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80 + i * 20, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}
