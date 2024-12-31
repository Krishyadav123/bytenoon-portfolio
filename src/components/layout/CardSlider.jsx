"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardSlider = () => {
  // Dynamic data for the cards
  const cardData = [
    {
      image:
        "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800,h_800/v1735581280/x_bytenoon_assets/course-logo/y8hqgiferbykkxkoua9j.png",
      title: "JavaScript",
      description: "Complete JavaScript course",
    },
    {
      image:
        "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735579891/x_bytenoon_assets/course-logo/wsgxsmluc0tsc4ja4zom.png",
      title: "Python",
      description: "Basic to advanced Python course",
    },
    {
      image:
        "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_1400/v1735580395/x_bytenoon_assets/course-logo/wkmae0wmrcuwug7ltchj.png",
      title: "React Js",
      description: "React Js course for beginners",
    },
    {
      image:
        "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735581080/x_bytenoon_assets/course-logo/ftu5ybqlwj2k6tnaqd5c.png",
      title: "Node.js",
      description: "Node.Js Backend course",
    },
    {
      image:
        "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735581080/x_bytenoon_assets/course-logo/l5rek75in9ec5quemlwu.svg",
      title: "Java",
      description: "Core and Advanced Java course",
    },
    {
      image:
        "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735581080/x_bytenoon_assets/course-logo/qqvxd160towwkswoibhh.png",
      title: "C++",
      description: "Core Knowledge of C++",
    },
    {
      image:
        "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800,h_600/v1735579891/x_bytenoon_assets/course-logo/emk6uhgytmsgd2vlxxwg.svg",
      title: "ReactNative",
      description: "React Native course for beginners",
    },
    {
      image:
        "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735624734/x_bytenoon_assets/course-logo/vxwy1i0ui6q90hovjm5n.jpg",
      title: "DSA",
      description: "Data Structures and Algorithms course",
    },
    {
      image:
        "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735624736/x_bytenoon_assets/course-logo/j89sxlbxeorwbas4pubx.png",
      title: "Video Editing",
      description: "Professional Video Editing course",
    },
    {
      image:
        "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735624733/x_bytenoon_assets/course-logo/f9tviczqffqek6vmp0ck.jpg",
      title: "Digital Marketing",
      description: "Complete Digital Marketing course",
    },
    {
      image:
        "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735624733/x_bytenoon_assets/course-logo/gtpvulcg7ksjhyaiecii.png",
      title: "Graphics Design",
      description: "Expert Graphics Design course",
    },
    {
      image:
        "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735624733/x_bytenoon_assets/course-logo/s6z6wrefngrwtyzpflxd.png",
      title: "Tally",
      description: "In-depth Tally course",
    },
    {
      image:
        "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735624736/x_bytenoon_assets/course-logo/cefxxrmc8he7njf1izte.jpg",
      title: "Advanced Excel",
      description: "Advanced Excel course for professional work",
    },
    {
      image:
        "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735624732/x_bytenoon_assets/course-logo/alfgrwfbp08nwrtloabl.webp",
      title: "Basic Computer",
      description: "Basic Computer course for absolute biginners",
    },
    {
      image:
        "https://res.cloudinary.com/ddnb10zkq/image/upload/v1735625678/x_bytenoon_assets/course-logo/fbga1estzslqzvcnt30q.jpg",
      title: "Spoken English",
      description: "Spoken English course for beginners",
    },
  ];

  return (
    <div className="w-full h-full cursor-pointer px-5 p-2 flex items-center justify-center lg:px-40 lg:py-10">
      <Swiper
        navigation={{
          nextEl: ".custom-swiper-button-prev",
          prevEl: ".custom-swiper-button-next",
        }}
        style={{
          padding: "50px 0px 0px 0px", // Top/bottom and left/right padding
        }}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 1000,
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
            <div className="h-80 mb-5 rounded-xl shadow-md hover:shadow-lg cursor-pointer bg-white">
              <div className="h-[65%] w-full">
                <img
                  className="w-full h-full object-fill rounded-t-lg"
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
