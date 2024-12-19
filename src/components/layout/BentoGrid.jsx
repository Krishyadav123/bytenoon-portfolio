import React from "react";

const BentoGrid = () => {
  return (
    <div className="px-5 lg:px-32 py-20">
      <div>
        <h1 className="text-3xl font-bold text-center">Bento Grid</h1>
      </div>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="w-full h-[300px] object-cover rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[200px] object-cover rounded-lg"
              src="https://wallpaperaccess.com/full/809523.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[250px] object-cover rounded-lg"
              src="https://pixlr.com/images/index/ai-image-generator-one.webp"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="w-full h-[200px] object-cover rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[350px] object-cover rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[200px] object-cover rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="w-full h-[300px] object-cover rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[200px] object-cover rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[250px] object-cover rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="w-full h-[150px] object-cover rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[400px] object-cover rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[200px] object-cover rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
