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
    <footer className="bg-black text-white py-16 px-6 md:px-20 relative border-t border-lime-400/20">
      {/* Glow line on top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-500 via-lime-400 to-green-500 opacity-60"></div>

      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Logo / Brand */}
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-br from-green-500 to-lime-400 rounded-full">
            <FaMusic className="w-6 h-6 text-black" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent">
            Flip Music
          </h2>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm font-medium">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              whileHover={{ scale: 1.1, color: "#bef264" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-5 justify-center">
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`transition text-2xl ${social.color}`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Divider */}
      <div className="w-full border-t border-lime-400/10 mt-10 mb-6"></div>

      {/* Copyright */}
      <motion.div
        className="text-center text-gray-500 text-xs pb-10 md:pb-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        © {new Date().getFullYear()} Flip Music. All rights reserved.
      </motion.div>
    </footer>
  );
}
