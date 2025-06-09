import Image from 'next/image'
import React from 'react'
import { IoCheckmarkCircle } from "react-icons/io5";


export default function page() {
  return (
    <>
    {/* HEADER */}
    <section className='bg-fixed w-[100%] lg:aspect-[5/2] grid lg:grid-cols-2 grid-cols-1 gap-5 bg-gradient-to-br from-[#aa1845] to-[#5c041e] text-gray-50'>
        <div className='ml-[8%] lg:h-[100%] h-[20rem] flex flex-col items-start justify-center py-[2rem] pr-[2rem]'>
            <p className='text-gray-300 font-medium text-xl mb-2'>OUR SRVICES</p>
            <h2 className='text-4xl leading-tight font-light'>
                We offer tiered subscription plans to cater to the diverse requirements of individual patients, 
                families, and care facilities. 
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

    <section className='py-[5rem] w-[100%]'>
        <div className='w-[94%] mx-auto grid grid-cols-3 gap-8'>
            {/*  */}
            <div className='rounded-2xl bg-white drop-shadow-md px-4 py-12 border border-gray-200'>
                <h2 className='text-3xl mb-4 text-center'>First Tier</h2>
                <div className='text-center text-3xl mb-6'>
                    <span className='font-medium'>$</span>
                    <span className='text-5xl font-extrabold text-[#aa1845]'>5.00</span>
                </div>
                <button className='mb-2 w-[100%] cursor-pointer rounded-3xl py-3 border border-[#aa1845] hover:drop-shadow-md bg-white'>
                    Choose Plan
                </button>
                 <p className='mb-8 text-center font-light text-sm'>
                    Renews at US$ 15.00/mo for 1 years.
                </p>
                <ul className='px-4'>
                    <li className='flex items-start justify-start gap-2 font-light mb-3'>
                        <p><IoCheckmarkCircle className='mt-1 text-xl text-[#aa1845]' /></p>
                        <p>
                            The Essential Care Tier is our foundational offering, perfect for individuals or smaller care settings needing core 
                            monitoring, communication, and safety features. It provides peace of mind through fundamental insights and proactive 
                            alerts.
                        </p>
                    </li>
                   <li className='flex items-start justify-start gap-2 font-light mb-3'>
                        <p><IoCheckmarkCircle className='mt-1 text-xl text-[#aa1845]' /></p>
                        <p>
                            The Essential Care Tier is our foundational offering, perfect for individuals or smaller care settings needing core 
                            monitoring, communication, and safety features. It provides peace of mind through fundamental insights and proactive 
                            alerts.
                        </p>
                    </li>
                </ul>
            </div>
            {/*  */}
            <div className='rounded-2xl bg-white drop-shadow-md px-4 py-12 border border-gray-200'>
                <h2 className='text-3xl mb-4 text-center'>Second Tier</h2>
                <div className='text-center text-3xl mb-6'>
                    <span className='font-medium'>$</span>
                    <span className='text-5xl font-extrabold text-[#aa1845]'>10.00</span>
                </div>
                <button className='mb-2 w-[100%] cursor-pointer rounded-3xl py-3 border border-[#aa1845] hover:drop-shadow-md bg-white'>
                    Choose Plan
                </button>
                <p className='mb-8 text-center font-light text-sm'>
                    Renews at US$ 15.00/mo for 1 years.
                </p>
                <ul className='px-4'>
                    <li className='flex items-start justify-start gap-2 font-light mb-3'>
                        <p><IoCheckmarkCircle className='mt-1 text-xl text-[#aa1845]' /></p>
                        <p>
                            The Essential Care Tier is our foundational offering, perfect for individuals or smaller care settings needing core 
                            monitoring, communication, and safety features. It provides peace of mind through fundamental insights and proactive 
                            alerts.
                        </p>
                    </li>
                   <li className='flex items-start justify-start gap-2 font-light mb-3'>
                        <p><IoCheckmarkCircle className='mt-1 text-xl text-[#aa1845]' /></p>
                        <p>
                            The Essential Care Tier is our foundational offering, perfect for individuals or smaller care settings needing core 
                            monitoring, communication, and safety features. It provides peace of mind through fundamental insights and proactive 
                            alerts.
                        </p>
                    </li>
                </ul>
            </div>
            {/*  */}
            <div className='rounded-2xl bg-white drop-shadow-md px-4 py-12 border border-gray-200'>
                <h2 className='text-3xl mb-4 text-center'>Third Tier</h2>
                <div className='text-center text-3xl mb-6'>
                    <span className='font-medium'>$</span>
                    <span className='text-5xl font-extrabold text-[#aa1845]'>15.00</span>
                </div>
                <button className='mb-2 w-[100%] cursor-pointer rounded-3xl py-3 border border-[#aa1845] hover:drop-shadow-md bg-white'>
                    Choose Plan
                </button>
                <p className='mb-8 text-center font-light text-sm'>
                    Renews at US$ 15.00/mo for 1 years.
                </p>
                <ul className='px-4'>
                    <li className='flex items-start justify-start gap-2 font-light mb-3'>
                        <p><IoCheckmarkCircle className='mt-1 text-xl text-[#aa1845]' /></p>
                        <p>
                            The Essential Care Tier is our foundational offering, perfect for individuals or smaller care settings needing core 
                            monitoring, communication, and safety features. It provides peace of mind through fundamental insights and proactive 
                            alerts.
                        </p>
                    </li>
                   <li className='flex items-start justify-start gap-2 font-light mb-3'>
                        <p><IoCheckmarkCircle className='mt-1 text-xl text-[#aa1845]' /></p>
                        <p>
                            The Essential Care Tier is our foundational offering, perfect for individuals or smaller care settings needing core 
                            monitoring, communication, and safety features. It provides peace of mind through fundamental insights and proactive 
                            alerts.
                        </p>
                    </li>
                </ul>
            </div>

        </div>
    </section>
    </>
  )
}
