'use client';
import React from 'react';
import books from '@/app/lib/book-data';

export default function Carrusel() {
  return (
    <div className="carrusel-container">
      <div className="carrusel">
        {Array.isArray(books) && books.map((book) => (
          <div key={book.id} className="book">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.publication_year}</p>
            <p>{book.genre}</p>
            <p>${book.price}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .carrusel-container {
          overflow: hidden;
          width: 100%;
        }
        .carrusel {
          display: flex;
          animation: scroll 20s linear infinite;
        }
        .book {
          flex: 0 0 auto;
          width: 200px;
          margin: 0 10px;
          padding: 20px;
          background-color: #f9f5e6;
          border: 1px solid #ccc;
          border-radius: 5px;
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