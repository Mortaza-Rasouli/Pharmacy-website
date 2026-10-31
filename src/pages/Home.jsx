import FiftyPercentOff from "../components/FiftyPercentOff";
import HeroSection from "../components/HeroSection";
import NewsAndBlogs from "../components/NewsAndBlogs";
import Offers from "../components/Offers";
import OffersProducts from "../components/OffersProducts";
import ProductSection from "../components/ProductSection";
import Statistics from "../components/Statistics";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductSection section="new" />
      <Offers />
      <ProductSection section="popular" />
      <OffersProducts />
      <ProductSection section="top" />
      <Statistics />
      <ProductSection section="medical" />
      <ProductSection section="upcoming" />
      <FiftyPercentOff />
      <NewsAndBlogs />
    </>
  );
}
