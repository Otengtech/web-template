"use client";

import { motion } from "framer-motion";
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
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      ref={ref}
      className="bg-black text-white py-24 px-6 md:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-4xl font-extrabold text-center bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent"
        >
          Upcoming Shows
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shows.map((show, i) => (
            <motion.div
              key={show.id}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative h-96 rounded-3xl overflow-hidden shadow-lg group"
            >
              {/* Background Image */}
              <img
                src={show.image}
                alt={show.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-lime-400">{show.title}</h3>
                <div className="text-gray-300 text-sm mt-1">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-lime-400" />
                    <span>{show.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span>{show.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 italic">
                    <Music2 className="w-4 h-4 text-lime-400" />
                    <span>{show.artists}</span>
                  </div>
                </div>
                <a
                  href={show.tickets}
                  target="_blank"
                  className="inline-block mt-4 px-5 py-2 bg-lime-400 text-black font-semibold rounded-full hover:bg-green-500 transition"
                >
                  Get Tickets
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
