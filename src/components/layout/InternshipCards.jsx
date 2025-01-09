import { icon } from "@fortawesome/fontawesome-svg-core";
import { icons } from "lucide-react";
import React from "react";


icons = [
  "/FrontendDev.svg",
  "/1.svg",
  "/DigitalMarketing.svg",
  "/7.svg",
  "/9.svg",
  "/Graphic-design.svg",
  "/Ui.svg",
  "/Wordpress.svg",
  "/Photo-Video.svg",

]

const InternshipCards = () => {
  const services = [
    {
      image: "https://assets-v2.scaler.com/assets/technical-support-d11d16e019dbb2885dda285f9a01e7e03ebbb8e696e5e874bfe1e7e532117626.png.gz",
      title: "Full Stack",
      description: "We provide 24/7 support for all your technical needs.",
    },
    {
      image:
        "https://assets-v2.scaler.com/assets/technical-support-d11d16e019dbb2885dda285f9a01e7e03ebbb8e696e5e874bfe1e7e532117626.png.gz",
      title: "App Development",
      description:
        "Get expert advice tailored to your business goals. with bytenoon",
    },
    {
      image:
        "https://assets-v2.scaler.com/assets/technical-support-d11d16e019dbb2885dda285f9a01e7e03ebbb8e696e5e874bfe1e7e532117626.png.gz",
      title: "Digital Marketing",
      description: "We build solutions that fit your unique requirements.",
    },
    {
      image:
        "https://assets-v2.scaler.com/assets/technical-support-d11d16e019dbb2885dda285f9a01e7e03ebbb8e696e5e874bfe1e7e532117626.png.gz",
      title: "Frontend Development",
      description: "We provide 24/7 support for all your technical needs.",
    },
    {
      image:
        "https://assets-v2.scaler.com/assets/technical-support-d11d16e019dbb2885dda285f9a01e7e03ebbb8e696e5e874bfe1e7e532117626.png.gz",
      title: "Backend Development",
      description:
        "Get expert advice tailored to your business goals. with bytenoon",
    },
    {
      image:
        "https://assets-v2.scaler.com/assets/technical-support-d11d16e019dbb2885dda285f9a01e7e03ebbb8e696e5e874bfe1e7e532117626.png.gz",
      title: "Graphic Design",
      description: "We build solutions that fit your unique requirements.",
    },
      {
        image:
          "https://assets-v2.scaler.com/assets/technical-support-d11d16e019dbb2885dda285f9a01e7e03ebbb8e696e5e874bfe1e7e532117626.png.gz",
        title: "UI/UX Design",
        description: "We build solutions that fit your unique requirements.",
      },
      {
        image:
          "https://assets-v2.scaler.com/assets/technical-support-d11d16e019dbb2885dda285f9a01e7e03ebbb8e696e5e874bfe1e7e532117626.png.gz",
        title: "Wordpress Development",
        description: "We build solutions that fit your unique requirements.",
      },
      {
        image:
          "https://assets-v2.scaler.com/assets/technical-support-d11d16e019dbb2885dda285f9a01e7e03ebbb8e696e5e874bfe1e7e532117626.png.gz",
        title: "Photo&Video Editing",
        description: "We build solutions that fit your unique requirements.",
      },
  ];

  return (
    <div className="px-3 lg:px-32 py-10">
        <div>
            <h1 className="text-center text-xl md:text-4xl font-semibold">Internship Topics</h1>
        </div>
      <div className="flex items-center justify-center mt-10">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="h-full md:h-[250px] w-full bg-white  shadow-md md:w-96 px-2 py-5 rounded-lg"
            >
              <div className="flex items-center justify-center">
                <img
                  className="w-16 md:w-20"
                  src={icons[index]}
                  alt={service.title}
                />
              </div>
              <div className="md:p-2">
                <h1 className="text-center text- md:text-2xl font-semibold mt-3">
                  {service.title}
                </h1>
                <p className="text-sm md:text-md text-gray-500 font-normal line-clamp-2 mt-2 text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipCards;
