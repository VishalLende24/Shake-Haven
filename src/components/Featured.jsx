import React from "react";
import { motion } from "framer-motion";
import { FiShoppingCart, FiInfo, FiHeart } from "react-icons/fi";

const shakes = [
  {
    id: "chocolate-overload",
    name: "Chocolate Overload",
    price: "$8.49",
    tag: "Choco Premium",
    tagColor: "bg-chocolate/10 text-chocolate",
    image: "/assets/chocolate_overload.png",
    description: "Triple Belgian chocolate ganache blended with fudge brownie chunks and dark chocolate flakes.",
    rating: "4.9",
    calories: "520 kcal"
  },
  {
    id: "oreo-blast",
    name: "Oreo Blast",
    price: "$7.99",
    tag: "Cookies & Cream",
    tagColor: "bg-gray-200 text-gray-700",
    image: "/assets/oreo_blast.png",
    description: "Cruchy Oreo cookie crumbles hand-blended with vanilla-cream milk fat and chocolate syrup swirl.",
    rating: "4.8",
    calories: "490 kcal"
  },
  {
    id: "kitkat-crunch",
    name: "KitKat Crunch",
    price: "$8.29",
    tag: "Choco Crunch",
    tagColor: "bg-chocolate/10 text-chocolate",
    image: "/assets/hero_shake.png", // Reuse signature shake image for wafer presentation
    description: "Crispy KitKat wafer bars crushed and double-churned into creamy chocolate malt base.",
    rating: "4.7",
    calories: "510 kcal"
  },
  {
    id: "strawberry-dream",
    name: "Strawberry Dream",
    price: "$7.99",
    tag: "Fresh Fruit",
    tagColor: "bg-strawberry/10 text-strawberry",
    image: "/assets/strawberry_dream.png",
    description: "Fresh hand-picked summer strawberries blended with vanilla bean gelato and strawberry glaze.",
    rating: "4.9",
    calories: "380 kcal"
  },
  {
    id: "mango-mania",
    name: "Mango Mania",
    price: "$8.49",
    tag: "Tropical Bliss",
    tagColor: "bg-mango/10 text-mango-dark",
    image: "/assets/mango_mania.png",
    description: "Sweet golden Alphonso mango chunks blended with organic milk fat and fresh mango coulis.",
    rating: "4.8",
    calories: "410 kcal"
  },
  {
    id: "blueberry-bliss",
    name: "Blueberry Bliss",
    price: "$8.99",
    tag: "Exotic Berry",
    tagColor: "bg-blueberry/10 text-blueberry",
    image: "/assets/blueberry_bliss.png",
    description: "Wild organic forest blueberries folded with rich clotted cream and topped with white chocolate shreds.",
    rating: "4.9",
    calories: "430 kcal"
  }
];

export default function Featured() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="featured" className="py-24 bg-[#FFFDFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-strawberry font-bold uppercase tracking-widest text-xs">Aesthetic Dessert Menu</span>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-chocolate mt-2 mb-4 leading-tight">
            Our Signature Shakes
          </h2>
          <div className="w-16 h-1 bg-strawberry mx-auto mb-4 rounded-full"></div>
          <p className="text-chocolate/70">
            Carefully curated, thick-blended masterpieces designed to elevate your senses. Experience luxury in every glass.
          </p>
        </div>

        {/* Shake Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {shakes.map((shake) => (
            <motion.div
              key={shake.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="glass-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative"
            >
              {/* Wishlist Heart Icon */}
              <button 
                className="absolute top-4 right-4 z-20 text-chocolate/30 hover:text-strawberry transition-colors duration-200"
                aria-label="Add to favorites"
              >
                <FiHeart size={20} />
              </button>

              {/* Shake Image Showcase */}
              <div className="relative pt-[80%] overflow-hidden bg-gradient-to-b from-[#FFFDF9] to-cream/30 flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-radial-gradient from-strawberry/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={shake.image}
                  alt={shake.name}
                  className="absolute bottom-4 w-[85%] h-auto object-contain drop-shadow-[0_12px_24px_rgba(74,44,42,0.15)] group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 rounded-2xl"
                />
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${shake.tagColor}`}>
                    {shake.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-chocolate/60">
                    <span className="font-semibold text-mango-dark">★ {shake.rating}</span>
                    <span>•</span>
                    <span>{shake.calories}</span>
                  </div>
                </div>

                <h3 className="text-xl font-serif font-extrabold text-chocolate group-hover:text-strawberry transition-colors duration-200 mb-2">
                  {shake.name}
                </h3>

                <p className="text-chocolate/70 text-sm leading-relaxed mb-6 flex-grow">
                  {shake.description}
                </p>

                {/* Price and Action Button */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-chocolate/5">
                  <div>
                    <span className="text-xs text-chocolate/55 uppercase tracking-wider block">Price</span>
                    <span className="text-2xl font-serif font-black text-chocolate">{shake.price}</span>
                  </div>
                  <motion.a
                    href="#contact"
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-chocolate group-hover:bg-strawberry text-cream font-bold px-5 py-3 rounded-2xl shadow-md transition-colors duration-300 text-sm"
                  >
                    <FiShoppingCart /> Add to Order
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
