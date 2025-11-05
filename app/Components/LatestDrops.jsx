"use client";

import { motion } from "framer-motion";
import { Play, Music2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Monalisa from "@/app/Assets/monalisa.jpg";
import Wait from "@/app/Assets/wait.jpg";
import Lovaboy from "@/app/Assets/lovaboy.jpg";

const drops = [
  {
    id: 1,
    image: Monalisa,
    type: "Afrobeats",
    name: "Monalisa",
  },
  {
    id: 2,
    image: Wait,
    type: "Afrobeats",
    name: "Wait",
  },
  {
    id: 3,
    image: Lovaboy,
    type: "Afrobeat",
    name: "Lovaboy",
  },
];

export default function LatestDrops() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-6 sm:px-10 md:px-24 w-full">
      <div className="max-w-7xl mx-auto space-y-12 w-full text-center">
        {/* === Heading === */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent">
            Latest Drops
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Discover the freshest sounds of the season — new vibes, bold beats,
            and pure energy from the studio to your playlist.
          </p>
        </motion.div>

        {/* === Static Grid of Cards === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {drops.map((drop, i) => (
            <motion.div
              key={drop.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative w-64 sm:w-72 md:w-80 h-80 rounded-2xl overflow-hidden group cursor-pointer border border-lime-400/20 shadow-[0_0_20px_rgba(163,230,53,0.05)] hover:shadow-[0_0_25px_rgba(163,230,53,0.2)] transition-all duration-700"
            >
              {/* Image */}
              <Image
                src={drop.image}
                alt={drop.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={i === 0} // prioritize first image for performan
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

              {/* Music Type */}
              <span className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-lime-400 text-black text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                {drop.type}
              </span>

              {/* Info */}
              <div className="absolute bottom-4 left-4 flex flex-col space-y-2 text-left">
                <h3 className="text-lg sm:text-xl font-bold">{drop.name}</h3>
                <Link
                  href="/music"
                  className="flex items-center space-x-2 text-sm font-semibold text-lime-400 hover:text-green-400 transition"
                >
                  <Play size={16} />
                  <span>Listen Now →</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* === Explore Button === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
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
