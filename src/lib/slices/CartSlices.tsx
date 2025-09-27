import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartType {
  id: number;
  qty: number;
}

const cartSlices = createSlice({
  name: "cart",
  initialState: [] as CartType[],
  reducers: {
    initCartData: (_, actions: PayloadAction<CartType[]>) => {
      return actions.payload;
    },

    addToCart: (state, actions: PayloadAction<number>) => {
      return [...state, { id: actions.payload, qty: 1 }];
    },

    removeFromCart: (state, actions: PayloadAction<number>) => {
      return state.filter((item) => item.id !== actions.payload);
    },

    increaseQuantity: (state, actions: PayloadAction<number>) => {
      return state.map((item) =>
        item.id === actions.payload
          ? { ...item, qty: item.qty + 1 }
          : { ...item }
      );
    },

    decreaseQuantity: (state, actions: PayloadAction<number>) => {
      return state.map((item) =>
        item.id === actions.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : { ...item }
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  initCartData,
} = cartSlices.actions;

export default cartSlices.reducer;
