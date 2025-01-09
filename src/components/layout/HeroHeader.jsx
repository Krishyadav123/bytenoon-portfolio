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
      title: "Website Development",
      description: "Stunning websites that drive results."
    },
    {
      id: 2,
      title: "App Development",
      description: "Powerful apps for every platform."
    },
    {
      id: 3,
      title: "Photo Editing",
      description: "Perfecting your images with style."
    },
    {
      id: 4,
      title: "Video Editing",
      description: "Engaging videos that tell your story."
    },
    {
      id: 5,
      title: "Digital Marketing",
      description: "Strategies that boost your brand."
    },
    {
      id: 6,
      title: "Graphic Designing",
      description: "Creative designs that stand out."
    },
    {
      id: 7,
      title: "Tally Solutions",
      description: "Hassle-free financial management."
    },
    {
      id: 8,
      title: "GST Services",
      description: "Smooth and simple GST compliance."
    },
    {
      id: 9,
      title: "Data Entry",
      description: "Accurate data for seamless workflows."
    },
    {
      id: 10,
      title: "UI/UX Design",
      description: "Designs your users will love."
    }
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
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
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
                    <div className="bg-gradient-to-b from-[#fff] to-blue-300 hover:bg-gradient-to-b hover:from-blue-300 hover:to-[#fff] h-full w-full rounded-lg px-5 pt-14 pb-5">
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
