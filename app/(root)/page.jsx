import FeaturedProduct from "@/components/root/featured.product";
import Hero from "@/components/root/hero.section";
import PlantAnalysis from "@/components/root/plant.clinic.analysis";
import PopularProduct from "@/components/root/popular.product";
import ShopCategory from "@/components/root/shop.category";

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
