import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "@/app/Components/navbar/page";
import Title from "@/app/Components/title/page";
import Footer from "@/app/Components/footer/page";
import Contact from "@/app/Components/contact/page";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <Title title="Contact" />
      <ContactLayout />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactUs;

export const ContactLayout = () => {
  return (
    <div className="h-full w-full bg-white px-5 xl:px-32 py-20">
      <div className="h-full w-full flex flex-col-reverse xl:flex-row gap-5 md:gap-16">
        <div className="w-full h-full xl:w-1/2">
          <div className="flex items-center gap-2">
            <span>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-[#0E384C]"
              />
            </span>
            <p className="text-[#0E384C]">CONTACT INFO</p>
          </div>
          <div className=" mt-1">
            <h1 className="text-3xl md:text-5xl mt-3 font-bold text-[#0E384C]">
              <span className="text-[#1E84B5]">Get In Touch </span> 
            </h1>
            <p className="text-lg text-gray-600 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid corporis quos suscipit voluptas id perferendis molestias.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-5">
            <div className="w-full rounded-xl p-6 border border-slate-200">
              <img
                className="bg-[#EFF8FF] rounded-full p-3"
                src="https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-location.svg"
                alt=""
              />
              <h2 className="text-[#0E384C] mt-4 text-xl font-bold">
                Visit Us On
              </h2>
              <p className="text-lg text-gray-600 mt-1">
                24/11 Robert Road , New York , USA
              </p>
            </div>
            <div className="w-full rounded-xl p-6 border border-slate-200">
              <img
                className="bg-[#EFF8FF] rounded-full p-3"
                src="https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-location.svg"
                alt=""
              />
              <h2 className="text-[#0E384C] mt-4 text-xl font-bold">
                Visit Us On
              </h2>
              <p className="text-lg text-gray-600 mt-1">
                24/11 Robert Road , New York , USA
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[350px] xl:h-auto xl:w-[50%]">
          <img className="w-full h-full object-cover rounded-xl" src="https://wallpapercave.com/wp/wp3386769.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};
