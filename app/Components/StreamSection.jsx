"use client";

import { Music, Users, Calendar, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function StreamsSection() {
  const stats = [
    { icon: Music, value: "381K+", label: "Total Streams" },
    { icon: Users, value: "7.9K+", label: "Monthly Listeners" },
    { icon: Calendar, value: "13+", label: "Upcoming Shows" },
    { icon: Star, value: "16.6K+", label: "Followers" },
  ];

  // Trigger animation every time the section enters viewport
  const { ref, inView } = useInView({
    triggerOnce: false, // animate every time it enters view
    threshold: 0.2,
  });

  const itemVariants = {
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
    <section ref={ref} className="bg-black text-white py-16 px-6 md:px-28 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center text-center space-y-3"
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={i}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <stat.icon
                className="w-10 h-10 text-lime-400 bg-clip-text"
              />
            </motion.div>

            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
              {stat.value}
            </h2>
            <p className="text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
