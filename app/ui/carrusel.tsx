'use client';
import React from 'react';
import books from '@/app/lib/book-data';

export default function Carrusel() {

  return (
    <div 
      className="carrusel-container" 
      
    >
      <div className="carrusel">
        {Array.isArray(books) && books.map((book) => (
          <div key={book.id} className="book">
            <img src={book.image} alt={book.title} className="book-image" />
          </div>
        ))}
      </div>
      <style jsx>{`
        .carrusel-container {
          overflow: hidden;
          width: 100%;
          height: 300px; /* Altura explícita para el contenedor del carrusel */
          padding: 10px 0;
        }

        @media (max-width: 768px) {
          .carrusel-container {
             /* Ajuste proporcional para pantallas más pequeñas */
          }
        }

        .carrusel {
          display: flex;
          animation: scroll 15s linear infinite;
          height: 100%;
          align-items: center;
        }
        .book {
          flex: 0 0 auto;
          width: 200px;
          margin: 0 10px;
          padding: 20px;
          background-color: transparent; /* Fondo transparente */
          border: none; /* Sin bordes */
          border-radius: 5px;
          box-shadow: none; /* Sin sombras */
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .book-image {
          max-width: 180px;
          max-height: 240px; /* Ajusta la altura máxima de la imagen */
          border-radius: 5px;
          border: 1px solid #3B2C35; /* Agrega un borde a las imágenes */
        }
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}