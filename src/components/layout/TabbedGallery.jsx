"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const TabbedGallery = () => {
  const [activeTab, setActiveTab] = useState("app"); // Default tab
  const [fade, setFade] = useState(false); // For fade animation on images

  const tabContent = {
    app: [
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80",
      "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2832&q=80",
      "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
      "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
      "https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
    ],
    message: [
      "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
      "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
      "https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80",
      "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2832&q=80",
    ],
    settings: [
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80",
      "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
      "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
      "https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
      "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2832&q=80",
    ],
  };

  const handleTabChange = (tab) => {
    setFade(false); // Start fade-out effect
    setTimeout(() => {
      setActiveTab(tab); // Change tab after fade-out
      setFade(true); // Trigger fade-in effect
    }, 300); // Duration matches fade-out animation
  };

  useEffect(() => {
    setFade(true); // Initial fade-in when the component mounts
  }, []);

  return (
    <div className="w-full px-5 xl:px-32 py-10">
      <div className="relative right-0">
        <ul className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100">
          {["app", "message", "settings"].map((tab) => (
            <li key={tab} className="z-30 flex-auto text-center">
              <button
                className={`z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0  border-0 rounded-lg cursor-pointer ${
                  activeTab === tab ? "bg-primary text-white" : "text-slate-700"
                }`}
                onClick={() => handleTabChange(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={`p-5 transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max">
          {tabContent[activeTab].map((src, index) => (
            <div key={index}>
              <Image
                width={500}
                height={500}
                unoptimized
                className="w-full h-[300px] max-w-full rounded-lg"
                src={src}
                alt={`image-${activeTab}-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabbedGallery;
