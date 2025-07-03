"use client";

import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-20 px-4 md:px-10 text-white relative" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Contact With Me
        </h2>
        <p className="text-gray-400 mb-12">
          Feel free to reach out if you want to collaborate or just say hi! 👋
        </p>

        <form className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-md bg-[#1e293b] text-white border border-[#334155] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-300"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-md bg-[#1e293b] text-white border border-[#334155] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-300"
              required
            />
          </motion.div>

          <motion.textarea
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            rows={5}
            placeholder="Your Message"
            className="w-full p-4 rounded-md bg-[#1e293b] text-white border border-[#334155] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-300"
            required
          />

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 12px #9333ea" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-8 py-3 rounded-md bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 transition-all font-semibold shadow-md"
          >
            Send Message 🚀
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
