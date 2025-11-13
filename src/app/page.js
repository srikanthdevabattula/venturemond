import Image from "next/image";
import Hero from "./home/Hero";
import AboutSection from "./home/AboutSection";
import FeaturedProduct from "./home/FeaturedProduct";

export default function Home() {
  return (
    <div >
      <Hero/>
      <AboutSection/>
      <FeaturedProduct/>
    </div>
  );
}
