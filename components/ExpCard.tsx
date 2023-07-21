import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExpCard({}: Props) {
  return (
    <article
    className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 mt-20 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] opacity-80 p-10 hover:opacity-100 hover:scale-[1.03] cursor-pointer transition-scale transition-opacity duration-200'
    >
        <motion.img
        initial={{  opacity: 0, }}
        whileInView={{ opacity: 1, }}
        transition={{ duration: 1.5, }}
        viewport={{ once: false, }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src="https://t.ctcdn.com.br/essK16aBUDd_65hp5umT3aMn_i8=/400x400/smart/filters:format(webp)/i606944.png" alt="" />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO of MFProductions</h4>
            <p className='font-bold text-2xl mt-1'>Things</p>
            <div className='flex space-x-2 my-2'>
                <img 
                className='h-10 w-10 rounded-full'
                src="https://source.unsplash.com/random/500x500/?html" alt="" />
                <img 
                className='h-10 w-10 rounded-full'
                src="https://source.unsplash.com/random/500x500/?css" alt="" />
                <img 
                className='h-10 w-10 rounded-full'
                src="https://source.unsplash.com/random/500x500/?javascript" alt="" />
                {/* Tech's */}
                {/* Tech's */}
                {/* Tech's */}
            </div>
            <p
            className='uppercase py-5 text-gray-500'
            >Started work... Ended...</p>
            <ul
            className='list-disc space-y-4 ml-5 text-lg'
            >
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
        </div>
    </article>
  )
}