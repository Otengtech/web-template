"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaPlay,
  FaPause,
  FaSpotify,
  FaApple,
  FaYoutube,
  FaSoundcloud,
  FaDeezer,
} from "react-icons/fa";
import { SiAudiomack, SiTidal, SiYoutubemusic } from "react-icons/si";

import p4 from "@/app/Assets/p4.jpg";
import p5 from "@/app/Assets/p5.jpg";
import p6 from "@/app/Assets/p6.jpg";
import Boomplay from "@/app/Assets/boomplay.png";
import Monalisa from "@/app/Assets/monalisa.jpg";
import Wait from "@/app/Assets/wait.jpg";
import Lovaboy from "@/app/Assets/lovaboy.jpg";
import Link from "next/link";

const songs = [
  {
    id: 1,
    title: "Monalisa",
    genre: "Afrobeats",
    year: 2024,
    plays: "405K",
    cover: Monalisa,
    src: "/music/monalisa.mp3",
  },
  {
    id: 2,
    title: "Wait",
    genre: "Afrobeat",
    year: 2024,
    plays: "870K",
    cover: Wait,
    src: "/music/wait.mp3",
  },
  {
    id: 3,
    title: "Lovaboy",
    genre: "Afrobeat",
    year: 2022,
    plays: "570K",
    cover: Lovaboy,
    src: "/music/lovaboy.mp3",
  },
  {
    id: 4,
    title: "African Gender",
    genre: "Afrobeat",
    year: 2022,
    plays: "440K",
    cover: Lovaboy,
    src: "/music/african-gender.mp3",
  },
  {
    id: 5,
    title: "Emo Played",
    genre: "Afrobeat",
    year: 2022,
    plays: "145K",
    cover: Lovaboy,
    src: "/music/emo-played.mp3",
  },
];

export default function MusicGallery() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const audioRef = useRef(null);
  const previewDuration = useRef(10); // seconds of preview (adjusted later)

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
      setTimeout(() => {
        audioRef.current.play();
        setIsPlaying(true);
      }, 100);
    }
  };

  const stopPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setProgress(0);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoaded = () => {
      // Set preview duration to 1/4 of total duration or max 15s
      previewDuration.current = Math.min(audio.duration / 4, 15);
    };

    const updateProgress = () => {
      if (!audio.duration) return;
      const pct = (audio.currentTime / audio.duration) * 100;
      setProgress(pct);

      if (audio.currentTime >= previewDuration.current) {
        stopPlayback();
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", handleLoaded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", handleLoaded);
    };
  }, [currentSong]);

  const platforms = [
    {
      name: "Audiomack",
      to: "https://tr.ee/42ff51xB9W",
      icon: <SiAudiomack className="text-yellow-400 w-8 h-8" />,
      bg: "bg-gradient-to-br from-black to-orange-600",
    },
    {
      name: "Apple Music",
      to: "https://tr.ee/SAC6vR0lor",
      icon: <FaApple className="text-white w-8 h-8" />,
      bg: "bg-gradient-to-br from-gray-800 to-gray-900",
    },
    {
      name: "Spotify",
      to: "https://tr.ee/FXMCfdKMS4",
      icon: <FaSpotify className="text-green-500 w-8 h-8" />,
      bg: "bg-gradient-to-br from-black to-green-700",
    },
    {
      name: "YouTube",
      to: "https://tr.ee/_Fdf1Lxx-P",
      icon: <FaYoutube className="text-red-500 w-8 h-8" />,
      bg: "bg-gradient-to-br from-black to-red-700",
    },
    {
      name: "Boomplay",
      to: "https://tr.ee/z3baSWsfd0",
      icon: (
        <Image
          src={Boomplay}
          alt="Boomplay"
          width={32}
          height={32}
          className="object-contain"
        />
      ),
      bg: "bg-gradient-to-br from-black to-sky-700",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* HEADER */}
      <section className="pt-24 pb-12 text-center px-6 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent"
        >
          THE MUSIC
        </motion.h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Discover Flip Music’s finest — preview and stream your favorite hits
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
              className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-green-400 to-black hover:border-lime-400/50 transition-all"
            >
              {/* Image + Play Button */}
              <div className="relative h-64">
                <Image
                  src={song.cover}
                  alt={song.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button
                    onClick={() => handlePlayPause(song)}
                    className="bg-gradient-to-r from-green-500 to-lime-400 p-4 rounded-full text-black hover:scale-110 transition-transform shadow-lg"
                  >
                    {currentSong?.id === song.id && isPlaying ? (
                      <FaPause size={20} />
                    ) : (
                      <FaPlay size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm">
                <h3 className="text-xl md:text-2xl text-lime-400 font-bold">
                  {song.title}
                </h3>
                <p className="text-gray-300 text-sm mt-1">
                  {song.genre} • {song.year}
                </p>
                <p className="text-gray-300 text-sm mt-1">{song.plays} Plays</p>

                <button
                  onClick={() => {
                    setShowModal(true);
                    setCurrentSong(song);
                  }}
                  className="mt-4 bg-gradient-to-r from-green-500 to-lime-400 cursor-pointer text-black py-2 px-4 rounded-full hover:scale-105 transition-transform"
                >
                  <Link href="https://linktr.ee/BIGFLIPmusic">Full Song →</Link>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AUDIO PLAYER (hidden) */}
      <audio ref={audioRef} src={currentSong?.src || ""} />
    </div>
  );
}
