import Image from "next/image";
import HeroHeader from "./Components/hero-header/page";
import Experience from "./Components/about/page";
import TabbedGallery from "./Components/gallary/page";
import Testimonials from "./Components/testimonials/page";
import Divider from "./Components/divider/page";
import ExploreCards, { AboutStripSlider } from "./Components/explore-card/page";
import Services from "./Components/service/page";
import SideAction from "./Components/side-quick-action/page";
import Footer from "./Components/footer/page";

export default function Home() {
  return (
   <div>
      <HeroHeader/>
      <Experience/>
      <TabbedGallery/>
      <Divider backgroundImage="/divider.jpg" />
      <Services />
      <Testimonials/>
      {/* <ExploreCards /> */}
      <AboutStripSlider/>
      <SideAction/>
      <Footer/>
   </div>
  );
}
