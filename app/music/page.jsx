"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaVolumeUp,
  FaVolumeMute,
  FaSpotify,
  FaApple,
  FaYoutube,
} from "react-icons/fa";
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
    src: "/music/10 💕 Stop Breathing.mp3",
    desc: "A journey through soundscapes that evoke emotion and serenity.",
  },
  {
    id: 2,
    title: "Vibe Season",
    genre: "Afrobeat",
    year: 2025,
    plays: "870K",
    cover: p2,
    src: "/music/Cocoon - Migos.m4a",
    desc: "A colorful blend of African rhythms and global energy.",
  },
  {
    id: 3,
    title: "Lagos Nights",
    genre: "Urban Pop",
    year: 2023,
    plays: "2.5M",
    cover: p3,
    src: "/music/Kwesi-Arthur-Grind-Day-Remix-ft-Sarkodie.mp3",
    desc: "Late-night city vibes captured in smooth melodies.",
  },
  {
    id: 4,
    title: "Dreamscape",
    genre: "Electronic",
    year: 2022,
    plays: "3.1M",
    cover: p4,
    src: "/music/Meek Mill - Level Up ft. Young Thug (2025).mp3",
    desc: "Dive deep into futuristic sounds and ethereal beats.",
  },
  {
    id: 5,
    title: "Soul Horizon",
    genre: "R&B",
    year: 2024,
    plays: "945K",
    cover: p5,
    src: "/music/o-kenneth-balenciaga.m4a",
    desc: "Smooth vocals and heartfelt lyrics that touch the soul.",
  },
  {
    id: 6,
    title: "City Frequency",
    genre: "Hip-Hop",
    year: 2025,
    plays: "1.8M",
    cover: p6,
    src: "/music/Roddy Ricch - Rich Forever uKjfiA7MMw8.m4a",
    desc: "Hard-hitting beats with lyrical mastery.",
  },
];

export default function MusicGallery() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = (song) => {
    if (currentSong?.id === song.id) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setTimeout(() => {
        audioRef.current.play();
        setIsPlaying(true);
      }, 100);
    }
  };

  const handlePrev = () => {
    const index = songs.findIndex((s) => s.id === currentSong.id);
    const prev = songs[(index - 1 + songs.length) % songs.length];
    setCurrentSong(prev);
    setTimeout(() => audioRef.current.play(), 100);
    setIsPlaying(true);
  };

  const handleNext = () => {
    const index = songs.findIndex((s) => s.id === currentSong.id);
    const next = songs[(index + 1) % songs.length];
    setCurrentSong(next);
    setTimeout(() => audioRef.current.play(), 100);
    setIsPlaying(true);
  };

  const handleVolume = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    audioRef.current.volume = newVol;
  };

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleNext);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleNext);
    };
  }, [currentSong]);

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden pb-40">
      {/* HEADER */}
      <section className="pt-24 pb-12 text-center px-6 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent"
        >
          THE BEAT GALLERY
        </motion.h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Discover Flip Music’s finest — experience rhythm, art, and energy.
        </p>
      </section>

      {/* SONG GRID */}
      <section className="px-6 md:px-20 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {songs.map((song, index) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-lime-400/20 hover:border-lime-400/50 overflow-hidden transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={song.cover}
                  alt={song.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <button
                    onClick={() => handlePlayPause(song)}
                    className="bg-gradient-to-r from-green-500 to-lime-400 p-4 rounded-full text-black hover:scale-110 transition-transform"
                  >
                    {currentSong?.id === song.id && isPlaying ? (
                      <FaPause size={22} />
                    ) : (
                      <FaPlay size={22} />
                    )}
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{song.title}</h3>
                <p className="text-gray-400 text-sm mb-2">
                  {song.genre} • {song.year}
                </p>
                <p className="text-gray-500 text-xs mb-3">{song.plays} Plays</p>
                <p className="text-gray-300 text-sm line-clamp-2">{song.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GLOBAL AUDIO PLAYER */}
      {currentSong && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-0 left-0 w-full bg-gray-900/80 backdrop-blur-lg border-t border-lime-400/30 px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4 z-50"
        >
          <div className="flex items-center gap-4">
            <Image
              src={currentSong.cover}
              alt={currentSong.title}
              className="w-14 h-14 object-cover rounded-lg"
            />
            <div>
              <h4 className="font-semibold">{currentSong.title}</h4>
              <p className="text-gray-400 text-xs">{currentSong.genre}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center w-full md:w-1/2">
            <div className="flex items-center gap-6">
              <FaStepBackward
                onClick={handlePrev}
                className="text-gray-300 hover:text-lime-400 text-xl cursor-pointer"
              />
              <button
                onClick={() => handlePlayPause(currentSong)}
                className="bg-gradient-to-r from-green-500 to-lime-400 p-3 rounded-full text-black hover:scale-105 transition-transform"
              >
                {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
              </button>
              <FaStepForward
                onClick={handleNext}
                className="text-gray-300 hover:text-lime-400 text-xl cursor-pointer"
              />
            </div>
            <div className="w-full bg-gray-700 h-1 mt-3 rounded-full overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-green-500 to-lime-400 h-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Volume */}
          <div className="flex items-center gap-3">
            {isMuted ? (
              <FaVolumeMute
                className="text-gray-300 hover:text-lime-400 cursor-pointer"
                onClick={toggleMute}
              />
            ) : (
              <FaVolumeUp
                className="text-gray-300 hover:text-lime-400 cursor-pointer"
                onClick={toggleMute}
              />
            )}
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolume}
              className="w-24 accent-lime-400 cursor-pointer"
            />
          </div>

          <audio ref={audioRef} src={currentSong.src} />
        </motion.div>
      )}
    </div>
  );
}
