import { useCartStore } from "@/app/zustand-store/cart.store";

const AddToCart = ({
  children,
  className,
  product,
  quantity = 1,
  selectedPrice,
}) => {
  const addCart = useCartStore((state) => state.addCart);

  return (
    <button
      className={`${className} bg-primary text-white w-full rounded-lg text-base py-2 cursor-pointer`}
      onClick={() => addCart(product, quantity, selectedPrice)}
    >
      {children}
    </button>
  );
};

export default AddToCart;
