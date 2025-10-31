"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaSpotify,
  FaApple,
  FaYoutube,
  FaMusic,
} from "react-icons/fa";
import { SiAudiomack, SiTidal } from "react-icons/si"; // ✅ replaced Boomplay with Tidal

const songs = [
  {
    id: 1,
    title: "Echoes of Time",
    album: "Midnight Waves",
    cover:
      "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Vibe Season",
    album: "Golden Rhythms",
    cover:
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Lagos Nights",
    album: "Urban Sound",
    cover:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Dreamscape",
    album: "Oceanic Flow",
    cover:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
  },
];

const MusicPage = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* ===== SECTION 1: Intro ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 max-w-7xl mx-auto">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 mb-10 md:mb-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80"
            alt="Artist"
            width={600}
            height={600}
            className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent">
            Feel the Sound. Live the Vibe.
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Dive into the rhythm of passion and energy. Experience Flip Music’s
            latest collection of tracks — crafted to inspire, move, and connect
            you to the soul of sound.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-gradient-to-r from-green-500 to-lime-400 text-black px-8 py-3 rounded-full font-semibold shadow-lg"
          >
            Listen Now
          </motion.button>
        </motion.div>
      </section>

      {/* ===== SECTION 2: Songs Grid ===== */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-black via-gray-950 to-black">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent">
            Latest Releases
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Explore Flip Music’s trending tracks and new drops.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {songs.map((song, i) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-900/50 rounded-2xl overflow-hidden border border-lime-400/20 hover:border-lime-400/50 shadow-md"
            >
              <Image
                src={song.cover}
                alt={song.title}
                width={400}
                height={400}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="p-5 space-y-1">
                <h3 className="text-lg font-semibold text-white">
                  {song.title}
                </h3>
                <p className="text-sm text-gray-400">{song.album}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== SECTION 3: Streaming Platforms ===== */}
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
                <div
                  className={`text-5xl ${platform.color} transition-transform`}
                >
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

export default MusicPage;
