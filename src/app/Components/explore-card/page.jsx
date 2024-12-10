// import { Button } from '@/components/ui/button'
// import React from 'react'

// const ExploreCards = () => {
//   // Array of card data
//   const cardData = [
//     {
//       image: "https://assets-v2.scaler.com/assets/academy/svg/carousel-2-9564cde8d38ebab1459025fdef2ce4ab5234c0eb513f8adcb2f1372239658666.svg.gz",
//       title: "Lorem, ipsum dolor.",
//       description: "98765 Lorem, ipsum."
//     },
//     {
//       image: "https://assets-v2.scaler.com/assets/academy/svg/carousel-2-9564cde8d38ebab1459025fdef2ce4ab5234c0eb513f8adcb2f1372239658666.svg.gz",
//       title: "Lorem, ipsum dolor.",
//       description: "98765 Lorem, ipsum."
//     },
//     {
//       image: "https://assets-v2.scaler.com/assets/academy/svg/carousel-2-9564cde8d38ebab1459025fdef2ce4ab5234c0eb513f8adcb2f1372239658666.svg.gz",
//       title: "Lorem, ipsum dolor.",
//       description: "98765 Lorem, ipsum."
//     },
//     {
//       image: "https://assets-v2.scaler.com/assets/academy/svg/carousel-2-9564cde8d38ebab1459025fdef2ce4ab5234c0eb513f8adcb2f1372239658666.svg.gz",
//       title: "Lorem, ipsum dolor.",
//       description: "98765 Lorem, ipsum."
//     }
//   ]

//   return (
//     <div className='px-3 py-10 md:px-10 lg:px-32 lg:py-24 bg-[#F8F8F8]'>
//       <div className='text-2xl md:text-4xl font-normal text-center'>
//         Explore <span className='font-semibold'>Our Bytenoon Company</span>
//       </div>
//       <div className='py-5 md:py-16 flex items-center justify-center flex-wrap gap-7'>
//         {cardData.map((card, index) => (
//           <div
//             key={index}
//             className='w-[300px] md:w-[261px] h-60 rounded-xl shadow-sm hover:shadow-lg cursor-pointer bg-white'
//           >
//             <div className='h-[60%] w-full'>
//               <img
//                 className='w-full h-full object-cover rounded-t-lg'
//                 src={card.image}
//                 alt={card.title}
//               />
//             </div>
//             <div className='px-5 mt-4'>
//               <p className='text-lg font-semibold'>{card.title}</p>
//               <p className='text-sm text-gray-700 font-medium mt-2'>
//                 {card.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className='flex items-center justify-center'>
//         <Button className='w-52 bg-primary text-white'>View All Courses</Button>
//       </div>
//     </div>
//   )
// }

// export default ExploreCards
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AboutStripSlider = () => {
  // Dynamic data for the cards
  const cardData = [
    {
      image:
        "https://assets-v2.scaler.com/assets/academy/svg/carousel-2-9564cde8d38ebab1459025fdef2ce4ab5234c0eb513f8adcb2f1372239658666.svg.gz",
      title: "Lorem, ipsum dolor.",
      description: "98765 Lorem, ipsum.",
    },
    {
      image:
        "https://assets-v2.scaler.com/assets/academy/svg/carousel-2-9564cde8d38ebab1459025fdef2ce4ab5234c0eb513f8adcb2f1372239658666.svg.gz",
      title: "Dolor sit amet.",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image:
        "https://assets-v2.scaler.com/assets/academy/svg/carousel-2-9564cde8d38ebab1459025fdef2ce4ab5234c0eb513f8adcb2f1372239658666.svg.gz",
      title: "Consectetur adipiscing elit.",
      description: "Pellentesque commodo eros a enim.",
    },
    {
      image:
        "https://assets-v2.scaler.com/assets/academy/svg/carousel-2-9564cde8d38ebab1459025fdef2ce4ab5234c0eb513f8adcb2f1372239658666.svg.gz",
      title: "Vivamus elementum semper nisi.",
      description: "Aenean vulputate eleifend tellus.",
    },
    {
      image:
        "https://assets-v2.scaler.com/assets/academy/svg/carousel-2-9564cde8d38ebab1459025fdef2ce4ab5234c0eb513f8adcb2f1372239658666.svg.gz",
      title: "Vivamus elementum semper nisi.",
      description: "Aenean vulputate eleifend tellus.",
    },
    {
      image:
        "https://assets-v2.scaler.com/assets/academy/svg/carousel-2-9564cde8d38ebab1459025fdef2ce4ab5234c0eb513f8adcb2f1372239658666.svg.gz",
      title: "Vivamus elementum semper nisi.",
      description: "Aenean vulputate eleifend tellus.",
    },
  ];

  return (
    <div className="w-full h-full cursor-pointer p-2 flex items-center justify-center lg:px-40 lg:py-10">
      <Swiper
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        style={{
          padding: "50px 0px 0px 0px", // Top/bottom and left/right padding
        }}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={1000}
        breakpoints={{
          1024: { slidesPerView: 4, spaceBetween: 30 }, // Desktop
          768: { slidesPerView: 3, spaceBetween: 20 }, // Tablet
          640: { slidesPerView: 2, spaceBetween: 15 }, // Mobile
          0: { slidesPerView: 1, spaceBetween: 10 }, // Extra Small
        }}
        spaceBetween={20}
        className=""
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="h-64 mb-5 rounded-xl shadow-md hover:shadow-lg cursor-pointer bg-white">
              <div className="h-[55%] w-full">
                <img
                  className="w-full h-full object-cover rounded-t-lg"
                  src={card.image}
                  alt={card.title}
                />
              </div>
              <div className="p-5">
                <p className="text-lg font-semibold line-clamp-1">
                  {card.title}
                </p>
                <p className="text-sm text-gray-700 font-medium mt-2 line-clamp-2">
                  {card.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute top-0 z-10 flex gap-2">
          <div className="custom-swiper-button-next bg-primary w-10 h-10 flex items-center justify-center text-white rounded-full">
            <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />
          </div>
          <div className="custom-swiper-button-prev bg-primary w-10 h-10 flex items-center justify-center text-white rounded-full">
            <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};
