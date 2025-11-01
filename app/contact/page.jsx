"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube } from "lucide-react";

const ContactPage = () => {
  // ---------- State Management ----------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  // ---------- Handle Input ----------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const baseUrl = "https://flipmusic.onrender.com";

  // ---------- Handle Submit ----------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch(`https://flipmusic.onrender.com/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to send message");

      setStatus({ type: "success", message: data.message });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };

  // ---------- UI ----------
  return (
    <div className="bg-black text-white overflow-hidden min-h-screen">
      {/* ===== HEADER ===== */}
      <section className="pt-24 pb-10 text-center px-6 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent"
        >
          CONTACT
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 mt-6 text-sm md:text-base max-w-2xl mx-auto"
        >
          Get in touch with Flip Music for bookings, collaborations, or media
          inquiries. We’re open to creative partnerships that move sound and
          culture forward.
        </motion.p>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          {/* ===== LEFT INFO ===== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent">
              Artist & Management Info
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              For bookings, press, and other professional inquiries, please
              reach out via the form or contact details below. Our team will
              respond promptly to ensure seamless communication.
            </p>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="text-lime-400" />
                <span>wezebuilo62@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-lime-400" />
                <span>+233 599 554 506</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-lime-400" />
                <span>Accra, Ghana</span>
              </div>
            </div>

            <div className="flex gap-6 pt-6">
              <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a
                href="https://youtube.com/@westboyflip?si=wOWlyseItorqDayq"
                className="text-gray-400 hover:text-lime-400 transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
          </motion.div>

          {/* ===== RIGHT FORM ===== */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-[60%] bg-transparent p-6 md:p-8 border border-lime-400/30 
             shadow-[0_0_20px_rgba(163,230,53,0.15)] space-y-6 mx-auto backdrop-blur-sm"
          >
            <div>
              <label className="block text-sm text-gray-400 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-transparent border border-lime-400/30 rounded-full px-4 py-3 text-sm 
                 focus:border-lime-400 outline-none transition-all text-gray-200 placeholder-gray-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-transparent border border-lime-400/30 rounded-full px-4 py-3 text-sm 
                 focus:border-lime-400 outline-none transition-all text-gray-200 placeholder-gray-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={4}
                className="w-full bg-transparent border border-lime-400/30 rounded-2xl px-4 py-3 text-sm 
                 focus:border-lime-400 outline-none transition-all text-gray-200 placeholder-gray-500 resize-none"
                required
              ></textarea>
            </div>

            {/* Status Message */}
            {status.message && (
              <p
                className={`text-sm ${
                  status.type === "success" ? "text-lime-400" : "text-red-500"
                }`}
              >
                {status.message}
              </p>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className={`w-full bg-gradient-to-r from-green-500 to-lime-400 text-black font-semibold 
               py-3 rounded-full shadow-lg transition-all ${
                 loading ? "opacity-70 cursor-not-allowed" : ""
               }`}
              type="submit"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
