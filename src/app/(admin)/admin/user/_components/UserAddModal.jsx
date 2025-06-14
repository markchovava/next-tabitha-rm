"use client";
import { reactToastifyDark } from '@/_utils/reactToastify';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';


const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
        transition: {
            type: 'spring',
            duration: 1, }},
}


export default function UserAddModal({getData, isModal, setIsModal}) {
    const [data, setData] = useState({})
    const [errMsg, setErrMsg] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    async function postData() {
        if(!data?.name){
            const message = "Full Name is required."
            toast.warn(message, reactToastifyDark)
            setErrMsg({name: message})
            setIsSubmit(false)
            return
        }
        if(!data?.is_admin){
            const message = "Admin Status is required."
            toast.warn(is_admin, reactToastifyDark)
            setErrMsg({is_admin: message})
            setIsSubmit(false)
            return
        }
        if(!data?.email){
            const message = "Email is required."
            toast.warn(email, reactToastifyDark)
            setErrMsg({email: message})
            setIsSubmit(false)
            return
        }
        const formData = {
            name: data?.name,
            is_admin: data?.is_admin,
            email: data?.email,
            phone: data?.phone,
            address: data?.address,
        }
        try{            
            setErrMsg({email: message});
            setIsSubmit(false);
            return;
        } catch (error) {
            console.error(`Error: ${error}`);
            setIsSubmit(false)
            return;
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
            <section className='mx-auto lg:w-[60%] w-[92%] bg-white text-black p-6 rounded-2xl'>
                <div className='flex items-center justify-end'>
                <button onClick={() => setIsModal(false)} className='hover:text-red-600 transition-all ease-in-out duration-200'>
                    <IoClose className='text-2xl' />
                </button>
                </div>
                <form action={postData} onSubmit={() => setIsSubmit(true)}>
                   <h2 className='text-[2.5rem] font-light mb-6 text-center border-b border-gray-300'>
                    Add User
                    </h2>
        
                    {/* NAME */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none font-light'>Name:</p>
                        <input 
                            type='text' 
                            name='name'
                            onChange={handleInput}
                            value={data?.name}
                            placeholder='Name' 
                            className='w-[100%] border border-gray-300 outline-none p-3' />
                        {errMsg?.name &&
                        <p className='text-red-600 text-sm'>{errMsg?.name}</p>}
                    </div>
                    {/* EMAIL */}            
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none font-light'>Email:</p>
                        <input 
                            type='text' 
                            name='email'
                            onChange={handleInput}
                            value={data?.email}
                            placeholder='Enter Name' 
                            className='w-[100%] border border-gray-300 outline-none p-3' />
                        {errMsg?.email &&
                        <p className='text-red-600 text-sm'>{errMsg?.email}</p>}
                    </div>
                    {/* PHONE */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none font-light'>Phone:</p>
                        <input 
                            type='text' 
                            name='phone'
                            onChange={handleInput}
                            value={data?.phone}
                            placeholder='Enter Phone' 
                            className='w-[100%] border border-gray-300 outline-none p-3' />
                        { errMsg?.phone &&
                            <p className='text-red-600 text-sm'>{errMsg?.phone}</p> }
                    </div>
                    {/* ADDRESS */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none font-light'>Address:</p>
                        <input 
                            type='text' 
                            name='address'
                            onChange={handleInput}
                            value={data?.address}
                            placeholder='Enter Address' 
                            className='w-[100%] border border-gray-300 outline-none p-3' />
                        { errMsg?.address &&
                            <p className='text-red-600 text-sm'>{errMsg?.address}</p> }
                    </div>
                    {/* ADMIN */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none font-light'>Assign Admin:</p>
                        <select 
                            name='is_admin'
                            onChange={handleInput}
                            value={data?.is_admin}
                            className='w-[100%] border border-gray-300 outline-none p-3'>
                            <option value=''>Select an option</option>
                            <option value='No'>No</option>
                            <option value='Yes'>Yes</option>
                        </select>
                        { errMsg?.is_admin &&
                            <p className='text-red-600 text-sm'>{ errMsg?.is_admin }</p> }
                    </div>
                    {/* BUTTON */}
                    <div className='w-[100%]'>
                        <button type='submit' className='w-[100%] rounded-xl bg-gray-800 hover:bg-gray-900 hover:drop-shadow-lg ease-linear transition-all duration-150 text-white py-4'>
                           { isSubmit ? 'Processing' : 'Submit' }
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
