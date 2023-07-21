import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean
}

export default function Skill({ directionLeft }: Props) {
  return (
    <div
    className='group relative flex cursor-pointer'
    >
       <motion.img
      
       initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
       }}
       transition={{
        duration: 1,
       }}
       whileInView={{
        x: 0, opacity: 1,
       }}
       src='https://seeklogo.com/images/M/mf-logo-EBF1B2EB26-seeklogo.com.png'
       className='w-20 h-20 md:w-32 md:h-32 rounded-full object-cover md:rounded-lg group-hover:grayscale transition duration-200 ease-in-out'
       />
       <div className='absolute opacity-0 rounded-full group-hover:opacity-80 transition duration-200 ease-in-out group-hover:bg-white w-20 h-20 md:w-32 md:h-32 group-hover:rounded-full md:rounded-full'>
           <div className='flex items-center justify-center h-full rounded-full'>
            <p className='text-3xl font-bold text-black opatity-100 rounded-full'>Text</p>
           </div>
       </div>
    </div>
  )
}