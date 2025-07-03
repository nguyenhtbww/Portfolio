"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-10 px-6 md:px-16 border-t border-[#334155]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 ">
        <div className="text-2xl font-bold text-white tracking-wide  z-20">
          <Image
            src="/Logo.png"
            alt="logo"
            width={150}
            height={150}
            className="cursor-pointer hover:animate-slowspin"
          />
        </div>

        <div className="flex gap-6 text-2xl z-20">
          <a
            href="https://github.com/nguyenhtbww"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hi%E1%BA%BFu-nguy%E1%BB%85n-739a6b35a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:nguyenhieu24042004@gmail.com"
            className="text-gray-400 hover:text-purple-400 transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>
        <div className="text-sm text-center text-white space-y-1 z-20">
          <p>Phone: 0789482587</p>
          <p>Email: <a href="mailto:nguyenhieu24042004@gmail.com" className="hover:text-cyan-400 transition">nguyenhieu24042004@gmail.com</a></p>
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-white">HieuDev</span>. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
