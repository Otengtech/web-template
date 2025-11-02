"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaPlay, FaPause, FaSpotify, FaApple, FaYoutube } from "react-icons/fa";
import { SiAudiomack, SiTidal } from "react-icons/si";

import p1 from "@/app/Assets/p1.jpg";
import p2 from "@/app/Assets/p2.jpg";
import p3 from "@/app/Assets/p3.jpg";
import p4 from "@/app/Assets/p4.jpg";
import p5 from "@/app/Assets/p5.jpg";
import p6 from "@/app/Assets/p6.jpg";

const songs = [
  {
    id: 1,
    title: "Echoes of Time",
    genre: "Ambient",
    year: 2024,
    plays: "1.2M",
    cover: p1,
    src: "/public/10 💕 Stop Breathing.mp3", // You’ll host these in /public/music
  },
  {
    id: 2,
    title: "Vibe Season",
    genre: "Afrobeat",
    year: 2025,
    plays: "870K",
    cover: p2,
    src: "/public/Cocoon - Migos.m4a",
  },
  {
    id: 3,
    title: "Lagos Nights",
    genre: "Urban Pop",
    year: 2023,
    plays: "2.5M",
    cover: p3,
    src: "/public/Kwesi-Arthur-Grind-Day-Remix-ft-Sarkodie.mp3",
  },
  {
    id: 4,
    title: "Dreamscape",
    genre: "Electronic",
    year: 2022,
    plays: "3.1M",
    cover: p4,
    src: "/public/Meek Mill - Level Up ft. Young Thug (2025).mp3",
  },
  {
    id: 5,
    title: "Soul Horizon",
    genre: "R&B",
    year: 2024,
    plays: "945K",
    cover: p5,
    src: "/public/o-kenneth-balenciaga.m4a",
  },
  {
    id: 6,
    title: "City Frequency",
    genre: "Hip-Hop",
    year: 2025,
    plays: "1.8M",
    cover: p6,
    src: "/public/Roddy Ricch - Rich Forever uKjfiA7MMw8.m4a",
  },
];

export default function MusicPage() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = (song) => {
    if (currentSong?.id === song.id) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
      setTimeout(() => {
        if (audioRef.current) audioRef.current.play();
      }, 100);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* ===== HEADER ===== */}
      <section className="pt-24 pb-12 px-6 md:px-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent"
        >
          FLIP MUSIC PLAYER
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm md:text-base"
        >
          Stream Flip Music’s top releases — right here. Feel every beat, every
          lyric, and every moment.
        </motion.p>
      </section>

      {/* ===== SONG GRID ===== */}
      <section className="pb-32 px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {songs.map((song, index) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative group rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-lime-400/20 hover:border-lime-400/40 overflow-hidden transition-all`}
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={song.cover}
                  alt={song.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => handlePlayPause(song)}
                    className="bg-gradient-to-r from-green-500 to-lime-400 p-4 rounded-full text-black hover:scale-110 transition-transform"
                  >
                    {currentSong?.id === song.id && isPlaying ? (
                      <FaPause size={24} />
                    ) : (
                      <FaPlay size={24} />
                    )}
                  </button>
                </div>
              </div>

              <div className="p-5 space-y-2 text-center">
                <h3 className="text-xl font-semibold">{song.title}</h3>
                <p className="text-gray-400 text-sm">
                  {song.genre} • {song.year}
                </p>
                <p className="text-gray-500 text-xs">Plays: {song.plays}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== GLOBAL AUDIO PLAYER ===== */}
      {currentSong && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[60%] bg-gray-900/80 backdrop-blur-lg border border-lime-400/30 rounded-2xl p-4 flex items-center justify-between z-50"
        >
          <div className="flex items-center gap-4">
            <Image
              src={currentSong.cover}
              alt={currentSong.title}
              className="w-14 h-14 object-cover rounded-lg"
            />
            <div>
              <h4 className="text-white font-semibold text-sm md:text-base">
                {currentSong.title}
              </h4>
              <p className="text-gray-400 text-xs">{currentSong.genre}</p>
            </div>
          </div>

          <button
            onClick={() => handlePlayPause(currentSong)}
            className="bg-gradient-to-r from-green-500 to-lime-400 text-black p-3 rounded-full hover:scale-105 transition-transform"
          >
            {isPlaying ? <FaPause size={22} /> : <FaPlay size={22} />}
          </button>

          <audio ref={audioRef} src={currentSong.src} onEnded={() => setIsPlaying(false)} />
        </motion.div>
      )}

      {/* ===== STREAMING LINKS ===== */}
      <section className="py-24 px-6 md:px-20 text-center bg-gradient-to-b from-black via-gray-950 to-black">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent"
        >
          Available On All Platforms
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-10 mt-10 text-gray-400">
          <FaSpotify className="text-green-400 text-4xl hover:scale-110 transition-transform" />
          <FaApple className="text-gray-200 text-4xl hover:scale-110 transition-transform" />
          <SiTidal className="text-blue-400 text-4xl hover:scale-110 transition-transform" />
          <SiAudiomack className="text-orange-400 text-4xl hover:scale-110 transition-transform" />
          <FaYoutube className="text-red-500 text-4xl hover:scale-110 transition-transform" />
        </div>
      </section>
    </div>
  );
}
