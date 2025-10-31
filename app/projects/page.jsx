"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Echoes of Tomorrow",
    category: "Album Production",
    year: 2025,
    description:
      "A futuristic blend of Afrobeat and electronic sounds — produced and mastered for Flip Music Records.",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Lagos Nights Live",
    category: "Concert Experience",
    year: 2024,
    description:
      "A high-energy live performance tour capturing the pulse of Lagos’ vibrant nightlife scene.",
    image:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Golden Rhythms",
    category: "Collaboration Project",
    year: 2025,
    description:
      "A multi-artist collaboration merging soul, jazz, and Afro-fusion into one timeless sound.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Studio 54 Sessions",
    category: "Recording Project",
    year: 2023,
    description:
      "An intimate studio recording session capturing raw, live performances with authentic vibes.",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Oceanic Flow",
    category: "Music Video",
    year: 2024,
    description:
      "A visual masterpiece blending motion, color, and rhythm to express freedom through sound.",
    image:
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Soundwave Experience",
    category: "Virtual Performance",
    year: 2025,
    description:
      "An immersive 3D concert experience powered by interactive visuals and digital soundscapes.",
    image:
      "https://images.unsplash.com/photo-1533236897111-3e94666b2edf?auto=format&fit=crop&w=800&q=80",
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
