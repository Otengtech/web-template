"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  Music,
  Box,
  ShoppingBag,
  Phone,
  User,
  Menu,
  X,
  Camera,
  Star,
  BookOpen,
  Lightbulb,
} from "lucide-react";

export default function ArtistNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [accountMenu, setAccountMenu] = useState(false);
  const [userName, setUserName] = useState(
    typeof window !== "undefined" ? localStorage.getItem("name") || "" : ""
  );
  const [userEmail, setUserEmail] = useState(
    typeof window !== "undefined" ? localStorage.getItem("email") || "" : ""
  );
  const [profileImage, setProfileImage] = useState(
    typeof window !== "undefined" ? localStorage.getItem("profileImage") || null : null
  );

  const pathname = usePathname();
  const router = useRouter();
  const accountRef = useRef(null);

  // Handle outside click for account dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setAccountMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setProfileImage(reader.result);
      localStorage.setItem("profileImage", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleLogout = () => {
    localStorage.clear();
    setUserName("");
    setUserEmail("");
    setProfileImage(null);
    setAccountMenu(false);
    setIsOpen(false);
    router.push("/login");
  };

  const navItems = ["About", "Music", "Projects", "Merch", "Contact"];
  const mobileNavItems = ["About", "Contact", "Terms"];

  const bottomLinks = [
    { href: "/", icon: <Home size={20} />, label: "Home" },
    { href: "/music", icon: <Music size={20} />, label: "Music" },
    { href: "/projects", icon: <Box size={20} />, label: "Projects" },
    { href: "/merch", icon: <ShoppingBag size={20} />, label: "Merch" },
    { href: "/contact", icon: <Phone size={20} />, label: "Contact" },
  ];

  return (
    <>
      {/* ─── TOP NAVBAR ─────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 w-full z-40 bg-white/20 backdrop-blur-2xl border-b border-white/20 
                  "
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-extrabold"
          >
            <div className="text-white">
            FLIP MUSIC</div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-gray-100" : "text-gray-50 hover:text-gray-100"
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
                    ? "text-gray-100"
                    : "text-gray-50 hover:text-gray-100"
                } transition`}
              >
                {item}
              </Link>
            ))}

            {/* Account Menu */}
            <div className="relative" ref={accountRef}>
              <button
                onClick={() => setAccountMenu((prev) => !prev)}
                className="text-gray-100 cursor-pointer hover:text-gray-500"
              >
                <User size={22} />
              </button>

              <div
                className={`absolute top-12 right-0 w-64 p-5 bg-black/10 border border-white/20 backdrop-blur-xl 
                            shadow-xl rounded-2xl transition-all duration-300 ${
                              accountMenu
                                ? "translate-y-0 opacity-100"
                                : "-translate-y-4 opacity-0 pointer-events-none"
                            }`}
              >
                <div className="flex flex-col items-center text-white space-y-3">
                  <div className="relative">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="w-16 h-16 rounded-full object-cover border-2 border-lime-400"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-xl font-semibold">
                        {userName ? userName.charAt(0).toUpperCase() : "G"}
                      </div>
                    )}
                    <label className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 cursor-pointer shadow hover:bg-gray-100">
                      <Camera className="text-lime-500" size={14} />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                  <div className="font-bold">{userName || "Guest"}</div>
                  <div className="text-xs text-gray-200">
                    {userEmail || "No email provided"}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full py-2 bg-lime-500/80 text-black font-semibold rounded-full hover:bg-lime-400 transition"
                  >
                    {userEmail ? "Logout" : "Login"}
                  </button>
                </div>
              </div>
            </div>
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
          <div className="flex items-center space-x-3">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full border border-lime-400 object-cover"
              />
            ) : (
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-semibold">
                {userName ? userName.charAt(0).toUpperCase() : "G"}
              </div>
            )}
            <div>
              <p className="font-semibold">{userName || "Guest"}</p>
              <p className="text-xs text-gray-300">{userEmail || "No email"}</p>
            </div>
          </div>

          {mobileNavItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="hover:text-lime-400 transition"
            >
              {item}
            </Link>
          ))}

          <div className="mt-auto">
            <button
              onClick={handleLogout}
              className="w-full py-2 bg-gradient-to-r from-lime-500 to-yellow-400 text-black rounded-md font-semibold hover:scale-[1.02] transition"
            >
              {userEmail ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ─── BOTTOM NAVBAR (Mobile Only) ─────────────────────────────── */}
      <div
        className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 w-[94%] max-w-md 
                   bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl
                   shadow-[0_0_25px_rgba(132,204,22,0.3)] flex justify-around items-center 
                   py-3 text-lime-300 z-50"
      >
        {bottomLinks.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center text-xs transition-all ${
                isActive ? "scale-110 text-yellow-300" : "hover:scale-105"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}
