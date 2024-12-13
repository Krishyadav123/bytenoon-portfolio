import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

export const ServiceSlider = () => {
    const data = [
      "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
      "https://wallpapercave.com/wp/wp3386769.jpg",
      "https://wallpaperaccess.com/full/809523.jpg",
      "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ];
  
    return (
      <div className="w-full h-[450px] px-10 py-10">
    <Swiper
      effect="fade" // Enable fade effect
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000, // 3 seconds delay between slides
        disableOnInteraction: false, // Keep autoplay active even after user interaction
      }}
      modules={[Pagination, Autoplay, EffectFade]} // Include EffectFade module
      className="w-full h-full rounded-xl"
    >
      {data.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
    );
  }
  