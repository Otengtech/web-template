"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Music, Box, ShoppingBag, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ArtistNavbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/music", label: "Music" },
    { href: "/projects", label: "Projects" },
    { href: "/merch", label: "Merch" },
    { href: "/contact", label: "Contact" },
  ];

  // Bottom nav links (mobile)
  const bottomLinks = [
    { href: "/", label: "Home", icon: <Home size={22} /> },
    { href: "/music", label: "Music", icon: <Music size={22} /> },
    { href: "/projects", label: "Projects", icon: <Box size={22} /> },
    { href: "/merch", label: "Merch", icon: <ShoppingBag size={22} /> },
    { href: "/contact", label: "Contact", icon: <Phone size={22} /> },
  ];

  return (
    <>
      {/* ─── Top Navbar ─────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-lime-300/10 via-green-400/10 to-yellow-300/10 
        backdrop-blur-2xl border-b border-white/20 shadow-[inset_0_0_0.5px_rgba(255,255,255,0.3),0_4px_30px_rgba(0,0,0,0.15)]
        saturate-150 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-lime-400 to-green-400 hover:scale-105 transition-transform"
          >
            Flip
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-lime-300"
                    : "text-white/90 hover:text-lime-300"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Newsletter Button */}
            <button className="ml-4 px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-green-500 to-yellow-400 text-black shadow-md hover:shadow-[0_0_15px_rgba(132,204,22,0.5)] transition-all">
              Newsletter
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white hover:text-lime-300 transition"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Fullscreen Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-gradient-to-b from-green-900/95 via-lime-800/90 to-yellow-700/80 
                         backdrop-blur-xl flex flex-col items-center justify-center space-y-8 z-40"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-2xl font-semibold transition-colors ${
                    pathname === link.href
                      ? "text-lime-300"
                      : "text-white hover:text-lime-300"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <button
                onClick={() => setOpen(false)}
                className="mt-6 px-6 py-3 text-lg font-bold rounded-full bg-gradient-to-r from-lime-400 via-green-500 to-yellow-400 text-black hover:shadow-[0_0_25px_rgba(132,204,22,0.6)] transition-all"
              >
                Newsletter
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ─── Bottom Navbar (Mobile Only) ─────────────────────────────── */}
      <div
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 
                   w-[95%] max-w-md md:hidden 
                   bg-white/10 backdrop-blur-2xl border border-white/20 
                   rounded-3xl px-4 py-3 flex justify-between items-center 
                   shadow-[0_4px_25px_rgba(0,0,0,0.2),inset_0_0_0.5px_rgba(255,255,255,0.3)]
                   saturate-150"
      >
        {bottomLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center gap-1 text-xs font-medium transition-all ${
                active
                  ? "text-lime-300 scale-105"
                  : "text-white/80 hover:text-lime-200"
              }`}
            >
              <motion.div
                animate={{
                  scale: active ? 1.2 : 1,
                  opacity: active ? 1 : 0.8,
                }}
                transition={{ duration: 0.2 }}
              >
                {link.icon}
              </motion.div>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
