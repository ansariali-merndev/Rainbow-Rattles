import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/ProductSlices";
import pageableReducer, { PageableType } from "./slices/PageableSlices";
import { ShopType } from "@/utils/featuresSection";
import cartReducer, { CartType } from "./slices/CartSlices";
import wishlistReducer, { WishlistType } from "./slices/WishlistSlice";

export const myStore = configureStore({
  reducer: {
    product: productReducer,
    pageable: pageableReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export interface TypeStore {
  product: ShopType[];
  pageable: PageableType;
  cart: CartType[];
  wishlist: WishlistType[];
}
