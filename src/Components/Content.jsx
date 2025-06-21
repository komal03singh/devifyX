import React from 'react'
import Home from './Home/Home'
import Whyus from './Whyus/Whyus'
import Features from './Features/Features'
import Contact from './Contact/Contact'
import { motion } from 'motion/react'

function Content({ActiveTab}) {
  return (
    <div className='flex h-full justify-center'>
      <div
      className='mt-8 h-[500px] w-11/12'>
        {ActiveTab ==='home' && 

        <motion.div
        
        >
            <Home/>
        </motion.div>
        }

        {ActiveTab ==='whyus' && 

        <motion.div
        initial={{opacity:0 ,x:200}}
        animate={{opacity:1,x:0}}
        transition={{duration:1.2}}
        >
            <Whyus/>
        </motion.div>
        
        }

        {ActiveTab ==='features' && 

        <motion.div
        initial={{opacity:0 ,x:200}}
        animate={{opacity:1,x:0}}
        transition={{duration:1.2}}
        >
           <Features/>
        </motion.div>
        
        }

        {ActiveTab ==='contact' && 

        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1.2}}
        >
            <Contact/>
        </motion.div>
        
        }

      </div>

      
    </div>
  )
}

export default Content
