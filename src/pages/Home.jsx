import FiftyPercentOff from "../components/FiftyPercentOff";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import HeroSection from "../components/HeroSection";
import MedicalProducts from "../components/MedicalProducts";
import NewProducts from "../components/NewProducts";
import NewsAndBlogs from "../components/NewsAndBlogs";
import Offers from "../components/Offers";
import OffersProducts from "../components/OffersProducts";
import PopularProducts from "../components/PopularProducts";
import Statistics from "../components/Statistics";
import TopProducts from "../components/TopProducts";
import UpcomingProducts from "../components/UpcomingProducts";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <HeroSection />
        <Offers />
        <NewProducts />
        <PopularProducts />
        <OffersProducts />
        <TopProducts />
        <Statistics />
        <MedicalProducts />
        <UpcomingProducts />
        <FiftyPercentOff />
        <NewsAndBlogs />
        <Footer /> 
      </div>
    </>
  );
}
