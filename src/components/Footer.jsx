import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiInstagram, FiFacebook, FiTwitter, FiSend, FiArrowRight, FiCheck } from "react-icons/fi";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 4000);
  };

  return (
    <footer className="bg-chocolate text-cream pt-20 pb-10 border-t border-cream/5 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-strawberry/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Col 1: Brand info (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a href="#home" className="flex items-center gap-2">
              <span className="text-3xl font-serif font-black tracking-tight text-cream">
                SHAKE<span className="text-strawberry ml-1 font-sans italic text-glow-pink">HAVEN</span>
              </span>
            </a>
            
            <p className="text-cream/75 text-sm leading-relaxed max-w-sm">
              Artisanal dessert shakes hand-crafted with pure milk fat dairy gelato and premium ingredients. Every cup is a celebration of flavor.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-cream/5 hover:bg-strawberry hover:text-cream flex items-center justify-center transition-colors duration-300 border border-cream/10"
                aria-label="Instagram"
              >
                <FiInstagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-cream/5 hover:bg-strawberry hover:text-cream flex items-center justify-center transition-colors duration-300 border border-cream/10"
                aria-label="Facebook"
              >
                <FiFacebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-cream/5 hover:bg-strawberry hover:text-cream flex items-center justify-center transition-colors duration-300 border border-cream/10"
                aria-label="Twitter"
              >
                <FiTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2.5 Cols) */}
          <div className="lg:col-span-2.5 flex flex-col gap-4">
            <h4 className="font-serif font-extrabold text-lg text-cream mb-2">Explore Menu</h4>
            <div className="flex flex-col gap-2.5 text-sm text-cream/75 font-medium">
              <a href="#featured" className="hover:text-strawberry transition-colors">Our Shakes</a>
              <a href="#why-choose-us" className="hover:text-strawberry transition-colors">Why Choose Us</a>
              <a href="#best-sellers" className="hover:text-strawberry transition-colors">Best Sellers</a>
              <a href="#offers" className="hover:text-strawberry transition-colors">Special Offers</a>
              <a href="#gallery" className="hover:text-strawberry transition-colors">Gallery</a>
            </div>
          </div>

          {/* Col 3: Details (2.5 Cols) */}
          <div className="lg:col-span-2.5 flex flex-col gap-4">
            <h4 className="font-serif font-extrabold text-lg text-cream mb-2">Support & Info</h4>
            <div className="flex flex-col gap-2.5 text-sm text-cream/75 font-medium">
              <a href="#faq" className="hover:text-strawberry transition-colors">FAQ Accordions</a>
              <a href="#contact" className="hover:text-strawberry transition-colors">Contact Us</a>
              <a href="#privacy" className="hover:text-strawberry transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-strawberry transition-colors">Terms of Service</a>
              <span className="text-cream/50 mt-1">Delivery Hotline: <br /><span className="text-mango font-bold">+1 (800) 555-SHAKE</span></span>
            </div>
          </div>

          {/* Col 4: Newsletter (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-serif font-extrabold text-lg text-cream mb-2">Join the Club</h4>
            <p className="text-cream/75 text-sm leading-relaxed mb-1">
              Subscribe for secret recipes, VIP promotions, and 10% off your next checkout.
            </p>

            {/* Form */}
            <div className="relative min-h-[50px]">
              <AnimatePresence mode="wait">
                {!isSubscribed ? (
                  <motion.form
                    key="newsletter-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubscribe}
                    className="flex"
                  >
                    <input
                      type="email"
                      required
                      placeholder="sweet@haven.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-grow bg-cream/5 border border-cream/10 rounded-l-xl px-4 py-3 text-xs focus:outline-none focus:border-strawberry text-cream font-medium"
                    />
                    <button
                      type="submit"
                      className="bg-strawberry hover:bg-strawberry-dark px-4 rounded-r-xl flex items-center justify-center transition-colors text-cream"
                      aria-label="Subscribe"
                    >
                      <FiArrowRight size={16} />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="subscribed-success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-mint/10 border border-mint/20 text-mint-light px-4 py-3 rounded-xl flex items-center gap-2 text-xs font-semibold"
                  >
                    <FiCheck className="text-mint text-sm" />
                    <span>Subscribed! Check your inbox.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Divider and copyright */}
        <div className="pt-8 border-t border-cream/10 text-center text-xs text-cream/50 font-medium flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} Shake Haven Inc. All Rights Reserved.</span>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-cream">Privacy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-cream">Terms</a>
            <span>•</span>
            <a href="#cookies" className="hover:text-cream">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
