"use client";
import Navbar from "@/components/layout/Navbar";
import { ServiceSlider } from "@/components/layout/ServiceSlider";
import Title from "@/components/layout/Title";
import { Button } from "@/components/ui/button";
import Divider from "@/components/layout/Divider";
import ServiceCard from "@/components/layout/ServiceCard";
import Footer from "@/components/layout/Footer";
import { CardSlider } from "@/components/layout/CardSlider";
import ChooseUs from "@/components/layout/ChooseUs";
import Logos from "@/components/layout/Logos";

const Services = () => {
  return (
    <div>
      <Navbar />
      <Title title="Services" />
      <ServiceSlider />
      <Logos />
      <ServiceCard/>
      <Divider backgroundImage="/divider.jpg" />
      <ServiceMain />
      <ChooseUs />
      <CardSlider/>
      <Footer/>
    </div>
  );
};

export default Services;

export const ServiceMain = () => {
  return (
    <div className="w-full h-full px-5 xl:px-32 py-14">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 md:gap-20">
        <div className="w-full lg:w-[40%] h-[300px] md:h-[350px] gap-2 md:gap-5 flex items-center justify-center">
          <div className="h-full w-1/2">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://res.cloudinary.com/dinknhjnp/image/upload/v1735640968/bytenoon/ugfp1oje9negbz46bkfo.avif "
              alt=""
            />
          </div>
          <div className="w-1/2 h-full flex flex-col items-center justify-center gap-2 md:gap-5">
            <div className="w-full h-1/2">
              <img
                className="w-full h-full object-cover rounded-md"
                src="https://res.cloudinary.com/dinknhjnp/image/upload/v1735641015/bytenoon/j7yovgiaowjopo0ehi3h.avif "
                alt=""
              />
            </div>
            <div className="w-full h-1/2">
              <img
                className="w-full h-full object-cover rounded-md"
                src="https://res.cloudinary.com/dinknhjnp/image/upload/v1735641014/bytenoon/udjqhujthgv0f2idlbgd.avif "
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[60%]">
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
