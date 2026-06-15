import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import WhyChooseUs from "./components/WhyChooseUs";
import BestSellers from "./components/BestSellers";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import SpecialOffers from "./components/SpecialOffers";
import MobileApp from "./components/MobileApp";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWidgets from "./components/FloatingWidgets";

function App() {
  return (
    <div className="overflow-x-hidden min-h-screen">
      {/* Premium Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Featured Shakes Section */}
      <Featured />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Best Sellers Section */}
      <BestSellers />

      {/* Customer Reviews Section */}
      <Reviews />

      {/* Masonry Gallery Section */}
      <Gallery />

      {/* Special Offers Section */}
      <SpecialOffers />

      {/* Mobile App Promotion Section */}
      <MobileApp />

      {/* FAQ Accordion Section */}
      <FAQ />

      {/* Contact Section */}
      <Contact />

      {/* Premium Footer */}
      <Footer />

      {/* WhatsApp Button & Mobile Action Bar */}
      <FloatingWidgets />
    </div>
  );
}

export default App;
