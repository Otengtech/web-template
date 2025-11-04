"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Server error (${res.status}): ${text}`);
      }

      const data = await res.json();
      setStatus({ loading: false, success: data?.message || "Message sent successfully!", error: null });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus({ loading: false, success: null, error: "Failed to send message. Please try again later." });
    }
  };

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
          className="text-gray-400 text-left md:text-center mt-6 text-sm md:text-base max-w-2xl mx-auto"
        >
          Get in touch with Flip Music for bookings, collaborations, or media
          inquiries. We’re open to creative partnerships that move sound and
          culture forward.
        </motion.p>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="pb-20 pt-10 px-6 md:px-20 bg-gradient-to-b from-black via-gray-950 to-black">
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
              <a href="#" className="text-lime-400 hover:text-lime-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-lime-400 hover:text-lime-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-lime-400 hover:text-lime-400 transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-lime-400 hover:text-lime-400 transition-colors">
                <Tiktok size={24} />
              </a>
              <a href="#" className="text-lime-400 hover:text-lime-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-lime-400 hover:text-lime-400 transition-colors">
                <WhatsApp size={24} />
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
            className="w-full md:w-[60%] bg-transparent p-10 md:p-8 border border-lime-400 rounded-lg 
             shadow-[0_0_20px_rgba(163,230,53,0.15)] space-y-6 mx-auto backdrop-blur-sm"
          >
            <div>
              <label className="block text-sm text-gray-400 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border border-lime-400 rounded-full px-4 py-3 text-sm 
                 focus:border-lime-400 outline-none transition-all text-gray-200 placeholder-gray-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-lime-400 rounded-full px-4 py-3 text-sm 
                 focus:border-lime-400 outline-none transition-all text-gray-200 placeholder-gray-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Write your message..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border border-lime-400 rounded-2xl px-4 py-3 text-sm 
                 focus:border-lime-400 outline-none transition-all text-gray-200 placeholder-gray-500 resize-none"
                required
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status.loading}
              className="w-full bg-gradient-to-r from-green-500 to-lime-400 text-black font-semibold 
               py-3 rounded-full shadow-lg transition-all disabled:opacity-60"
              type="submit"
            >
              {status.loading ? "Sending..." : "Send Message"}
            </motion.button>

            {/* Feedback Messages */}
            {status.success && <p className="text-green-400 text-center">{status.success}</p>}
            {status.error && <p className="text-red-500 text-center">{status.error}</p>}
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
