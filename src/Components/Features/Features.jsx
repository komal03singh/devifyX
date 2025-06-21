import React from 'react'
import { motion } from 'motion/react'

function Features() {
  return (
    <div className='flex flex-col px-4 h-[500px] items-center text-center gap-8'>
          <div className='mt-6'>
            <h2 className='text-4xl font-extralight tracking-wide'>How <span className=' font-bold'>devify<span className='bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent'>X</span></span> Helps You Get Hired ?</h2>
          </div>
          <div className='flex flex-col lg:flex-row gap-4 p-4 lg:mt-5'>

            <motion.div
              initial={{y:100,opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{duration:0.5}}
              className=' p-4 m-4 text-left border border-cyan-400/70 dark:border-cyan-200/30 rounded-md'>
                <h2 className='mb-2 text-lg font-semi-bold px-5 py-2'>📁 Project Library</h2>
                <p className='text-base font-light px-5 py-2 text-gray-600 dark:text-gray-300'>Work on apps that go beyond tutorials – dashboards, APIs, design systems, and real business logic.</p>
            </motion.div>

            <motion.div
              initial={{y:100,opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}} 
              className='p-4 m-4 text-left border border-cyan-400/70 dark:border-cyan-200/30 rounded-md'>
                <h2 className='mb-2 text-lg font-semi-bold px-5 py-2'>💼 Resume-Ready Format</h2>
                <p className='text-base font-light px-5 py-2 text-gray-600 dark:text-gray-300'>Every project is shipped with GitHub code, demo link, and thumbnail — all structured for your resume & LinkedIn.</p>
            </motion.div>

            <motion.div
              initial={{y:100,opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{duration:0.5,delay:1}}
              className=' p-4 m-4 text-left border border-cyan-400/70 dark:border-cyan-200/30 rounded-md'>
                <h2 className='mb-2 text-lg font-semi-bold px-5 py-2'>🎯 Interview-Friendly</h2>
                <p className='text-base font-light px-5 py-2 text-gray-600 dark:text-gray-300'>Speak confidently about your projects, tech stack, and implementation decisions during interviews.</p>
            </motion.div>
            
          </div>
        </div>
  )
}

export default Features
