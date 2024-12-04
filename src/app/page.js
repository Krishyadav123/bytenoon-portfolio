import Image from "next/image";
import HeroHeader from "./Components/hero-header/page";
import Experience from "./Components/about/page";
import TabbedGallery from "./Components/gallary/page";
import Testimonials from "./Components/testimonials/page";

export default function Home() {
  return (
   <div>
      <HeroHeader/>
      <Experience/>
      <TabbedGallery/>
      <Testimonials/>
   </div>
  );
}
