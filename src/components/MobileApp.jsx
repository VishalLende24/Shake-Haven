import React from "react";
import { motion } from "framer-motion";
import { FiSmartphone, FiGift, FiZap, FiTruck, FiChevronRight, FiSearch, FiShoppingCart, FiHome, FiHeart } from "react-icons/fi";

export default function MobileApp() {
  return (
    <section id="mobile-app" className="py-24 bg-cream-gradient relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-mango/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Promo Info */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col text-center lg:text-left items-center lg:items-start"
          >
            <span className="text-strawberry font-bold uppercase tracking-widest text-xs inline-flex items-center gap-1">
              <FiSmartphone /> Shake Haven Mobile App
            </span>
            
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-chocolate mt-3 mb-6 leading-tight">
              Sip Faster, Earn Rewards
            </h2>
            
            <p className="text-chocolate/80 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Get the ultimate Shake Haven experience in your pocket. Track your deliveries in real-time, customize your ingredients down to the calorie, and earn loyalty points for free desserts.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-10">
              <div className="p-5 glass-card rounded-2xl border border-chocolate/5 flex flex-col items-center lg:items-start text-center lg:text-left">
                <FiZap className="text-strawberry text-2xl mb-3" />
                <h4 className="font-serif font-bold text-chocolate mb-1 text-sm">Skip the Line</h4>
                <p className="text-chocolate/70 text-[11px] leading-relaxed">Order ahead and pick up at your nearest counter in seconds.</p>
              </div>

              <div className="p-5 glass-card rounded-2xl border border-chocolate/5 flex flex-col items-center lg:items-start text-center lg:text-left">
                <FiTruck className="text-mango-dark text-2xl mb-3" />
                <h4 className="font-serif font-bold text-chocolate mb-1 text-sm">GPS Tracking</h4>
                <p className="text-chocolate/70 text-[11px] leading-relaxed">Watch your premium thick shakes travel to your doorstep chilled.</p>
              </div>

              <div className="p-5 glass-card rounded-2xl border border-chocolate/5 flex flex-col items-center lg:items-start text-center lg:text-left">
                <FiGift className="text-mint-dark text-2xl mb-3" />
                <h4 className="font-serif font-bold text-chocolate mb-1 text-sm">Loyalty Points</h4>
                <p className="text-chocolate/70 text-[11px] leading-relaxed">Earn 10 points on every purchase. 100 points = 1 free signature shake.</p>
              </div>
            </div>

            {/* App Store Badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {/* Apple Store Button */}
              <motion.a
                href="#download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-chocolate hover:bg-strawberry text-cream px-5 py-3 rounded-2xl shadow-md flex items-center gap-3 transition-colors duration-300 border border-cream/10"
              >
                <span className="text-2xl">🍎</span>
                <div className="text-left">
                  <span className="text-[10px] text-cream/60 uppercase font-semibold block tracking-tight">Download on the</span>
                  <span className="font-sans font-bold text-sm leading-tight block">App Store</span>
                </div>
              </motion.a>

              {/* Google Play Button */}
              <motion.a
                href="#download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-chocolate hover:bg-strawberry text-cream px-5 py-3 rounded-2xl shadow-md flex items-center gap-3 transition-colors duration-300 border border-cream/10"
              >
                <span className="text-2xl">🤖</span>
                <div className="text-left">
                  <span className="text-[10px] text-cream/60 uppercase font-semibold block tracking-tight">Get it on</span>
                  <span className="font-sans font-bold text-sm leading-tight block">Google Play</span>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Premium CSS Phone Mockup */}
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-[300px] h-[600px] rounded-[50px] border-[12px] border-chocolate shadow-2xl bg-cream overflow-hidden flex flex-col justify-between"
            >
              {/* Camera Notch/Island */}
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center items-center z-30">
                <div className="w-24 h-4 bg-chocolate rounded-b-xl"></div>
              </div>

              {/* Status bar */}
              <div className="px-6 pt-7 pb-2 flex justify-between items-center text-[10px] font-bold text-chocolate-dark z-20 bg-cream/80 backdrop-blur-md">
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>

              {/* Mock App Screen Content */}
              <div className="flex-grow overflow-y-auto px-4 py-2 flex flex-col gap-4 text-chocolate scrollbar-none">
                {/* App Header */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-semibold text-chocolate/50 block">DELIVER TO</span>
                    <span className="text-xs font-bold flex items-center gap-1">My Sweet Home 📍</span>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-strawberry/10 flex items-center justify-center text-strawberry text-sm">
                    👤
                  </span>
                </div>

                {/* Search Bar */}
                <div className="bg-cream-dark/30 rounded-xl p-2.5 flex items-center gap-2 text-chocolate/60 text-xs border border-chocolate/5">
                  <FiSearch />
                  <span>Search shakes, toppings, brownie...</span>
                </div>

                {/* App Banner */}
                <div className="bg-gradient-to-r from-strawberry to-strawberry-dark text-cream p-4 rounded-2xl flex justify-between items-center relative overflow-hidden shadow-sm">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider block opacity-75">Loyalty Hub</span>
                    <span className="text-lg font-serif font-black block">Free Milkshake!</span>
                    <span className="text-[10px] bg-cream/10 px-2 py-0.5 rounded-full inline-block mt-2">70 / 100 Hearts</span>
                  </div>
                  <span className="text-3xl">🥤</span>
                </div>

                {/* Categories */}
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-chocolate/50 mb-2">Category</h4>
                  <div className="flex gap-2 text-[10px] font-bold">
                    <span className="bg-chocolate text-cream px-3 py-1.5 rounded-full shadow-sm">★ Signatures</span>
                    <span className="bg-cream-dark/30 px-3 py-1.5 rounded-full text-chocolate/80">Fruity</span>
                    <span className="bg-cream-dark/30 px-3 py-1.5 rounded-full text-chocolate/80">Choco</span>
                  </div>
                </div>

                {/* Shake Product Card inside App */}
                <div className="bg-[#FFFDF9] rounded-2xl p-3 border border-chocolate/5 flex gap-3 shadow-inner">
                  <img
                    src="/assets/chocolate_overload.png"
                    alt="App Shake"
                    className="w-16 h-16 object-contain rounded-xl bg-cream/50"
                  />
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <h5 className="font-bold text-xs">Chocolate Overload</h5>
                      <span className="text-[9px] text-chocolate/60">Signature gourmet thick shake</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-serif font-black text-xs">$8.49</span>
                      <button className="bg-strawberry text-cream w-6 h-6 rounded-lg flex items-center justify-center text-xs shadow-sm hover:bg-chocolate">
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Another Product Card in App */}
                <div className="bg-[#FFFDF9] rounded-2xl p-3 border border-chocolate/5 flex gap-3 shadow-inner">
                  <img
                    src="/assets/strawberry_dream.png"
                    alt="App Shake 2"
                    className="w-16 h-16 object-contain rounded-xl bg-cream/50"
                  />
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <h5 className="font-bold text-xs">Strawberry Dream</h5>
                      <span className="text-[9px] text-chocolate/60">Artisanal fresh berry base</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-serif font-black text-xs">$7.99</span>
                      <button className="bg-strawberry text-cream w-6 h-6 rounded-lg flex items-center justify-center text-xs shadow-sm">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* App Bottom Nav */}
              <div className="bg-cream/95 border-t border-chocolate/5 py-2.5 px-6 flex justify-between items-center z-20 backdrop-blur-md">
                <FiHome size={18} className="text-strawberry cursor-pointer" />
                <FiSearch size={18} className="text-chocolate/40 cursor-pointer" />
                <FiShoppingCart size={18} className="text-chocolate/40 cursor-pointer" />
                <FiHeart size={18} className="text-chocolate/40 cursor-pointer" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
