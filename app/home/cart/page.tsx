// /app/cart/page.tsx

'use client';

import { useSelector } from 'react-redux';
import BookCard from '@/app/ui/bookCard';

const CartPage = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);

  return (
    <div className="cart-page">
      <h1 className="text-center font-medium text-3xl mh-10 mb-6">Shopping Cart</h1>
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
                productId={item.productId}/>
            </div>
          ))
        ) : (
          <p>El carrito está vacío</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
