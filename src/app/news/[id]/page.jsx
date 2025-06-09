import React from 'react'

export default function page() {
  return (
    <>
    {/* HEADER */}
    <section className='w-[100%] py-[4rem] bg-gradient-to-br from-[#aa1845] to-[#5c041e] text-gray-50'>
        <div className='mx-auto w-[90%] flex flex-col items-center justify-center'>
            <p className='text-gray-300 font-medium text-xl mb-2'> NEWS</p>
            <h2 className='text-4xl leading-tight'>
                The Title
            </h2>
        </div>
    </section>


    <section className='w-[100%]'>
        <div className='mx-auto lg:w-[70%] w-[90%] py-[5rem]'>
            <h3 className='text-4xl leading-tight font-serif'>Citi First Quarter 2025 Earnings Call</h3>
            <p className='mb-4 leading-tight'>April 04, 2025</p>
            <div className='mb-4 text-white flex items-center justify-center w-[100%] aspect-[5/2] rounded-2xl bg-gray-400'>Tets</div>
            <p className='font-light text-gray-800 text-2xl mb-4'>
                We live in an increasingly complex world. Companies these days are either born global or 
                are going global at record speed. Business and geopolitics are forging an entirely new 
                dynamic and consumers now expect financial services to be a seamless part of their digital 
                lives. Citi is a bank that's uniquely positioned for this moment. Through our vast global 
                network and our on-the-ground expertise, we can connect the dots, anticipate change and 
                empathize the needs of our clients in ways that other banks simply cannot.
            </p>
            <p className='font-light text-gray-800 text-2xl'>
                We live in an increasingly complex world. Companies these days are either born global or 
                are going global at record speed. Business and geopolitics are forging an entirely new 
                dynamic and consumers now expect financial services to be a seamless part of their digital 
                lives. Citi is a bank that's uniquely positioned for this moment. Through our vast global 
                network and our on-the-ground expertise, we can connect the dots, anticipate change and 
                empathize the needs of our clients in ways that other banks simply cannot.
            </p>
        </div>
    </section>
    </>
  )
}
