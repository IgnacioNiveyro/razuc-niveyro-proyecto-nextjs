import BookitLogo from '@/app/ui/bookitlogo';
import FavoriteLogo from '@/app/ui/favoritelogo';
import CartLogo from '@/app/ui/cartlogo';
import Search from "./search";
import Link from 'next/link'
import { Suspense } from 'react';

export default function TopNav() {
  return (
    <div className="w-full bg-gradient-to-b from-[#F8F4E1] to-[#E8E1C4] text-[#3B2C35]">
      {/* Inicio de la primera sección */}
      <div className="flex justify-end items-center w-full" style={{ paddingLeft: '15%', paddingRight: '15%' }}>
        <div className="mt-1 mb-1"> {/* Agregar espacio encima y debajo */}
          <Link
            href="/login"
            className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-black bg-beige rounded-lg border border-black hover:bg-beige focus:ring-4 focus:outline-none focus:bg-beige dark:bg-beige dark:hover:bg-black-100 dark:focus:bg-beige"
          >
            Log in
          </Link>
        </div>
      </div>

      {/* Fin de la primera sección */}
      <hr style={{ border: 'none', borderTop: '1px solid black', width: '70%', marginLeft: '15%', marginRight: '15%' }} />

      {/* Inicio de la segunda sección */}
      <div className="flex justify-between items-center w-full" style={{ paddingLeft: '15%', paddingRight: '15%' }}>
        <div className="pr-5 flex-grow flex justify-start">
        <Link href="/home">
          <BookitLogo />
        </Link>
        </div>
        <div className="px-5 py-3 flex-grow flex justify-center">
          <Suspense><Search placeholder="Buscar..." /></Suspense>
          
        </div>
        <div className="pl-5 flex-grow flex justify-end space-x-10 mr-3">
          <Link href="/home/favorites">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-6">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />

            </svg>
          </Link>
          <Link href="/home/cart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-6">
            <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />

            </svg>


          </Link>
        </div>
      </div>


      {/* Fin de la segunda sección */}
      <hr style={{ border: 'none', borderTop: '1px solid black', width: '70%', marginLeft: '15%', marginRight: '15%' }} />

      {/* Inicio de la tercera sección */}
      <div className="flex justify-start items-center w-full" style={{ paddingLeft: '15%', paddingRight: '15%' }}>
        <div className="w-30%">
          <nav>
            <ul className="flex space-x-4">
              <Link
                href="/"
                className="block p-2 rounded hover:bg-[#B7B7A4]"
              >
                Home
              </Link>
              {/* Puedes agregar más categorías aquí */}
            </ul>
          </nav>
        </div>
      </div>
      {/* Fin de la tercera sección */}
    </div >
  );
}