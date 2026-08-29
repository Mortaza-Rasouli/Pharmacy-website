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
export default function Home({
  favorite,
  setFavorite,
  buyProduct,
  setBuyProduct,
}) {
  return (
    <>
      <div>
        <Header favorite={favorite} buyProduct={buyProduct} />
        <HeroSection />
        <NewProducts
          setFavorite={setFavorite}
          favorite={favorite}
          buyProduct={buyProduct}
          setBuyProduct={setBuyProduct}
        />
        <Offers />
        <PopularProducts
          setFavorite={setFavorite}
          favorite={favorite}
          buyProduct={buyProduct}
          setBuyProduct={setBuyProduct}
        />
        <OffersProducts />
        <TopProducts
          setFavorite={setFavorite}
          favorite={favorite}
          buyProduct={buyProduct}
          setBuyProduct={setBuyProduct}
        />
        <Statistics />
        <MedicalProducts
          favorite={favorite}
          setFavorite={setFavorite}
          buyProduct={buyProduct}
          setBuyProduct={setBuyProduct}
        />
        <UpcomingProducts
          favorite={favorite}
          setFavorite={setFavorite}
          buyProduct={buyProduct}
          setBuyProduct={setBuyProduct}
        />
        <FiftyPercentOff />
        <NewsAndBlogs />
        <Footer />
      </div>
    </>
  );
}
