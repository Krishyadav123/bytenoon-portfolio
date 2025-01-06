import React from 'react'


const ChooseUs = () => {
  return (
    <div className='py-10 px-5 lg:px-32'>
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold">Why Choose Us</h3>
          <p className="mt-3 text-sm md:text-base text-gray-500 font-medium">
          Our team is a dynamic blend of tech-savvy developers, creative designers, and business strategists committed to excellence.  <br className='hidden xl:block' />{" "}
          We’ve partnered with startups, SMEs, and enterprises to deliver projects that not only meet expectations but set new benchmarks.
          </p>
        </div>
        <div className="mt-5">
        <div className="mt-2 flex flex-col md:flex-row items-center justify-center gap-5">
        <div
              className="relative hover:scale-[1.02] cursor-pointer duration-200 w-full pt-8 md:pt-10 overflow-hidden"
            >
              <div className="bg-[#c5d8ff] absolute top-0 left-14 w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-3xl flex items-center justify-center p-2 md:p-3">
                <span className="text-white text-2xl font-semibold bg-primary h-full w-full rounded-xl md:rounded-3xl flex items-center justify-center">
                  1
                </span>
              </div>

              <div className="bg-slate-100 h-full w-full rounded-lg px-5 pt-14 pb-5">
                <div className="flex items-center gap-5">
                  <p className="text-lg md:text-xl font-semibold">All-in-One Solutions</p>
                </div>
                <div>
                  <p className="text-sm line-clamp-2 text-gray-600 mt-2">
                  Bytenoon offers a diverse range of services, from website and app development to digital marketing, graphic design, and even financial solutions like Tally and GST management. Whatever your business needs.
                  </p>
                </div>
              </div>
            </div>
            
            <div
              className="relative hover:scale-[1.02] cursor-pointer duration-200 w-full pt-8 md:pt-10 overflow-hidden"
            >
              <div className="bg-[#c5d8ff] absolute top-0 left-14 w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-3xl flex items-center justify-center p-2 md:p-3">
                <span className="text-white text-2xl font-semibold bg-primary h-full w-full rounded-xl md:rounded-3xl flex items-center justify-center">
                  1
                </span>
              </div>

              <div className="bg-slate-100 h-full w-full rounded-lg px-5 pt-14 pb-5">
                <div className="flex items-center gap-5">
                  <p className="text-lg md:text-xl font-semibold">Expert Team, Proven Results</p>
                </div>
                <div>
                  <p className="text-sm line-clamp-2 text-gray-600 mt-2">
                  Our team consists of highly skilled developers, creative designers, marketing strategists, and financial experts who are passionate about delivering excellence. With years of experience and a track.
                  </p>
                </div>
              </div>
            </div>
            
            
          </div>
          <div className="mt-2 flex flex-col md:flex-row items-center justify-center gap-5">
          <div
              className="relative hover:scale-[1.02] cursor-pointer duration-200 w-full pt-8 md:pt-10 overflow-hidden"
            >
<div className="bg-[#c5d8ff] absolute top-0 left-14 w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-3xl flex items-center justify-center p-2 md:p-3">
                <span className="text-white text-2xl font-semibold bg-primary h-full w-full rounded-xl md:rounded-3xl flex items-center justify-center">
                  1
                </span>
              </div>

              <div className="bg-slate-100 h-full w-full rounded-lg px-5 pt-14 pb-5">
                <div className="flex items-center gap-5">
                  <p className="text-lg md:text-xl font-semibold">Empowering Startups</p>
                </div>
                <div>
                  <p className="text-sm line-clamp-2 text-gray-600 mt-2">
                  At Bytenoon, we believe in empowering startups. Whether it’s building scalable apps, crafting a unique brand identity, or launching impactful marketing campaigns, we provide tailored solutions to help startups
                  </p>
                </div>
              </div>
            </div>
            
            <div
              className="relative hover:scale-[1.02] cursor-pointer duration-200 w-full pt-8 md:pt-10 overflow-hidden"
            >
              <div className="bg-[#c5d8ff] absolute top-0 left-14 w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-3xl flex items-center justify-center p-2 md:p-3">
                <span className="text-white text-2xl font-semibold bg-primary h-full w-full rounded-xl md:rounded-3xl flex items-center justify-center">
                  1
                </span>
              </div>

              <div className="bg-slate-100 h-full w-full rounded-lg px-5 pt-14 pb-5">
                <div className="flex items-center gap-5">
                  <p className="text-lg md:text-xl font-semibold">Innovation & Quality Focus</p>
                </div>
                <div>
                  <p className="text-sm line-clamp-2 text-gray-600 mt-2">
                  We combine the latest technologies with creative strategies to deliver solutions that are not only innovative but also effective. At Bytenoon, quality is non-negotiable — we create lasting value for our clients.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
  )
}

export default ChooseUs