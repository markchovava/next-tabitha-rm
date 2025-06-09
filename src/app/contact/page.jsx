import Image from 'next/image';
import React from 'react'
import ContactEdit from './_components/ContactEdit';


export default function page() {
    


  return (
    <>
    {/* HEADER */}
    <section className='bg-fixed parallax-layer w-[100%] lg:aspect-[5/2] grid lg:grid-cols-2 grid-cols-1 gap-5 bg-gradient-to-br from-[#aa1845] to-[#5c041e] text-gray-50'>
        <div className='ml-[8%] lg:h-[100%] h-[20rem] flex flex-col items-start justify-center py-[2rem] pr-[2rem]'>
            <p className='text-gray-300 font-medium text-xl mb-3'>CONTACT DETAILS</p>
            <h2 className='text-4xl leading-tight font-light'>
            Please see the contact information below.
            For general inquiries regarding, please call <br /> (123) 34543232.
            </h2>
        </div>
        <div className='w-[100%] h-[100%] overflow-hidden rounded-l-3xl bg-gray-400'>
            <div className="relative w-[100%] h-[100%]">
            <Image
                src='/assets/images/03.jpg'
                alt="Full Cover Image"
                layout="fill"
                objectFit="cover"
            />
            </div>
        </div>
    </section>

   <ContactEdit />
    </>
  )
}
