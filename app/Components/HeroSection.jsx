"use client";

import Image from "next/image";
import HeroImage from "@/app/Assets/p4.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import { Music, Headphones, Mic2, Disc3, Speaker } from "lucide-react";

export default function HeroSection() {
  const icons = [Music, Headphones, Mic2, Disc3, Speaker];

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-r from-green-500 to-lime-400 text-white overflow-hidden pt-20 sm:pt-24">
      {" "}
      {/* ===== Left Content ===== */}
      <div className="relative z-10 flex-1 text-left space-y-5 md:space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-md text-gray-900"
        >
          Feel the <span className="text-white">Vibes</span> of Art & Sound
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-md sm:text-lg md:text-xl text-white/90 max-w-md md:max-w-lg"
        >
          Explore my latest music, creative projects, and exclusive merch drops.
          Join the journey — where sound meets soul.
        </motion.p>

        {/* ===== Buttons ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap gap-3 pt-2"
        >
          <Link href="/music">
            <button className="px-6 sm:px-5 py-3 sm:py-2.5 cursor-pointer font-semibold bg-gray-900 hover:bg-gray-800 text-white transition-all shadow-lg text-sm sm:text-base">
              Listen Now
            </button>
          </Link>
          <Link href="/projects">
            <button className="px-6 sm:px-5 py-3 sm:py-2.5 cursor-pointer font-semibold border border-white hover:text-gray-700 hover:bg-white transition-all text-sm sm:text-base">
              View Projects
            </button>
          </Link>
        </motion.div>

        {/* ===== Animated Icons Under Buttons ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex gap-5 mt-6"
        >
          {icons.map((Icon, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
              className="text-white/80"
            >
              <Icon size={30} className="drop-shadow-md" />
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* ===== Right Hero Image ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative flex-1 flex justify-center my-8 md:mt-0 z-10"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={HeroImage}
            alt="Artist Hero"
            priority
            className="w-[300px] h-[300px] sm:w-[320px] md:w-[450px] md:h-[520px] lg:w-[550px] object-cover object-top rounded-2xl drop-shadow-lg hover:scale-105 transition-transform duration-500 bg-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
