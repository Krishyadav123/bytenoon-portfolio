import React from "react";

const ServiceCard = () => {
  const services = [
    {
      icon: "/1.svg", // Directly reference SVGs in the public folder
      title: "Web Development",
      description: "We provide 24/7 support for all your technical needs.",
    },
    {
      icon: "/2.svg",
      title: "App Development",
      description: "Get expert advice tailored to your business goals with Bytenoon.",
    },
    {
      icon: "/3.svg",
      title: "Video Editing",
      description: "We build solutions that fit your unique requirements.",
    },
    {
      icon: "/4.svg", // Directly reference SVGs in the public folder
      title: "Digital Marketing",
      description: "We provide 24/7 support for all your technical needs.",
    },
    {
      icon: "/5.svg",
      title: "Gst Services",
      description: "Get expert advice tailored to your business goals with Bytenoon.",
    },
    {
      icon: "/6.svg",
      title: "Graphics Design",
      description: "We build solutions that fit your unique requirements.",
    },
    {
      icon: "/7.svg",
      title: "Ui/Ux Design",
      description: "We build solutions that fit your unique requirements.",
    },
    {
      icon: "/8.svg", // Directly reference SVGs in the public folder
      title: "Photo Editing",
      description: "We provide 24/7 support for all your technical needs.",
    },
    {
      icon: "/9.svg",
      title: "Social Media Marketing",
      description: "Get expert advice tailored to your business goals with Bytenoon.",
    },
    {
      icon: "/10.svg",
      title: "Data Entry",
      description: "We build solutions that fit your unique requirements.",
    },
  ];

  return (
    <div className="px-3 lg:px-32 py-20">
      <div className="flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="h-full md:h-[250px] w-full bg-white shadow-md md:w-96 px-2 py-5 rounded-lg"
            >
              <div className="flex items-center justify-center">
                {/* Display the SVG icon */}
                <img className="w-16 md:w-28" src={service.icon} alt={service.title} />
              </div>
              <div className="md:p-2">
                <h1 className="text-center text-md md:text-2xl font-semibold mt-3">
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

export default ServiceCard;
