// app/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import cartSliceReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Exporta el tipo de estado raíz
export const getState = store.getState;