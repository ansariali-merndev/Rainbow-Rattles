import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShopData } from "../../utils/featuresSection";
import { ITEM_PER_PAGE } from "@/utils/constant";

export interface PageableType {
  page: number;
  totalPages: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  firstIdx: number;
  lastIdx: number;
}

const initialState: PageableType = {
  page: 1,
  totalPages: Math.ceil(ShopData.length / ITEM_PER_PAGE),
  isFirstPage: true,
  isLastPage: false,
  firstIdx: 0,
  lastIdx: ITEM_PER_PAGE,
};

const pageableSlices = createSlice({
  name: "pageable",
  initialState,
  reducers: {
    incrementPage: (state) => {
      if (state.isLastPage) return { ...state };
      const updatedPage = state.page + 1;
      const checkFirst = updatedPage === 1;
      const checkLast = updatedPage === state.totalPages;
      return {
        ...state,
        page: updatedPage,
        isLastPage: checkLast,
        isFirstPage: checkFirst,
        firstIdx: (updatedPage - 1) * ITEM_PER_PAGE,
        lastIdx: updatedPage * ITEM_PER_PAGE,
      };
    },

    decrementPage: (state) => {
      if (state.isFirstPage) return { ...state };
      const updatedPage = state.page - 1;
      const checkFirst = updatedPage === 1;
      const checkLast = updatedPage === state.totalPages;
      return {
        ...state,
        page: updatedPage,
        isFirstPage: checkFirst,
        isLastPage: checkLast,
        firstIdx: (updatedPage - 1) * ITEM_PER_PAGE,
        lastIdx: updatedPage * ITEM_PER_PAGE,
      };
    },

    setTotalPages: (state, actions: PayloadAction<number>) => {
      const newTotal = actions.payload;
      const newPage = 1;

      return {
        page: newPage,
        totalPages: newTotal,
        isFirstPage: true,
        isLastPage: newPage === newTotal,
        firstIdx: 0,
        lastIdx: ITEM_PER_PAGE,
      };
    },
  },
});

export const { incrementPage, decrementPage, setTotalPages } =
  pageableSlices.actions;
export default pageableSlices.reducer;
