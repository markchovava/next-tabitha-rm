import React from 'react'
import { FaUser } from "react-icons/fa6";
import { MdOutlineCategory } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import Link from 'next/link';
import { FaBookMedical } from "react-icons/fa";


const logsData = [
  {name: 'Bath & Hygiene Logs', id: 1},
  {name: 'Blood Pressure Logs', id: 2},
  {name: 'Blood Glucose Logs', id: 3},
  {name: 'Visitor Logs', id: 4},
  {name: 'Exercise Logs', id: 5},
  {name: 'Open Home Logs', id: 6},
  {name: 'Medication Logs', id: 7},
  {name: 'Nutrition Logs', id: 8},
  {name: 'Sleep & Wake Logs', id: 9},
  {name: 'Sore Prevention Logs', id: 10},
  {name: 'Urination & Defecation Logs', id: 111},
]



export default async function page() {


  return (
    <>
    {/* BREADCRUMBS */}
    <section className='w-full border-y border-gray-200 py-1'>
      <ul className='mx-auto w-[92%] flex items-center justify-start gap-2 text-sm'>
        <Link href='/'>
        <li>Home</li>
        </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin'>
          <li>Admin</li>
        </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin/log'>
          <li className='font-semibold'>Logs</li>
        </Link>
        
      </ul>
    </section>

    <section className='py-[5rem]'>
      <div className='mx-auto w-[92%]'>
        <h3 className='text-[2.5rem] font-light mb-3'>Logs</h3>
        <hr className='border-b border-gray-200' />
        <div className='w-[100%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-4'>
          {/*  */}
          {logsData.map((i, key) => (
          <Link href='#'>
          <div key={key} className='group cursor-pointer bg-white rounded-2xl drop-shadow-md py-8 px-6 flex items-center justify-start gap-8 hover:drop-shadow-xl'>
            <div className='overflow-hidden bg-gradient-to-br p-5 from-green-400 to-blue-900 flex items-center justify-center rounded-full'>
              <FaBookMedical className='text-[2rem] text-white group-hover:scale-110 duration-300 ease-in-out transition-all' />
            </div>
          <h2 className='text-[1.8rem] leading-tight'>{i?.name}</h2>
          </div>
          </Link>

          ))}
         
          
        </div>
      </div>
    </section>
    </>
  )
}
