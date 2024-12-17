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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              debitis molestias, assumenda, nam voluptatibus excepturi ipsa
              ipsum nisi in architecto dolores! Nulla repellat, in laudantium
              necessitatibus perferendis dolores.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
          <div className="w-[400px] h-[250px] lg:h-[300px]">
            <img
              className="rounded-md w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
              alt=""
            />
          </div>
          <div className="w-[400px] h-[250px] lg:h-[300px]">
            <img
              className="rounded-md w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
              alt=""
            />
          </div>
          <div className="w-[400px] h-[250px] lg:h-[300px]">
            <img
              className="rounded-md w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
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
                    <img className="w-full h-full rounded-md object-cover" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80" alt="" />
                </div>
                <div className="w-full lg:w-1/2">
                    <h3 className="font-bold text-xl md:text-2xl">
                       About Web Devlopment Process
                    </h3>
                    <p className="text-sm md:text-base mt-5 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid ab autem ut suscipit necessitatibus labore minus numquam enim tempore eaque expedita, in quos rem! Expedita doloremque error nostrum quis veritatis quaerat soluta assumenda ducimus hic accusamus veniam velit iusto voluptatum magni, commodi vitae? Culpa, architecto? Eum animi consequuntur ab numquam.</p>
                    <Button className="mt-5 w-32 bg-primary text-white">
                        Read More
                    </Button>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-28 mt-10 md:mt-20">
                <div className="w-full lg:w-1/2">
                    <h3 className="font-bold text-xl md:text-2xl">
                       About Web Devlopment Process
                    </h3>
                    <p className="text-sm md:text-base mt-5 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid ab autem ut suscipit necessitatibus labore minus numquam enim tempore eaque expedita, in quos rem! Expedita doloremque error nostrum quis veritatis quaerat soluta assumenda ducimus hic accusamus veniam velit iusto voluptatum magni, commodi vitae? Culpa, architecto? Eum animi consequuntur ab numquam.</p>
                    <Button className="mt-5 w-32 bg-primary text-white">
                        Read More
                    </Button>
                </div>
                <div className="w-full lg:w-1/2 h-[300px] md:h-[380px]">
                    <img className="w-full h-full rounded-md object-cover" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80" alt="" />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-28 mt-10 md:mt-20">
                <div className="w-full lg:w-1/2 h-[300px] md:h-[380px]">
                    <img className="w-full h-full rounded-md object-cover" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80" alt="" />
                </div>
                <div className="w-full lg:w-1/2">
                    <h3 className="font-bold text-xl md:text-2xl">
                       About Web Devlopment Process
                    </h3>
                    <p className="text-sm md:text-base mt-5 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid ab autem ut suscipit necessitatibus labore minus numquam enim tempore eaque expedita, in quos rem! Expedita doloremque error nostrum quis veritatis quaerat soluta assumenda ducimus hic accusamus veniam velit iusto voluptatum magni, commodi vitae? Culpa, architecto? Eum animi consequuntur ab numquam.</p>
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
