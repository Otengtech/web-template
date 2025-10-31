"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const merchItems = [
  {
    id: 1,
    title: "Flip Nation Hoodie",
    category: "Apparel",
    image:
      "https://images.unsplash.com/photo-1600181954081-3c29c58c53c6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Signature Logo T-Shirt",
    category: "Apparel",
    image:
      "https://images.unsplash.com/photo-1586864387783-559f08fcdc2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Limited Edition Vinyl",
    category: "Music Collectibles",
    image:
      "https://images.unsplash.com/photo-1607271620154-c7e6c6c56a03?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Tour Cap 2025",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3f3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Autographed Poster",
    category: "Collectibles",
    image:
      "https://images.unsplash.com/photo-1616627457881-cc2fbaad2f26?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Flip Music Tote Bag",
    category: "Merch Essentials",
    image:
      "https://images.unsplash.com/photo-1618354691516-14a9ef64b5f4?auto=format&fit=crop&w=800&q=80",
  },
];

const MerchPage = () => {
  return (
    <div className="bg-black text-white overflow-hidden min-h-screen">
      {/* ===== HEADER ===== */}
      <section className="py-24 px-6 md:px-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent"
        >
          MERCH
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 mt-6 text-sm md:text-base max-w-2xl mx-auto"
        >
          Official Flip Music merchandise — crafted for fans and collectors.
          Stylish, sustainable, and globally available soon.
        </motion.p>
      </section>

      {/* ===== MERCH GRID ===== */}
      <section className="pb-24 px-6 md:px-20 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {merchItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-900/50 rounded-2xl overflow-hidden border border-lime-400/20 hover:border-lime-400/50 shadow-md hover:shadow-lime-400/10 transition-all"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-lime-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Coming Soon
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.category}</p>

                <p className="text-gray-500 text-xs leading-relaxed">
                  Get ready to own exclusive Flip Music merch — available
                  worldwide soon. Stay tuned for official launch updates.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled
                  className="mt-4 bg-gradient-to-r from-gray-600 to-gray-800 text-gray-300 px-6 py-2 rounded-full font-semibold shadow-lg cursor-not-allowed"
                >
                  Coming Soon
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== FOOTNOTE ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-gray-500 text-sm pb-16"
      >
        <p>
          All merchandise will be available for worldwide shipping. Follow Flip
          Music on social media for updates on product drops and exclusive
          collections.
        </p>
      </motion.div>
    </div>
  );
};

export default MerchPage;
