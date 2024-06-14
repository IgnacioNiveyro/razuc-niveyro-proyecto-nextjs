import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity,price } = action.payload;
      const indexProductId = state.cartItems.findIndex(item => item.productId === productId);
      if (indexProductId >= 0) {
        state.cartItems[indexProductId].quantity += quantity;
      } else {
        state.cartItems.push({ productId, quantity,price });
      }
    },
    removeFromCart: (state, action) => {
      const { productId } = action.payload;
      state.cartItems = state.cartItems.filter(item => item.productId !== productId);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
