import { ShopData } from "@/utils/featuresSection";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: ShopData,
  reducers: {
    sortLowToHigh: (state) => {
      return [...state].sort((a, b) => a.price - b.price);
    },

    sortHighToLow: (state) => {
      return [...state].sort((a, b) => b.price - a.price);
    },

    filterByCategories: (state, actions: PayloadAction<string[]>) => {
      if (actions.payload.length === 0) return ShopData;
      return ShopData.filter((item) => actions.payload.includes(item.category));
    },

    defaultSorting: () => {
      return ShopData;
    },
  },
});

export const {
  sortHighToLow,
  sortLowToHigh,
  defaultSorting,
  filterByCategories,
} = productSlice.actions;

export default productSlice.reducer;
