"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const TabbedGallery = () => {
  const [activeTab, setActiveTab] = useState("webDevelopment"); // Default tab
  const [fade, setFade] = useState(false); // For fade animation on images

  const tabContent = {
    webDevelopment: [
      {
        id: 1,
        image:
          "https://res.cloudinary.com/dutnavdiu/image/upload/f_auto,q_auto:low,c_scale,w_800,h_800/v1736408851/websites/apugttazyltjhg3lawbr.png",
        link: "https://classy-zuccutto-476a95.netlify.app",
      },
      {
        id: 2,
        image:
          "https://res.cloudinary.com/dutnavdiu/image/upload/f_auto,q_auto:low,c_scale,w_800,h_800/v1736408848/websites/tjau9ssnqz0cazmmbjz3.png",
        link: "https://marvelous-bombolone-7448fc.netlify.app",
      },
      {
        id: 3,
        image:
          "https://res.cloudinary.com/dutnavdiu/image/upload/f_auto,q_auto:low,c_scale,w_800,h_800/v1736408840/websites/qnsnf9mpfylf8pitjkmt.png",
        link: "https://suburbia-skate.netlify.app/",
      },
      {
        id: 4,
        image:
          "https://res.cloudinary.com/dutnavdiu/image/upload/f_auto,q_auto:low,c_scale,w_800,h_800/v1736408838/websites/j0fljam2cmbl2ssrcutu.png",
        link: "",
      },
      {
        id: 5,
        image:
          "https://res.cloudinary.com/dutnavdiu/image/upload/f_auto,q_auto:low,c_scale,w_800,h_800/v1736408837/websites/eothdey7ypk5jeynd96m.png",
        link: "https://fizzi-demo.vercel.app/",
      },
      {
        id: 6,
        image:
          "https://res.cloudinary.com/dutnavdiu/image/upload/f_auto,q_auto:low,c_scale,w_800,h_800/v1736408848/websites/kwtoofoqv7carlx7bb3h.png",
        link: "https://shreeinsul.com/",
      },
    ],
    digitalMarketing: [
      {
        id: 1,
        image: "https://res.cloudinary.com/dinknhjnp/image/upload/v1736324595/10_ruqutl.png",
        link: "",
      },
      {
        id: 2,
        image: "https://res.cloudinary.com/dinknhjnp/image/upload/v1736324595/8_d0psga.png",
        link: "",
      },
      {
        id: 3,
        image: "https://res.cloudinary.com/dinknhjnp/image/upload/f_auto,q_auto:low,c_scale,w_800,h_800/v1736324593/6_ybbvcw.png",
        link: "",
      },
      {
        id: 4,
        image: "https://res.cloudinary.com/dinknhjnp/image/upload/f_auto,q_auto:low,c_scale,w_800,h_800/v1736324593/5_jrhlnz.png",
        link: "",
      },
      {
        id: 5,
        image: "https://res.cloudinary.com/dinknhjnp/image/upload/f_auto,q_auto:low,c_scale,w_800,h_800/v1736324593/4_ciqh9g.png",
        link: "",
      },
      {
        id: 6,
        image: "https://res.cloudinary.com/dinknhjnp/image/upload/f_auto,q_auto:low,c_scale,w_800,h_800/v1736324593/7_nswwik.png",
        link: "",
      },
      {
        id: 7,
        image: "https://res.cloudinary.com/dinknhjnp/image/upload/f_auto,q_auto:low,c_scale,w_800,h_800/v1736324593/9_ee1puf.png",
        link: "",
      },
      {
        id: 8,
        image: "https://res.cloudinary.com/dinknhjnp/image/upload/f_auto,q_auto:low,c_scale,w_800,h_800/v1736324593/3_bsvtqt.png",
        link: "",
      },
    ],
    graphicDesigning: [
      {
        id: 1,
        image: "https://res.cloudinary.com/dinknhjnp/image/upload/v1736324595/10_ruqutl.png",
        link: "",
      },
      {
        id: 2,
        image: "https://res.cloudinary.com/dinknhjnp/image/upload/v1736324595/8_d0psga.png",
        link: "",
      },
      {
        id: 3,
        image: "https://res.cloudinary.com/dinknhjnp/image/upload/f_auto,q_auto:low,c_scale,w_800,h_800/v1736324593/6_ybbvcw.png",
        link: "",
      },
      {
        id: 4,
        image: "https://res.cloudinary.com/dinknhjnp/image/upload/f_auto,q_auto:low,c_scale,w_800,h_800/v1736324593/5_jrhlnz.png",
        link: "",
      },
      {
        id: 5,
        image: "https://res.cloudinary.com/dinknhjnp/image/upload/f_auto,q_auto:low,c_scale,w_800,h_800/v1736324593/4_ciqh9g.png",
        link: "",
      },
      {
        id: 6,
        image: "https://res.cloudinary.com/dinknhjnp/image/upload/f_auto,q_auto:low,c_scale,w_800,h_800/v1736324593/7_nswwik.png",
        link: "",
      },
      {
        id: 7,
        image: "https://res.cloudinary.com/dinknhjnp/image/upload/f_auto,q_auto:low,c_scale,w_800,h_800/v1736324593/9_ee1puf.png",
        link: "",
      },
      {
        id: 8,
        image: "https://res.cloudinary.com/dinknhjnp/image/upload/f_auto,q_auto:low,c_scale,w_800,h_800/v1736324593/3_bsvtqt.png",
        link: "",
      },
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
          {["webDevelopment", "digitalMarketing", "graphicDesigning"].map((tab) => (
            <li key={tab} className="z-30 flex-auto text-center">
              <button
                className={`z-30 flex items-center justify-center w-full px-0 py-2 text-xs sm:text-sm mb-0  border-0 rounded-lg cursor-pointer ${
                  activeTab === tab ? "bg-primary text-white" : "text-slate-700"
                }`}
                onClick={() => handleTabChange(tab)}
              >
                {tab
                  .replace(/([A-Z])/g, " $1") // Insert space before capital letters
                  .replace(/^./, (str) => str.toUpperCase())} {/* Capitalize first letter */}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={`p-5 transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max">
          {tabContent[activeTab].map((item, index) => (
            <div key={item.id || index}>
              {item.link ? (
                <Link href={item.link} target="_blank" rel="noopener noreferrer">
                  <img
                    className="w-full h-[300px] max-w-full rounded-lg"
                    src={item.image}
                    alt={`image-${activeTab}-${index}`}
                  />
                </Link>
              ) : (
                <img
                  className="w-full h-[300px] max-w-full rounded-lg"
                  src={item.image}
                  alt={`image-${activeTab}-${index}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabbedGallery;
