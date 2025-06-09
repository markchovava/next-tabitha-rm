"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence} from "motion/react"
import { OpacityVariants } from '@/utils/MotionAnimations';



export default function HeaderResponsive() {
    const [isActive, setIsActive] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false,
    })
    const [isToggle, setIsToggle] = useState(false)


  return (
    <>
    <div className='lg:hidden block'>
        <section className='relative w-[100%]'>
            <div className='mx-auto w-[94%] flex items-center justify-between'>
                <div className='w-[8rem] flex items-center justify-center'>
                <Link href='/'>
                    <img 
                        src={`/assets/img/logo.png`}
                        className='w-[100%] object-fit'
                        alt="Logo" /> 
                </Link>
                </div>
                <div>
                <AnimatePresence>
                    {isToggle ? 
                    <motion.button 
                        variants={OpacityVariants}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        onClick={() => setIsToggle(!isToggle)}>
                        <IoCloseSharp className='text-2xl' />
                    </motion.button>
                    :
                    <motion.button 
                        variants={OpacityVariants}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        onClick={() => setIsToggle(!isToggle)}>
                        <GiHamburgerMenu className='text-2xl' />
                    </motion.button>
                    }
                </AnimatePresence>
                </div>
            </div>
        </section>
        <AnimatePresence>
            {isToggle &&
            <motion.section 
                variants={OpacityVariants}
                initial='hidden'
                animate='visible'
                exit='hidden'
                className='relative z-[100] w-[100%] bg-white drop-shadow-md'>
                {/*  */}
                <motion.div
                    className='w-[100%] h-[100%] py-[2rem] flex flex-col justify-start items-center'>
                    <ul className='relative flex flex-col items-center justify-start gap-4'>
                        <li>
                            <Link 
                                href='/' 
                                className={`${isActive?.one == true ?? 'text-[#aa1845]'} px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear`}>
                                Home</Link>
                        </li>
                        <li>
                            <Link 
                                href='/about' 
                                className={`${isActive?.one == true ?? 'text-[#aa1845]'} px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear`}>
                                About Us</Link>
                        </li>
                        <li>
                            <Link 
                                href='/service' 
                                className={`${isActive?.one == true ?? 'text-[#aa1845]'} px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear`}>
                                Services</Link>
                        </li>
                        <li>
                            <Link 
                                href='/news' 
                                className={`${isActive?.one == true ?? 'text-[#aa1845]'} px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear`}>
                                News</Link>
                        </li>
                        <li>
                            <Link 
                                href='/subscription' 
                                className={`${isActive?.one == true ?? 'text-[#aa1845]'} px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear`}>
                                Subscriptions</Link>
                        </li>

                         <li>
                            <Link 
                                href='/contact' 
                                className={`${isActive?.one == true ?? 'text-[#aa1845]'} px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear`}>
                                Contact Us</Link>
                        </li>
                      
                     
                      
                     
                     
                    </ul>

                    <section className='mt-6 mb-8 mx-auto w-[90%] flex items-center justify-start overflow-hidden border rounded-xl border-gray-300'>
                        <input type='text' className='w-[90%] outline-none px-3 py-3' />
                        <button className='w-[10%] cursor-pointer h-[100%] flex items-center justify-center text-[#aa1845]'>
                            <IoSearch />
                        </button>
                    </section>
                    
                </motion.div>
            </motion.section>
            }
        </AnimatePresence>
    </div>

    
    

    
    </>
  )
}
