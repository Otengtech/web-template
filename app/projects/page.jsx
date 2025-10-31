"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import p1 from "@/app/Assets/p1.jpg";
import p2 from "@/app/Assets/p2.jpg";
import p3 from "@/app/Assets/p3.jpg";

const projects = [
  {
    id: 1,
    title: "Echoes of Tomorrow",
    category: "Album Production",
    year: 2025,
    description:
      "A futuristic blend of Afrobeat and electronic sounds — produced and mastered for Flip Music Records.",
    image:p1,
  },
  {
    id: 2,
    title: "Lagos Nights Live",
    category: "Concert Experience",
    year: 2024,
    description:
      "A high-energy live performance tour capturing the pulse of Lagos’ vibrant nightlife scene.",
    image:p2,
  },
  {
    id: 3,
    title: "Golden Rhythms",
    category: "Collaboration Project",
    year: 2025,
    description:
      "A multi-artist collaboration merging soul, jazz, and Afro-fusion into one timeless sound.",
    image:p3,
  },
];

const page = () => {
  return (
    <div className="bg-black text-white overflow-hidden min-h-screen">
      {/* ===== HEADER ===== */}
      <section className="py-24 px-6 md:px-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent"
        >
          MUSIC PROJECTS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 mt-6 text-sm md:text-base max-w-2xl mx-auto"
        >
          Explore Flip Music’s creative journey — from studio sessions and album
          releases to immersive live performances and visual experiences.
        </motion.p>
      </section>

      {/* ===== PROJECTS GRID ===== */}
      <section className="pb-24 px-6 md:px-20 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-900/50 rounded-2xl overflow-hidden border border-lime-400/20 hover:border-lime-400/50 shadow-md hover:shadow-lime-400/10 transition-all"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-sm">
                  {project.category} • {project.year}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {project.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-gradient-to-r from-green-500 to-lime-400 text-black px-6 py-2 rounded-full font-semibold shadow-lg"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
