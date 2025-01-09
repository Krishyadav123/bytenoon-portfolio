"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';


const Testimonials = () => {
    return (
        <div className='bg-white px-4 xl:px-24 py-20'>
            <div>
                <div className='flex items-center justify-center gap-2'>
                    <span><FontAwesomeIcon icon={faCircleCheck} className='text-black' /></span>
                    <p className='text-black'>TESTIMONIALS</p>
                </div>
                <div className='flex items-center justify-center mt-1'>
                    <h1 className='text-3xl text-center md:text-5xl mt-3 font-bold text-black'>
                        <span className='text-secondry'>Bytenoon </span> Providing Quality
                    </h1>
                </div>
                <div className='flex items-center justify-center mt-1'>
                    <p className='mt-5 text-center text-lg text-gray-600'>We are committed to sustainability. eco-friendly initiatives.</p>
                </div>
                <div className='flex flex-col xl:flex-row justify-center sm:gap-10 mt-10 md:mt-16'>
                    <div className='w-full flex items-center justify-center xl:w-[45%]'>
                        <div className='w-full sm:w-[500px] h-[500px] relative'>
                            <div className='w-full sm:w-[380px]'>
                                {/* <img className='w-full h-full object-cover rounded-3xl ' src="" alt="" /> */}
                                <Image src="/testimonials.png" alt="testimonials" width={500} height={500} className='w-full h-full object-cover rounded-3xl' />
                            </div>
                            <div >
                                <div id='star' className='absolute bottom-0 right-0 left-1/2 transform -translate-x-1/2 sm:left-auto sm:transform-none sm:-translate-x-0 p-3 md:p-7 w-[300px] md:w-[450px] border-[5px] border-white bg-secondry rounded-3xl'>
                                    <div className='flex items-center justify-center gap-2 md:gap-5'>
                                        <span className='text-2xl md:text-5xl text-white font-bold'>4.7/5</span>
                                        <p className='text-white text-base md:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing!</p>
                                    </div>
                                    <div>
                                        <hr className='md:mt-5 md:mb-5 mt-3 mb-3' />
                                        <p className='text-white text-base md:text-lg'>⭐⭐⭐⭐⭐ For Excellence Services</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[55%]'>
                        <Slider />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials


export const Slider = () => {

    const slides = [
        {
          quoteIcon:
            "https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-testimonial-quote.svg",
          testimonial:
            "Bytenoon exceeded our expectations with their top-notch development services. They turned our complex requirements into a seamless, user-friendly application. The team was professional, responsive, and delivered on time. Highly recommend for anyone looking for high-quality tech solutions!",
          authorImage:
            "https://www.shutterstock.com/image-photo/handsome-smiling-young-man-folded-260nw-2068601207.jpg",
          authorName: "Jitendra Kumar",
          authorRole: "Teacher",
        },
        {
          quoteIcon:
            "https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-testimonial-quote.svg",
          testimonial:
            "We partnered with Bytenoon for our e-commerce platform, and they delivered beyond what we imagined. Their innovative approach and attention to detail stood out. They also provided great post-launch support, ensuring our business ran smoothly.",
          authorImage:
            "https://cdn.pixabay.com/photo/2020/04/02/21/04/indian-4996741_1280.jpg",
          authorName: "Krishna Patel",
          authorRole: "Software Engineer",
        },
        {
          quoteIcon:
            "https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-testimonial-quote.svg",
          testimonial:
            "The Bytenoon team is a pleasure to work with. They are experts in their field and maintain clear communication throughout the project. Their ability to adapt and provide solutions quickly was truly impressive. I look forward to working with them again!",
          authorImage:
            "https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2019/10/IMG_0794.jpg",
          authorName: "Rajesh Kumar",
          authorRole: "Doctor",
        },
      ];

  return (
    <>
      <Swiper
        navigation={false}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center text-lg bg-white px-1"
          >
            <div>
              <div>
                <img
                  src={slide.quoteIcon}
                  alt="Quote Icon"
                />
                <p className="mt-10 text-lg font-semibold text-black">
                  {slide.testimonial}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-10">
                <div>
                  <img
                    className="rounded-full h-16 w-16"
                    src={slide.authorImage}
                    alt={slide.authorName}
                  />
                </div>
                <div>
                  <p className="text-xl font-semibold text-black">
                    {slide.authorName}
                  </p>
                  <p className="text-gray-500">{slide.authorRole}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
