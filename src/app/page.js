import Navbar from "@/components/shared/navbar/Navbar";
import Banner from "@/components/homepage/Banner";
import Footer from "@/components/shared/footer/Footer";
import FeaturedDestination from "@/components/homepage/FeaturedDestination";
import WhyChoose from "@/components/homepage/WhyChoose";
import TravelarSection from "@/components/homepage/TravelarSection";
import StartTrip from "@/components/homepage/StartTrip";

export default function Home() {
  return (
    <div className="relative">
      
      <Banner />
      <FeaturedDestination/>
      <WhyChoose/>
      <TravelarSection/>
      <StartTrip/>
    </div>
  );
}
