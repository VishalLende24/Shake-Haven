import React from 'react';
  

  // Shared Framer Motion animation variants for Hero section

export const fadeUp = (delay = 0, duration = 0.65) => ({
  initial: { opacity: 0, y: 36, scale: 0.96 },
  animate: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration, ease: [0.25, 0.46, 0.45, 0.94], delay },
  },
});

export const slideLeft = (delay = 0) => ({
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay } },
});

export const slideRight = (delay = 0) => ({
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay } },
});

export const zoomIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.7 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.85, ease: [0.34, 1.56, 0.64, 1], delay } },
});

export const staggerContainer = (stagger = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export const floating = (yDist = 18, duration = 5, delay = 0) => ({
  animate: {
    y: [0, -yDist, 0],
    transition: { duration, repeat: Infinity, ease: "easeInOut", delay },
  },
});

export const floatingRotate = (yDist = 16, rot = 6, duration = 6, delay = 0) => ({
  animate: {
    y: [0, -yDist, 0],
    rotate: [0, rot, -rot, 0],
    transition: { duration, repeat: Infinity, ease: "easeInOut", delay },
  },
});

export const particleFloat = (yDist = 24, duration = 7, delay = 0) => ({
  animate: {
    y: [0, -yDist, 0],
    opacity: [0.4, 1, 0.4],
    scale: [1, 1.4, 1],
    transition: { duration, repeat: Infinity, ease: "easeInOut", delay },
  },
});

export const orbitAnimation = (radius = 40, duration = 12, delay = 0) => ({
  animate: {
    x: [0, radius, 0, -radius, 0],
    y: [-radius, 0, radius, 0, -radius],
    transition: { duration, repeat: Infinity, ease: "linear", delay },
  },
});

export const revealText = {
  hidden: { opacity: 0, y: "100%" },
  show: { opacity: 1, y: "0%", transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const bounceIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.3, y: 20 },
  animate: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay },
  },
});

export const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 100 : -100, scale: 0.88, rotateY: dir > 0 ? 8 : -8 }),
  center: {
    opacity: 1, x: 0, scale: 1, rotateY: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir) => ({
    opacity: 0, x: dir > 0 ? -100 : 100, scale: 0.88, rotateY: dir > 0 ? -8 : 8,
    transition: { duration: 0.45, ease: "easeIn" },
  }),
};
