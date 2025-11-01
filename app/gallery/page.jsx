"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, Rows3, Download, X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
  "https://images.unsplash.com/photo-1473187983305-f615310e7daa",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1506765515384-028b60a970df",
  "https://images.unsplash.com/photo-1503264116251-35a269479413",
];

export default function GalleryPage() {
  const [layout, setLayout] = useState("grid");
  const [selected, setSelected] = useState(null); // store current image index

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  // Navigate left/right in lightbox
  const nextImage = () => setSelected((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setSelected((prev) => (prev - 1 + images.length) % images.length);

  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `image-${selected + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-white py-10 md:py-20 px-6 sm:px-10 relative">
      {/* === Header === */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 to-lime-300 bg-clip-text text-transparent">
          The Visual Vibe Gallery
        </h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Dive into a world of vivid imagery — explore, animate, and switch
          between styles effortlessly.
        </p>

        {/* Layout Switch Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setLayout("grid")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
              layout === "grid"
                ? "bg-gradient-to-r from-green-500 to-lime-400 text-black"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            <LayoutGrid size={18} />
            Grid
          </button>
          <button
            onClick={() => setLayout("masonry")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
              layout === "masonry"
                ? "bg-gradient-to-r from-green-500 to-lime-400 text-black"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            <Rows3 size={18} />
            Masonry
          </button>
        </div>
      </div>

      {/* === Gallery Section === */}
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {layout === "grid" && (
            <motion.div
              key="grid"
              variants={container}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {images.map((src, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelected(i)}
                  className="relative overflow-hidden rounded-xl cursor-pointer group"
                >
                  <motion.img
                    src={src}
                    alt={`Gallery ${i}`}
                    className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}

          {layout === "masonry" && (
            <motion.div
              key="masonry"
              variants={container}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
              className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
            >
              {images.map((src, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelected(i)}
                  className="overflow-hidden rounded-2xl break-inside-avoid cursor-pointer group"
                >
                  <motion.img
                    src={src}
                    alt={`Gallery ${i}`}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* === LIGHTBOX VIEWER === */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center z-50"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 bg-gray-800/60 hover:bg-gray-700 p-2 rounded-full transition"
            >
              <X size={22} />
            </button>

            {/* Image */}
            <motion.img
              key={images[selected]}
              src={images[selected]}
              alt={`Full Image ${selected + 1}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-[90%] max-h-[80vh] rounded-2xl shadow-lg object-contain"
            />

            {/* Controls */}
            <div className="absolute bottom-10 flex items-center gap-6">
              <button
                onClick={prevImage}
                className="p-3 bg-gray-800/70 hover:bg-gray-700 rounded-full transition"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={() => handleDownload(images[selected])}
                className="p-3 bg-gradient-to-r from-green-500 to-lime-400 text-black font-semibold rounded-full flex items-center gap-2 hover:scale-105 transition"
              >
                <Download size={18} />
                Download
              </button>
              <button
                onClick={nextImage}
                className="p-3 bg-gray-800/70 hover:bg-gray-700 rounded-full transition"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
