"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Picture from "@/app/Assets/p4.jpg";
import { Music, Award, Mic2, Headphones } from "lucide-react";
import StreamsSection from "../Components/StreamSection";

const AboutPage = () => {
  return (
    <div className="bg-black text-white overflow-hidden min-h-screen">
      {/* ===== STORY / JOURNEY SECTION ===== */}
      <section className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-20 py-24 bg-gradient-to-b from-black via-gray-950 to-black">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2"
        >
          <Image
            src={Picture}
            alt="Artist performing"
            width={600}
            height={600}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent">
            The Journey
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Born in <span className="text-lime-400">Nigeria</span> and raised in{" "}
            <span className="text-lime-400">Ghana</span>, Flip Music’s story is
            one of rhythm, ambition, and resilience. From juggling late-night
            studio sessions to early morning classes, he mastered the art of
            balance — making music while pursuing education.
          </p>
          <p className="text-gray-400 leading-relaxed">
            His unique perspective, shaped by two vibrant cultures, fuels his
            creativity and voice. Flip’s journey reflects the power of
            perseverance — turning passion into a purpose, and purpose into
            impact.
          </p>
        </motion.div>
      </section>

      {/* ===== ACHIEVEMENTS & REACH ===== */}
      <section className="text-center py-24 bg-gray-950">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent"
        >
          Achievements & Reach
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              icon: <Award size={40} className="text-lime-400 mb-4" />,
              title: "Top Rising Artist 2024",
              desc: "Recognized among the top new voices redefining Afro-fusion and contemporary sound.",
            },
            {
              icon: <Headphones size={40} className="text-lime-400 mb-4" />,
              title: "2M+ Global Streams",
              desc: "Across Spotify, Apple Music, and Audiomack — a growing global fanbase embracing the sound.",
            },
            {
              icon: <Mic2 size={40} className="text-lime-400 mb-4" />,
              title: "Live Performances",
              desc: "From Ghana to Nigeria, performing on major stages and connecting through pure sound.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/40 p-8 rounded-2xl border border-lime-400/20 hover:border-lime-400/50 transition-all shadow-md hover:shadow-lime-400/10"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <StreamsSection />

      {/* ===== MUSICAL STYLE & INFLUENCE ===== */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent"
          >
            Musical Style & Influence.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 leading-relaxed text-left md:text-center max-w-3xl mx-auto"
          >
            Big Flip blends Afrobeat with futuristic
            production and deeply emotional lyrics. His inspirations range from
            the rhythmic pulse of Lagos to the creative energy of Accra — mixing
            cultural roots with a modern edge. Each song embodies emotion,
            storytelling, and an evolving musical identity.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
