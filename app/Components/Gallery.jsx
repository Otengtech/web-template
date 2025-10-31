"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { X, Download } from "lucide-react";
import Image from "next/image"; // ✅ Import Next.js Image

// ✅ Import images from your assets
import p1 from "@/app/Assets/p1.jpg";
import p2 from "@/app/Assets/p2.jpg";
import p3 from "@/app/Assets/p3.jpg";
import p4 from "@/app/Assets/p4.jpg";
import p5 from "@/app/Assets/p5.jpg";
import p6 from "@/app/Assets/p6.jpg";

const galleryItems = [
  { id: 1, title: "Studio Moments", image: p2 },
  { id: 2, title: "On Stage Energy", image: p3 },
  { id: 3, title: "Behind the Scenes", image: p4 },
  { id: 4, title: "Music Video Shoot", image: p5 },
  { id: 5, title: "Live Studio Band", image: p6 },
  { id: 6, title: "Recording Vibes", image: p1 },
];

export default function GalleryInfo() {
  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [selected, setSelected] = useState(null);

  // ✅ Auto-scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    let interval;

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

  // ✅ Animation variants
  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-10 relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-2"
        >
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent">
            Gallery Highlights
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Click any image to view in full screen.
          </p>
        </motion.div>

        {/* ✅ Horizontal Scrollable Gallery */}
        <motion.div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto no-scrollbar"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={() => setSelected(item)}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="relative flex-shrink-0 w-[45vw] sm:w-[40vw] md:w-[30vw] lg:w-[28vw] xl:w-[25vw] h-64 md:h-72 rounded-2xl overflow-hidden border border-lime-400/30 cursor-pointer transition-all duration-700"
            >
              {/* ✅ Optimized Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ✅ Fullscreen Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-[90vw] md:w-[70vw] lg:w-[60vw] max-h-[90vh]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <Image
                src={selected.image}
                alt={selected.title}
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-lg shadow-lg"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 rounded-full hover:bg-black/80 transition"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Download Button */}
              <a
                href={selected.image.src}
                download
                className="absolute top-4 left-4 p-2 bg-lime-500/80 hover:bg-lime-400 text-black rounded-full transition"
              >
                <Download className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
