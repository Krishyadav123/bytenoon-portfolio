"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const InternshipSlider = () => {
  // Dynamic data for the cards
  const cardData = [
    {
      image:
        "https://res.cloudinary.com/dinknhjnp/image/upload/v1736159211/WhatsApp_Image_2025-01-06_at_15.47.39_d9a4c54b_orikp0.jpg",
      name: "Samarth Patidar",
      language: "React",
    },
    {
        image:
        "https://res.cloudinary.com/dinknhjnp/image/upload/v1736159211/WhatsApp_Image_2025-01-06_at_15.41.49_0595dbdb_vixedt.jpg",
      name: "Krish Sharma",
      language: "Backend",
    },
    {
        image:
        "https://res.cloudinary.com/dinknhjnp/image/upload/v1736159210/WhatsApp_Image_2025-01-06_at_15.43.03_438adaa0_qg3ktp.jpg",
      name: "Akrati Upadhyay",
      language: "C & C++",
    },
    {
        image:
        "https://res.cloudinary.com/dinknhjnp/image/upload/v1736159210/WhatsApp_Image_2025-01-06_at_15.44.38_0a797fad_eof2dr.jpg ",
      name: "Ankit Prajapati",
      language: "Tally with GST",
    },
    {
        image:
        "https://res.cloudinary.com/dinknhjnp/image/upload/v1736159210/WhatsApp_Image_2025-01-06_at_15.43.28_a293c8c8_up2xam.jpg ",
      name: "Ganesh Rajput",
      language: "Python",
    },
    {
        image:
        "https://res.cloudinary.com/dinknhjnp/image/upload/v1736159210/1_xguiv0.png",
      name: "Sahil Prajapati",
      language: "Wordpress",
    },
    {
        image:
        "https://res.cloudinary.com/dinknhjnp/image/upload/v1736159209/WhatsApp_Image_2025-01-06_at_15.36.19_a764acd4_sry97b.jpg",
      name: "Sujal Rahare",
      language: "Digital Marketing",
    },
    {
        image:
        "https://res.cloudinary.com/dinknhjnp/image/upload/v1736159209/WhatsApp_Image_2025-01-06_at_15.36.20_4faa7723_sdvczz.jpg ",
      name: "Pradeep Birla",
      language: "Frontend",
    }
  ];

  return (
    <div className="w-full h-full cursor-pointer px-5 p-2 lg:px-40 lg:py-10">
        <div>
            <h2 className="text-center text-xl md:text-3xl font-bold">Internship Student</h2>
        </div>
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
          768: { slidesPerView: 2, spaceBetween: 20 }, // Tablet
          640: { slidesPerView: 2, spaceBetween: 15 }, // Mobile
          0: { slidesPerView: 1, spaceBetween: 10 }, // Extra Small
        }}
        spaceBetween={20}
        className=""
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="h-[400px] mb-5 rounded-xl shadow-md hover:shadow-lg cursor-pointer bg-white">
              <div className="h-[75%] w-full">
                <img
                  className="w-full h-full object-contain xl:object-cover rounded-lg"
                  src={card.image}
                  alt={card.name}
                />
              </div>
              <div className="h-[25%] p-5">
                <div>
                <p className="text-lg font-semibold line-clamp-1">
                  Name :- <span className="text-base font-medium text-gray-600">{card.name}</span>
                </p>
                <p className="text-lg font-semibold line-clamp-1">
                  Internship :- <span className="text-base font-medium text-gray-600">{card.language}</span>
                </p>
                {/* <p className="text-sm text-gray-700 font-medium mt-2 line-clamp-2">
                  {card.language}
                </p> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="w-full absolute top-0 z-10 flex  justify-between md:justify-normal gap-2">
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
