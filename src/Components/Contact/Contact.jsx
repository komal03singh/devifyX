import React from 'react'
import { motion } from 'motion/react'

function Contact() {
  return (
    <div className='flex flex-col p-4 h-[500px] items-center justify-center'>
      <motion.h1
        nimate={{scale:[1,1,1.2,1]}}
        transition={{duration:1.5}}
        className='text-center text-4xl font-semibold p-2 tracking-wide'>Stay Informed. Build Better.
      </motion.h1>
      
      <p className='text-center text-base font-extralight p-2 text-gray-600 dark:text-gray-300'>Subscribe to get notified when we launch and receive exclusive project templates right in your inbox.</p>

      <div className='py-6'>
        <form action="">
          <input className='p-2 lg:px-4 m-2 lg:w-96 bg-black/20 dark:bg-white/20 outline-none rounded-lg font-light' type="text" placeholder='Enter your e-mail' />
          <motion.button whileHover={{scale:1.1}} transition={{duration: 1, ease:'easeInOut'}} className='p-2 lg:px-6 m-2 border-1 border-cyan-400/80  dark:border-cyan-200/50 rounded-lg font-medium'>Subscribe</motion.button>
        </form>
      </div>
    </div>
    
  )
}

export default Contact
