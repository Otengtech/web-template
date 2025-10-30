"use client";

import { Music, Users, Calendar, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function StreamsSection() {
  const stats = [
    { icon: Music, value: "381K+", label: "Total Streams" },
    { icon: Users, value: "7.9K+", label: "Monthly Listeners" },
    { icon: Calendar, value: "13+", label: "Upcoming Shows" },
    { icon: Star, value: "16.6K+", label: "Followers" },
  ];

  // Track when section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // animates only once
    threshold: 0.2, // triggers when 20% is visible
  });

  return (
    <section ref={ref} className="bg-black text-white py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <AnimatePresence>
          {inView &&
            stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center text-center space-y-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.15,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="p-5 bg-gradient-to-br from-green-500 to-lime-400 rounded-full shadow-lg"
                >
                  <stat.icon className="w-8 h-8 text-black" />
                </motion.div>
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
                  {stat.value}
                </h2>
                <p className="text-gray-200">{stat.label}</p>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
