import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/ProductSlices";
import { ShopType } from "@/utils/featuresSection";

export const myStore = configureStore({
  reducer: {
    product: productReducer,
  },
});

export interface TypeStore {
  product: ShopType[];
}
