"use client"

import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillDataProvider = ({ src, width, height, index} : Props) => {

  return (
  <motion.div
  >
    <Image
src={src}
width={width}
height={height}
alt='skill image'
    />
  </motion.div>
  )
}

export default SkillDataProvider