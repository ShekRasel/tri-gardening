import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

      addCart: (item, quantity = 1) => {
        set((state) => {
          const validItems = state.items.filter(Boolean);
          const existingItem = validItems.find(
            (cartItem) => cartItem.id === item.id
          );

          const finalQuantity = item.quantity || quantity;

          if (existingItem) {
            toast.success(
              `Increased ${item.name} quantity by ${finalQuantity}!`
            );
            return {
              items: state.items.map((cartItem) =>
                cartItem.id === item.id
                  ? {
                      ...cartItem,
                      quantity: cartItem.quantity + finalQuantity,
                    }
                  : cartItem
              ),
            };
          } else {
            toast.success(`${item.name} added to cart!`);
            return {
              items: [
                ...state.items,
                {
                  ...item,
                  quantity: finalQuantity,
                },
              ],
            };
          }
        });
      },

      removeCart: (id) => {
        const item = get().items.find((item) => item.id === id);
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));

        if (item) {
          toast.error(`${item.name} removed from cart!`);
        }
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeCart(id);
          return;
        }

        const item = get().items.find((item) => item.id === id);
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }));

        if (item) {
          toast.success(`Updated ${item.name} quantity to ${quantity}!`);
        }
      },

      clearCart: () => {
        const itemCount = get().items.length;
        set({ items: [] });

        if (itemCount > 0) {
          toast.error("Cart cleared!");
        }
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },

      getItemQuantity: (id) => {
        const item = get().items.find((item) => item.id === id);
        return item ? item.quantity : 0;
      },
    }),
    {
      name: "cart-store",
    }
  )
);
