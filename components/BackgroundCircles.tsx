import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
      scale: [1, 2, 2, 3, 1],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    transition={{
      duration: 2.5,
    }}
    style={{
      zIndex: 0,
    }}
   
    className='relative flex justify-center items-center'>
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52"/>
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping"/>
      <div className="absolute border border-[#333333] rounded-full h-[128px] w-[128px] mt-52"/>
      <div className="absolute border border-[#F7AB0A] rounded-full opacity-20 h-[650px] w-[650px] animate-pulse mt-52"/>
      <div className="absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52"/>
    </motion.div>
  )
}