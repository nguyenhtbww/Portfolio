"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const projects = [
  {
    title: "Pet House Food & Care",
    tech: ["React", "Tailwind", "Laravel"],
    description:
      "A responsive admin dashboard for managing an online pet shop. Includes real-time statistics, user and product management, and insightful analytics. Built with Next.js, Laravel, and Chart.js for a seamless full-stack experience.",
    link: "https://pethouse.click/",
    image: "/template.png",
  },
  {
    title: "Kumo - Shop Thời Trang",
    description:
      "A fashion e-commerce admin dashboard for managing orders, users, and product inventory.",
    tech: ["TypeScript", "Boostrap", "Node"],
    link: "#",
    image: "/3.png",
  },
  {
    title: "Cinenet - Xem phim nhanh chóng",
    description:
      "A modern and reusable UI component library designed entirely in Figma. Includes buttons, modals, tooltips, forms, and other interactive elements — focusing on clean design, consistency, and user experience.",
    tech: ["UI/UX" , "Figma"],
     image: "/4.png",
    link: "#",
  },
  {
    title: "Shop Thời Trang Mini",
    description:
      "A mini e-commerce web application developed with Angular for the frontend and MySQL for data management. Includes product listings, category filtering, cart features, and a responsive user interface.",
    tech: ["Angular" , "MySQL"],
     image: "/image.png",
    link: "#",
  },
  {
    title: "PhuongTin Food",
    description:
      "A simple and responsive website for a food business, built entirely using default WordPress configuration. Includes customized pages, menus, and content managed through the WordPress admin panel.",
    tech: ["WordPress"],
     image: "/5.png",
    link: "#",
  },
];

const ProjectsConten = () => {
  return (
    <section className="py-16 px-4 md:px-10 text-white">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={slideInFromTop}
            initial="hidden"
            animate="visible"
            className="group relative rounded-xl p-6 shadow-md hover:shadow-purple-500/30 border border-[#2A0E61] transition overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-contain rounded-lg mb-4"
            />

            <h3 className="text-xl font-semibold mb-2 text-white-500">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-purple-600/20 text-white-400 px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span className="flex items-center gap-2 text-purple-500 text-base font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-cyan-500 transform transition-transform duration-500 group-hover:rotate-[360deg]"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsConten;
