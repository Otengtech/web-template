"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSpotify,
  FaMusic,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaInstagram />, href: "#", color: "text-pink-400" },
    { icon: <FaTwitter />, href: "#", color: "text-blue-400" },
    { icon: <FaYoutube />, href: "#", color: "text-red-500" },
    { icon: <FaSpotify />, href: "#", color: "text-green-400" },
  ];

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Music", href: "#" },
    { name: "Shows", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 md:px-20 relative border-t border-lime-400/20 overflow-hidden">
      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-500 via-lime-400 to-green-500 opacity-60" />

      {/* Main Footer Content */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Brand Section */}
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <div className="p-2 bg-gradient-to-br from-green-500 to-lime-400 rounded-full">
              <FaMusic className="w-6 h-6 text-black" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent">
              Flip Music
            </h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            Discover rhythm, passion, and creativity. We bring beats to life
            through sound and vision — connecting artists and fans worldwide.
          </p>

          {/* Social Links */}
          <div className="flex space-x-5 justify-center md:justify-start pt-2">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`transition text-2xl ${social.color}`}
                aria-label="Social Link"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-lime-400 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {navLinks.map((link, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 4, color: "#bef264" }}
                transition={{ duration: 0.2 }}
              >
                <a href={link.href}>{link.name}</a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Info Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-lime-400 mb-4">About</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>📍 Accra, Ghana</li>
            <li>📞 +233 555 123 456</li>
            <li>📧 info@flipmusic.com</li>
            <li>🕒 Mon – Sat: 9:00 AM – 6:00 PM</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h3 className="text-lg font-semibold text-lime-400 mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Get exclusive updates, music releases, and event news.
          </p>

          {/* Input + Button */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              if (email) alert(`Subscribed successfully: ${email}`);
              e.target.reset();
            }}
            className="space-y-3"
          >
            <div className="flex items-center bg-transparent border border-lime-400/30 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-lime-400 transition-all">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-grow bg-transparent text-gray-300 text-sm px-4 py-3 outline-none placeholder-gray-500"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-lime-400 w-full text-black font-semibold rounded-full px-5 py-3 shadow-md"
              type="submit"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      {/* Divider Line */}
      <div className="w-full border-t border-lime-400/10 mt-14 mb-6"></div>

      {/* Copyright */}
      <motion.div
        className="text-center pb-16 md:pb-0 text-gray-500 text-xs"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        © {new Date().getFullYear()} Flip Music. All rights reserved.
      </motion.div>
    </footer>
  );
}
