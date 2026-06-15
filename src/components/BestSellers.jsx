import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronRight, FiCheckCircle, FiHeart, FiTrendingUp } from "react-icons/fi";

const bestSellers = [
  {
    id: "choco-overload",
    name: "Chocolate Overload",
    subtitle: "The Ultimate Chocolate Decadence",
    price: "$8.49",
    image: "/assets/chocolate_overload.png",
    calories: "520 kcal",
    nutrition: { fat: "22g", carbs: "68g", protein: "11g" },
    ingredients: [
      "Belgian Dark Chocolate Ganache",
      "Home-baked Fudge Brownie chunks",
      "Double-churned Cream Gelato",
      "Grated Cocoa Curls"
    ],
    popularity: 99,
    orders: "12,450+ orders this month",
    accentColor: "border-chocolate/40 text-chocolate bg-chocolate/10",
    glow: "rgba(74, 44, 42, 0.15)"
  },
  {
    id: "strawberry-dream",
    name: "Strawberry Dream",
    subtitle: "The Fruity Luxury Treat",
    price: "$7.99",
    image: "/assets/strawberry_dream.png",
    calories: "380 kcal",
    nutrition: { fat: "14g", carbs: "48g", protein: "8g" },
    ingredients: [
      "Farm-picked Organic Strawberries",
      "Organic Madagascar Vanilla Gelato",
      "Double Cream Whip",
      "Glazed Strawberry Coulis"
    ],
    popularity: 96,
    orders: "9,890+ orders this month",
    accentColor: "border-strawberry/40 text-strawberry bg-strawberry/10",
    glow: "rgba(255, 92, 138, 0.15)"
  },
  {
    id: "oreo-blast",
    name: "Oreo Blast",
    subtitle: "The Classic Crunch Favorite",
    price: "$7.99",
    image: "/assets/oreo_blast.png",
    calories: "490 kcal",
    nutrition: { fat: "18g", carbs: "64g", protein: "9g" },
    ingredients: [
      "Crushed Double-stuf Oreo cookies",
      "Rich Fudge Chocolate Sauce",
      "Vanilla Bean Gelato Base",
      "Whole Cookie Garnishes"
    ],
    popularity: 95,
    orders: "8,720+ orders this month",
    accentColor: "border-gray-500/40 text-chocolate bg-gray-100",
    glow: "rgba(74, 44, 42, 0.1)"
  }
];

export default function BestSellers() {
  const [activeTab, setActiveTab] = useState(bestSellers[0].id);
  const currentShake = bestSellers.find((s) => s.id === activeTab);

  return (
    <section id="best-sellers" className="py-24 bg-[#FFFDFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-strawberry font-bold uppercase tracking-widest text-xs">Hall of Fame</span>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-chocolate mt-2 mb-4">
            Best Sellers
          </h2>
          <div className="w-16 h-1 bg-strawberry mx-auto mb-4 rounded-full"></div>
          <p className="text-chocolate/70">
            Our most loved creations that have taken the dessert world by storm. Explore the ingredients and specs behind the obsession.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-3 sm:gap-6 mb-16 flex-wrap">
          {bestSellers.map((shake) => (
            <button
              key={shake.id}
              onClick={() => setActiveTab(shake.id)}
              className={`px-6 py-3 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 relative ${
                activeTab === shake.id
                  ? "bg-chocolate text-cream shadow-lg"
                  : "bg-cream-dark/30 hover:bg-cream-dark/50 text-chocolate/80"
              }`}
            >
              {shake.name}
              {activeTab === shake.id && (
                <motion.div
                  layoutId="activeBestSeller"
                  className="absolute inset-0 border-2 border-strawberry rounded-2xl pointer-events-none"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-[36px] p-8 md:p-12 shadow-xl border border-chocolate/5 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Column: Image Showcase */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center relative py-6 bg-gradient-to-tr from-cream/20 to-cream-dark/10 rounded-[24px]">
              <div 
                className="absolute w-64 h-64 rounded-full blur-3xl -z-10"
                style={{ backgroundColor: currentShake.glow }}
              ></div>
              <motion.img
                initial={{ scale: 0.8, rotate: -5 }}
                animate={{ scale: 1.02, rotate: 0 }}
                transition={{ type: "spring", duration: 0.8 }}
                src={currentShake.image}
                alt={currentShake.name}
                className="w-[75%] h-auto max-w-[280px] drop-shadow-[0_20px_35px_rgba(74,44,42,0.2)] rounded-3xl"
              />
            </div>

            {/* Right Column: Detailed Breakdowns */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Header */}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-strawberry bg-strawberry/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  <FiTrendingUp /> Best Seller
                </span>
                <span className="text-xs text-chocolate/55 font-semibold">
                  {currentShake.orders}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-serif font-extrabold text-chocolate mb-2">
                {currentShake.name}
              </h3>
              <p className="text-strawberry font-sans italic font-semibold text-lg mb-6">
                {currentShake.subtitle}
              </p>

              {/* Popularity Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs font-bold text-chocolate/75 uppercase tracking-wider mb-2">
                  <span>Popularity Rate</span>
                  <span className="text-strawberry">{currentShake.popularity}%</span>
                </div>
                <div className="h-2.5 w-full bg-cream-dark/45 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${currentShake.popularity}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-chocolate to-strawberry rounded-full"
                  />
                </div>
              </div>

              {/* Ingredients List */}
              <div className="mb-8">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-chocolate/50 mb-3.5">
                  Premium Ingredients
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentShake.ingredients.map((ing, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-chocolate/85 font-medium">
                      <FiCheckCircle className="text-mint text-lg shrink-0" />
                      <span>{ing}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Block (Calories & Macro breakdown) */}
              <div className="grid grid-cols-4 gap-4 p-5 bg-cream/50 rounded-2xl border border-chocolate/5 mb-8 text-center">
                <div>
                  <span className="block text-lg font-extrabold text-chocolate font-serif">{currentShake.calories}</span>
                  <span className="text-[10px] uppercase font-bold text-chocolate/50 tracking-wider">Calories</span>
                </div>
                <div>
                  <span className="block text-lg font-extrabold text-chocolate font-serif">{currentShake.nutrition.fat}</span>
                  <span className="text-[10px] uppercase font-bold text-chocolate/50 tracking-wider">Fat</span>
                </div>
                <div>
                  <span className="block text-lg font-extrabold text-chocolate font-serif">{currentShake.nutrition.carbs}</span>
                  <span className="text-[10px] uppercase font-bold text-chocolate/50 tracking-wider">Carbs</span>
                </div>
                <div>
                  <span className="block text-lg font-extrabold text-chocolate font-serif">{currentShake.nutrition.protein}</span>
                  <span className="text-[10px] uppercase font-bold text-chocolate/50 tracking-wider">Protein</span>
                </div>
              </div>

              {/* Order Row */}
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-chocolate/5">
                <div>
                  <span className="text-xs text-chocolate/50 uppercase tracking-wider block">Special Price</span>
                  <span className="text-3xl font-serif font-black text-chocolate">{currentShake.price}</span>
                </div>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-chocolate hover:bg-strawberry text-cream font-bold px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-strawberry/15 hover-shine transition-colors duration-300 text-sm flex items-center gap-2"
                >
                  Order Now <FiChevronRight />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
