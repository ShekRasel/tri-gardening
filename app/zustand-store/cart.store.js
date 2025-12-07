import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";

export const useCartStore = create(
  persist(
    (set, get) => ({
      /* =======================
         STATE
      ======================= */
      items: [],
      totalItems: 0,
      totalPrice: 0,

      /* =======================
         UTILITY (derived calc)
      ======================= */
      recalc: (items) => ({
        totalItems: items.reduce((total, item) => total + item.quantity, 0),
        totalPrice: items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
      }),

      /* =======================
         ACTIONS
      ======================= */

      addCart: (item, quantity = 1, selectedPrice) => {
        set((state) => {
          const existingItem = state.items.find(
            (cartItem) => cartItem._id === item._id
          );

          let items;

          if (existingItem) {
            items = state.items.map((cartItem) =>
              cartItem._id === item._id
                ? {
                    ...cartItem,
                    quantity: cartItem.quantity + quantity,
                    price: selectedPrice,
                  }
                : cartItem
            );

            toast.success(`Increased ${item.name} quantity by ${quantity}!`);
          } else {
            items = [
              ...state.items,
              {
                ...item,
                quantity,
                price: selectedPrice,
              },
            ];

            toast.success(`${item.name} added to cart!`);
          }

          return {
            items,
            ...get().recalc(items),
          };
        });
      },

      removeCart: (id) => {
        const item = get().items.find((i) => i._id === id);
        const items = get().items.filter((i) => i._id !== id);

        set({
          items,
          ...get().recalc(items),
        });

        if (item) {
          toast.error(`${item.name} removed from cart!`);
        }
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeCart(id);
          return;
        }

        const items = get().items.map((item) =>
          item._id === id ? { ...item, quantity } : item
        );

        set({
          items,
          ...get().recalc(items),
        });

        const updatedItem = items.find((i) => i._id === id);
        if (updatedItem) {
          toast.success(`Updated ${updatedItem.name} quantity to ${quantity}!`);
        }
      },

      clearCart: () => {
        const count = get().items.length;

        set({
          items: [],
          totalItems: 0,
          totalPrice: 0,
        });

        if (count > 0) {
          toast.error("Cart cleared!");
        }
      },

      /* =======================
         OPTIONAL HELPERS
      ======================= */

      getItemQuantity: (id) => {
        const item = get().items.find((i) => i._id === id);
        return item ? item.quantity : 0;
      },
    }),
    {
      name: "cart-store",
    }
  )
);
