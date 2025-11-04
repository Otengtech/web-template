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
    src: "/music/Kwesi-Arthur-Grind-Day-Remix-ft-Sarkodie.mp3",
  },
  // {
  //   id: 4,
  //   title: "African Gender",
  //   genre: "Afrobeat",
  //   year: 2022,
  //   plays: "440K",
  //   cover: Lovaboy,
  //   src: "/music/african.mp3",
  // },
  // {
  //   id: 5,
  //   title: "Emo Played",
  //   genre: "Afrobeat",
  //   year: 2022,
  //   plays: "145K",
  //   cover: Lovaboy,
  //   src: "/music/emo.mp3",
  // },
  // {
  //   id: 6,
  //   title: "City Frequency",
  //   genre: "Afrobeat",
  //   year: 2022,
  //   plays: "239K",
  //   cover: Lovaboy,
  //   src: "/music/holy.mp3",
  // },
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
      to: "https://audiomack.com/",
      icon: <SiAudiomack className="text-yellow-400 w-8 h-8" />,
      bg: "bg-gradient-to-br from-black to-orange-600",
    },
    {
      name: "Apple Music",
      to: "https://music.apple.com/",
      icon: <FaApple className="text-white w-8 h-8" />,
      bg: "bg-gradient-to-br from-gray-800 to-gray-900",
    },
    {
      name: "Spotify",
      to: "https://open.spotify.com/",
      icon: <FaSpotify className="text-green-500 w-8 h-8" />,
      bg: "bg-gradient-to-br from-black to-green-700",
    },
    {
      name: "YouTube",
      to: "https://youtube.com/",
      icon: <FaYoutube className="text-red-500 w-8 h-8" />,
      bg: "bg-gradient-to-br from-black to-red-700",
    },
    {
      name: "Boomplay",
      to: "https://www.boomplay.com/",
      icon: (
        <Image
          src= {Boomplay}
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
          Discover Flip Music’s finest — preview and stream your favorite hits.
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
                  className="mt-4 bg-gradient-to-r from-green-500 to-lime-400 cursor-pointer text-black py-2 px-4 rounded-r-full hover:scale-105 transition-transform"
                >
                  Full Song →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AUDIO PLAYER (hidden) */}
      <audio ref={audioRef} src={currentSong?.src || ""} />

      {/* MODAL */}
      <AnimatePresence>
  {showModal && (
    <motion.div
      className="fixed inset-0 z-50 flex justify-center items-start bg-black/40 backdrop-blur-md overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Inner Wrapper to Control Centering and Padding */}
      <div className="flex justify-center w-full min-h-screen pt-24 sm:pt-28 px-4 pb-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-gray-900/80 border border-lime-400/20 rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl backdrop-blur-xl flex flex-col items-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-lime-300">
            Stream on Your Favorite Platform
          </h2>

          {/* Platforms List */}
          <div className="flex flex-col gap-3 w-full">
            {platforms.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`rounded-xl p-4 flex items-center justify-start gap-3 cursor-pointer hover:opacity-90 ${p.bg}`}
              >
                <Link
                  href={p.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    {p.icon}
                  </div>
                  <span className="text-sm font-medium text-white">
                    {p.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => setShowModal(false)}
            className="mt-8 w-full bg-lime-400 text-black font-semibold py-2 rounded-full hover:opacity-90 transition"
          >
            Close
          </button>
        </motion.div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

      {/* STREAMING PLATFORMS SECTION */}
      <section className="px-6 md:px-20 py-20 bg-gray-950 border-t border-lime-400/10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
        >
          Stream on these Platforms
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Spotify",
              icon: <FaSpotify className="text-green-500 w-10 h-10" />,
              desc: "Stream millions of tracks and discover new hits on Spotify.",
              to: "spotify.com",
            },
            {
              name: "Apple Music",
              icon: <FaApple className="text-white w-10 h-10" />,
              desc: "Experience high-fidelity sound and curated playlists on Apple Music.",
              to: "applemusic.com",
            },
            {
              name: "Audiomack",
              icon: <SiAudiomack className="text-yellow-400 w-10 h-10" />,
              desc: "Free music streaming and discovery for artists and fans on Audiomack.",
              to: "audiomack.com",
            },
            {
              name: "YouTube Music",
              icon: <FaYoutube className="text-red-500 w-10 h-10" />,
              desc: "Watch and listen to your favorite tracks on YouTube Music.",
              to: "www.youtube.com/@Westboyflip",
            },
            {
              name: "Boomplay",
              icon: (
                <Image
                  src={Boomplay}
                  alt="Boomplay"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              ),
              desc: "Africa’s leading music streaming platform — listen anytime, anywhere.",
              to: "boomplay.com",
            },
          ].map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-transparent border border-lime-400/20 rounded-2xl p-6 text-center shadow-md hover:shadow-lime-400/10 transition-all duration-300"
            >
              <Link href={platform.to}>
                <div className="flex justify-center mb-4">{platform.icon}</div>
              <h3 className="text-xl font-semibold text-lime-400 mb-2">
                {platform.name}
              </h3>
              <p className="text-gray-400 text-sm">{platform.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
