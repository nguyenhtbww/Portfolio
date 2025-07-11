"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const FeaturesText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[25px] border border-[#7042f88b] opacity-[0.9] "
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[25px]">
          Features
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[50px] text-white font-medium mt-[10px] text-center mb-[15px]'
      >
        What I Do
      </motion.div>
    </div>
  )
}

export default FeaturesText