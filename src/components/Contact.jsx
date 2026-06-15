import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone, FiMail, FiClock, FiMapPin, FiInstagram, FiFacebook, FiSend, FiCheckCircle } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    shake: "chocolate-overload",
    sweetness: "normal",
    address: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    
    // Simulate order/contact submit
    setIsSubmitted(true);
    setTimeout(() => {
      // Clear form
      setFormData({
        name: "",
        email: "",
        shake: "chocolate-overload",
        sweetness: "normal",
        address: "",
        message: ""
      });
    }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-cream-gradient relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-strawberry-light/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-strawberry font-bold uppercase tracking-widest text-xs">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-chocolate mt-2 mb-4">
            Order or Contact Us
          </h2>
          <div className="w-16 h-1 bg-strawberry mx-auto mb-4 rounded-full"></div>
          <p className="text-chocolate/70">
            Have a catering request, question, or want to place a custom group order? Send us a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info & Map Placeholder (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Cards */}
            <div className="glass-card rounded-[28px] p-8 border border-chocolate/5 space-y-6">
              <h3 className="text-2xl font-serif font-extrabold text-chocolate mb-4">Boutique Details</h3>
              
              <div className="flex gap-4">
                <span className="w-10 h-10 bg-strawberry/15 text-strawberry rounded-xl flex items-center justify-center shrink-0">
                  <FiMapPin size={20} />
                </span>
                <div>
                  <h4 className="font-bold text-chocolate text-sm uppercase tracking-wide">Main Haven</h4>
                  <p className="text-chocolate/75 text-sm mt-1 leading-relaxed">
                    102 Luxury Boulevard, Chocolate District, SH 56001
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="w-10 h-10 bg-mango/15 text-mango-dark rounded-xl flex items-center justify-center shrink-0">
                  <FiPhone size={20} />
                </span>
                <div>
                  <h4 className="font-bold text-chocolate text-sm uppercase tracking-wide">Call / Delivery Hotlines</h4>
                  <p className="text-chocolate/75 text-sm mt-1 leading-relaxed">
                    +1 (800) 555-SHAKE <br />
                    +1 (555) 987-6543
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="w-10 h-10 bg-mint/20 text-mint-dark rounded-xl flex items-center justify-center shrink-0">
                  <FiClock size={20} />
                </span>
                <div>
                  <h4 className="font-bold text-chocolate text-sm uppercase tracking-wide">Boutique Hours</h4>
                  <p className="text-chocolate/75 text-sm mt-1 leading-relaxed">
                    Mon - Thu: 11:00 AM - 10:00 PM <br />
                    Fri - Sun: 11:00 AM - Midnight
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Stylized CSS Map Placeholder */}
            <div className="glass-card rounded-[28px] overflow-hidden border border-chocolate/5 shadow-sm relative h-64 bg-chocolate-dark flex items-center justify-center text-center p-6 group">
              {/* Abstract streets vector look */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute h-full w-[2px] bg-cream left-[30%] top-0"></div>
                <div className="absolute h-full w-[2px] bg-cream left-[70%] top-0"></div>
                <div className="absolute w-full h-[2px] bg-cream top-[40%] left-0"></div>
                <div className="absolute w-full h-[2px] bg-cream top-[75%] left-0"></div>
                <div className="absolute h-24 w-24 border-2 border-cream rounded-full top-[25%] left-[20%]"></div>
              </div>

              {/* Pin indicator */}
              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-14 h-14 bg-strawberry text-cream rounded-full shadow-lg flex items-center justify-center mb-3 border border-cream/20"
                >
                  <FiMapPin size={28} />
                </motion.div>
                <h4 className="text-cream text-lg font-serif font-bold">Find Shake Haven</h4>
                <p className="text-cream/70 text-xs mt-1">Click to open directions on Google Maps</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-cream text-chocolate font-bold text-xs rounded-full hover:bg-strawberry hover:text-cream transition-colors duration-300"
                >
                  Open Maps
                </a>
              </div>
            </div>

          </div>

          {/* Right: Interactive Ordering/Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-[32px] p-8 md:p-10 border border-chocolate/5 shadow-md relative min-h-[480px]">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-serif font-extrabold text-chocolate">
                      Place Web Order / Inquiry
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-chocolate/70 uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-[#FFF8F0]/60 border border-chocolate/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-strawberry text-chocolate font-semibold transition-colors duration-200"
                          placeholder="Sophia Loren"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-chocolate/70 uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-[#FFF8F0]/60 border border-chocolate/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-strawberry text-chocolate font-semibold transition-colors duration-200"
                          placeholder="sophia@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="shake" className="block text-xs font-bold text-chocolate/70 uppercase tracking-wider mb-2">
                          Select Shake Flavor
                        </label>
                        <select
                          id="shake"
                          name="shake"
                          value={formData.shake}
                          onChange={handleChange}
                          className="w-full bg-[#FFF8F0]/60 border border-chocolate/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-strawberry text-chocolate font-semibold transition-colors duration-200"
                        >
                          <option value="chocolate-overload">Chocolate Overload</option>
                          <option value="oreo-blast">Oreo Blast</option>
                          <option value="kitkat-crunch">KitKat Crunch</option>
                          <option value="strawberry-dream">Strawberry Dream</option>
                          <option value="mango-mania">Mango Mania</option>
                          <option value="blueberry-bliss">Blueberry Bliss</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="sweetness" className="block text-xs font-bold text-chocolate/70 uppercase tracking-wider mb-2">
                          Sweetener Profile
                        </label>
                        <select
                          id="sweetness"
                          name="sweetness"
                          value={formData.sweetness}
                          onChange={handleChange}
                          className="w-full bg-[#FFF8F0]/60 border border-chocolate/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-strawberry text-chocolate font-semibold transition-colors duration-200"
                        >
                          <option value="normal">Normal Sugar</option>
                          <option value="half">Half Sugar</option>
                          <option value="honey">Organic Raw Honey</option>
                          <option value="stevia">Stevia Extract</option>
                          <option value="free">Sugar-Free</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-xs font-bold text-chocolate/70 uppercase tracking-wider mb-2">
                        Delivery Address (Leave blank for general inquiries)
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full bg-[#FFF8F0]/60 border border-chocolate/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-strawberry text-chocolate font-semibold transition-colors duration-200"
                        placeholder="123 Cozy Lane, Chocolate Town"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-chocolate/70 uppercase tracking-wider mb-2">
                        Special Instructions / Catering Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-[#FFF8F0]/60 border border-chocolate/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-strawberry text-chocolate font-semibold transition-colors duration-200"
                        placeholder="Please make it extra thick with extra brownie chunks!"
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-chocolate hover:bg-strawberry text-cream font-bold py-4 rounded-xl shadow-lg transition-colors duration-300 flex items-center justify-center gap-2 hover-shine"
                    >
                      <FiSend /> Submit Order Request
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-20 h-20 bg-mint text-cream rounded-full flex items-center justify-center mb-6 shadow-lg border-2 border-cream"
                    >
                      <FiCheckCircle size={44} />
                    </motion.div>
                    
                    <h3 className="text-3xl font-serif font-extrabold text-chocolate mb-3">
                      Order Received!
                    </h3>
                    
                    <p className="text-chocolate/85 text-sm max-w-sm mb-6 leading-relaxed">
                      Thank you, <span className="font-bold">{formData.name}</span>! Our dessert artisans are preparing your order request. A confirmation email has been dispatched to <span className="font-semibold">{formData.email}</span>.
                    </p>
                    
                    <div className="w-full max-w-xs border-t border-chocolate/10 pt-4 text-xs text-chocolate/50 font-bold uppercase tracking-wider">
                      Prep time: ~15 minutes
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
