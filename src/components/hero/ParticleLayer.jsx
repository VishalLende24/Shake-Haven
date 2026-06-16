import React from "react";
import { motion } from "framer-motion";

const PARTICLES = [
  { size: 5,  x: "12%",  y: "22%",  color: "#FF5C8A", dur: 6.5,  delay: 0    },
  { size: 3,  x: "28%",  y: "8%",   color: "#FFB703", dur: 8.0,  delay: 0.8  },
  { size: 6,  x: "45%",  y: "15%",  color: "#FF5C8A", dur: 5.5,  delay: 1.6  },
  { size: 4,  x: "62%",  y: "6%",   color: "#8FD694", dur: 9.0,  delay: 0.3  },
  { size: 7,  x: "78%",  y: "18%",  color: "#FFB703", dur: 7.0,  delay: 2.1  },
  { size: 3,  x: "88%",  y: "35%",  color: "#4D73B7", dur: 6.0,  delay: 0.5  },
  { size: 5,  x: "92%",  y: "55%",  color: "#FF5C8A", dur: 8.5,  delay: 1.3  },
  { size: 4,  x: "85%",  y: "72%",  color: "#FFB703", dur: 7.5,  delay: 2.8  },
  { size: 6,  x: "70%",  y: "88%",  color: "#8FD694", dur: 5.8,  delay: 0.9  },
  { size: 3,  x: "52%",  y: "92%",  color: "#FF5C8A", dur: 6.8,  delay: 1.7  },
  { size: 5,  x: "35%",  y: "85%",  color: "#FFB703", dur: 9.5,  delay: 0.2  },
  { size: 4,  x: "18%",  y: "78%",  color: "#4D73B7", dur: 7.2,  delay: 2.4  },
  { size: 7,  x: "8%",   y: "60%",  color: "#FF5C8A", dur: 6.2,  delay: 1.1  },
  { size: 3,  x: "5%",   y: "42%",  color: "#FFB703", dur: 8.8,  delay: 3.0  },
  { size: 5,  x: "22%",  y: "48%",  color: "#8FD694", dur: 5.0,  delay: 0.6  },
  { size: 4,  x: "55%",  y: "50%",  color: "#FF5C8A", dur: 7.8,  delay: 1.9  },
  { size: 6,  x: "74%",  y: "44%",  color: "#FFB703", dur: 6.4,  delay: 0.4  },
  { size: 3,  x: "38%",  y: "32%",  color: "#4D73B7", dur: 9.2,  delay: 2.6  },
  { size: 8,  x: "15%",  y: "12%",  color: "#FF5C8A", dur: 4.8,  delay: 1.4  },
  { size: 4,  x: "95%",  y: "80%",  color: "#8FD694", dur: 7.6,  delay: 2.0  },
];

export default function ParticleLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size * 3,
            height: p.size * 3,
            left: p.x,
            top: p.y,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}80`,
          }}
          animate={{
            y: [0, -(p.size * 5 + 10), 0],
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}
    </div>
  );
}
