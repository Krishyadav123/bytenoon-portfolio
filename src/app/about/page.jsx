import ChooseUs from "@/components/layout/ChooseUs";
import Divider from "@/components/layout/Divider";
import Footer from "@/components/layout/Footer";
import Logos from "@/components/layout/Logos";
import Navbar from "@/components/layout/Navbar";
import Title from "@/components/layout/Title";
import { Button } from "@/components/ui/button";
import React from "react";

const About = () => {
  return (
    <div>
      <Navbar />
      <Title title="About Us" />
      <AboutComponent />
      <Divider backgroundImage="/divider.jpg" />
      <ChooseUs/>
      <Footer/>
    </div>
  );
};

export default About;

export const AboutComponent = () => {
  return (
    <div className="w-full h-full py-10 px-5 lg:px-32">
      <div className="w-full h-full">
        <div className="w-full flex items-center justify-center">
          <div className="w-full lg:w-1/2">
            <h1 className="text-center text-xl md:text-3xl font-bold">
              All Information About Bytenoon
            </h1>
            <p className="text-center text-sm md:text-base text-gray-500 mt-3">
            At Bytenoon, we are passionate about crafting innovative IT solutions that empower businesses to thrive in the digital age. With expertise spanning software development, cloud computing, and cutting-edge technology consulting, we transform complex challenges into seamless, efficient systems.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
          <div className="w-[400px] h-[250px] lg:h-[300px]">
            <img
              className="rounded-md w-full h-full object-cover"
              src="https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735630403/x_bytenoon_assets/aboutUs/jbb1ank4x3hxvujboofc.jpg"
              alt=""
            />
          </div>
          <div className="w-[400px] h-[250px] lg:h-[300px]">
            <img
              className="rounded-md w-full h-full object-cover"
              src="https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735626832/x_bytenoon_assets/aboutUs/a1nb7qbfxvxsimlmzlcn.jpg"
              alt=""
            />
          </div>
          <div className="w-[400px] h-[250px] lg:h-[300px]">
            <img
              className="rounded-md w-full h-full object-cover"
              src="https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735630403/x_bytenoon_assets/aboutUs/vf6nihtgbuayjlncerna.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="mt-16">
          <Logos/>
        </div>
        
        <div className="mt-20">
            <div>
                <h2 className="text-xl md:text-3xl font-bold">Our Values</h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-28 mt-2 md:mt-10">
                <div className="w-full lg:w-1/2 h-[300px] md:h-[380px]">
                    <img className="w-full h-full rounded-md object-cover" src="https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735630404/x_bytenoon_assets/aboutUs/tq9icg0l2fplvc8ghytf.jpg" alt="" />
                </div>
                <div className="w-full lg:w-1/2">
                    <h3 className="font-bold text-xl md:text-2xl">
                    About Bytenoon 
                    </h3>
                    <p className="text-sm md:text-base mt-5 text-gray-500">Welcome to Bytenoon — your one-stop destination for cutting-edge technology and creative solutions. We specialize in delivering a wide range of services that empower businesses to thrive in a fast-paced digital world. From crafting stunning websites to driving impactful digital marketing campaigns, we are here to turn your vision into reality.
                    </p>
                    <Button className="mt-5 w-32 bg-primary text-white">
                        Read More
                    </Button>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-28 mt-10 md:mt-20">
                <div className="w-full lg:w-1/2">
                    <h3 className="font-bold text-xl md:text-2xl">
                      History of Bytenoon 
                    </h3>
                    <p className="text-sm md:text-base mt-5 text-gray-500">Bytenoon was founded with a simple yet powerful idea: to bridge the gap between technology and creativity. Starting as a small team of passionate individuals, we have grown into a dynamic organization delivering a diverse range of services. Over the years, we’ve worked with startups, SMEs, and enterprises, creating innovative solutions and building lasting partnerships. Our journey is a testament to our commitment to excellence, adaptability, and the trust our clients place in us.</p>
                    <Button className="mt-5 w-32 bg-primary text-white">
                        Read More
                    </Button>
                </div>
                <div className="w-full lg:w-1/2 h-[300px] md:h-[380px]">
                    <img className="w-full h-full rounded-md object-cover" src="https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735630404/x_bytenoon_assets/aboutUs/anovhyl4syrstkj80jva.jpg" alt="" />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-28 mt-10 md:mt-20">
                <div className="w-full lg:w-1/2 h-[300px] md:h-[380px]">
                    <img className="w-full h-full rounded-md object-cover" src="https://res.cloudinary.com/dinknhjnp/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735642366/bytenoon/n72he8uwv2elrkvjynhj.avif" alt="" />
                </div>
                <div className="w-full lg:w-1/2">
                    <h3 className="font-bold text-xl md:text-2xl">
                      Our Mission
                    </h3><p className="text-sm md:text-base mt-5 text-gray-500">Our mission at Bytenoon is to empower businesses with innovative technology and creative solutions that drive growth and success. We aim to deliver exceptional value through customer-centric approaches, cutting-edge technologies, and a relentless pursuit of quality. By enabling our clients to achieve their goals, we strive to be a catalyst for progress in a digital-first world.</p>
                    <Button className="mt-5 w-32 bg-primary text-white">
                        Read More
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
