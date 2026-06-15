import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiClock, FiCopy, FiCheck, FiPercent } from "react-icons/fi";

export default function SpecialOffers() {
  const [copiedCode, setCopiedCode] = useState(null);

  // Time remaining until midnight
  const calculateTimeLeft = () => {
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
    const difference = midnight - now;
    
    let timeLeft = { hours: 0, minutes: 0, seconds: 0 };
    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  return (
    <section id="offers" className="py-24 bg-[#FFFDFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-strawberry font-bold uppercase tracking-widest text-xs">Exquisite Deals</span>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-chocolate mt-2 mb-4">
            Exclusive Offers
          </h2>
          <div className="w-16 h-1 bg-strawberry mx-auto mb-4 rounded-full"></div>
          <p className="text-chocolate/70">
            Pamper your sweet tooth with these hand-selected, limited-time promotions. Treat yourself today.
          </p>
        </div>

        {/* Promo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Banner 1: Happy Hour / Countdown */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-chocolate text-cream rounded-[32px] p-8 md:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            {/* Background pattern */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-strawberry/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div>
              <span className="bg-strawberry text-cream text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider inline-block mb-6">
                Flash Promotion
              </span>
              
              <h3 className="text-3xl font-serif font-extrabold mb-3 leading-tight">
                Buy 1 Get 1 Free <br />Happy Hour!
              </h3>
              
              <p className="text-cream/80 text-sm mb-8 max-w-sm leading-relaxed">
                Order any signature shake and get a vanilla bean or classic chocolate shake absolutely free. Valid on orders placed via WhatsApp or web.
              </p>
            </div>

            {/* Countdown block */}
            <div className="mb-8">
              <span className="text-xs text-strawberry uppercase font-bold tracking-widest block mb-3.5 flex items-center gap-1.5">
                <FiClock /> Time Remaining
              </span>
              
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="bg-cream/10 border border-cream/10 px-4 py-3 rounded-2xl text-2xl font-serif font-bold min-w-[64px] text-center block shadow-inner">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-cream/50 tracking-wider mt-1.5">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="bg-cream/10 border border-cream/10 px-4 py-3 rounded-2xl text-2xl font-serif font-bold min-w-[64px] text-center block shadow-inner">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-cream/50 tracking-wider mt-1.5">Mins</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="bg-cream/10 border border-cream/10 px-4 py-3 rounded-2xl text-2xl font-serif font-bold min-w-[64px] text-center block shadow-inner text-strawberry">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-cream/50 tracking-wider mt-1.5">Secs</span>
                </div>
              </div>
            </div>

            {/* Coupon Code Block */}
            <div className="flex items-center justify-between p-4 bg-cream/5 border border-cream/10 rounded-2xl">
              <div>
                <span className="text-[10px] text-cream/50 uppercase tracking-widest block">PROMO CODE</span>
                <span className="font-bold font-mono text-lg tracking-wider text-mango">BOGOSHAKE</span>
              </div>
              <button
                onClick={() => handleCopyCode("BOGOSHAKE")}
                className="w-10 h-10 bg-cream/10 hover:bg-cream/20 text-cream rounded-xl flex items-center justify-center transition-colors"
                aria-label="Copy Promo Code"
              >
                {copiedCode === "BOGOSHAKE" ? <FiCheck className="text-mint" /> : <FiCopy />}
              </button>
            </div>
          </motion.div>

          {/* Banner 2: First Order Discount */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cream-dark/25 border border-chocolate/5 text-chocolate rounded-[32px] p-8 md:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between"
          >
            {/* Background design */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-mango/5 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <span className="bg-chocolate/10 text-chocolate text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider inline-block mb-6">
                Welcome Gift
              </span>

              <h3 className="text-3xl font-serif font-extrabold mb-3 leading-tight">
                20% Off Your <br />First Order
              </h3>

              <p className="text-chocolate/85 text-sm mb-8 max-w-sm leading-relaxed">
                Welcome to Shake Haven! Register for our newsletter or use this coupon during checkout to shave 20% off your total bill. No minimum order.
              </p>
            </div>

            {/* Visual Promo Badge */}
            <div className="mb-8 flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-mango flex items-center justify-center text-chocolate-dark shadow-md">
                <FiPercent size={32} />
              </div>
              <div>
                <span className="block font-serif font-black text-2xl text-chocolate">20% SAVINGS</span>
                <span className="text-xs text-chocolate/55 font-semibold">Applied to order subtotal</span>
              </div>
            </div>

            {/* Coupon Code Block */}
            <div className="flex items-center justify-between p-4 bg-chocolate/5 border border-chocolate/5 rounded-2xl">
              <div>
                <span className="text-[10px] text-chocolate/50 uppercase tracking-widest block">PROMO CODE</span>
                <span className="font-bold font-mono text-lg tracking-wider text-strawberry">HAVEN20</span>
              </div>
              <button
                onClick={() => handleCopyCode("HAVEN20")}
                className="w-10 h-10 bg-chocolate/10 hover:bg-chocolate/20 text-chocolate rounded-xl flex items-center justify-center transition-colors"
                aria-label="Copy Promo Code"
              >
                {copiedCode === "HAVEN20" ? <FiCheck className="text-mint" /> : <FiCopy />}
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
