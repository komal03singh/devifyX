import React, {useEffect, useState} from 'react'
import { TbMoonFilled } from "react-icons/tb";
import { PiSunFill } from "react-icons/pi";
import { IoHomeSharp } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";


function Navbar({ActiveTab,setActiveTab}) {

  const [theme,setTheme] = useState('dark')

  useEffect(()=>{
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme){
      setTheme(savedTheme)
    }else if (systemPrefersDark){
      setTheme('dark')
    }
  },[])

  useEffect(()=>{
    const html = document.documentElement
    html.setAttribute('data-theme',theme)
    localStorage.setItem('theme',theme)
  },[theme])

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }


  return (
    <div className='flex justify-center mt-10 lg:mt-6'>
        <div className='flex justify-between gap-4 items-center bg-black/90 text-white dark:bg-white/90 h-14 w-80 md:h-18 md:w-11/12 lg:h-18 lg:w-11/12 rounded-full px-10'>

          <div className='hidden md:flex lg:flex justify-center items-center dark:text-black font-black text-3xl'>
            <p>devify<span className='bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent'>X</span></p>
          </div>

          <div className='hidden lg:flex md:flex'>
            <ul className='flex h-full gap-8 font-medium text-base dark:text-black hover:cursor-pointer'>
              <button>
                <li onClick={()=>setActiveTab('home')} 
                className={`${ActiveTab ==='home'? 'bg-gradient-to-r from-blue-500 to-blue-300 dark:from-blue-700 dark:to-blue-400 bg-clip-text text-transparent' : ''}`}          
                >Home</li>
              </button>

              <button>
                <li onClick={()=>setActiveTab('whyus')}
                className={`${ActiveTab ==='whyus'? 'bg-gradient-to-r from-blue-500 to-blue-300 dark:from-blue-700 dark:to-blue-400 bg-clip-text text-transparent' : ''}`}
                >Why Us?</li>
              </button>

              <button>
                <li onClick={()=>setActiveTab('features')}
                className={`${ActiveTab ==='features'? 'bg-gradient-to-r from-blue-500 to-blue-300 dark:from-blue-700 dark:to-blue-400 bg-clip-text text-transparent' : ''}`}
                >Features</li>
              </button>

              <button>
                <li onClick={()=>setActiveTab('contact')}
                className={`${ActiveTab ==='contact'? 'bg-gradient-to-r from-blue-500 to-blue-300 dark:from-blue-700 dark:to-blue-400 bg-clip-text text-transparent' : ''}`}
                >Contact</li>
              </button>

            </ul>
          </div>

          <div className='lg:hidden md:hidden'>
            <ul className='py-2 flex h-full gap-6 dark:text-black hover:cursor-pointer'>

              <li className='text-[10px] font-semibold' onClick={()=>setActiveTab('home')}>
                <div className='flex items-center justify-center text-xl text-white dark:text-black'><IoHomeSharp /></div>
                <p className={`${ActiveTab ==='home'? 'bg-gradient-to-r from-blue-500 to-blue-300 dark:from-blue-700 dark:to-blue-400 bg-clip-text text-transparent' : ''}`}>Home</p>                 
              </li>

              <li className='text-[10px] font-semibold' onClick={()=>setActiveTab('whyus')}>
                <div className='flex items-center justify-center text-xl text-white dark:text-black'><FaQuestionCircle /></div>
                <p className={`${ActiveTab ==='whyus'? 'bg-gradient-to-r from-blue-500 to-blue-300 dark:from-blue-700 dark:to-blue-400 bg-clip-text text-transparent' : ''}`}>WhyUs?</p>
              </li>

              <li className='text-[10px] font-semibold' onClick={()=>setActiveTab('features')}>
                <div className='flex items-center justify-center text-xl text-white dark:text-black'><MdOutlineAppSettingsAlt /></div>
                <p className={`${ActiveTab ==='features'? 'bg-gradient-to-r from-blue-500 to-blue-300 dark:from-blue-700 dark:to-blue-400 bg-clip-text text-transparent' : ''}`}>Features</p>
              </li>
              
              <li className='text-[10px] font-semibold' onClick={()=>setActiveTab('contact')}>
                <div className='flex items-center justify-center text-xl text-white  dark:text-black'><FaPhone /></div>
                <p className={`${ActiveTab ==='contact'? 'bg-gradient-to-r from-blue-500 to-blue-300 dark:from-blue-700 dark:to-blue-400 bg-clip-text text-transparent' : ''}`}>Contact</p>
              </li>

            </ul>
          </div>

          <div className='mb-1'>
            <div className='flex items-center justify-center bg-white dark:bg-black h-8 w-8 lg:h-10 lg:w-10 rounded-full'>
            {
              theme === 'dark' ? 
              <div onClick={toggleTheme} className='flex items-center justify-center h-6 w-6 lg:h-8 lg:w-8 p-1 text-white text-2xl'><PiSunFill /></div> :
              <div onClick={toggleTheme} className='flex items-center justify-center h-8 w-8 p-1 text-black text-2xl'><TbMoonFilled /></div>

            }
            </div>
          </div>
        </div>
  </div>
  )
}

export default Navbar
