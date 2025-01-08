"use client";

import React from "react";
import { useSelector } from "react-redux";

const Counter: React.FC = () => {
  // Selecciona los elementos del carrito desde el estado de Redux
  const cartItems = useSelector((state: any) => state.cart.cartItems);

  // Calcula el total de cantidades dinámicamente
  const totalQuantity = cartItems.reduce((total: number, item: any) => total + item.quantity, 0);

  return (
    <>
      {totalQuantity >= 0 && (
        <span className="bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
          {totalQuantity}
        </span>
      )}
    </>
  );
};

export default Counter;
