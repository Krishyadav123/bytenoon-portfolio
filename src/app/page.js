import Image from "next/image";
import HeroHeader from "./Components/hero-header/page";
import Experience from "./Components/about/page";

export default function Home() {
  return (
   <div>
      <HeroHeader/>
      <Experience/>
   </div>
  );
}
