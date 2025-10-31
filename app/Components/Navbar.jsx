"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Music,
  Box,
  ShoppingBag,
  Phone,
  Menu,
  X,
} from "lucide-react";

export default function ArtistNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const pathname = usePathname();

  const navItems = ["About", "Music", "Projects", "Merch", "Contact"];
  const mobileNavItems = ["About", "Music", "Projects", "Merch", "Contact"];

  const bottomLinks = [
    { href: "/", icon: <Home size={20} />, label: "Home" },
    { href: "/music", icon: <Music size={20} />, label: "Music" },
    { href: "/projects", icon: <Box size={20} />, label: "Projects" },
    { href: "/merch", icon: <ShoppingBag size={20} />, label: "Merch" },
    { href: "/contact", icon: <Phone size={20} />, label: "Contact" },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    alert(`Subscribed successfully: ${email}`);
    setEmail("");
  };

  return (
    <>
      {/* ─── TOP NAVBAR ─────────────────────────────── */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-black/20 backdrop-blur-2xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-extrabold"
          >
            <div className="text-lime-300">FLIP MUSIC</div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "text-lime-300"
                  : "text-lime-300 hover:text-lime-200"
              } transition`}
            >
              Home
            </Link>

            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`${
                  pathname === `/${item.toLowerCase()}`
                    ? "text-lime-300"
                    : "text-lime-300 hover:text-lime-200"
                } transition`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-lime-300 z-50"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* ─── MOBILE SLIDE-IN MENU ─────────────────────────────── */}
      <div
        className={`fixed top-0 left-0 h-screen w-4/5 max-w-xs z-40 bg-white/10 border border-white/20 backdrop-blur-2xl 
                    text-white transform transition-transform duration-300 ${
                      isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
      >
        <div className="flex flex-col h-full p-6 space-y-6">
          <div className="text-xl font-bold text-lime-300">Menu</div>

          {mobileNavItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="hover:text-lime-400 transition text-sm"
            >
              {item}
            </Link>
          ))}

          {/* Newsletter (Mobile Only) */}
          <div className="mt-auto pt-6 border-t border-white/20">
            <p className="text-sm text-gray-300 mb-2">
              Subscribe to our newsletter
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="bg-black/40 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:border-lime-400 outline-none transition-all"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-lime-400 text-black font-semibold py-2 rounded-md hover:scale-105 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
