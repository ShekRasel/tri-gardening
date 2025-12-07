import { useCartStore } from "@/app/zustand-store/cart.store";

const AddToCart = ({
  children,
  className,
  product,
  quantity = 1,
  selectedPrice,
  disabled = false,
}) => {
  const addCart = useCartStore((state) => state.addCart);

  return (
    <button
      className={`${className}  text-white w-full rounded-lg text-base py-2 ${
        disabled
          ? "bg-[#c1ccb5] cursor-not-allowed"
          : "bg-primary cursor-pointer"
      }`}
      onClick={() => addCart(product, quantity, selectedPrice)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default AddToCart;
