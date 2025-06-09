"use client";
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';


const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
        transition: {
            type: 'spring',
            duration: 1, }},
}


export default function MessageStatusEditModal({
    id, 
    domData, 
    getData, 
    isModal, 
    setIsModal }) {
        
    const [data, setData] = useState(domData)
    const [errMsg, setErrMsg] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    async function postData() { 
        if(!data?.status) {
            const message = "Status is required."
            setErrMsg({status: message})
            setIsSubmit(false)
            return
        }
        const formData = {
            status: data?.status,
        } 
        try{
           
                setErrMsg({});
                setIsModal(false)
                setIsSubmit(false);
                return
        
        } catch (error) {
            console.error(`Error: ${error}`);
            setIsSubmit(false); 
        }
    }

    
  return (
    <>
    <AnimatePresence>
        {isModal &&
        <motion.section
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            className='w-[100vw] h-[100vh] fixed top-0 left-0 z-[200] overflow-y-auto' >
            <div className='absolute z-0 top-0 left-0 w-[100%] h-[100%] bg-black opacity-40'></div>
            <div className='w-[100%] h-[100%] absolute z-10 overflow-auto scroll__width py-[6rem]'>
            <section className='mx-auto lg:w-[50%] w-[90%] bg-white text-black p-6 rounded-2xl'>
                <div className='flex items-center justify-end'>
                <button onClick={() => setIsModal(false)} className='hover:text-red-600 transition-all ease-in-out duration-200'>
                    <IoClose className='text-2xl' />
                </button>
                </div>
                <form action={postData} onSubmit={() => setIsSubmit(true)}>
                   <h2 className='text-[2.5rem] font-light mb-6 text-center border-b border-gray-300'>
                    Update Message Status
                    </h2>
                    {/* STATUS */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-light'>Status:</p>
                        <select
                            type='text' 
                            name='status'
                            onChange={handleInput}
                            value={data?.status}
                            className='w-[100%] border border-gray-300 outline-none p-3'>
                            <option value=''>Select an option</option>
                            <option value='Read' >Read</option>
                            <option value='Unread' >Unread</option>
                        </select>
                        { errMsg?.status &&
                        <p className='text-red-600 text-sm'>{errMsg?.status}</p> }
                    </div>
                    {/*  */}
                    <div className='w-[100%]'>
                        <button type='submit' className='w-[100%] rounded-xl bg-gray-800 hover:bg-gray-900 hover:drop-shadow-lg ease-linear transition-all duration-150 text-white py-4'>
                           { isSubmit 
                           ? 'Processing' 
                           : 'Submit' }
                        </button>
                    </div>
                </form>

            </section>
            </div>
        </motion.section>
        }
    </AnimatePresence>
    </>
  )
}
