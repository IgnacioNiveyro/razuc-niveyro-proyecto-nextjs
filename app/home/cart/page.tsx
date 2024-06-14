'use client';

import { useSelector } from 'react-redux';
import BookCard from '@/app/ui/bookCard';
import { Button, Image } from "@nextui-org/react";

const CartPage = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);

  const calculateTotal = () => {
    return cartItems.reduce((total: number, item: any) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const totalAmount = calculateTotal();

  return (
    <div className="cart-page">
      <h1 className="text-center font-medium text-3xl mb-10 pt-6">Shopping Cart</h1>
      <div className="flex flex-col items-center space-y-2">
        {cartItems.length > 0 ? (
          cartItems.map((item: any) => (
            <div key={item.productId} className="w-full max-w-4xl">
              <BookCard
                title={item.productId}
                author={item.author}
                publication_year={item.publication_year}
                price={item.price}
                image_src={item.image_src}
                quantity={item.quantity}
                productId={item.productId}
              />
            </div>
          ))
        ) : (
          <p>El carrito está vacío</p>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="flex justify-center pt-10">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-xl font-bold ml-2">${totalAmount.toFixed(2)}</span>
          <Button>
            <Image
              alt="Pagar con Mercado Pago"
              src="/mercadopago.png"
              width = {160}
              height = {80}
            />
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
