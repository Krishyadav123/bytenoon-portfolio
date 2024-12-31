// import CoursesBanner from "@/app/Components/courses-banner/page";
import { CardSlider } from "@/components/layout/CardSlider";
import CoursesBanner from "@/components/layout/CoursesBanner";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Title from "@/components/layout/Title";

const Courses = () => {
  return (
    <div>
      <Navbar />
      <Title title="Courses" />
      <CoursesLayout />
      <CoursesBanner />
      <CardSlider />
      <Footer />
    </div>
  );
};

export default Courses;

export const CoursesLayout = () => {
  const courses = [
    { id: 1, title: "JavaScript", image: "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800,h_800/v1735581280/x_bytenoon_assets/course-logo/y8hqgiferbykkxkoua9j.png" },
    { id: 2, title: "Python", image: "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735579891/x_bytenoon_assets/course-logo/wsgxsmluc0tsc4ja4zom.png" },
    { id: 3, title: "React", image: "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_1400/v1735580395/x_bytenoon_assets/course-logo/wkmae0wmrcuwug7ltchj.png" },
    { id: 4, title: "Node.js", image: "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735581080/x_bytenoon_assets/course-logo/ftu5ybqlwj2k6tnaqd5c.png" },
    { id: 5, title: "Java", image: "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735581080/x_bytenoon_assets/course-logo/l5rek75in9ec5quemlwu.svg" },
    { id: 6, title: "C++", image: "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735581080/x_bytenoon_assets/course-logo/qqvxd160towwkswoibhh.png" },
    { id: 7, title: "ReactNative", image: "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800,h_600/v1735579891/x_bytenoon_assets/course-logo/emk6uhgytmsgd2vlxxwg.svg" },
    { id: 8, title: "Angular", image: "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735579893/x_bytenoon_assets/course-logo/k1f63jyibby0hxdqwozn.png" },
  ];

  return (
    <div className="py-10 px-5 lg:px-32 bg-[#fffcfc]">
      <div>
        <div>
          <h1 className="text-2xl md:text-4xl text-center font-bold md:font-extrabold">
            Our Popular Courses
          </h1>
          <p className="text-center mt-2 text-sm md:text-base text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            voluptate obcaecati labore sunt <br className="hidden md:block" /> laudantium officia in
            similique sapiente harum libero.
          </p>
        </div>
        <div className="w-full h-full flex flex-wrap items-center justify-center gap-5 mt-5 md:mt-10">
          {courses.map((course) => (
            <div
              key={course.id}
              className="w-full md:w-72 h-72 hover:scale-[1.02] cursor-pointer duration-200 rounded-xl bg-white p-5 shadow-lg"
            >
              <div className="w-full h-[80%]">
                <img
                  className="w-full h-full rounded-t-xl object-fill"
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
