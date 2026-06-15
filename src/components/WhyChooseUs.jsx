import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiCompass, FiHeart, FiSettings } from "react-icons/fi";

const features = [
  {
    icon: <FiAward size={28} className="text-strawberry" />,
    title: "100% Pure Milk Fat",
    description: "We use only premium-grade, double-churned dairy bases with zero vegetable oils or synthetic fillers. Richness you can taste.",
    color: "bg-strawberry/5 border-strawberry/10",
  },
  {
    icon: <FiCompass size={28} className="text-mango-dark" />,
    title: "Hand-Churned Thickness",
    description: "Slow-churned to achieve our legendary double-thick texture. It stays cold, thick, and perfectly creamy down to the last sip.",
    color: "bg-mango/5 border-mango/10",
  },
  {
    icon: <FiHeart size={28} className="text-mint-dark" />,
    title: "Fresh Local Farms",
    description: "We partner with local organic farms to source fresh hand-picked strawberries, mangoes, and forest berries daily.",
    color: "bg-mint/5 border-mint/10",
  },
  {
    icon: <FiSettings size={28} className="text-chocolate" />,
    title: "Custom Sugar Options",
    description: "Tailor your shake with organic honey, stevia, or make it completely sugar-free without losing the luxurious dessert texture.",
    color: "bg-chocolate/5 border-chocolate/10",
  }
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-cream-gradient relative overflow-hidden">
      {/* Background Decorative Graphic */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-strawberry-light/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-strawberry font-bold uppercase tracking-widest text-xs">The Shake Haven Difference</span>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-chocolate mt-2 mb-4">
            Crafting Dessert Perfection
          </h2>
          <div className="w-16 h-1 bg-strawberry mx-auto mb-4 rounded-full"></div>
          <p className="text-chocolate/70">
            We don't believe in cutting corners. Our process is rooted in premium quality and artisanal standards.
          </p>
        </div>

        {/* Features Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                boxShadow: "0 20px 40px -15px rgba(74,44,42,0.12)"
              }}
              className={`p-8 rounded-3xl border ${feature.color} glass-card transition-all duration-300 flex flex-col h-full`}
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-[#FFF8F0] shadow-sm flex items-center justify-center mb-6">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif font-extrabold text-chocolate mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-chocolate/75 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Trust Badge */}
        <div className="mt-16 text-center">
          <p className="text-xs font-semibold text-chocolate/50 uppercase tracking-widest flex items-center justify-center gap-2 flex-wrap">
            <span>✓ Certified Organic Dairy</span>
            <span className="hidden md:inline">•</span>
            <span>✓ Cruelty Free</span>
            <span className="hidden md:inline">•</span>
            <span>✓ Zero High Fructose Corn Syrup</span>
            <span className="hidden md:inline">•</span>
            <span>✓ Made Fresh to Order</span>
          </p>
        </div>

      </div>
    </section>
  );
}
