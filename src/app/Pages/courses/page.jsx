import CoursesBanner from "@/app/Components/courses-banner/page";
import { AboutStripSlider } from "@/app/Components/explore-card/page";
import Footer from "@/app/Components/footer/page";
import Navbar from "@/app/Components/navbar/page";
import Title from "@/app/Components/title/page";
import React from "react";

const Courses = () => {
  return (
    <div>
      <Navbar />
      <Title title="Courses" />
      <CoursesLayout />
      <CoursesBanner/>
      <AboutStripSlider/>
      <Footer />
    </div>
  );
};

export default Courses;

export const CoursesLayout = () => {
  const courses = [
    { id: 1, title: "JavaScript", image: "/programming.png" },
    { id: 2, title: "Python", image: "/programming.png" },
    { id: 3, title: "React", image: "/programming.png" },
    { id: 4, title: "Node.js", image: "/programming.png" },
    { id: 5, title: "Java", image: "/programming.png" },
    { id: 6, title: "C++", image: "/programming.png" },
    { id: 7, title: "ReactNative", image: "/programming.png" },
    { id: 8, title: "Angular", image: "/programming.png" },
  ];

  return (
    <div className="py-10 px-32 bg-[#fffcfc]">
      <div>
        <div>
          <h1 className="text-4xl text-center font-extrabold">
            Our Popular Courses
          </h1>
          <p className="text-center mt-2 text-base text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            voluptate obcaecati labore sunt <br /> laudantium officia in
            similique sapiente harum libero.
          </p>
        </div>
        <div className="w-full h-full flex flex-wrap items-center justify-center gap-5 mt-10">
          {courses.map((course) => (
            <div
              key={course.id}
              className="w-72 h-72 hover:scale-[1.02] cursor-pointer duration-200 rounded-xl bg-white p-5 shadow-lg"
            >
              <div className="w-full h-[80%]">
                <img
                  className="w-full h-full rounded-t-xl object-cover"
                  src={course.image}
                  alt={course.title}
                />
              </div>
              <div className="w-full h-[20%] flex items-center justify-center">
                <div className="py-1 px-5 rounded-md bg-primary">
                  <h1 className="text-lg font-medium text-white">
                    {course.title}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
