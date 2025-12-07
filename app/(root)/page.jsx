import {
  getFeaturedProducts,
  getPopularProducts,
} from "@/app/(root)/server-action/product.action";
import FeaturedProduct from "@/components/root/featured.product";
import Hero from "@/components/root/hero.section";
import PlantAnalysis from "@/components/root/plant.clinic.analysis";
import PopularProduct from "@/components/root/popular.product";
import ShopCategory from "@/components/root/shop.category";

const Home = async () => {
  const { data: featuredProducts } = await getFeaturedProducts();
  const { data: popularProducts } = await getPopularProducts();
  return (
    <div className="space-y-8">
      <Hero />
      <ShopCategory />
      <FeaturedProduct products={featuredProducts} />
      <PopularProduct products={popularProducts} />
      <PlantAnalysis />
    </div>
  );
};

export default Home;
