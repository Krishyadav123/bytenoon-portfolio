"use client";
import Navbar from "@/app/Components/navbar/page";
import { ServiceSlider } from "@/app/Components/service-slider/page";
import Title from "@/app/Components/title/page";
import { Button } from "@/components/ui/button";
import { Logos } from "../about/page";
import Divider from "@/app/Components/divider/page";
import ServiceCard from "@/app/Components/service-cards/page";
import Footer from "@/app/Components/footer/page";
import { AboutStripSlider } from "@/app/Components/explore-card/page";
import ChooseUs from "@/app/Components/choose-us/page";

const Services = () => {
  return (
    <div>
      <Navbar />
      <Title title="Services" />
      <ServiceSlider />
      <Logos/>
      <ServiceCard/>
      <Divider backgroundImage="/divider.jpg" />
      <ServiceMain />
      <ChooseUs />
      <AboutStripSlider/>
      <Footer/>
    </div>
  );
};

export default Services;

export const ServiceMain = () => {
  return (
    <div className="w-full h-full px-32 py-14">
      <div className="flex items-center justify-center gap-20">
        <div className="w-[40%] h-[350px] gap-5 flex items-center justify-center">
          <div className="h-full w-1/2">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://wallpaperaccess.com/full/809523.jpg"
              alt=""
            />
          </div>
          <div className="w-1/2 h-full flex flex-col items-center justify-center gap-5">
            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover rounded-md"
                src="https://wallpaperaccess.com/full/809523.jpg"
                alt=""
              />
            </div>
            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover rounded-md"
                src="https://wallpaperaccess.com/full/809523.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-[60%]">
          <h3 className="font-bold text-2xl">About Web Devlopment Process</h3>
          <p className="mt-5 text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
            cupiditate unde consequatur quas quisquam! Dolor repudiandae
            incidunt culpa similique, adipisci iste nam laboriosam id quasi
            reiciendis, non alias cupiditate, necessitatibus sequi voluptas
            porro itaque dolore veniam perspiciatis provident fuga. Maxime,
            sequi repellendus explicabo quas ea odit libero natus, quidem
            consectetur corporis iusto atque labore omnis nisi voluptate
            sapiente quibusdam cum perspiciatis at quam. Saepe earum, aliquid
            veniam, autem impedit deleniti explicabo consectetur ipsum, illo
            voluptas fuga incidunt commodi eum nobis.
          </p>
          <Button className="mt-5 w-32 bg-primary text-white">Read More</Button>
        </div>
      </div>
    </div>
  );
};
