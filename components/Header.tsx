import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {
  return (
    <header
      className='flex sticky top-0 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center px-5'
    >
      <motion.div
      initial={{ 
        x: -500,
        opacity: 0, 
        scale: 0.5,
        }}
      animate={{ 
        x: 0,
        opacity: 1,        
        scale: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-row items-center'>
        {/* Social Icons */}
        <SocialIcon
          url='https://github.com/Freitas-MA'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.linkedin.com/in/freitas-marcos/'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>
      
        <motion.div
          initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
              }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1 }}
            transition={{ duration: 1.5 }}
          className='flex flex-row items-center text-gray-300'
        >
          {/* Contact me */}
          <div className='relative'>
            <Link href='#contact'
            className='topContactButton'
            />
              <div className='topContactButtonItems'>
                <SocialIcon
                  className='cursor-pointer'
                  network='email'
                  fgColor='gray'
                  bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                  GET IN TOUCH!
                </p>
              </div>
          </div>
                    </motion.div>
          
    </header>
  )
}