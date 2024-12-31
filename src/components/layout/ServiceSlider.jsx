import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

export const ServiceSlider = () => {
    const data = [
      "https://res.cloudinary.com/dinknhjnp/image/upload/v1735639243/bytenoon/hpdwnqovklemvjuxcqms.png ",
      "https://res.cloudinary.com/dinknhjnp/image/upload/v1735639243/bytenoon/tuxstenopznxtp0njssl.png ",
      "https://res.cloudinary.com/dinknhjnp/image/upload/v1735639244/bytenoon/ytnzxxk1neusz80uv5ld.png ",
      "https://res.cloudinary.com/dinknhjnp/image/upload/v1735639245/bytenoon/phddqbwsik8bfoezt6bk.png ",
    ];
  
    return (
      <div className="w-full h-[250px] md:h-[550px] p-5 md:p-10">
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
            className="w-full h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
    );
  }
  