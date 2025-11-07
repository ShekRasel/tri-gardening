import FeaturedProduct from "../components/featured.product";
import Hero from "../components/hero.section";
import PlantAnalysis from "../components/plant.clinic.analysis";
import PopularProduct from "../components/popular.product";
import ShopCategory from "../components/shop.category";

export default function Home() {
  return (
    <div className="space-y-8">
      <Hero />
      <ShopCategory />
      <FeaturedProduct />
      <PopularProduct />
      <PlantAnalysis />
    </div>
  );
}
