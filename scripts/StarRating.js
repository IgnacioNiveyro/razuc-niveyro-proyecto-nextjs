import React from 'react';

function StarRating({ rating }) {
  // Asegurarse de que el rating es un número
  const numericRating = Number(rating);
  if (isNaN(numericRating)) {
    console.error("Rating is not a number", rating);
    return null;  // No renderizar si la calificación no es un número
  }

  const totalStars = 5;
  const fullStars = Math.floor(numericRating);
  const decimalPart = numericRating % 1;
  const halfStar = decimalPart >= 0.5; // Solo muestra media estrella si el decimal es 0.5 o mayor
  const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex">
      {Array(fullStars).fill().map((_, i) => (
        <span key={`full-${i}`} className="text-yellow-500">★</span>
      ))}
      {halfStar && (
        <span className="text-yellow-500">✬</span> // Representa la media estrella
      )}
      {Array(emptyStars).fill().map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-300">☆</span>
      ))}
    </div>
  );
}

export default StarRating;
