"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { motion, AnimatePresence} from "motion/react"
import HeaderResponsive from './HeaderResponsive';
import { OpacityVariants } from '@/utils/MotionAnimations';
import Image from 'next/image';


export default function Header() {
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

  return (
    <>
    <HeaderResponsive />

    {/* MAIN */}
    <div className='lg:block hidden'>

        {/* Main */}
        <section className='relative z-[100] w-[100%] bg-white drop-shadow-md'>
            {/* TOP */}
            <div className='w-[94%] mx-auto flex justify-start items-center gap-8 py-3'>
                {/* LOGO AREA */}
                <div className='w-[10%] p-1  flex items-center justify-center'>
                    {/* <Image 
                        src={`/assets/img/logo.png`}
                        layout="fill" 
                        objectFit="contain" 
                        alt="Logo" />  */}
                    <Link href='/'>
                    <img 
                        src={`/assets/img/logo.png`}
                        className='w-[100%] object-fit'
                        alt="Logo" /> 
                    </Link>
                </div>
                <div className='w-[90%] h-[100%] flex justify-between items-center'>
                    <ul className='relative flex items-center justify-start'>
                        {/*  */}
                        <li onMouseOver={() => setIsActive({one: !isActive?.one})}>
                            <Link 
                                href='/' 
                                onClick={() => setIsActive({one: true})}
                                className={`${isActive?.one == true ?? 'text-[#aa1845]'} px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear`}>
                                Home</Link>
                        </li>
                        {/*  */}
                        <li>
                            <Link href='/about' 
                                className='flex items-center justify-center gap-1 px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear'>
                                About Us
                            </Link>
                        </li>
                        {/*  */}
                        <li>
                            <Link href='/service' 
                                className='flex items-center justify-center gap-1 px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear'>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href='/news' 
                                className='flex items-center justify-center gap-1 px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear'>
                                News
                            </Link>
                        </li>
                         <li>
                            <Link href='/subscription' 
                                className='flex items-center justify-center gap-1 px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear'>
                                Subscriptions
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact' 
                                className='flex items-center justify-center gap-1 px-4 hover:text-[#aa1845] font-semibold tracking-wide transition-all ease-linear'>
                                Contact Us
                            </Link>
                        </li>
                       
                       
                    </ul>
                    {/*  */}
                    <ul className='flex items-center justify-end'>
                        <li className='relative flex items-center justify-center border-r-2 border-gray-300'>
                            <button
                                onClick={() => setIsActive({seven: !isActive?.seven})}
                                className='px-5 tracking-wide'>
                                <IoSearch />
                            </button>
                            <AnimatePresence>
                                { isActive?.seven &&
                                <motion.div 
                                    variants={OpacityVariants}
                                    initial='hidden'
                                    animate='visible'
                                    exit='hidden'
                                    className='absolute top-[110%] right-0 text-sm p-3 w-[500%] rounded-xl bg-gray-50 drop-shadow-md flex flex-col items-start justify-start'>
                                    <section className='w-[100%] flex items-center justify-start overflow-hidden border rounded-xl border-gray-500'>
                                        <input type='text' className='w-[90%] outline-none px-3 py-2' />
                                        <button className='w-[10%] h-[100%] flex items-center justify-center text-[#aa1845]'>
                                            <IoSearch />
                                        </button>
                                    </section>
                                </motion.div>
                                }
                            </AnimatePresence>
                            
                        </li>
                        <li className='relative'
                            onMouseLeave={() => setIsActive({eight: false})} 
                            onMouseOver={() => setIsActive({eight: true})}>
                            <button 
                                onClick={() => setIsActive({eight: !isActive?.eight})} 
                                className='flex items-center justify-center gap-1 px-5 hover:text-[#aa1845] tracking-wide'>
                                Account <FaAngleDown />
                            </button>
                            <AnimatePresence>
                                { isActive?.eight &&
                                <motion.ul 
                                    variants={OpacityVariants}
                                    initial='hidden'
                                    animate='visible'
                                    exit='hidden'
                                    className='absolute w-[110%] top-[100%] right-0 text-sm rounded-b-xl bg-gray-50 drop-shadow-md flex flex-col items-start justify-start overflow-hidden'>
                                    <Link href='#' className='w-[100%] px-4 py-2 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                    <li> Profile</li>
                                    </Link>
                                    <Link href='#' className='w-[100%] px-4 py-2 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                        <li> Password </li>
                                    </Link>
                                    <Link href='#' className='w-[100%] px-4 py-2 transition-all ease-linear duration-200 hover:bg-gray-100 hover:text-[#aa1845]'>
                                        <li> Login</li>
                                    </Link>
                                </motion.ul>
                                }
                            </AnimatePresence>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        

    </div> 
    </>
  )
}
