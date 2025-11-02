"use client";

import { motion } from "framer-motion";
import { PlayCircle, Clock, Eye, Calendar } from "lucide-react";
import { useInView } from "react-intersection-observer";

const videos = [
  {
    id: 1,
    title: "Behind The Beats - Studio Session",
    thumbnail:
      "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=800&q=80",
    duration: "5:42",
    views: "182K",
    date: "Oct 12, 2025",
  },
  {
    id: 2,
    title: "Live Performance at Afro Jam Fest",
    thumbnail:
      "https://images.unsplash.com/photo-1525286116112-b59af11adad1?auto=format&fit=crop&w=800&q=80",
    duration: "8:15",
    views: "259K",
    date: "Sep 30, 2025",
  },
  {
    id: 3,
    title: "Music Video: Sunset Waves",
    thumbnail:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
    duration: "4:10",
    views: "320K",
    date: "Aug 18, 2025",
  },
];

export default function WatchNow() {
  const { ref, inView } = useInView({
    triggerOnce: false, // 🔁 animate every time it enters viewport
    threshold: 0.2,
  });

  // Animation variants for smooth, staggered entry
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <section ref={ref} className="bg-black text-white py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Title */}
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent">
            Watch Now
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Catch the latest music videos, live sessions, and behind-the-scenes moments.
          </p>
        </div>

        {/* Video Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              custom={i}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="group relative border border-lime-400/40 bg-black/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-lime-500/20 transition-all duration-500 cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* Play Icon */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <PlayCircle className="w-16 h-16 text-lime-400 opacity-90 group-hover:opacity-100 transition" />
                </motion.div>

                {/* Duration Tag */}
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-xs px-3 py-1 rounded-full flex items-center space-x-1 text-lime-400 font-semibold">
                  <Clock className="w-3 h-3" />
                  <span>{video.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{video.title}</h3>

                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4 text-lime-400" />
                      <span>{video.views} views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-green-400" />
                      <span>{video.date}</span>
                    </div>
                  </div>
                </div>

                <motion.a
                  href="#"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgb(132,204,22)",
                    color: "#000",
                  }}
                  className="self-start px-4 py-2 border border-lime-400 text-lime-400 rounded-lg text-sm font-semibold transition-all flex items-center space-x-2"
                >
                  <PlayCircle className="w-4 h-4" />
                  <span>Watch Video</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
