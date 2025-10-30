"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ZoomIn, Info, Heart } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Studio Moments",
    image:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
    info: "Captured during late-night studio sessions.",
  },
  {
    id: 2,
    title: "On Stage Energy",
    image:
      "https://images.unsplash.com/photo-1507878866276-a947ef722fee?auto=format&fit=crop&w=800&q=80",
    info: "The crowd went wild at AfroWave Fest 2025.",
  },
  {
    id: 3,
    title: "Behind the Scenes",
    image:
      "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=800&q=80",
    info: "Exclusive behind-the-scenes moments.",
  },
  {
    id: 4,
    title: "Music Video Shoot",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    info: "Lights, camera, rhythm — pure creativity.",
  },
  {
    id: 5,
    title: "Live Studio Band",
    image:
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=800&q=80",
    info: "Jamming live with the full band setup.",
  },
];

export default function GalleryInfo() {
  const [paused, setPaused] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    let interval;
    const container = scrollRef.current;

    if (container && !paused) {
      interval = setInterval(() => {
        container.scrollLeft += 1;
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }, 16);
    }

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="bg-black text-white py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent">
            Gallery Highlights
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Swipe through our favorite moments, performances, and memories.
          </p>
        </div>

        <AnimatePresence>
          <motion.div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.id}
                className="relative flex-shrink-0 w-64 sm:w-72 md:w-80 h-72 rounded-2xl overflow-hidden group cursor-pointer border border-lime-400/30"
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Image */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

                {/* Hover info overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-center px-4 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex space-x-3 mb-4"
                  >
                    <ZoomIn className="w-6 h-6 text-lime-400" />
                    <Info className="w-6 h-6 text-green-400" />
                    <Heart className="w-6 h-6 text-pink-400" />
                  </motion.div>

                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.info}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
