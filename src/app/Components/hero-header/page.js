"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Import required modules
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";

const HeroHeader = () => {
  const images = [
    "https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-63452.jpg",
    "https://htmlcolorcodes.com/assets/images/colors/light-green-color-solid-background-1920x1080.png",
    "https://wallpapers.com/images/hd/solid-light-purple-i9p8auwzsvwnpiox.jpg",
    "https://lab-can.com/wp-content/uploads/2018/07/light-yellow-background-pale-yellow-clouds-texture-light-yellow-and-green-background-design.jpg",
  ];

  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "Description for Card 1",
    },
    {
      id: 2,
      title: "Card 2",
      description: "Description for Card 2",
    },
    {
      id: 3,
      title: "Card 3",
      description: "Description for Card 3",
    },
    {
      id: 4,
      title: "Card 4",
      description: "Description for Card 4",
    },
    {
      id: 5,
      title: "Card 5",
      description: "Description for Card 4",
    },
    {
      id: 6,
      title: "Card 6",
      description: "Description for Card 4",
    },
    {
      id: 7,
      title: "Card 7",
      description: "Description for Card 4",
    },
    {
      id: 8,
      title: "Card 8",
      description: "Description for Card 4",
    },
    {
      id: 9,
      title: "Card 9",
      description: "Description for Card 4",
    },
    {
      id: 10,
      title: "Card 10",
      description: "Description for Card 4",
    },
  ];

  return (
    <div>
      <div className="h-full w-full">
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect="fade"
          modules={[Pagination, Navigation, Autoplay, EffectFade]}
          className="absolute inset-0 w-full h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              className="w-full h-full pt-[350px] px-10 bg-cover bg-center"
              style={{
                backgroundImage: `url(${img})`,
              }}
            >
              <div className="w-full h-full bg-white bg-opacity-30 p-10 flex flex-wrap gap-5 items-center justify-center">
                {/* Dynamically map cards */}
                {cards.map((card) => (
                  <div key={card.id} className="relative hover:scale-[1.04] cursor-pointer duration-200 h-[250px] w-[250px] pt-10 overflow-hidden">
                    <div className="bg-white absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full flex items-center justify-center p-3">
                      <span className="text-white text-2xl font-semibold bg-black h-full w-full rounded-full flex items-center justify-center">
                        1
                      </span>
                    </div>

                    <div className="bg-white h-full w-full rounded-lg px-5 pt-14 pb-5">
                      <div className="flex items-center gap-5">
                        {/* <img src={discover} className='w-[50px]' alt="" /> */}
                        <p className="text-2xl font-semibold">{card.title}</p>
                      </div>
                      <div>
                        <p className="text-base text-gray-600 mt-2">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroHeader;
