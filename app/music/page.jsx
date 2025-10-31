"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";
import { SiAudiomack, SiTidal } from "react-icons/si";

const songs = [
  {
    id: 1,
    title: "Echoes of Time",
    genre: "Ambient",
    year: 2024,
    plays: "1.2M",
    cover:
      "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Vibe Season",
    genre: "Afrobeat",
    year: 2025,
    plays: "870K",
    cover:
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Lagos Nights",
    genre: "Urban Pop",
    year: 2023,
    plays: "2.5M",
    cover:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Dreamscape",
    genre: "Electronic",
    year: 2022,
    plays: "3.1M",
    cover:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Soul Horizon",
    genre: "R&B",
    year: 2024,
    plays: "945K",
    cover:
      "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "City Frequency",
    genre: "Hip-Hop",
    year: 2025,
    plays: "1.8M",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
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
          THE MUSIC
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 mt-6 text-sm md:text-base max-w-2xl mx-auto"
        >
          Explore Flip Music’s sonic world — rhythm, emotion, and energy
          harmonized into every beat. Stream the latest releases across your
          favorite platforms.
        </motion.p>
      </section>

      {/* ===== SONGS GRID ===== */}
      <section className="pb-24 px-6 md:px-20 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {songs.map((song, i) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-900/50 rounded-2xl overflow-hidden border border-lime-400/20 hover:border-lime-400/50 shadow-md hover:shadow-lime-400/10 transition-all"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={song.cover}
                  alt={song.title}
                  width={400}
                  height={400}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">{song.title}</h3>
                <p className="text-gray-400 text-sm">
                  {song.genre} • {song.year}
                </p>
                <p className="text-gray-500 text-xs">Plays: {song.plays}</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-gradient-to-r from-green-500 to-lime-400 text-black px-6 py-2 rounded-full font-semibold shadow-lg"
                >
                  Stream Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== STREAMING PLATFORMS ===== */}
      <section className="py-24 px-6 md:px-20 text-center bg-black relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent">
            Available On All Platforms
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Stream our music anywhere, anytime. Connect with your favorite
            platform below.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
            {[
              { icon: <FaApple />, name: "Apple Music", color: "text-gray-200" },
              { icon: <FaSpotify />, name: "Spotify", color: "text-green-400" },
              { icon: <SiTidal />, name: "Tidal", color: "text-blue-400" },
              { icon: <SiAudiomack />, name: "Audiomack", color: "text-orange-400" },
              { icon: <FaYoutube />, name: "YouTube", color: "text-red-500" },
            ].map((platform, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex flex-col items-center space-y-2"
              >
                <div className={`text-5xl ${platform.color}`}>
                  {platform.icon}
                </div>
                <p className="text-sm text-gray-400">{platform.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default page;
