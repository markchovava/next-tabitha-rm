import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { MdSavings } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import Image from 'next/image';

export default function page() {
  return (
    <>
    <section className='bg-fixed w-[100%] lg:aspect-[5/2] grid lg:grid-cols-2 grid-cols-1 gap-5 bg-gradient-to-br from-[#aa1845] to-[#5c041e] text-gray-50'>
        <div className='ml-[8%] lg:h-[100%] h-[20rem] flex flex-col items-start justify-center py-[2rem] pr-[2rem]'>
            <p className='text-gray-300 font-medium text-xl mb-2 uppercase'>Careers</p>
            <h2 className='text-4xl leading-tight'>Featured Career Areas</h2>
        </div>
        <div className='w-[100%] h-[100%] overflow-hidden rounded-l-3xl bg-gray-400'>
            <div className="relative w-[100%] h-[100%]">
            <Image
                src='/assets/img/01.jpg'
                alt="Full Cover Image"
                layout="fill"
                objectFit="cover"
            />
            </div>
        </div>
    </section>

    <section className='w-[100%] pt-[5rem] pb-[4rem] '>
        <div className='mx-auto w-[90%] lg:w-[94%] grid lg:grid-cols-4 grid-cols-1 gap-8'>
            <div className='col-span-3 flex items-center justify-start lg:border-r-2 lg:border-[#aa1845]'>
                <h3 className='text-3xl px-4'>
                All you need is your resume to get started and IBA resume matching feature will 
                help align your skills with available job opportunities at IBA.
                </h3>
            </div>
            <div className='col-span-1 px-4 flex flex-col items-start justify-center'>
                <h5 className='text-xl font-semibold mb-4 leading-tight'>Career Contacts</h5>
                <div className=''>
                    <p className='text-sm font-medium leading-tight'>Email:</p>
                    <Link href='#'>
                    <p className='text-lg text-[#aa1845] underline hover:no-underline'>
                        careers@iba.com
                    </p>
                    </Link>
                </div>
            </div>
        </div>
    </section>

    <section className='w-[100%] pb-[5rem]'>
        <div className='mx-auto w-[90%] lg:w-[96%]'>
            <h1 className="text-center flex items-center justify-center text-[2.2rem] uppercase font-bold tracking-1 mb-2">Featured Career Areas</h1>
            <hr className="border-b-4 border-[#aa1845] w-[10rem] mb-8 text-center mx-auto" />
            <section className='w-[100%] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>    
                <div className='flex flex-col items-center justify-center gap-4'>
                    <div className='flex p-[1.5rem] bg-gray-100 drop-shadow-md rounded-full items-center justify-center'>
                        <MdSavings className='text-[6rem] text-[#aa1845]' /></div>
                    <Link href='#' className='group flex items-center justify-center font-semibold'>
                    <button className='cursor-pointer flex items-center justify-center gap-2 group-hover:text-[#aa1845] transition-all ease-linear duration-150'>
                        Finance
                        <FaAngleRight className='transition-all ease-linear duration-150 group-hover:translate-x-1' />
                    </button>
                    </Link>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <div className='flex p-[1.5rem] bg-gray-100 drop-shadow-md rounded-full items-center justify-center'>
                        <GrTechnology className='text-[6rem] text-[#aa1845]' /></div>
                    <Link href='#' className='group flex items-center justify-center font-semibold'>
                    <button className='cursor-pointer flex items-center justify-center gap-2 group-hover:text-[#aa1845] transition-all ease-linear duration-150'>
                        Technology
                        <FaAngleRight className='transition-all ease-linear duration-150 group-hover:translate-x-1' />
                    </button>
                    </Link>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <div className='flex p-[1.5rem] bg-gray-100 drop-shadow-md rounded-full items-center justify-center'>
                        <MdOutlineSecurity className='text-[6rem] text-[#aa1845]' /></div>
                    <Link href='#' className='group flex items-center justify-center font-semibold'>
                    <button className='cursor-pointer flex items-center justify-center gap-2 group-hover:text-[#aa1845] transition-all ease-linear duration-150'>
                        Risk Management
                        <FaAngleRight className='transition-all ease-linear duration-150 group-hover:translate-x-1' />
                    </button>
                    </Link>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <div className='flex p-[1.5rem] bg-gray-100 drop-shadow-md rounded-full items-center justify-center'>
                        <MdGroups className='text-[6rem] text-[#aa1845]' /></div>
                    <Link href='#' className='group flex items-center justify-center font-semibold'>
                    <button className='cursor-pointer flex items-center justify-center gap-2 group-hover:text-[#aa1845] transition-all ease-linear duration-150'>
                        Transformation
                        <FaAngleRight className='transition-all ease-linear duration-150 group-hover:translate-x-1' />
                    </button>
                    </Link>
                </div>
            </section>
        </div>
    </section>

    {/* TWO */}
    <section className="w-[100%] pt-[3rem] pb-[5rem]">
    <div className="mx-auto w-[100%] grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="pl-[8%] w-[100%] flex flex-col items-start justify-center lg:py-4 lg:pb-8 pb-16">
        <p className="uppercase px-2 mb-10 text-[#aa1845] font-semibold">Wealth Management</p>
        <h1 className="mb-10 px-2 leading-[3rem] text-[2.6rem]">Personalize your investment experience</h1>
        <p className="mb-12 pl-2 pr-4 font-light text-xl">
        Whether you want to work with a J.P. Morgan advisor to create a personalized 
        financial strategy or invest on your own with our powerful digital tools, 
        the answer is J.P. Morgan U.S. Wealth Management.
        </p>
        <Link href='#' className="group">
            <button className="mx-2 group flex items-center justify-center gap-1 text-lg px-6 py-3 cursor-pointer group-hover:drop-shadow-md text-[#aa1845] bg-white border border-[#aa1845] rounded-md transition-all ease-linear">
            View More <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
            </button>
        </Link>
        </div>
        <div className="w-[100%] lg:rounded-l-2xl overflow-hidden lg:aspect-[4/3] aspect-[5/3] bg-gray-400">
            <div className="relative w-[100%] h-[100%]">
            <Image
                src='/assets/img/05.jpg'
                alt="Full Cover Image"
                layout="fill"
                objectFit="cover"
            />
            </div>
        </div>
    </div>
    </section>

    <section className='w-[100%] pb-[6rem]'>
        <div className='mx-auto lg:w-[94%] w-[90%] overflow-hidden rounded-2xl bg-gray-200 drop-shadow-lg grid lg:grid-cols-2 grid-cols-1'>
            <div className='w-[100%] h-[100%] overflow-hidden bg-gray-400'>
            <div className="relative w-[100%] h-[100%]">
            <Image
                src='/assets/img/06.jpg'
                alt="Full Cover Image"
                layout="fill"
                objectFit="cover"
            />
            </div>
            </div>
            <div className='w-[100%] flex flex-col gap-8 items-start justify-center text-gray-100 bg-gradient-to-br from-[#aa1845] to-[#5c041e] lg:pl-8 px-8 py-12'>
                <p className="uppercase px-2 text-gray-300 font-semibold">Wealth Management</p>
                <h1 className=" px-2 leading-[3rem] text-[2.6rem]">Personalize your investment experience</h1>
                <p className="mb-12 pl-2 pr-4 font-light text-xl">
                Whether you want to work with a J.P. Morgan advisor to create a personalized 
                financial strategy or invest on your own with our powerful digital tools, 
                the answer is J.P. Morgan U.S. Wealth Management.
                </p>
            </div>
        </div>
    </section>

    </>
  )
}
