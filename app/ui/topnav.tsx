import BookitLogo from '@/app/ui/bookitlogo';
import FavoriteLogo from '@/app/ui/favoritelogo';
import CartLogo from '@/app/ui/cartlogo';
import Search from "./search";
import Link from 'next/link'
import { Suspense } from 'react';
import { signOut } from '@/auth';
import { PowerIcon } from '@heroicons/react/24/outline';
import { auth } from "@/auth"

export default async function TopNav() {
  const session = await auth();
  const isLoggedIn = !!session?.user;

  return (
    <div className="w-full bg-gradient-to-b from-[#F8F4E1] to-[#E8E1C4] text-[#3B2C35] fixed top-0 left-0 z-50">
      {/* Inicio de la primera sección */}
      <div className="flex justify-end items-center w-full space-x-2" style={{ paddingLeft: '15%', paddingRight: '15%', marginBottom: '10px' }}>
      {!isLoggedIn ? (
        <Link
          href="/login"
          className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-black bg-beige rounded-lg border border-black hover:bg-beige focus:ring-4 focus:outline-none focus:bg-beige dark:bg-beige dark:hover:bg-black-100 dark:focus:bg-beige mt-3"
        >
          Log in
        </Link>
      ) : (
        <form action={async () => {
          'use server';
          await signOut();
        }}>
          <button className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-black bg-beige rounded-lg border border-black hover:bg-beige focus:ring-4 focus:outline-none focus:bg-beige dark:bg-beige dark:hover:bg-black-100 dark:focus:bg-beige mt-3">
            Sign Out
          </button>
        </form>
      )}
    </div>
      {/* Fin de la primera sección */}
      <hr style={{ border: 'none', borderTop: '1px solid black', width: '70%', marginLeft: '15%', marginRight: '15%', marginTop: '10px' }} />

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
