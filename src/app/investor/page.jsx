import Link from 'next/link'
import React from 'react'
import CarouselEvents from './_components/CarouselEvents'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaFilePdf } from "react-icons/fa6";
import { RiFileExcel2Line } from "react-icons/ri";
import Image from 'next/image';

export default function page() {
  return (
    <>
    <section className='bg-fixed w-[100%] lg:aspect-[5/2] grid lg:grid-cols-2 grid-cols-1 gap-5 bg-gradient-to-br from-[#aa1845] to-[#5c041e] text-gray-50'>
        <div className='ml-[8%] lg:h-[100%] h-[20rem] flex flex-col items-start justify-center py-[2rem] pr-[2rem]'>
            <p className='text-gray-300 font-medium uppercase text-xl mb-2'>Investors</p>
            <h2 className='text-4xl leading-tight'>
                Find our investor presentations, annual reports, financial information and news.
            </h2>
        </div>
        <div className='w-[100%] h-[100%] overflow-hidden rounded-l-3xl bg-gray-400'>
            <div className="relative w-[100%] h-[100%]">
            <Image
                src='/assets/img/a05.jpg'
                alt="Full Cover Image"
                layout="fill"
                objectFit="cover"
            />
            </div>
        </div>
    </section>

    <section className='w-[100%] py-[4rem]'>
        <div className='mx-auto w-[90%] lg:w-[94%] grid lg:grid-cols-4 grid-cols-1 gap-8'>
            <div className='col-span-3 flex items-center justify-start lg:border-r-2 lg:border-[#aa1845]'>
                <h3 className='text-3xl'>
                    Fourth Quarter and Full Year 2024 Results and Key Metrics.
                </h3>
            </div>
            <div className='col-span-1 flex flex-col items-start justify-center'>
                <h5 className='text-xl font-semibold mb-4 leading-tight'>Invest Contacts</h5>
                <div>
                    <p className='text-sm font-medium leading-tight'>Email:</p>
                    <Link href='#'>
                    <p className='text-lg font-medium text-[#aa1845] underline hover:no-underline'>
                        investorrelations@iba.com
                    </p>
                    </Link>
                </div>
            </div>
        </div>
    </section>

    <section className='w-[100%] py-[4rem]'>
        <div className='mx-auto w-[90%] lg:w-[94%]'>
            <h1 className="text-[2.5rem] uppercase font-bold tracking-1 mb-2">Upcoming events</h1>
            <hr className="border-b-4 border-[#aa1845] w-[10rem] mb-8" />
            <CarouselEvents slides={4} />
        </div>
    </section>

    <section className='w-[100%] bg-gray-100 pt-[4rem] pb-[6rem]'>
        <div className='mx-auto lg:w-[94%] w-[90%] grid lg:grid-cols-2 grid-cols-1 gap-12'>
            {/* COL */}
            <div className='w-[100%] drop-shadow-md rounded-xl bg-white px-[4rem] py-[3rem]'>
                <h3 className='text-4xl font-serif leading-tight mb-6'>Events and Presentations</h3>
                <p className='tracking-[1.5px] font-medium text-sm text-[#aa1845] mb-4'>April 15, 2025</p>
                <h3 className='text-2xl font-serif leading-tight mb-6'>Citi First Quarter 2025 Earnings Call</h3>
                <Link href="#">
                    <button className='group mb-6 px-4 py-2 rounded-lg border border-gray-700 hover:border hover:border-[#aa1845] hover:text-[#aa1845] transition-all ease-linear text-lg flex items-center justify-start gap-2 font-light'>
                        Read More
                        <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                    </button>
                </Link>
                <div>
                    <h5 className='font-medium text-lg'>Jane Fraser </h5>
                    <p className='font-light'>Chief Executive Officer, Citi </p>
                </div>
                <div className="mb-4 .w-[100%]"></div>
                <div>
                    <h5 className='font-medium text-lg'>Jane Fraser </h5>
                    <p className='font-light'>Chief Executive Officer, Citi </p>
                </div>
            </div>
            {/* COL */}
            <div className='w-[100%] drop-shadow-md rounded-xl bg-white px-[4rem] py-[3rem]'>
                <h3 className='text-4xl font-serif leading-tight mb-6'>Quarterly Earnings</h3>
                <p className='tracking-[1.5px] font-medium text-sm text-[#aa1845] mb-4'>April 15, 2025</p>
                <h3 className='text-2xl font-serif leading-tight mb-6'>Fourth Quarter 2024</h3>
                <div className='w-[100%] grid grid-cols-2 gap-4'>
                    <div className=''>
                        <Link href='#' className='group'>
                        <p className='flex items-center justify-start gap-2'>
                            <FaFilePdf className='text-2xl text-red-700' />
                            <span className='ease-linear group-hover:underline group-hover:text-[#aa1845]'>Press Release</span> 
                        </p>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href='#' className='group'>
                        <p className='flex items-center justify-start gap-2'>
                            <FaFilePdf className='text-2xl text-red-700' />
                            <span className='ease-linear group-hover:underline group-hover:text-[#aa1845]'>Press Release</span> 
                        </p>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href='#' className='group'>
                        <p className='flex items-center justify-start gap-2'>
                            <RiFileExcel2Line className='text-2xl text-green-700' />
                            <span className='ease-linear group-hover:underline group-hover:text-[#aa1845]'>Press Release</span> 
                        </p>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href='#' className='group'>
                        <p className='flex items-center justify-start gap-2'>
                            <FaFilePdf className='text-2xl text-red-700' />
                            <span className='ease-linear group-hover:underline group-hover:text-[#aa1845]'>Press Release</span> 
                        </p>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href='#' className='group'>
                        <p className='flex items-center justify-start gap-2'>
                            <RiFileExcel2Line className='text-2xl text-green-700' />
                            <span className='ease-linear group-hover:underline group-hover:text-[#aa1845]'>Press Release</span> 
                        </p>
                        </Link>
                    </div>
                </div>
            </div>
            {/* COL */}
            <div className='w-[100%] drop-shadow-md rounded-xl bg-white px-[4rem] py-[3rem]'>
                <h3 className='text-4xl font-serif leading-tight mb-6'>SEC Filings</h3>
                {/*  */}
                <div className='w-[100%] text-gray-800 text-xl flex items-center justify-start pb-2 mb-3 border-b border-gray-300'>
                   <div className='w-[33%] font-medium'>Proxy</div> 
                   <div className='w-[33%] font-light'>2025</div> 
                   <div className='w-[33%]'>
                    <Link href='#'>
                    <button className='group'>
                        <FaFilePdf className='cursor-pointer text-xl duration-150 ease-linear transition-all group-hover:scale-110 text-red-700' />
                    </button>
                    </Link>
                    </div> 
                </div>
                {/*  */}
                <div className='w-[100%] text-gray-800 text-xl flex items-center justify-start pb-2 mb-3 border-b border-gray-300'>
                   <div className='w-[33%] font-medium'>10-K</div> 
                   <div className='w-[33%] font-light'>2024</div> 
                   <div className='w-[33%]'>
                    <Link href='#'>
                    <button className='group'>
                        <FaFilePdf className='cursor-pointer text-xl duration-150 ease-linear transition-all group-hover:scale-110 text-red-700' />
                    </button>
                    </Link>
                    </div> 
                </div>
                {/*  */}
                <div className='w-[100%] text-gray-800 text-xl flex items-center justify-start pb-2 mb-3 border-b border-gray-300'>
                   <div className='w-[33%] font-medium'>8-K</div> 
                   <div className='w-[33%] font-light'>2023</div> 
                   <div className='w-[33%]'>
                    <Link href='#'>
                    <button className='group'>
                        <FaFilePdf className='cursor-pointer text-xl duration-150 ease-linear transition-all group-hover:scale-110 text-red-700' />
                    </button>
                    </Link>
                    </div> 
                </div>
            </div>
            {/* COL */}
            <div className='w-[100%] drop-shadow-md rounded-xl bg-white px-[4rem] py-[3rem]'>
                <h3 className='text-4xl font-serif leading-tight mb-6'>Other Filings</h3>
                {/*  */}
                <div className='w-[100%] text-gray-800 text-xl flex items-center justify-start pb-2 mb-3 border-b border-gray-300'>
                   <div className='w-[33%] font-medium'>Proxy</div> 
                   <div className='w-[33%] font-light'>2025</div> 
                   <div className='w-[33%]'>
                    <Link href='#'>
                    <button className='group'>
                        <FaFilePdf className='cursor-pointer text-xl duration-150 ease-linear transition-all group-hover:scale-110 text-red-700' />
                    </button>
                    </Link>
                    </div> 
                </div>
                {/*  */}
                <div className='w-[100%] text-gray-800 text-xl flex items-center justify-start pb-2 mb-3 border-b border-gray-300'>
                   <div className='w-[33%] font-medium'>10-K</div> 
                   <div className='w-[33%] font-light'>2024</div> 
                   <div className='w-[33%]'>
                    <Link href='#'>
                    <button className='group'>
                        <FaFilePdf className='cursor-pointer text-xl duration-150 ease-linear transition-all group-hover:scale-110 text-red-700' />
                    </button>
                    </Link>
                    </div> 
                </div>
                {/*  */}
                <div className='w-[100%] text-gray-800 text-xl flex items-center justify-start pb-2 mb-3 border-b border-gray-300'>
                   <div className='w-[33%] font-medium'>8-K</div> 
                   <div className='w-[33%] font-light'>2023</div> 
                   <div className='w-[33%]'>
                    <Link href='#'>
                    <button className='group'>
                        <FaFilePdf className='cursor-pointer text-xl duration-150 ease-linear transition-all group-hover:scale-110 text-red-700' />
                    </button>
                    </Link>
                    </div> 
                </div>
            </div> 
        </div>
    </section>


    <section className='w-[100%] pt-[4rem] pb-[6rem]'>
        <div className='mx-auto lg:w-[94%] w-[90%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
            {/*  */}
            <div className='border-t border-gray-300 pt-[1rem] pb-[2rem]'>
                <Link href='#'>
                    <h3 className='group text-[#aa1845] flex leading-tight font-serif text-2xl mb-[1rem]'>
                        <span className='pb-3 flex hover:border-b border-[#aa1845] items-center justify-start gap-4'>
                        Other Regulatory Filings 
                        <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                        </span>
                    </h3>
                </Link>
                <p className=''>
                    Find Citibank Call Report, FR Y9C, Basel III Pillar 3 Disclosures, 
                    Basel III Advances Approaches Disclosures and more.
                </p>
            </div>
            {/*  */}
            <div className='border-t border-gray-300 pt-[1rem] pb-[2rem]'>
                <Link href='#'>
                    <h3 className='group text-[#aa1845] flex leading-tight font-serif text-2xl mb-[1rem]'>
                        <span className='pb-3 flex hover:border-b border-[#aa1845] items-center justify-start gap-4'>
                        Fixed Income Investor Relations
                        <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                        </span>
                    </h3>
                </Link>
                <p className=''>
                A comprehensive overview of Citi’s Corporate Debt, Capital Securities, and Asset Backed Securities products.
                </p>
            </div>
            {/*  */}
            <div className='border-t border-gray-300 pt-[1rem] pb-[2rem]'>
                <Link href='#'>
                    <h3 className='group text-[#aa1845] flex leading-tight font-serif text-2xl mb-[1rem]'>
                        <span className='pb-3 flex hover:border-b border-[#aa1845] items-center justify-start gap-4'>
                        ESG
                        <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                        </span>
                    </h3>
                </Link>
                <p className=''>
                    View annual ESG reports and more documents for investors.
                </p>
            </div>
            {/*  */}
            <div className='border-t border-gray-300 pt-[1rem] pb-[2rem]'>
                <Link href='#'>
                    <h3 className='group text-[#aa1845] flex leading-tight font-serif text-2xl mb-[1rem]'>
                        <span className='pb-3 flex hover:border-b border-[#aa1845] items-center justify-start gap-4'>
                        Corporate Governance
                        <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                        </span>
                    </h3>
                </Link>
                <p className=''>
                    Find information for Citigroup, Inc., Citibank, N.A. and Citi Policies.
                </p>
            </div>
            {/*  */}
            <div className='border-t border-gray-300 pt-[1rem] pb-[2rem]'>
                <Link href='#'>
                    <h3 className='group flex text-[#aa1845] leading-tight font-serif text-2xl mb-[1rem]'>
                    <span className='pb-3 flex hover:border-b border-[#aa1845] items-center justify-start gap-4'>
                        Stockholder Services 
                        <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                    </span>
                    </h3>
                </Link>
                <p className=''>
                    Find information and resources for Citigroup common stockholders.
                </p>
            </div>
            {/*  */}
            <div className='border-t border-gray-300 pt-[1rem] pb-[2rem]'>
                <Link href='#'>
                    <h3 className='group flex text-[#aa1845] leading-tight font-serif text-2xl mb-[1rem]'>
                        <span className='pb-3 hover:border-b border-[#aa1845] flex items-center justify-start gap-4'>
                        Investor Contacts
                        <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                        </span>
                    </h3>
                </Link>
                <p className=''>
                    Reach Document Services, Transfer Agent, Shareholder Relations, 
                    Investor Relations and Fixed Income Investor Relations.
                </p>
            </div>
        </div>
    </section>

    <section className='w-[100%] pb-[6rem]'>
        <div className='mx-auto lg:w-[94%] w-[90%] overflow-hidden rounded-2xl bg-gray-200 drop-shadow-lg grid lg:grid-cols-2 grid-cols-1'>
            <div className='w-[100%] h-[100%] overflow-hidden bg-gray-400'>
                <div className="relative w-[100%] h-[100%]">
                <Image
                    src='/assets/img/07.jpg'
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
