import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

const reviews = [
  {
    id: 1,
    name: "Sophia Vance",
    role: "Gourmet Food Blogger",
    avatarColor: "from-strawberry to-mango",
    text: "Shake Haven's Chocolate Overload is absolute culinary wizardry. It is exceptionally thick, luxurious, and truly feels like a five-star dessert in a glass. It is worth every single calorie!",
    rating: 5,
    favorite: "Chocolate Overload"
  },
  {
    id: 2,
    name: "Marcus Sterling",
    role: "Fitness Coach & Dessert Lover",
    avatarColor: "from-chocolate to-strawberry-light",
    text: "I am extremely selective about dairy quality, and Shake Haven blew me away. The 100% pure milk fat bases make an incredible difference. Also, their sugar-free options are unmatched in texture.",
    rating: 5,
    favorite: "Oreo Blast"
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Lifestyle Content Creator",
    avatarColor: "from-mint to-blueberry-light",
    text: "Not only is it Instagram-worthy, but the taste is pure bliss! The Strawberry Dream is incredibly fresh. Finding a dessert brand that balances visual aesthetic with flawless taste is rare.",
    rating: 5,
    favorite: "Strawberry Dream"
  }
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-24 bg-chocolate text-cream relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-strawberry/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-mango/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-strawberry font-bold uppercase tracking-widest text-xs">Customer Love</span>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-cream mt-2 mb-4">
            Loved By Dessert Lovers
          </h2>
          <div className="w-16 h-1 bg-strawberry mx-auto rounded-full"></div>
        </div>

        {/* Carousel Area */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card-dark rounded-[32px] p-8 md:p-12 text-center shadow-2xl"
            >
              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-6 text-mango">
                {[...Array(reviews[index].rating)].map((_, i) => (
                  <FiStar key={i} size={20} className="fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg md:text-xl font-normal text-cream/90 italic leading-relaxed mb-8">
                "{reviews[index].text}"
              </p>

              {/* User Avatar Initials */}
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-tr ${reviews[index].avatarColor} flex items-center justify-center font-serif font-black text-xl text-cream-light shadow-lg mb-4`}>
                  {reviews[index].name.split(" ").map(n => n[0]).join("")}
                </div>
                
                <h4 className="font-serif text-lg font-bold text-cream">
                  {reviews[index].name}
                </h4>
                <span className="text-xs text-strawberry uppercase tracking-wider font-semibold">
                  {reviews[index].role}
                </span>

                <div className="mt-4 px-3 py-1 bg-cream/5 border border-cream/10 rounded-full text-xs text-cream/60">
                  Fav Flavor: <span className="text-mango font-bold">{reviews[index].favorite}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-cream/20 hover:border-cream/80 flex items-center justify-center hover:bg-cream/5 transition-all text-cream/70 hover:text-cream focus:outline-none"
              aria-label="Previous review"
            >
              <FiChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === index ? "bg-strawberry w-6" : "bg-cream/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                ></button>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-cream/20 hover:border-cream/80 flex items-center justify-center hover:bg-cream/5 transition-all text-cream/70 hover:text-cream focus:outline-none"
              aria-label="Next review"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
