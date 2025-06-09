"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { GoDotFill, GoDot } from "react-icons/go";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ServiceData } from '@/data/ServiceData';
import Link from 'next/link';
import { FaAngleRight } from "react-icons/fa";




export default function CarouselService({ slides }) {
  const [data, setData] = useState(ServiceData)
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
    <div className="carousel-container w-full mx-auto">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: slides },
        }}
        onSlideChange={handleSlideChange}
        navigation={false}
        pagination={false} // Disable default pagination
        className="mb-6"
      >
        {/* Sample slides */}
        {data.map((i, key) => (
          <SwiperSlide key={key}>
            <div className="bg-white text-gray-800 rounded-lg h-[18rem] py-8 p-6 flex flex-col items-start justify-between">
              <section>
                <h3 className="text-2xl font-serif text-black leading-tight mb-6">
                  {i?.title}
                </h3>
                <p className='font-light mb-6'>{i?.detail}</p>
              </section>
              <Link href='#'>
                <button className='group font-light hover:text-[#aa1845] flex items-center justify-start gap-3'>
                  View more
                  <FaAngleRight className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom controls container */}
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
      <div className="navigation-buttons flex items-center justify-start gap-4">
        <button 
        onClick={() => swiperRef.current?.swiper?.slidePrev()} 
        className="group carousel-button-prev p-2 rounded-full bg-white hover:bg-gray-50 focus:outline-none" >
        <FaCircleChevronLeft className="w-6 h-6 text-[#aa1845] transition-all ease-linear duration-100 group-hover:scale-105" />
        </button>
        <button 
        onClick={() => swiperRef.current?.swiper?.slideNext()} 
        className="group carousel-button-next p-2 rounded-full bg-white hover:bg-gray-50 focus:outline-none" >
        <FaCircleChevronRight className="w-6 h-6 text-[#aa1845] transition-all ease-linear duration-100 group-hover:scale-105" />
        </button>
    </div>

    </div>
  );
};
