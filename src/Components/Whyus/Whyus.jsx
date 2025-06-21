import React from 'react'
import { motion } from 'motion/react'

function Whyus() {
  return (
    <div className='flex flex-col px-4 h-[500px] items-center text-center gap-6'>
      <div className='flex flex-col gap-6 mt-6'>
        <h2 className='text-4xl font-extralight'>Why <span className=' font-bold tracking-wide'>devify<span className='bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent'>X</span></span> Works ?</h2>
        <p className='text-lg font-extralight text-gray-600 dark:text-gray-300'>We bridge the gap between learning and employability by helping students build portfolio-worthy projects that recruiters love.</p>
      </div>
      <div className='flex flex-col lg:flex-row gap-4 p-4 lg:mt-5'>
        <motion.div
          initial={{y:100,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:0.5}}
          className=' p-4 m-4 text-left border border-cyan-400/70 dark:border-cyan-200/30 rounded-md'>
            <h2 className='mb-2 text-lg font-semibold px-5 py-2'>🚀 Real-World Simulations</h2>
            <p className='text-base font-light px-5 py-2 text-gray-600 dark:text-gray-300'>Projects simulate real work scenarios — not toy examples. From CRUD apps to API integrations, every build is relevant.</p>
        </motion.div>

        <motion.div
          initial={{y:100,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:0.5,delay:0.5}}
          className=' p-4 m-4 text-left border border-cyan-400/70 dark:border-cyan-200/30 rounded-md'>
          <h2 className='mb-2 text-lg font-semibold px-5 py-2'>🧠 Smart Project Design</h2>
          <p className='text-base font-light px-5 py-2 text-gray-600 dark:text-gray-300'>Each project is scoped to demonstrate technical depth while staying short enough to complete and deploy quickly.</p>
        </motion.div>

        <motion.div
          initial={{y:100,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:0.5,delay:1}}
          className=' p-4 m-4 text-left border border-cyan-400/70 dark:border-cyan-200/30 rounded-md'>
          <h2 className='mb-2 text-lg font-semibold px-5 py-2'>🌐 Resume-Ready Output</h2>
          <p className='text-base font-light px-5 py-2 text-gray-600 dark:text-gray-300'>Get a GitHub repo, live hosted demo, and project thumbnail — all ready to slot directly into your resume and LinkedIn.</p>
        </motion.div>
        
      </div>
    </div>
  )
}

export default Whyus
