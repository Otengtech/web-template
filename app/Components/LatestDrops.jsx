"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Play } from "lucide-react";

const drops = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    type: "Afrobeats",
    name: "Midnight Groove",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    type: "RnB",
    name: "Velvet Nights",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1485579149621-3123dd979885",
    type: "Pop",
    name: "Summer Rush",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
    type: "Rap",
    name: "No Sleep",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
    type: "Dancehall",
    name: "Wave Rider",
  },
];

export default function LatestDrops() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let scrollInterval;
    const container = document.getElementById("drops-scroll");

    if (!paused && container) {
      scrollInterval = setInterval(() => {
        container.scrollLeft += 1.2; // scroll speed
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollLeft = 0; // loop back
        }
      }, 16); // ~60fps
    }

    return () => clearInterval(scrollInterval);
  }, [paused]);

  return (
    <section className="bg-black text-white py-24 px-4 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto space-y-10 w-full">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent text-center">
          Latest Drops
        </h2>

        <AnimatePresence>
          <motion.div
            id="drops-scroll"
            className="flex space-x-6 overflow-x-auto w-full no-scrollbar"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {drops.map((drop) => (
              <motion.div
                key={drop.id}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                whileHover={{ scale: 1.05 }}
                className="relative flex-shrink-0 w-72 h-96 rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <motion.img
                  src={drop.image}
                  alt={drop.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                {/* Music Type */}
                <span className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-lime-400 text-black text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                  {drop.type}
                </span>

                {/* Bottom Content */}
                <div className="absolute bottom-4 left-4 flex flex-col space-y-2">
                  <h3 className="text-xl font-bold">{drop.name}</h3>
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-sm font-semibold text-lime-400 hover:text-green-400 transition"
                  >
                    <Play size={16} />
                    <span>Listen Now →</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
