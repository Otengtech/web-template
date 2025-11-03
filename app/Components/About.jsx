"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import p1 from "@/app/Assets/p1.jpg";

export default function MiniAbout() {
  const router = useRouter();

  return (
    <section className="min-h-[70vh] bg-black text-white py-16 px-6 sm:px-12 md:px-32 flex flex-col-reverse md:flex-row items-center justify-center gap-10">
      
      {/* === Artist Info === */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full md:w-1/2 text-center md:text-left space-y-5"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          About the Artist
        </h2>

        <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
          A visionary artist known for blending emotion, color, and rhythm into
          every piece. Through sound and visuals, their art explores human
          connection, identity, and the beauty found in everyday chaos.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => router.push("/about")}
          className="mt-4 px-6 py-3 bg-lime-400 text-black font-semibold rounded-full shadow-lg hover:shadow-lime-400/30 transition"
        >
          Read More →
        </motion.button>
      </motion.div>

      {/* === Artist Image === */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
      >
        <Image
          src={p1}
          alt="Artist portrait"
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
        />
      </motion.div>
    </section>
  );
}
