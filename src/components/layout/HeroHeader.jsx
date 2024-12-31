"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Import required modules
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";

const icons = [
  "/1.svg",
  "/2.svg",
  "/3.svg",
  "/4.svg",
  "/5.svg",
  "/6.svg",
  "/7.svg",
  "/8.svg",
  "/9.svg",
  "/10.svg",
];

const HeroHeader = () => {
  const images = [
    "https://res.cloudinary.com/dinknhjnp/image/upload/v1735631573/bytenoon/ofywazwmeqesbxekprnx.png",
    "https://res.cloudinary.com/dinknhjnp/image/upload/v1735631566/bytenoon/thbmwr254euhnh8nkkvf.png",
    "https://res.cloudinary.com/dinknhjnp/image/upload/v1735631569/bytenoon/rwwqhvygmmdke3cqygz9.png",
    "https://res.cloudinary.com/dinknhjnp/image/upload/v1735631567/bytenoon/mps1rudccfykhzxxdpej.png",
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
      description: "Description for Card 5",
    },
    {
      id: 6,
      title: "Card 6",
      description: "Description for Card 6",
    },
    {
      id: 7,
      title: "Card 7",
      description: "Description for Card 7",
    },
    {
      id: 8,
      title: "Card 8",
      description: "Description for Card 8",
    },
    {
      id: 9,
      title: "Card 9",
      description: "Description for Card 9",
    },
    {
      id: 10,
      title: "Card 10",
      description: "Description for Card 10",
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
              className="w-full h-full pt-[250px] lg:pt-[350px] px-2 lg:px-10 bg-contain bg-center"
              style={{
                backgroundImage: `url(${img})`,
              }}
            >
              <div className="w-full h-full bg-white bg-opacity-30 p-5 lg:p-10 flex flex-wrap gap-5 items-center justify-center">
                {/* Dynamically map cards */}
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="relative hover:scale-[1.04] cursor-pointer duration-200 h-[250px] w-full md:w-[250px] pt-10 overflow-hidden"
                  >
                    <div className="bg-white absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full flex items-center justify-center p-3">
                      <img
                        src={icons[card.id % icons.length]} // Use card.id to select the icon
                        alt={`icon-${card.id}`}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="bg-white h-full w-full rounded-lg px-5 pt-14 pb-5">
                      <div>
                        <p className="text-2xl text-center font-semibold">{card.title}</p>
                      </div>
                      <div>
                        <p className="text-base text-center text-gray-600 mt-2">
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
