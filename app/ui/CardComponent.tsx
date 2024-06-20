'use client';

import { Card, CardHeader, CardBody, Image, CardFooter, Button } from "@nextui-org/react";
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/slices/cartSlice';
import StarRating from '@/scripts/StarRating';
import { useState } from 'react';

export function CardComponent({
  title,
  author,
  publication_year,
  price,
  image_src,
  ranking
}: {
  title: string;
  author: string;
  publication_year: number;
  price: number;
  image_src: string;
  ranking: number;
}) {
  const [quantity, setQuantity] = useState(1);
  const [popups, setPopups] = useState<number[]>([]);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log('handleAddToCart called');
    dispatch(addToCart({
      productId: title,
      quantity: quantity,
      price: price,
      author: author,
      publication_year: publication_year,
      image_src: image_src
    }));

    const newPopupId = Date.now();
    setPopups([...popups, newPopupId]);
    setTimeout(() => {
      setPopups((currentPopups) => currentPopups.filter(id => id !== newPopupId));
    }, 3000); // Popup se oculta después de 3 segundos
  };

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <Card className={`py-4 custom-div`}>
        <CardHeader className="flex flex-col items-center justify-center text-center py-2 px-4">
          <h4 className="text-medium uppercase font-bold">{title}</h4>
          <small className="text-default-500">{publication_year}</small>
        </CardHeader>
        <CardBody className="overflow-visible items-center">
          <Image
            alt={"image of " + title}
            className="object-contain rounded-x"
            src={image_src}
            width={160}
            height={220}
            style={{ width: '160px', height: '220px', objectFit: 'contain' }}
          />
          <StarRating rating={ranking} />
          <span className="ml-2 text-sm font-medium text-black-500">{ranking.toFixed(1)}</span>
        </CardBody>
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <Button onClick={handleAddToCart}>
            <Image
              alt="Add To Cart"
              src="/add_to_cart.png"
              width={96}
              height={96}
              style={{ objectFit: 'contain', borderRadius: '0' }}
            />
          </Button>
          <p className="text-medium font-Roboto_Slab text-black">${price}</p>
          <Button className="text-big font-Roboto_Slab font-bold text-black" onClick={handleMinusQuantity}>-</Button>
          <span className="text-medium font-Roboto_Slab text-black">{quantity}</span>
          <Button className="text-big font-Roboto_Slab font-bold text-black" onClick={handlePlusQuantity}>+</Button>
        </CardFooter>
      </Card>
      <div className="fixed top-4 right-4 flex flex-col space-y-2 z-50">
        {popups.map(id => (
          <div key={id} className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-black font-bold">Agregado exitosamente al carrito</p>
          </div>
        ))}
      </div>
    </div>
  );
}
