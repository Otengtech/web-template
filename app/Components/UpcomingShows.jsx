"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Music2, Users, Ticket } from "lucide-react";
import { useInView } from "react-intersection-observer";

const shows = [
  {
    id: 1,
    title: "Afro Energy Fest 2025",
    date: "Sat, Dec 14, 2025",
    location: "Accra Sports Stadium, Ghana",
    artists: "Stonebwoy, Burna Boy, Ayra Starr",
    tickets: "https://example.com/tickets1",
    image:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Midnight Vibes Concert",
    date: "Fri, Jan 10, 2026",
    location: "Independence Square, Ghana",
    artists: "Wizkid, Sarkodie, Gyakie",
    tickets: "https://example.com/tickets2",
    image:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Summer Jam Session",
    date: "Sun, Feb 2, 2026",
    location: "El-Wak Stadium, Accra",
    artists: "King Promise, Davido, Amaarae",
    tickets: "https://example.com/tickets3",
    image:
      "https://images.unsplash.com/photo-1525286116112-b59af11adad1?auto=format&fit=crop&w=800&q=80",
  },
];

export default function UpcomingShows() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="bg-black text-white py-24 px-6 md:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-4xl font-extrabold block text-center bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent">
          Upcoming Shows
        </h2>

        <AnimatePresence>
          {inView && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {shows.map((show, i) => (
                <motion.div
                  key={show.id}
                  className="border border-lime-400/40 bg-black/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-lime-500/20 transition-all duration-500 flex flex-col"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.7 }}
                  whileHover={{ scale: 1.03 }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={show.image}
                      alt={show.title}
                      className="w-full h-full block object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                    <div className="space-y-3">
                      <h3 className="text-2xl block font-bold">{show.title}</h3>

                      <div className="flex items-center space-x-2 text-gray-300">
                        <Calendar className="w-4 h-4 block text-lime-400" />
                        <span>{show.date}</span>
                      </div>

                      <div className="flex items-center space-x-2 text-gray-300">
                        <MapPin className="w-4 h-4 block text-green-400" />
                        <span>{show.location}</span>
                      </div>

                      <div className="flex items-center space-x-2 text-gray-300">
                        <Music2 className="w-4 h-4 block text-lime-400" />
                        <span className="text-sm italic">
                          {show.artists}
                        </span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-lime-400/20">
                      <div className="flex block items-center space-x-2 text-gray-400">
                        <Users className="w-4 h-4 text-lime-400" />
                        <span>2.4K attending</span>
                      </div>
                      <motion.a
                        href={show.tickets}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgb(132,204,22)",
                          color: "#000",
                        }}
                        className="flex items-center block space-x-2 px-4 py-2 border border-lime-400 text-lime-400 rounded-lg text-sm font-semibold transition"
                      >
                        <Ticket className="w-4 h-4 block" />
                        <span>Get Tickets</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
