import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full h-full px-5 lg:px-32 py-10">
      <div className="w-full h-full flex flex-col-reverse xl:flex-row justify-center gap-10">
        <div className="w-full xl:w-[50%] rounded-xl shadow-lg p-5 md:p-10 h-full flex flex-col items-center">
          <div>
            <p className="text-sm font-normal md:font-semibold text-center">CONTACT US</p>
            <h1 className="text-2xl md:text-4xl font-bold mt-1">Write a Message</h1>
          </div>
          <div className="mt-10 w-full flex flex-col gap-3 sm:gap-5">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
              <Input
                type="text"
                placeholder="Full name"
                className="w-full md:w-[300px] h-14"
              />
              <Input
                type="text"
                placeholder="Email address"
                className="w-full md:w-[300px] h-14"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
              <Input
                type="text"
                placeholder="Full name"
                className="w-full md:w-[300px] h-14"
              />
              <Input
                type="text"
                placeholder="Email address"
                className="w-full md:w-[300px] h-14"
              />
            </div>
            <div className="flex items-center justify-center">
              <Textarea
                placeholder="Write a message"
                className="w-full md:w-[620px]"
              />
            </div>
          </div>
          <div>
            <Button className="w-40 mt-10 bg-primary text-white">Submit</Button>
          </div>
        </div>
        <div className="w-full h-[300px] xl:h-auto xl:w-[50%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.894628909419!2d75.86402007508153!3d22.694966179404677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcfd5d7a1ea5%3A0x3b833b9b988117fa!2sPushpad%20Computer%20Institute!5e0!3m2!1sen!2sin!4v1733836437991!5m2!1sen!2sin"
           
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
