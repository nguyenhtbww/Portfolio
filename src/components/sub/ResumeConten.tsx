"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

const tabs = [
  { id: "education", label: "Education" },
  { id: "professional", label: "Professional Skills" },
  { id: "experience", label: "Experience" },
];

const ResumeContent = () => {
  const [activeTab, setActiveTab] = useState("education");
  const [showImage, setShowImage] = useState<string | null>(null);

  const handleImageClick = (url: string) => {
    setShowImage(url);
  };

  const handleCloseImage = () => {
    setShowImage(null);
  };

  return (
    <div className="w-full px-4 py-16 md:px-10 text-white relative">
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {tabs.map((tab) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all border-2 
              ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text border-purple-500"
                  : "bg-transparent border-[#334155] text-gray-300 hover:border-purple-400 hover:text-purple-400"
              }`}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto">
        {(activeTab === "education" || activeTab === "experience") && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-10"
          >
            {activeTab === "education" && (
              <div>
                <h3 className="text-2xl font-bold mb-6 border-b border-[#334155] pb-2">
                  Education
                </h3>
                <TabItem
                  title="Web Developer"
                  org="FPT Polytechnic College (2021 - 2024)"
                  rating="8/10"
                  imageUrl="/1.jpg"
                  onImageClick={handleImageClick}
                />
                <TabItem
                  title="CERTIFICATE ENGLISH LEVEL 3 - Topnotch 2"
                  org="FPT Polytechnic College (2025)"
                  rating="10/10"
                  imageUrl="/2.jpg"
                  onImageClick={handleImageClick}
                />
              </div>
            )}

            {activeTab === "experience" && (
              <div>
                <h3 className="text-2xl font-bold mb-6 border-b border-[#334155] pb-2">
                  Experience
                </h3>
                <TabItem
                  title="FRONTEND DEVELOPER"
                  org="Xưởng thực hành BM CNTT – FPT Polytechnic HCM (03/2024 – 08/2024)"
                  description="Optimize UX. Develop UI with HTML/CSS/JS. Ensure mobile responsiveness. Fix bugs and maintain code quality."
                />
                <TabItem
                  title="Intern Web Developer"
                  org="Công ty Tiên Phong CDS (08/2024 – 12/2024)"
                  description="Use Next.js & TailwindCSS. Connect backend data. Optimize performance. Participate in team planning & feedback."
                />
                <TabItem
                  title="UI/UX DESIGNER"
                  org="Công ty Tiên Phong CDS (08/2024 – 12/2024)"
                  description="Create UI layout, icon, typography. Support prototype design. Collaborate with UX and copywriters."
                />
                <TabItem
                  title="Freelancer Web Developer"
                  org="(03/2024 – 07/2025)"
                />
              </div>
            )}
          </motion.div>
        )}

        {activeTab === "professional" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div>
              <h4 className="text-2xl font-semibold mb-4">Design Skills</h4>
              <ProgressItem title="Photoshop" percent={100} />
              <ProgressItem title="Figma" percent={95} />
              <ProgressItem title="Canva" percent={95} />
              <ProgressItem title="Design Thinking" percent={85} />
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-4">Web Dev Skills</h4>
              <ProgressItem title="HTML" percent={85} />
              <ProgressItem title="CSS" percent={80} />
              <ProgressItem title="ReactJS" percent={85} />
              <ProgressItem title="Angular" percent={75} />
            </div>
          </motion.div>
        )}
      </div>

      {/* Image Popup */}
      {showImage && (
  <div className="fixed inset-0 bg-opacity-80 flex items-center justify-center z-50">
    <div className="relative w-[90vw] h-[90vh] max-w-5xl max-h-[90vh]">
      <div className="relative w-full h-full">
        {/* Nút X nằm trong vùng ảnh */}
        <button
          onClick={handleCloseImage}
          className="absolute top-2 right-2 bg-white text-black p-1 rounded-full hover:bg-red-500 hover:text-white z-10"
        >
          <IoClose size={20} />
        </button>

        <Image
          src={showImage}
          alt="Preview"
          fill
          className="object-contain rounded-lg"
          priority
        />
      </div>
    </div>
  </div>
)}

    </div>
  );
};

// TabItem component
const TabItem = ({
  title,
  org,
  rating,
  description,
  imageUrl,
  onImageClick,
}: any) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="relative pl-4 mb-10 group"
  >
    <div className="p-5 rounded-lg border border-[#334155] shadow transition hover:shadow-cyan-500/50 relative">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-sm text-gray-400">{org}</p>
        </div>
        {rating && (
          <span className="text-xs px-2 py-1 bg-purple-600 text-white rounded-full font-bold shadow">
            {rating}
          </span>
        )}
      </div>
      {description && (
        <p className="text-sm text-gray-300 mt-2 leading-relaxed">
          {description}
        </p>
      )}
      {imageUrl && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            onClick={() => onImageClick(imageUrl)}
            whileHover={{ scale: 1.1 }}
            className="text-cyan-400 hover:text-white"
            title="Xem ảnh"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 
             1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 
             3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 
             1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 
             0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </motion.button>
        </div>
      )}
    </div>
  </motion.div>
);

// ProgressItem component
const ProgressItem = ({
  title,
  percent,
}: {
  title: string;
  percent: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="w-full"
  >
    <h6 className="text-sm font-medium text-gray-200 mb-1">{title}</h6>
    <div className="w-full h-3 bg-[#334155] rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-indigo-500"
      ></motion.div>
    </div>
    <p className="text-xs text-right text-gray-400 mt-1">{percent}%</p>
  </motion.div>
);

export default ResumeContent;
