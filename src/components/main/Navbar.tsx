import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/Logo.png"
            alt="logo"
            width={110}
            height={80}
            className="cursor-pointer hover:animate-slowspin"
          />
        </Link>

        <div className="w-[600px] h-full flex flex-row items-center justify-between md:mr-20 ml-auto">
          <div className="flex items-center justify-between w-full h-auto bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {[
              { href: "#about-me", label: "Home" },
              { href: "#features", label: "Features" },
              { href: "#skills", label: "Skills" },
              { href: "#resume", label: "Resume" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group px-2 py-1 text-lg text-gray-200 cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-purple-400 via-cyan-500 to-cyan-500 transition-all duration-500 group-hover:left-0 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="transition-transform duration-500 ease-in-out cursor-pointer"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};  
export default Navbar;
