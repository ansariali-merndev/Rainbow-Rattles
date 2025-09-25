import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/ProductSlices";
import pageableReducer, { PageableType } from "./slices/PageableSlices";
import { ShopType } from "@/utils/featuresSection";

export const myStore = configureStore({
  reducer: {
    product: productReducer,
    pageable: pageableReducer,
  },
});

export interface TypeStore {
  product: ShopType[];
  pageable: PageableType;
}
