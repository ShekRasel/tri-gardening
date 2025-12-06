import { create } from "zustand";

export const useFilterStore = create((set) => ({
  // all filter states
  selectedCategories: [],
  selectedSizes: [],
  selectedLight: [],
  priceRange: [0, 2000],
  sortBy: "all",

  // actions
  toggleCategory: (categoryId) =>
    set((state) => {
      const alreadySelected = state.selectedCategories.includes(categoryId);
      return {
        selectedCategories: alreadySelected
          ? state.selectedCategories.filter((c) => c !== categoryId)
          : [...state.selectedCategories, categoryId],
      };
    }),

  toggleSize: (size) =>
    set((state) => {
      const alreadySelected = state.selectedSizes.includes(size);
      return {
        selectedSizes: alreadySelected
          ? state.selectedSizes.filter((s) => s !== size)
          : [...state.selectedSizes, size],
      };
    }),

  setPriceRange: (range) => set({ priceRange: range }),

  setSortBy: (value) => set({ sortBy: value }),

  resetFilters: () =>
    set({
      selectedCategories: [],
      selectedSizes: [],
      priceRange: [0, 10000],
      sortBy: "all",
    }),
}));
