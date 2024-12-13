import React from "react";

const ServiceCard = () => {
  const services = [
    {
      image:
        "https://assets-v2.scaler.com/assets/technical-support-d11d16e019dbb2885dda285f9a01e7e03ebbb8e696e5e874bfe1e7e532117626.png.gz",
      title: "Technical Support",
      description: "We provide 24/7 support for all your technical needs.",
    },
    {
      image:
        "https://assets-v2.scaler.com/assets/technical-support-d11d16e019dbb2885dda285f9a01e7e03ebbb8e696e5e874bfe1e7e532117626.png.gz",
      title: "Consultation Services",
      description: "Get expert advice tailored to your business goals. with bytenoon",
    },
    {
      image:
        "https://assets-v2.scaler.com/assets/technical-support-d11d16e019dbb2885dda285f9a01e7e03ebbb8e696e5e874bfe1e7e532117626.png.gz",
      title: "Custom Solutions",
      description: "We build solutions that fit your unique requirements.",
    },
    {
      image:
        "https://assets-v2.scaler.com/assets/technical-support-d11d16e019dbb2885dda285f9a01e7e03ebbb8e696e5e874bfe1e7e532117626.png.gz",
      title: "Technical Support",
      description: "We provide 24/7 support for all your technical needs.",
    },
    {
      image:
        "https://assets-v2.scaler.com/assets/technical-support-d11d16e019dbb2885dda285f9a01e7e03ebbb8e696e5e874bfe1e7e532117626.png.gz",
      title: "Consultation Services",
      description: "Get expert advice tailored to your business goals. with bytenoon",
    },
    {
      image:
        "https://assets-v2.scaler.com/assets/technical-support-d11d16e019dbb2885dda285f9a01e7e03ebbb8e696e5e874bfe1e7e532117626.png.gz",
      title: "Custom Solutions",
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
              className="h-[250px] w-full bg-slate-50  shadow-md sm:w-96 px-2 py-5 rounded-lg"
            >
              <div className="flex items-center justify-center">
                <img className="w-20" src={service.image} alt={service.title} />
              </div>
              <div className="md:p-2">
                <h1 className="text-center text-2xl font-semibold mt-3">
                  {service.title}
                </h1>
                <p className="md:text-md text-gray-500 font-normal line-clamp-2 mt-2 text-center">
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

<div
  id="multiple-card"
  className="bg-slate-50  shadow-md sm:w-96 px-2 py-5 rounded-lg"
>
  <div className="flex items-center justify-center">
    <img
      className="w-20"
      src="https://assets-v2.scaler.com/assets/technical-support-d11d16e019dbb2885dda285f9a01e7e03ebbb8e696e5e874bfe1e7e532117626.png.gz"
      alt=""
    />
  </div>
  <div className="md:p-2">
    <h1 className="text-center text-2xl font-semibold mt-3">
      Lorem ipsum dolor sit amet
    </h1>
    <p className="md:text-md text-gray-500 font-normal mt-2 text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, error.
    </p>
  </div>
</div>;
