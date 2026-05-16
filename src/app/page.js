import Navbar from "@/components/shared/navbar/Navbar";
import Banner from "@/components/homepage/Banner";
import Footer from "@/components/shared/footer/Footer";
import FeaturedDestination from "@/components/homepage/FeaturedDestination";

export default function Home() {
  return (
    <div className="relative">
      
      <Banner />
      <FeaturedDestination/>
    </div>
  );
}
