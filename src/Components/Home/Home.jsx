import React from 'react'
import {motion} from 'motion/react'
import rocket from '../../assets/rocket.png'

function Home() {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row p-4 lg:h-[500px]'>
      <div className='h-full flex flex-col'>
        <div className='h-full w-full flex lg:pl-10'>
          <div className='flex flex-col mt-6 md:mt-12 lg:mt-15 gap-8 lg:gap-8 md:w-3/4 lg:w-3/4'>
            <motion.h2 
              initial={{opacity:0 ,y:100}}
              animate={{y:-10,opacity:1}}
              transition={{duration:1}}
              className='text-4xl md:5xl lg:text-5xl font-extralight md:max-w-8/12 lg:max-w-8/12 tracking-wide'>Launch your tech resume with <span className='font-bold lg:underline md:underline decoration-cyan-400 dark:decoration-cyan-200 md:decoration-wavy lg:decoration-wavy '>devify<span className='bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent'>X</span></span></motion.h2>
              
            <motion.p
              initial={{opacity:0 ,y:100}}
              animate={{y:-10,opacity:1}}
              transition={{duration:1, delay:0.5}}
              className='w-4/5 text-base md:text-lg lg:text-lg font-extralight text-gray-600 dark:text-gray-300'>We provide real, coding resume simulator and professional helpers to build you market ready resume.</motion.p>
            
            <div className='flex mt-5 md:mt-8 lg:mt-2 gap-4 md:gap-8 lg:gap-6 font-light'>
            <motion.button whileHover={{scale:1.1}} transition={{duration: 0.4 }} className='text-sm md:text-lg lg:text-lg border px-4 py-2 rounded-lg font-medium border-cyan-400/80 dark:border-cyan-200/50'>Pre Order Now!</motion.button>
            <motion.button whileHover={{scale:1.1}} transition={{duration: 0.4 }} className='text-sm md:text-lg lg:text-lg border px-4 py-2 rounded-lg font-medium border-cyan-400/80 dark:border-cyan-200/50'>Get in Touch</motion.button>
        </div>
          </div>
        </div>
      </div>

      {/*For Small Screen*/}
      <div className='lg:hidden md:hidden absolute -z-10 '>
        <motion.img
          initial={{x:-50,y:400,opacity:0}}
          animate={{x:130,y:90,opacity:1}}
          transition={{duration:1.5,ease:'easeInOut',delay:0.6}}
          src={rocket} alt="" className='w-15 h-15' />
      </div>

      {/*For Large and Medium Screen*/}
      <div className='hidden relative md:flex lg:flex mt-15 w-1/2 h-full'>

        <div className='absolute -z-10 '>
          <motion.img
            initial={{x:40,y:130,opacity:0}}
            animate={{x:230,y:-50,opacity:1}}
            transition={{duration:1.5,ease:'easeInOut',delay:0.6}}
            src={rocket} alt="" className='md:w-20 md:h-20 lg:w-25 lg:h-25' />
        </div>

        <div className=' flex flex-col gap-2 h-2/4 w-full text-center p-4'>
          <h2 className='lg:text-3xl md:text-xl font-medium text-black/90 dark:text-white/90'>Launching Soon</h2>
          <h2 className='lg:text-3xl md:text-xl font-medium text-black/60 dark:text-white/60'>Launching Soon</h2>
          <h2 className='lg:text-3xl md:text-xl font-medium text-black/40 dark:text-white/40'>Launching Soon</h2>
          <h2 className='lg:text-3xl md:text-xl font-medium text-black/20 dark:text-white/20'>Launching Soon</h2>
          <h2 className='lg:text-3xl md:text-xl font-medium text-black/10 dark:text-white/10'>Launching Soon</h2>
          <h2 className='lg:text-3xl md:text-xl font-medium text-black/5 dark:text-white/5'>Launching Soon</h2>
        </div>

      </div>

      <div className='my-12 lg:hidden md:hidden'>
        <h2 className='text-xl font-light tracking-wider text-black/80 dark:text-white/90'>Launching Soon
        <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, repeat:Infinity}} > . </motion.span>
        <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.2,repeat:Infinity}}> . </motion.span>
        <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.4,repeat:Infinity}}> . </motion.span>
        </h2>
      </div>
      

    </div>
  )
}

export default Home
 