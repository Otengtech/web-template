"use client";

import Image from "next/image";
import HeroImage from "@/app/Assets/p4.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import { Music, Headphones, Mic2, Disc3, Speaker } from "lucide-react";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";

export default function HeroSection() {
  const icons = [Music, Headphones, Mic2, Disc3, Speaker];

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-br from-black via-gray-950 to-green-950 text-white overflow-hidden pt-20 sm:pt-24">
      {/* === Floating Gradient Light Effect === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(82, 255, 111, 0.2),transparent_60%)]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-lime-200/10 blur-[160px] rounded-full"></div>

      {/* ===== Left Content ===== */}
      <div className="relative z-10 flex-1 text-left space-y-4 max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl uppercase font-extrabold leading-tight tracking-tight"
        >
          Feel the <span className="text-lime-400">Vibes</span> of Art & Sound
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-base sm:text-lg md:text-lg text-gray-300 max-w-md"
        >
          Dive into a world of rhythm, passion, and creativity. Discover my
          latest tracks, collaborations, and live performances.
        </motion.p>

        {/* ===== Streaming Platforms ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8"
        >
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
            Now Streaming On
          </p>
          <div className="flex gap-5 text-gray-400">
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              <FaSpotify size={28} />
            </a>
            <a
              href="https://music.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaApple size={28} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors"
            >
              <FaYoutube size={28} />
            </a>
          </div>
        </motion.div>

        {/* ===== CTA Buttons ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap gap-4 pt-2"
        >
          <Link href="/music">
            <button className="px-6 py-3 font-semibold bg-lime-400 text-black rounded-full hover:scale-105 transition-transform shadow-lg text-sm sm:text-base">
              Listen Now
            </button>
          </Link>
          <Link href="/projects">
            <button className="px-6 py-3 font-semibold border border-lime-400 rounded-full hover:bg-lime-400 hover:text-black transition-all text-sm sm:text-base">
              View Projects
            </button>
          </Link>
        </motion.div>

        {/* ===== Animated Icons Under Buttons ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
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
              className="text-lime-400/80"
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
        className="relative flex-1 flex justify-center mt-10 mb-8 md:mt-0 z-10"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
          <Image
            src={HeroImage}
            alt="Artist Hero"
            priority
            className="w-[340px] h-[360px] sm:w-[340px] md:w-[450px] md:h-[520px] lg:w-[550px] object-cover object-top rounded-2xl transition-transform duration-500 group-hover:scale-105"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div> */}
        </div>
      </motion.div>
    </section>
  );
}
