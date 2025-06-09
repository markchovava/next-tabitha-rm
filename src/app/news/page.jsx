import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft, FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { IoSearch } from "react-icons/io5";


export default function page() {
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
  return (
    <>
    {/* HEADER */}
    <section className='bg-fixed parallax-layer w-[100%] lg:aspect-[5/2] grid lg:grid-cols-2 grid-cols-1 gap-5 bg-gradient-to-br from-[#aa1845] to-[#5c041e] text-gray-50'>
        <div className='ml-[8%] lg:h-[100%] h-[20rem] flex flex-col items-start justify-center py-[2rem] pr-[2rem]'>
            <p className='text-gray-300 font-medium text-xl mb-2'>LATEST NEWS</p>
            <h2 className='text-4xl leading-tight font-light'>
                Discover the latest press announcements, upcoming events and inspirational stories from across 
                the firm.
            </h2>
        </div>
        <div className='w-[100%] h-[100%] overflow-hidden rounded-l-3xl bg-gray-400'>
            <div className="relative w-[100%] h-[100%]">
            <Image
                src='/assets/img/04.jpg'
                alt="Full Cover Image"
                layout="fill"
                objectFit="cover"
            />
            </div>
        </div>
    </section>


    <section className='w-[100%] grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1'>
        <div className='col-span-1 pl-[8%] py-[4rem]'>
            <ul className='px-2 border-l border-[#aa1845]'>
                <Link href='#' className=' group'>
                <li className='px-4 pb-3 group-hover:underline group-hover:text-[#aa1845] group-hover:font-semibold group-hover:translate-x-2 ease-linear transition-all'>
                    2025
                </li>
                </Link>
                <Link href='#' className=' group'>
                <li className='px-4 pb-3 group-hover:underline group-hover:text-[#aa1845] group-hover:font-semibold group-hover:translate-x-2 ease-linear transition-all'>
                    2024
                </li>
                </Link>
                <Link href='#' className=' group'>
                <li className='px-4 pb-3 group-hover:underline group-hover:text-[#aa1845] group-hover:font-semibold group-hover:translate-x-2 ease-linear transition-all'>
                    2023
                </li>
                </Link>
            </ul>
        </div>
        <div className='lg:col-span-4 md:col-span-3 col-span-1 bg-gray-100 md:pr-[8%] py-[4rem] md:pl-[5rem] px-[2rem]'>
            {/*  */}
            <div className='w-[100%] overflow-hidden bg-white grid grid-cols-6 gap-2 py-4 px-4 mb-6'>
                <div className='col-span-3'>
                    <p className='font-light'>Keyword:</p>
                    <input type='text' placeholder='Enter title here...' className='w-[100%] px-3 py-2 outline-none border border-gray-300' />
                </div>
                <div className='col-span-2'>
                    <p className='font-light'>Year:</p>
                    <select className='w-[100%] px-3 py-2 outline-none border border-gray-300'>
                        <option value=''>Select an Option.</option>
                        {[...Array(10)].map((i,key) => (
                            <option value={(key+1) + 2015}>{(key+1) + 2015}</option>
                        ))}
                    </select>
                </div>
                <div className='grid-cols-1 w-[100%] flex items-center justify-end col-span-1 h-[100%] mt-3'>
                    <button className='group cursor-pointer w-[100%] flex items-center justify-center border group-hover:border group-hover:border-[#aa1845] ease-linear duration-200 transition-all px-3 py-2 '>
                        <IoSearch className='group-hover:scale-110 transition-all ease-linear duration-200' />
                    </button>
                </div>
                
            </div>
            {/*  */}
            <div className='w-[100%] flex flex-col gap-6 mb-[1rem]'>
                {/*  */}
                <section className='w-[100%] py-10 px-12 bg-white drop-shadow hover:drop-shadow-lg ease-linear transition-all flex items-center justify-between'>
                    <div className=''>
                        <h3 className='text-2xl font-serif leading-tight'>
                            2024 Newsletter
                        </h3>
                        <p className='text-sm'>April 07, 2025</p>
                    </div>
                    <div>
                        <Link href='#' className='group'>
                        <button className='flex items-start justify-center gap-2 duration-150 ease-linear transition-all hover:text-[#aa1845]'>
                            <span className='pb-2 duration-150 ease-linear transition-all group-hover:border-b-2 border-[#aa1845]'>
                                Read more
                            </span>
                            <FaAngleRight className='mt-1 duration-150 ease-linear transition-all group-hover:translate-x-1' />
                        </button>
                        </Link>
                    </div>
                </section>
                {/*  */}
                <section className='w-[100%] py-10 px-12 bg-white drop-shadow hover:drop-shadow-lg ease-linear transition-all flex items-center justify-between'>
                    <div className=''>
                        <h3 className='text-2xl font-serif leading-tight'>
                            2024 Newsletter
                        </h3>
                        <p className='text-sm'>April 07, 2025</p>
                    </div>
                    <div>
                        <Link href='#' className='group'>
                        <button className='flex items-start justify-center gap-2 duration-150 ease-linear transition-all hover:text-[#aa1845]'>
                            <span className='pb-2 duration-150 ease-linear transition-all group-hover:border-b-2 border-[#aa1845]'>
                                Read more
                            </span>
                            <FaAngleRight className='mt-1 duration-150 ease-linear transition-all group-hover:translate-x-1' />
                        </button>
                        </Link>
                    </div>
                </section>
                {/*  */}
                <section className='w-[100%] py-10 px-12 bg-white drop-shadow hover:drop-shadow-lg ease-linear transition-all flex items-center justify-between'>
                    <div className=''>
                        <h3 className='text-2xl font-serif leading-tight'>
                            2024 Newsletter
                        </h3>
                        <p className='text-sm'>April 07, 2025</p>
                    </div>
                    <div>
                        <Link href='#' className='group'>
                        <button className='flex items-start justify-center gap-2 duration-150 ease-linear transition-all hover:text-[#aa1845]'>
                            <span className='pb-2 duration-150 ease-linear transition-all group-hover:border-b-2 border-[#aa1845]'>
                                Read more
                            </span>
                            <FaAngleRight className='mt-1 duration-150 ease-linear transition-all group-hover:translate-x-1' />
                        </button>
                        </Link>
                    </div>
                </section>
                {/*  */}
                <section className='w-[100%] py-10 px-12 bg-white drop-shadow hover:drop-shadow-lg ease-linear transition-all flex items-center justify-between'>
                    <div className=''>
                        <h3 className='text-2xl font-serif leading-tight'>
                            2024 Newsletter
                        </h3>
                        <p className='text-sm'>April 07, 2025</p>
                    </div>
                    <div>
                        <Link href='#' className='group'>
                        <button className='flex items-start justify-center gap-2 duration-150 ease-linear transition-all hover:text-[#aa1845]'>
                            <span className='pb-2 duration-150 ease-linear transition-all group-hover:border-b-2 border-[#aa1845]'>
                                Read more
                            </span>
                            <FaAngleRight className='mt-1 duration-150 ease-linear transition-all group-hover:translate-x-1' />
                        </button>
                        </Link>
                    </div>
                </section>
                {/*  */}
                <section className='w-[100%] py-10 px-12 bg-white drop-shadow hover:drop-shadow-lg ease-linear transition-all flex items-center justify-between'>
                    <div className=''>
                        <h3 className='text-2xl font-serif leading-tight'>
                            2024 Newsletter
                        </h3>
                        <p className='text-sm'>April 07, 2025</p>
                    </div>
                    <div>
                        <Link href='#' className='group'>
                        <button className='flex items-start justify-center gap-2 duration-150 ease-linear transition-all hover:text-[#aa1845]'>
                            <span className='pb-2 duration-150 ease-linear transition-all group-hover:border-b-2 border-[#aa1845]'>
                                Read more
                            </span>
                            <FaAngleRight className='mt-1 duration-150 ease-linear transition-all group-hover:translate-x-1' />
                        </button>
                        </Link>
                    </div>
                </section>
                {/*  */}
                <section className='w-[100%] py-10 px-12 bg-white drop-shadow hover:drop-shadow-lg ease-linear transition-all flex items-center justify-between'>
                    <div className=''>
                        <h3 className='text-2xl font-serif leading-tight'>
                            2024 Newsletter
                        </h3>
                        <p className='text-sm'>April 07, 2025</p>
                    </div>
                    <div>
                        <Link href='#' className='group'>
                        <button className='flex items-start justify-center gap-2 duration-150 ease-linear transition-all hover:text-[#aa1845]'>
                            <span className='pb-2 duration-150 ease-linear transition-all group-hover:border-b-2 border-[#aa1845]'>
                                Read more
                            </span>
                            <FaAngleRight className='mt-1 duration-150 ease-linear transition-all group-hover:translate-x-1' />
                        </button>
                        </Link>
                    </div>
                </section>
            </div>

            {/* PAGINATION */}
            <div className='w-[100%] mt-[2rem] mb-[2rem] flex items-center justify-end gap-3'>
                <button className='group cursor-pointer border border-gray-400 hover:border hover:border-[#aa1845] hover:text-[#aa1845] flex items-center justify-center gap-2 px-4 py-2'>
                    <FaArrowLeftLong className='mt-1 duration-150 ease-linear transition-all group-hover:-translate-x-1' />
                    Prev
                </button>
                <button className='group cursor-pointer border border-gray-400 hover:border hover:border-[#aa1845] hover:text-[#aa1845] flex items-center justify-center gap-2 px-4 py-2'>
                    Next 
                    <FaArrowRightLong className='mt-1 duration-150 ease-linear transition-all group-hover:translate-x-1' />
                </button>
            </div>

        </div>
    </section>
    </>
  )
}
