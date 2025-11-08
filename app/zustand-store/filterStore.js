import { create } from "zustand";

export const useFilterStore = create((set) => ({
  // all filter states
  selectedCategories: [],
  selectedSizes: [],
  selectedLight: [],
  priceRange: [0, 10000],

  // actions
  toggleCategory: (category) =>
    set((state) => {
      const alreadySelected = state.selectedCategories.includes(category);
      return {
        selectedCategories: alreadySelected
          ? state.selectedCategories.filter((c) => c !== category)
          : [...state.selectedCategories, category],
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

  toggleLight: (light) =>
    set((state) => {
      const alreadySelected = state.selectedLight.includes(light);
      return {
        selectedLight: alreadySelected
          ? state.selectedLight.filter((l) => l !== light)
          : [...state.selectedLight, light],
      };
    }),

  setPriceRange: (range) => set({ priceRange: range }),
  resetFilters: () =>
    set({
      selectedCategories: [],
      selectedSizes: [],
      selectedLight: [],
      priceRange: [0, 10000],
    }),
}));
