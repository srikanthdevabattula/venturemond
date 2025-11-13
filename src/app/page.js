import Image from "next/image";
import Hero from "./home/Hero";
import AboutSection from "./home/AboutSection";
import FeaturedProduct from "./home/FeaturedProduct";
import HowWeWork from "./home/HowWeWork";
import WhyChooseVenturemond from "./home/WhyChooseVenturemond";
import FinalCTA from "./home/FinalCTA";

export default function Home() {
  return (
    <div >
      <Hero/>
      <AboutSection/>
      <FeaturedProduct/>
      <HowWeWork/>
      <WhyChooseVenturemond/>
      <FinalCTA/>
    </div>
  );
}
