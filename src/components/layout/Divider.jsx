import React from "react";
import { Button } from "@/components/ui/button";

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud consectetur voluptatem
              accusantium doloremque adipiscing elit.
            </p>
            <div className="flex items-center justify-center gap-2 mt-5 md:mt-10">
              <Button
                variant="Default"
                className="rounded-10 px-5 md:px-10 py-5 bg-primary text-sm md:text-base  text-white"
              >
                Call Now
              </Button>
              <Button
                variant="Default"
                className="rounded-10 px-5 md:px-10 py-5 bg-white text-sm md:text-base  text-primary"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Divider;
