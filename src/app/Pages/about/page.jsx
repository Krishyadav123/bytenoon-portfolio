import Divider from "@/app/Components/divider/page";
import Footer from "@/app/Components/footer/page";
import Navbar from "@/app/Components/navbar/page";
import Title from "@/app/Components/title/page";
import { Button } from "@/components/ui/button";
import React from "react";

const About = () => {
  return (
    <div>
      <Navbar />
      <Title title="About Us" />
      <AboutComponent />
      <Divider backgroundImage="/divider.jpg" />
      <Footer/>
    </div>
  );
};

export default About;

export const AboutComponent = () => {
  return (
    <div className="w-full h-full py-10 px-32">
      <div className="w-full h-full">
        <div className="w-full flex items-center justify-center">
          <div className="w-1/2">
            <h1 className="text-center text-3xl font-bold">
              All Information About Bytenoon
            </h1>
            <p className="text-center text-base text-gray-500 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              debitis molestias, assumenda, nam voluptatibus excepturi ipsa
              ipsum nisi in architecto dolores! Nulla repellat, in laudantium
              necessitatibus perferendis dolores.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 mt-10">
          <div className="w-[400px] h-[300px]">
            <img
              className="rounded-md w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
              alt=""
            />
          </div>
          <div className="w-[400px] h-[300px]">
            <img
              className="rounded-md w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
              alt=""
            />
          </div>
          <div className="w-[400px] h-[300px]">
            <img
              className="rounded-md w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="mt-16">
          <div className="w-full h-full flex items-center justify-center gap-10 border-t border-b border-gray-300 py-5">
            <div>
              <img
                className="w-52"
                src="https://i0.wp.com/onegroupnetwork.com/wp-content/uploads/2020/09/dummy-logo-5b.png?ssl=1"
                alt=""
              />
            </div>
            <div className="border border-gray-300 h-20"></div>
            <div>
              <img
                className="w-52"
                src="https://i0.wp.com/onegroupnetwork.com/wp-content/uploads/2020/09/dummy-logo-5b.png?ssl=1"
                alt=""
              />
            </div>
            <div className="border border-gray-300 h-20"></div>
            <div>
              <img
                className="w-52"
                src="https://i0.wp.com/onegroupnetwork.com/wp-content/uploads/2020/09/dummy-logo-5b.png?ssl=1"
                alt=""
              />
            </div>
            <div className="border border-gray-300 h-20"></div>
            <div>
              <img
                className="w-52"
                src="https://i0.wp.com/onegroupnetwork.com/wp-content/uploads/2020/09/dummy-logo-5b.png?ssl=1"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-20">
            <div>
                <h2 className="text-3xl font-bold">Our Values</h2>
            </div>
            <div className="flex items-center gap-28 mt-10">
                <div className="w-1/2 h-[380px]">
                    <img className="w-full h-full rounded-md object-cover" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80" alt="" />
                </div>
                <div className="w-1/2">
                    <h3 className="font-bold text-2xl">
                       About Web Devlopment Process
                    </h3>
                    <p className="mt-5 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid ab autem ut suscipit necessitatibus labore minus numquam enim tempore eaque expedita, in quos rem! Expedita doloremque error nostrum quis veritatis quaerat soluta assumenda ducimus hic accusamus veniam velit iusto voluptatum magni, commodi vitae? Culpa, architecto? Eum animi consequuntur ab numquam.</p>
                    <Button className="mt-5 w-32 bg-primary text-white">
                        Read More
                    </Button>
                </div>
            </div>
            <div className="flex items-center gap-28 mt-20">
                <div className="w-1/2">
                    <h3 className="font-bold text-2xl">
                       About Web Devlopment Process
                    </h3>
                    <p className="mt-5 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid ab autem ut suscipit necessitatibus labore minus numquam enim tempore eaque expedita, in quos rem! Expedita doloremque error nostrum quis veritatis quaerat soluta assumenda ducimus hic accusamus veniam velit iusto voluptatum magni, commodi vitae? Culpa, architecto? Eum animi consequuntur ab numquam.</p>
                    <Button className="mt-5 w-32 bg-primary text-white">
                        Read More
                    </Button>
                </div>
                <div className="w-1/2 h-[380px]">
                    <img className="w-full h-full rounded-md object-cover" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80" alt="" />
                </div>
            </div>
            <div className="flex items-center gap-28 mt-20">
                <div className="w-1/2 h-[380px]">
                    <img className="w-full h-full rounded-md object-cover" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80" alt="" />
                </div>
                <div className="w-1/2">
                    <h3 className="font-bold text-2xl">
                       About Web Devlopment Process
                    </h3>
                    <p className="mt-5 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid ab autem ut suscipit necessitatibus labore minus numquam enim tempore eaque expedita, in quos rem! Expedita doloremque error nostrum quis veritatis quaerat soluta assumenda ducimus hic accusamus veniam velit iusto voluptatum magni, commodi vitae? Culpa, architecto? Eum animi consequuntur ab numquam.</p>
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
