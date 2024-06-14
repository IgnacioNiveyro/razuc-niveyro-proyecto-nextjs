import React, { useState } from 'react';
import { Button } from "@nextui-org/react";
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '@/redux/slices/cartSlice';

interface BookCardProps {
  title: string;
  author: string;
  publication_year: number;
  price: number;
  image_src: string;
  quantity: number;
  productId: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, publication_year, price, image_src, quantity, productId }) => {
  const [localQuantity, setLocalQuantity] = useState(quantity);
  const dispatch = useDispatch();

  const handleMinusQuantity = () => {
    if (localQuantity > 1) {
      setLocalQuantity(localQuantity - 1);
      dispatch(addToCart({ productId, quantity: -1, price, author, publication_year, image_src }));
    } else if (localQuantity === 1) {
      setLocalQuantity(0);
      dispatch(removeFromCart({ productId }));
    }
  };

  const handlePlusQuantity = () => {
    setLocalQuantity(localQuantity + 1);
    dispatch(addToCart({ productId, quantity: 1, price, author, publication_year, image_src }));
  };

  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center">
        <img src={image_src} alt={title} className="w-24 h-30 mr-6" />
        <div>
          <div className="font-bold">{title}</div>
          <div className="text-sm text-gray-500">{author}</div>
          <div className="text-sm text-gray-500">{publication_year}</div>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-lg font-semibold">${price}</span>
        <div className="flex items-center ml-4">
          <Button className="px-2 py-1 border rounded" onClick={handleMinusQuantity}>-</Button>
          <span className="px-2">{localQuantity}</span>
          <Button className="px-2 py-1 border rounded" onClick={handlePlusQuantity}>+</Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
