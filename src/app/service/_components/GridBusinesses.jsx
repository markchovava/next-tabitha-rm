"use client"
import { ServiceData } from '@/data/ServiceData'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa6'



export default function GridBusinesses() {
    const [data, setData] = useState(ServiceData)

  return (
    <>
    <section className='w-[100%]'>
        <div className='mx-auto lg:w-[94%] w-[90%] py-[4rem]'>
            <h1 className="text-[2.5rem] leading-tight font-bold tracking-1 mb-2">
                OUR BUSINESSES
            </h1>
            <hr className="border-b-4 border-[#aa1845] w-[10rem]" />
            <p className="text-xl font-light mt-6 mb-8 lg:w-[60%]">
                These logs, when integrated into a resource management system, transform raw data into actionable insights, 
                enabling better coordination, accountability, and ultimately, higher quality of care for the elderly.
            </p>
            <section className='w-[100%] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10'>
               {/* COL */}
               {data?.map((i, key) => (
                <>
                    <div key={key} className='w-[100%] flex flex-col justify-between items-start rounded-xl px-5 pt-5 pb-6 bg-gray-50 drop-shadow hover:drop-shadow-md ease-linear transition-all duration-150'>
                        <section>
                        <h3 className='text-2xl leaading-tight font-serif mb-6'>
                            {i?.title}
                        </h3>
                        <p className='font-light mb-6'>
                            {i?.detail}
                        </p>
                        </section>
                        <Link href='/business/commercial'>
                            <button className='font-light group pb-2 flex items-center justify-center gap-2 hover:border-b hover:border-[#aa1845] hover:text-[#aa1845]'>
                                Read more 
                                <FaAngleRight className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                            </button>
                        </Link>
                    </div>
                </>
               ))}
            
            </section>
        </div>
    </section>
    </>
  )
}
