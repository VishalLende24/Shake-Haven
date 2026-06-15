import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

const faqs = [
  {
    question: "What makes Shake Haven shakes so exceptionally thick?",
    answer: "Our shakes are slowly hand-churned using double-churned 100% pure milk fat dairy gelato. We never add ice, water, or cheap synthetic thickeners, meaning your shake remains intensely rich and decadent down to the last drop."
  },
  {
    question: "Do you offer vegan or dairy-free options?",
    answer: "Absolutely! We want everyone to experience dessert bliss. We offer vegan bases (made with organic oat milk gelato or cold-pressed coconut milk cream) for our fruit-based shakes like Strawberry Dream, Mango Mania, and Blueberry Bliss."
  },
  {
    question: "Are your thick shakes gluten-free?",
    answer: "Most of our fruit-based options and pure chocolates are naturally gluten-free. However, cookie-based flavors like Oreo Blast and KitKat Crunch contain gluten. Let us know about any severe allergies during checkout, and we will prepare your shake in a sanitized, allergen-free blender."
  },
  {
    question: "How do you ensure the shakes stay cold during delivery?",
    answer: "We use custom-insulated thermal delivery bags equipped with food-safe cooling gels. This preserves our signature thick texture, keeping the shake perfectly chilled and frozen on its journey to your doorstep."
  },
  {
    question: "Can I customize the sweetness level?",
    answer: "Yes, you can! We offer total control over your sweetness profile. Choose from: Normal Sugar, Half Sugar, Organic Raw Honey, Stevia Extract, or completely Sugar-Free (sweetened naturally by the fruit ingredients)."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#FFFDFB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-strawberry font-bold uppercase tracking-widest text-xs inline-flex items-center gap-1.5">
            <FiHelpCircle /> Got Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-chocolate mt-2 mb-4">
            Frequently Asked
          </h2>
          <div className="w-16 h-1 bg-strawberry mx-auto rounded-full"></div>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl border border-chocolate/5 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left text-chocolate font-bold hover:text-strawberry transition-colors duration-200 focus:outline-none"
                >
                  <span className="text-sm md:text-base leading-snug">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-chocolate/60 shrink-0 ml-4"
                  >
                    <FiChevronDown size={20} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-xs md:text-sm text-chocolate/80 leading-relaxed border-t border-chocolate/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
