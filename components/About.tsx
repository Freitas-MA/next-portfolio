import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
        initial={{
        opacity: 0,
        }}
    whileInView={{
        opacity: 1,
        }}
    transition={{
        duration: 1.5,
        }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center gap-1'>
        <h3 className='absolute top-24 uppercase tracking-[29px] text-gray-500 text-2xl'>
            About
        </h3>
        <div className='absolute flex gap-2 px-5'>
            <motion.img
            initial={{
                x: -100,
                opacity: 0,
                }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            style={{
                scale: 1,
            }}
            src='https://raw.githubusercontent.com/Freitas-MA/new-react/main/1689362670757.jpg'
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-76 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            />
            <motion.div
            initial={{
                x: 300,
                opacity: 0,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
                </h4>
                <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus nam, eum tempore alias possimus aliquid perspiciatis deleniti ab laudantium ducimus velit distinctio in, culpa ratione praesentium magnam dolorum facilis?
            
                </p>
            </motion.div>
        </div>
    </motion.div>
  )
}