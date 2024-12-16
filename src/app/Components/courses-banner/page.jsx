import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

const CoursesBanner = () => {
  return (
    <div className="md:pt-16 bg-[#f8f8f8]">
      <div className="bg-primary px-4 xl:px-32 py-14">
        <div className="flex gap-10 flex-col xl:flex-row items-center justify-center">
          <div className="w-full xl:w-1/2">
            <div>
              <p className="text-white text-lg md:text-xl">
                Want to explore Bytenoon in Detail?
              </p>
            </div>
            <div className=" mt-1">
              <h1 className="text-2xl md:text-3xl mt-3 font-bold text-white">
                <span className="text-secondry">Schedule </span> a 1:1 call with
                our Academic Counsellor to:
              </h1>
            </div>
            <div className="mt-5 md:mt-10">
              <div className="flex items-center gap-3 mt-10">
                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-xl sm:text-3xl text-white"
                  />
                </span>
                <p className="text-lg md:text-xl text-white">
                  For a complete walkthrough of Neovarsity in detail
                </p>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-xl sm:text-3xl text-white"
                  />
                </span>
                <p className="text-lg md:text-xl text-white">
                  Discuss your current requirements & expectations from a
                  Master’s Degree
                </p>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-xl sm:text-3xl text-white"
                  />
                </span>
                <p className="text-lg md:text-xl text-white">
                  Resolve your queries & doubts regarding the programme
                </p>
              </div>
            </div>
            <div className="mt-10">
              <Button
                variant="Default"
                className="rounded-lg w-full sm:w-56 text-black h-12 text-base  bg-white"
              >
                Book 1:1 Session Now
              </Button>
            </div>
          </div>
          <div className="w-full xl:w-1/2 xl:px-5">
            <div className="relative sm:w-[600px]   h-[350px] sm:h-[480px]">
              <div id="one" className="w-[250px] sm:w-[350px] relative z-10">
                <img
                  className="w-full h-full object-cover rounded-3xl"
                  src="https://assets-v2.scaler.com/assets/neovarsity_v2/neo-v2-feat2-7f94a0ec2c47416b72bd42867617cda7dafa4ae3fea6c0e623566b4d3c3050d5.webp.gz"
                  alt=""
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[250px] sm:w-[350px] z-0">
                <img
                  className="w-full h-full object-cover rounded-3xl"
                  src="https://assets-v2.scaler.com/assets/neovarsity_v2/neo-v2-feat1-20a85ed41324bda3bdf35047280c5ebefd975f94291327a3d6df99b1c629cca0.webp.gz"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesBanner;
