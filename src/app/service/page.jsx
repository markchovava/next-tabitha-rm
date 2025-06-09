import Link from 'next/link'
import React from 'react'
import { FaAngleRight, FaArrowRightLong } from 'react-icons/fa6'
import GridBusinesses from './_components/GridBusinesses'
import Image from 'next/image'

export default function page() {
  return (
    <>
    {/* HEADER */}
    <section className='bg-fixed w-[100%] lg:aspect-[5/2] grid lg:grid-cols-2 grid-cols-1 gap-5 bg-gradient-to-br from-[#aa1845] to-[#5c041e] text-gray-50'>
        <div className='ml-[8%] lg:h-[100%] h-[20rem] flex flex-col items-start justify-center py-[2rem] pr-[2rem]'>
            <p className='text-gray-300 font-medium text-xl mb-3'>OUR SRVICES</p>
            <h2 className='text-4xl leading-tight font-light'>
                We understand that each patient's needs are unique, which is why our services are flexible and 
                customizable to various care settings,
            </h2>
        </div>
        <div className='w-[100%] h-[100%] overflow-hidden rounded-l-3xl bg-gray-400'>
            <div className="relative w-[100%] h-[100%]">
                <Image
                    src='/assets/images/02.jpg'
                    alt="Full Cover Image"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    </section>

    <section className='w-[100%] bg-gray-100 py-[5rem]'>
        <div className='mx-auto overflow-hidden rounded-2xl w-[65%] py-[3rem] px-[2.5rem] bg-gradient-to-br from-[#aa1845] to-[#5c041e] text-gray-50'>
            <h3 className='text-3xl mb-6'>Our Services</h3>
            <p className='text-xl mb-6 font-light '>
                Our comprehensive resource management system offers a suite of integrated services designed to optimize care 
                for dependent and semi-dependent patients and empower their caregivers. We understand that each patient's needs 
                are unique, which is why our services are flexible and customizable to various care settings, from individual 
                homes with dedicated support to assisted living facilities.
            </p>
            <Link href='#' className="group">
                <button className="group flex items-center justify-center gap-1 text-md px-6 py-3 cursor-pointer group-hover:drop-shadow-md text-white border border-white rounded-md transition-all ease-linear">
                    View More <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                </button>
            </Link>
        </div>
    </section>

    {/* BUSINESS */}
    <GridBusinesses />

    {/*  */}
    <section className="w-[100%] bg-gray-50 pt-[5rem] pb-[7rem]">
        <div className="mx-auto w-[100%] grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="pl-[8%] w-[100%] flex flex-col items-start justify-center lg:py-4 lg:pb-8 pb-16">
            <p className="uppercase px-2 mb-10 text-[#aa1845] font-semibold">Contact Us</p>
            <h1 className="mb-10 px-2 leading-[3rem] text-[2.6rem]">Talk to us</h1>
            <p className="mb-12 pl-2 pr-4 font-light text-xl">
            Join us in redefining care management for dependent and semi-dependent patients, fostering greater peace of mind for families and empowering caregivers with the tools they need most.
            </p>
            <Link href='#' className="group">
                <button className="mx-2 group flex items-center justify-center gap-1 text-lg px-6 py-3 cursor-pointer group-hover:drop-shadow-md text-[#aa1845] bg-white border border-[#aa1845] rounded-md transition-all ease-linear">
                Write to Us <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                </button>
            </Link>
            </div>
            <div className="w-[100%] overflow-hidden lg:rounded-l-2xl lg:aspect-[4/3] aspect-[5/3] bg-gray-400">
            <div className="relative w-[100%] h-[100%]">
                <Image
                    src='/assets/images/01.jpg'
                    alt="Full Cover Image"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            </div>
        </div>
    </section>
   


    </>
  )
}
