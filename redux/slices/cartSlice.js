// /app/cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log('addToCart action dispatched:', action.payload);
      const { productId, quantity, price, author, publication_year, image_src } = action.payload;
      const indexProductId = state.cartItems.findIndex(item => item.productId === productId);
      if (indexProductId >= 0) {
        state.cartItems[indexProductId].quantity += quantity;
      } else {
        state.cartItems.push({ productId, quantity, price, author, publication_year, image_src });
      }
    },
    removeFromCart: (state, action) => {
      console.log('removeFromCart action dispatched:', action.payload);
      const { productId } = action.payload;
      state.cartItems = state.cartItems.filter(item => item.productId !== productId);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
