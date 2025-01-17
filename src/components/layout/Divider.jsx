import React from "react";
import { Button } from "@/components/ui/button";
import SideContact from "./SideContact";

const Divider = ({ backgroundImage }) => {
  const parelaxStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="px-4 md:px-5">
      <div
        className="w-full h-[300px] md:h-[450px] rounded-[10px] md:rounded-[30px] bg-cover bg-center bg-fixed flex items-center justify-center text-white"
        style={parelaxStyle}
      >
        <div className="w-full rounded-[10px] md:rounded-[30px] h-full flex justify-center items-center bg-[#092c3c] bg-opacity-60">
          <div className="text-center px-2 py-5 md:px-10 lg:px-56">
            <p className="text-sm font-normal md:text-lg md:font-semibold">
              Want to work with us?
            </p>
            <h1 className="text-xl px-2 md:px-0 md:text-4xl md:mt-3 text-white font-bold">
              24x7 Support From Bytenoon
            </h1>
            <p className="text-xs md:text-base">
            At Bytenoon, we’re always here for you. Our dedicated support team is available 20 hours a day, 7 days a week, <br /> ensuring that your queries are resolved quickly and your projects stay on track without delays. Your success is our priority!
            </p>
            <div className="flex items-center justify-center gap-2 mt-5 md:mt-10">
              {/* <Button
                variant="Default"
                className="rounded-10 px-5 md:px-7 py-4 bg-white text-sm md:text-base text-primary"
              >
                Call Now
              </Button> */}
              <div className="px-5 text-sm md:text-base rounded-md py-2 bg-white text-primary">
                Call Now
              </div>
              {/* <Button
                variant="Default"
                className="rounded-10 px-5 md:px-10 py-5 bg-white text-sm md:text-base  text-primary"
              >
                Contact Us
              </Button> */}
              <SideContact title="Contact Us" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Divider;
