import React from 'react'

const Footer = () => {
  return (
    <div className='font-sans h-14 sm:h-16 md:h-18 lg:h-20 flex justify-center items-center px-3 sm:px-4 md:px-6 bg-black/90 border-t border-cyan-500/30 shadow-[0_-4px_20px_rgba(34,211,238,0.15)]'>
        <p className='text-[10px] xs:text-xs sm:text-sm md:text-base text-center text-gray-400 font-medium'>&copy; {new Date().getFullYear()} Cinema Club IIT Roorkee. All rights reserved.</p>
    </div>
  )
}

export default Footer