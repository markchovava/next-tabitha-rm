import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function page() {
  return (
    <>
    <section className='bg-fixed w-[100%] lg:aspect-[5/2] grid lg:grid-cols-2 grid-cols-1 gap-5 bg-gradient-to-br from-[#aa1845] to-[#5c041e] text-gray-50'>
        <div className='ml-[8%] lg:h-[100%] h-[20rem] flex flex-col items-start justify-center py-[2rem] pr-[2rem]'>
            <p className='text-gray-300 font-medium text-xl mb-2'>ABOUT US</p>
            <h2 className='text-4xl leading-tight font-light'>
              We are a dedicated healthcare technology company focused on 
              enhancing the well-being of dependent and semi-dependent patients
            </h2>
        </div>
        <div className='w-[100%] h-[100%] overflow-hidden rounded-l-3xl bg-gray-400'>
          <div className="relative w-[100%] h-[100%]">
            <Image
              src='/assets/images/01.jpg'
              alt="Full Cover Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
    </section>


    <section className='w-[100%]'>
        <div className='mx-auto w-[70%] py-[5rem]'>
            <p className='text-center font-light text-gray-800 text-3xl mb-4'>
              At Tabitha Resource Management, we believe every individual deserves the highest quality 
              of compassionate care, regardless of their dependency level. We are a dedicated healthcare 
              technology company focused on enhancing the well-being of dependent and semi-dependent 
              patients through intelligent, integrated solutions.
              
            </p>
        </div>
    </section>


    <section className='w-[100%]'>
        <div className='mx-auto overflow-hidden rounded-3xl lg:p-[3rem] lg:pb-[3rem] p-[2.5rem] pb-[2.5rem] lg:w-[65%] w-[90%] text-gray-100 bg-gradient-to-br from-[#aa1845] to-[#5c041e]'>
            <div className='w-[100%] rounded-2xl overflow-hidden aspect-[5/3] bg-gray-300'>
              <div className="relative  w-[100%] h-[100%]">
              <Image
                src='/assets/images/01.jpg'
                alt="Full Cover Image"
                layout="fill"
                objectFit="cover"
              />
              </div>
            </div>
            <div className='pt-8'>
                <h3 className='text-4xl mb-4'>Our Mission</h3>
                <p className='text-xl leading-tight font-light'>
                    Our innovative resource management system is designed to provide comprehensive oversight and 
                    support for patients who require ongoing assistance, whether in their own residences, assisted 
                    living facilities, or specialized care environments. By seamlessly integrating real-time data 
                    from medical devices, smart sensors, and caregiver inputs, our platform offers critical health 
                    insights, proactive alerts, and streamlined tools for meticulous care coordination.
                </p>
            </div>
        </div>
    </section>
    

    {/* TWO */}
   <section className="w-[100%] pt-[5rem] pb-[5rem]">
    <div className="mx-auto w-[100%] grid lg:grid-cols-2 grid-cols-1 gap-4">
      <div className="pl-[8%] w-[100%] flex flex-col items-start justify-center lg:py-4 lg:pb-8 pb-16">
        <p className="uppercase px-2 mb-10 text-[#aa1845] font-semibold">About Us</p>
        <h1 className="mb-10 px-2 leading-[3rem] text-[2.6rem]">Background of our Company</h1>
        <p className="mb-12 pl-2 pr-4 font-light text-xl">
          Founded by a team of healthcare professionals, seasoned engineers, and user experience designers, 
          we are committed to developing technology that not only monitors but truly elevates the standard of 
          care. 
        </p>
        <Link href='#' className="group">
          <button className="mx-2 group flex items-center justify-center gap-1 text-lg px-6 py-3 cursor-pointer group-hover:drop-shadow-md text-[#aa1845] bg-white border border-[#aa1845] rounded-md transition-all ease-linear">
            View More <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
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



    <section className='w-[100%] pt-[1rem] pb-[6rem]'>
        <div className='mx-auto lg:w-[94%] w-[90%] overflow-hidden rounded-2xl bg-gray-200 drop-shadow-lg grid lg:grid-cols-2 grid-cols-1'>
            <div className='w-[100%] h-[100%] bg-gray-400'>
              <div className="relative w-[100%] h-[100%]">
                <Image
                  src='/assets/images/02.jpg'
                  alt="Full Cover Image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className='w-[100%] flex flex-col gap-8 items-start justify-center lg:pl-8 px-8 py-12'>
                <p className="uppercase px-2 text-[#aa1845] font-semibold">Contact Us</p>
                <h1 className=" px-2 leading-[3rem] text-[2.6rem]">Talk to us</h1>
                <p className="mb-12 pl-2 pr-4 font-light text-xl">
                  Join us in redefining care management for dependent and semi-dependent patients, fostering greater 
                  peace of mind for families and empowering caregivers with the tools they need most.
                </p>
            </div>
        </div>
    </section>
    </>
  )
}
