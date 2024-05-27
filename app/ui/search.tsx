'use client';
import React, { useState } from 'react';
import { books } from '@/app/lib/book-data'; // Asegúrate de usar la ruta correcta a tus datos de libros
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Search({ placeholder }: { placeholder: string }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        if (!event.target.value.trim()) {
            setFilteredBooks([]);
            return;
        }
        const matchedBooks = books.filter(book => 
            book.title.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setFilteredBooks(matchedBooks);
    };

    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">Search</label>
            <input
                id="search"
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={handleInputChange}
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            {filteredBooks.length > 0 && (
                <ul className="absolute z-10 left-0 mt-2 w-full bg-white shadow-lg max-h-60 overflow-auto">
                    {filteredBooks.map(book => (
                        <li key={book.id} className="p-2 hover:bg-gray-100">
                            {book.title} - {book.author}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
