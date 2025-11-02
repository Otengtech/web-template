"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const artistReviews = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    name: "John Torres",
    email: "john.torres@gmail.com",
    message:
      "An absolutely breathtaking performance! The emotion in every note was powerful and raw — a true artist in every sense.",
    rating: 5,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    name: "David Kim",
    email: "davidkim129@outlook.com",
    message:
      "I’ve followed this artist for years, and the growth is incredible. Each piece tells a story that stays with you.",
    rating: 4,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    name: "Maya Lopez",
    email: "maya.lopez@protonmail.com",
    message:
      "Their latest collection is simply stunning — vivid, soulful, and deeply human. A true visionary in the art world.",
    rating: 5,
  },
];

const ArtistReviews = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-10"
        >
          From Fans
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {artistReviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: review.id * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{review.name}</h3>
                  <p className="text-sm text-gray-300">{review.email}</p>
                </div>
              </div>

              <p className="text-gray-200 mb-4">{review.message}</p>

              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${i < review.rating ? "text-yellow-500" : "text-gray-500"}`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistReviews;
