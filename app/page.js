import FeaturedProduct from "../components/featured.product";
import Hero from "../components/hero.section";
import ShopCategory from "../components/shop.category";

export default function Home() {
  return (
    <div className="space-y-8">
      <Hero />
      <ShopCategory />
      <FeaturedProduct />
    </div>
  );
}
