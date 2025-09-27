import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WishlistType {
  id: number;
}

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState: [] as WishlistType[],
  reducers: {
    addToWishList: (state, actions: PayloadAction<number>) => {
      return [...state, { id: actions.payload }];
    },

    removeFromWishlist: (state, actions: PayloadAction<number>) => {
      return state.filter((item) => item.id !== actions.payload);
    },

    initWishlist: (_, actions: PayloadAction<WishlistType[]>) => {
      return actions.payload;
    },
  },
});

export const { addToWishList, removeFromWishlist, initWishlist } =
  WishlistSlice.actions;
export default WishlistSlice.reducer;
