"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import p1 from "@/app/Assets/p1.jpg";

export default function MiniAbout() {
  const router = useRouter();

  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6 sm:px-10 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* === Artist Info === */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-xl text-center md:text-left"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-lime-300 bg-clip-text text-transparent">
          About the Artist
        </h2>

        <p className="text-gray-300 mt-4 leading-relaxed text-left text-sm md:text-base">
          A visionary artist known for blending emotion, color, and rhythm into
          every piece. Through sound and visuals, their art explores human
          connection, identity, and the beauty found in everyday chaos.
        </p>
        {/* === Artist Image === */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-800"
        >
          <Image
            src={p1}
            alt="Artist portraits"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => router.push("/about")}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-lime-400 text-black font-semibold rounded-full shadow-lg hover:shadow-lime-400/30 transition"
        >
          Read More →
        </motion.button>
      </motion.div>
    </section>
  );
}
