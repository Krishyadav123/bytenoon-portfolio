import HeroHeader from "../components/layout/HeroHeader";
import Experience from "../components/layout/Experience";
import TabbedGallery from "../components/layout/TabbedGallery";
import Testimonials from "../components/layout/Testimonials";
import Divider from "../components/layout/Divider";
import {CardSlider } from "../components/layout/CardSlider";
import Services from "../components/layout/Services";
import Footer from "../components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ContactUs from "../components/layout/ContactUs";
import SideAction from "@/components/layout/SideAction";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroHeader />
      <Experience />
      <TabbedGallery />
      <Divider backgroundImage="/divider.jpg" />
      <Services />
      <Testimonials />
      <CardSlider/>
      <SideAction />
      <ContactUs/>
      <Footer />
    </div>
  );
}
