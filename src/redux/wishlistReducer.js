import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlists: [],
};

export const WishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const item = state.wishlists.find(
        (item) => item.id === action.payload.id
      );

      if (item) {
        item.quantity = action.payload.quantity;
      } else {
        state.wishlists.push(action.payload);
      }
    },

    removeWishlist: (state, action) => {
      state.wishlists = state.wishlists.filter(
        (item) => item.id !== action.payload
      );
    },

    resetWishlist: (state) => {
      state.wishlists = [];
    },
  },
});

export const { addToWishlist, removeWishlist, resetWishlist } =
  WishlistSlice.actions;

export default WishlistSlice.reducer;
