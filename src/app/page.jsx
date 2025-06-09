import Link from "next/link";
import CarouselService from "./_components/CarouselService";
import HomeSlider from "./_components/HomeSlider";
import { FaArrowRightLong } from "react-icons/fa6";
import CarouselNews from "./_components/CarouselNews";
import Image from "next/image";

export default function Page() {
  return (
  <>
   <HomeSlider />

   <section className="bg__oneDark text-gray-50 py-[6rem]">
      <div className="bg-[#aa1845] lg:rounded-3xl overflow-hidden mx-auto w-[93%] grid lg:grid-cols-2 grid-cols-1">
        <div className="overflow-hidden relative w-[100%] h-[100%] bg-gray-400">
          <Image
            src="/assets/images/02.jpg"
            alt="Full Cover Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className='w-[100%] flex flex-col gap-8 items-start justify-center lg:pl-8 px-8 py-12'>
          <p className="uppercase text-gray-300 font-semibold">INTRODUCING TABITHA RM</p>
          <h1 className="leading-[3rem] text-[2.6rem]">Tabitha Resource Management System</h1>
          <p className="mb-4 pr-4 font-light text-xl">
          In the demanding world of elderly care, every moment counts, and every resource is vital. 
          Care facilities are constantly striving to provide the highest quality of life and safety 
          for their residents, while also managing complex operations and ensuring compliance. 
          </p>
          <Link href='#' className="group">
            <button className="bg-[#aa1845] group-hover:drop-shadow-lg group flex items-center justify-center gap-2 text-lg px-6 py-3 cursor-pointer text-white border border-white rounded-md transition-all ease-linear">
              View More <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>

      <div className="mx-auto w-[94%] mt-[5rem]">
        <div>
          <h1 className="text-[2.5rem] font-bold tracking-1 mb-3">OUR APPLICATION</h1>
          <hr className="border-b-4 border-[#aa1845] w-[10rem]" />
          <p className="text-xl font-light mt-6 mb-8 lg:w-[60%]">
            These logs, when integrated into a resource management system, transform raw data into 
            actionable insights, enabling better coordination, accountability, and ultimately, 
            higher quality of care for the elderly.
          </p>
        </div>
        <CarouselService slides={4} />
      </div>
   </section>

    {/*  */}
   <section className="w-[100%]">
    <div className="mx-auto w-[100%] grid lg:grid-cols-2 grid-cols-1 gap-4 lg:pt-[8rem] pt-[5rem] pb-[5rem]">
      <div className="pl-[8%] w-[100%] flex flex-col items-start justify-center lg:py-4 lg:pb-8 pb-16">
        <p className="uppercase px-2 mb-10 text-[#aa1845] font-semibold">About Us</p>
        <h1 className="mb-10 px-2 leading-[3rem] text-[2.6rem]">Tabitha Resource Management System</h1>
        <p className="mb-12 pl-2 pr-4 font-light text-xl">
        A resource management system for elderly care logs is a digital platform designed to streamline 
        and optimize the tracking, allocation, and utilization of resources in elderly care settings. 
        Its primary purpose is to ensure that caregivers have immediate access to necessary information, 
        equipment, and support, ultimately leading to improved quality of care for the elderly.
        </p>
        <Link href='#' className="group">
          <button className="mx-2 group flex items-center justify-center gap-1 text-lg px-6 py-3 cursor-pointer group-hover:drop-shadow-md text-[#aa1845] bg-white border border-[#aa1845] rounded-md transition-all ease-linear">
            View More <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
          </button>
        </Link>
      </div>
      <div className="w-[100%] overflow-hidden lg:rounded-l-2xl lg:aspect-[4/3] aspect-[5/3] bg-gray-400 drop-shadow-lg">
        <div className="w-[100%] h-[100%]">
            <Image
              src="/assets/images/03.jpg"
              alt="Full Cover Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
      </div>
    </div>
   </section>


    {/*  */}
    <section className="w-[100%]">
    <div className="mx-auto w-[100%] grid lg:grid-cols-2 grid-col-reverse grid-cols-1 gap-4 lg:pt-[5rem] lg:pb-[5rem]">
      <div className="relative drop-shadow-lg lg:order-1 order-2 w-[100%] overflow-hidden lg:rounded-r-2xl lg:aspect-[4/3] aspect-[5/3] bg-gray-400">
          <div className="relative w-[100%] h-[100%]">
            <Image
              src="/assets/images/01.jpg"
              alt="Full Cover Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
      </div>
      <div className="order-1 lg:order-2 pl-[8%] w-[100%] flex flex-col items-start justify-center lg:py-4 lg:pb-8 pb-16">
        <p className="uppercase px-2 mb-10 text-[#aa1845] font-semibold">Our Services</p>
        <h1 className="mb-10 px-2 leading-[3rem] text-[2.6rem]">THE SERVICES WE OFFER</h1>
        <p className="mb-12 pl-2 pr-4 font-light text-xl">
        Comprehensive digital records of the care and support provided to residents. These logs are a critical 
        component of the centralized data repository mentioned in the Canvas and are instrumental for enhanced 
        safety & quality, better care coordination, and increased accountability & transparency.
        </p>
        <Link href='#' className="group">
          <button className="mx-2 group flex items-center justify-center gap-1 text-lg px-6 py-3 cursor-pointer group-hover:drop-shadow-md text-[#aa1845] bg-white border border-[#aa1845] rounded-md transition-all ease-linear">
            View More <FaArrowRightLong className="transition-all duration-200 ease-linear group-hover:translate-x-1" />
          </button>
        </Link>
      </div>
    </div>
   </section>


   {/* NEWS */}
   <section className="w-[100%] bg-gray-50 py-[5rem]">
    <div className="mx-auto w-[94%]">
      <h1 className="text-[2.5rem] font-bold tracking-1 mb-2">LATEST NEWS</h1>
      <hr className="border-b-4 border-[#aa1845] w-[10rem]" />
      <p className="text-xl font-light mt-6 mb-8 lg:w-[60%]">
        Recent developments in elderly care technology and resource management systems indicate a strong focus 
        on enhancing efficiency, safety, and personalized care. Some key highlights include
      </p>
    </div>
    <div className="mx-auto w-[94%]">
      <CarouselNews slides={4} />
    </div>

   </section>


  
  </>
  );
}
