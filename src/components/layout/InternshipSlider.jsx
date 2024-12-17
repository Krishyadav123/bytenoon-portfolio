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
        "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
      name: "John Doe",
      language: "React",
    },
    {
        image:
        "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
      name: "Sahil Prajapati",
      language: "Wordpress",
    },
    {
        image:
        "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
      name: "Tanu patel",
      language: "JavaScript",
    },
    {
        image:
        "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
      name: "Kiran Prajapat",
      language: "Full Stack",
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
          1024: { slidesPerView: 3, spaceBetween: 30 }, // Desktop
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
                  className="w-full h-full object-cover rounded-t-lg"
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
