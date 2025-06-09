"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { GoDotFill, GoDot } from "react-icons/go";
import { FaArrowRightLong, FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image';
import { SliderData } from '@/data/SliderData';




export default function HomeSlider() {
  const [data, setData] = useState(SliderData)
  const [windowWidth, setWindowWidth] = useState(0);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 8; // Update this based on your actual slide count

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  // Handle direct pagination click with React components
  const handlePaginationClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };


  useEffect(() => {
    // This code will only run on the client-side
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup
    };
  }, []); 




  return (
    <div className="hidden md:block mb-[4rem] relative carousel-container w-full h-auto mx-auto">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={3000}
        autoplay={{
            delay: 8000,
            disableOnInteraction: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        onSlideChange={handleSlideChange}
        navigation={false}
        pagination={false} // Disable default pagination
        className=""
      >
        {/* Sample slides */}
        {data.map((i, index) => (
          <SwiperSlide key={index}>
            <div className="w-[100vw] lg:aspect-[5/2] md:aspect-[5/3] grid md:grid-cols-2 grid-cols-1 overflow-hidden bg-white">
              <section className='w-[100%] h-[100%] pl-[8%] pr-5 flex flex-col items-start justify-center'>
                <h2 className='lg:text-5xl md:text-3xl mb-3 font-serif'>
                {i?.title}
                </h2>
                <p className='text-lg font-light pr-6 mb-8'>
                {i?.detail}
                </p>
                <Link href='#' className="group">
                  <button className=" group flex items-center justify-center gap-2 md:text-lg px-6 py-3 cursor-pointer group-hover:drop-shadow-md text-[#aa1845] bg-white border border-[#aa1845] rounded-md transition-all ease-linear">
                    View More 
                    <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                  </button>
                </Link>


              </section>
              <section className='overflow-hidden relative w-[100%] h-[100%] bg-[#aa1845] rounded-l-3xl drop-shadow-lg'>
              <Image
                  src={i?.img} // Replace with your image path
                  alt="Full Cover Image"
                  layout="fill"
                  objectFit="cover"
                />
              </section>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* IGNORE Custom controls container */}
      <div className="hidden carousel-controls flex-col items-center gap-4">
        {/* Custom React-based pagination dots */}
        {<div className="custom-pagination flex items-center justify-center gap-3 mb-4">
          {
          Array.from({ length: Math.ceil(totalSlides / (windowWidth >= 1024 ? 3 : windowWidth >= 640 ? 2 : 1)) }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index * (windowWidth >= 1024 ? 3 : windowWidth >= 640 ? 2 : 1))}
              className="pagination-dot focus:outline-none"
              aria-label={`Go to slide group ${index + 1}`}
            >
              {index === Math.floor(activeIndex / (windowWidth >= 1024 ? 3 : windowWidth >= 640 ? 2 : 1)) ? (
                <GoDotFill className="w-5 h-5 text-blue-500" />
              ) : (
                <GoDot className="w-5 h-5 text-gray-300" />
              )}
            </button>
          ))}
        </div>}
      </div>

      {/* Navigation buttons */}
      <div className="-mt-[7rem] ml-[3%] relative z-[100] navigation-buttons flex items-center justify-start gap-2">
          <button 
            onClick={() => swiperRef.current?.swiper?.slidePrev()} 
            className="group carousel-button-prev p-2 rounded-full bg-[#aa1845] text-white hover:bg-[#750b2b] focus:outline-none"
          >
            <FaCircleChevronLeft className="w-8 h-8 transition-all ease-linear duration-100 group-hover:scale-110" />
          </button>

          <button 
            onClick={() => swiperRef.current?.swiper?.slideNext()} 
            className="group carousel-button-next p-2 rounded-full bg-[#aa1845] text-white hover:bg-[#750b2b] focus:outline-none"
          >
            <FaCircleChevronRight className="w-8 h-8 transition-all ease-linear duration-100 group-hover:scale-110" />
          </button>
    </div>

    </div>
  );
};
