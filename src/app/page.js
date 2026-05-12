import Navbar from "@/components/shared/navbar/Navbar";
import Banner from "@/components/homepage/Banner";
import Footer from "@/components/shared/footer/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
}
