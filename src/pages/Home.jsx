import Header from "../components/header/Header";
import HeroSection from "../components/HeroSection";
import NewProducts from "../components/NewProducts";
import Offers from "../components/Offers";
import OffersProducts from "../components/OffersProducts";
import PopularProducts from "../components/PopularProducts";

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
      </div>
    </>
  );
}
