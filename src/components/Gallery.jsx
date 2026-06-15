import React from "react";
import { motion } from "framer-motion";
import { FiInstagram, FiHeart } from "react-icons/fi";

const galleryItems = [
  {
    id: 1,
    url: "/assets/chocolate_overload.png",
    aspect: "aspect-[4/5]",
    caption: "Midnight Brownie Bliss",
    likes: "2.4k"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80",
    aspect: "aspect-[3/4]",
    caption: "Cookie Crumble Heaven",
    likes: "1.8k"
  },
  {
    id: 3,
    url: "/assets/strawberry_dream.png",
    aspect: "aspect-[1/1]",
    caption: "Summer Strawberry Fields",
    likes: "3.1k"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&auto=format&fit=crop&q=80",
    aspect: "aspect-[3/4]",
    caption: "Artisanal Jar Signature",
    likes: "1.9k"
  },
  {
    id: 5,
    url: "/assets/mango_mania.png",
    aspect: "aspect-[4/5]",
    caption: "Pure Mango Custard",
    likes: "2.8k"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80",
    aspect: "aspect-[4/3]",
    caption: "Belgian Chocolate Glaze",
    likes: "4.2k"
  },
  {
    id: 7,
    url: "/assets/blueberry_bliss.png",
    aspect: "aspect-[1/1]",
    caption: "Exotic Blueberry Clotted Cream",
    likes: "2.1k"
  },
  {
    id: 8,
    url: "/assets/oreo_blast.png",
    aspect: "aspect-[4/5]",
    caption: "Cream & Cookies Blast",
    likes: "2.7k"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-cream-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-strawberry font-bold uppercase tracking-widest text-xs">Instagram Worthy</span>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-chocolate mt-2 mb-4">
            #ShakeHavenMoments
          </h2>
          <div className="w-16 h-1 bg-strawberry mx-auto mb-4 rounded-full"></div>
          <p className="text-chocolate/70">
            Follow us on social media and tag your thick shake photos for a chance to get featured in our daily gallery.
          </p>
        </div>

        {/* Masonry Columns Grid (Tailwind Columns) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`break-inside-avoid relative overflow-hidden rounded-[24px] shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer ${item.aspect} bg-cream-dark/20`}
            >
              {/* Image */}
              <img
                src={item.url}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Hover Dark Overlay */}
              <div className="absolute inset-0 bg-chocolate-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                
                {/* Top Instagram Icon */}
                <div className="flex justify-end">
                  <span className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center text-cream-light backdrop-blur-md">
                    <FiInstagram size={20} />
                  </span>
                </div>

                {/* Bottom Caption details */}
                <div>
                  <h4 className="text-cream text-lg font-serif font-bold mb-1">
                    {item.caption}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-strawberry font-semibold">
                    <FiHeart className="fill-current text-strawberry" />
                    <span>{item.likes} Likes</span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
