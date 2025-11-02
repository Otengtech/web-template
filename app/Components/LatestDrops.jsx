"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Play, Music2 } from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

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
  const { ref, inView } = useInView({ threshold: 0.2 });
  const controls = useAnimation();

  // Handle animation play/pause
  useEffect(() => {
    if (paused) {
      controls.stop();
    } else {
      controls.start({
        x: ["0%", "-50%"], // slide halfway since we duplicate items
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 25, // adjust for speed
          },
        },
      });
    }
  }, [paused, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="bg-black text-white py-10 md:py-24 px-6 sm:px-8 md:px-16 overflow-hidden w-full"
    >
      <div className="max-w-7xl mx-auto space-y-10 w-full text-center">
        {/* === Heading === */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent">
            Latest Drops
          </h2>
          <p className="text-gray-200 text-sm sm:text-base text-left md:text-lg max-w-2xl mx-auto">
            Discover the freshest sounds of the season — new vibes, bold beats,
            and pure energy from the studio to your playlist.
          </p>
        </motion.div>

        {/* === Smooth Sliding Row === */}
        <div
          className="overflow-hidden w-full py-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            className="flex space-x-6 w-max"
            animate={controls}
          >
            {/* Duplicate drops twice for infinite loop */}
            {[...drops, ...drops].map((drop, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                className="relative flex-shrink-0 w-64 sm:w-72 h-80 rounded-2xl overflow-hidden group cursor-pointer border border-lime-400/20 shadow-[0_0_20px_rgba(163,230,53,0.05)] hover:shadow-[0_0_25px_rgba(163,230,53,0.2)] transition-all duration-700"
              >
                {/* Image */}
                <motion.img
                  src={drop.image}
                  alt={drop.name}
                  className="w-full h-full block object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* Music Type */}
                <span className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-lime-400 text-black text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                  {drop.type}
                </span>

                {/* Info */}
                <div className="absolute bottom-4 left-4 flex flex-col space-y-2 text-left">
                  <h3 className="text-lg sm:text-xl font-bold">{drop.name}</h3>
                  <Link href="/music"
                    className="flex items-center space-x-2 text-sm font-semibold text-lime-400 hover:text-green-400 transition"
                  >
                    <Play size={16} />
                    <span>Listen Now →</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* === Explore Button === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/music">
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-500 to-lime-400 text-black font-semibold rounded-full shadow-md hover:shadow-[0_0_20px_rgba(163,230,53,0.4)] hover:scale-105 transition-all duration-300">
              <Music2 size={18} />
              Explore More Music
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
