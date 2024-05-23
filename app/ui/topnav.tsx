import BookitLogo from '@/app/ui/bookitlogo';
import FavoriteLogo from '@/app/ui/favoritelogo';
import CartLogo from '@/app/ui/cartlogo';
import Search from "./search";
import Link from 'next/link'
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
        <div className="flex-grow flex justify-start">
          <BookitLogo />
        </div>
        <div className="flex-grow flex justify-center">
          <Search placeholder="Buscar..." />
        </div>
        <div className="flex-grow flex justify-end">
          <div className="flex items-center space-x-8 mr-3"> {/* Agregado space-x-4 para establecer un espacio horizontal de 4 unidades entre los elementos */}
            <div ><Link href="/home/favorites"><FavoriteLogo /></Link></div>
            <div ><Link href="/home/cart"><CartLogo /></Link></div>
          </div>
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
              <Link
                href="/home/discounts"
                className="block p-2 rounded hover:bg-[#B7B7A4]"
              >
                Discounts!
              </Link>
              {/* Puedes agregar más categorías aquí */}
            </ul>
          </nav>
        </div>
      </div>
      {/* Fin de la tercera sección */}
    </div>
  );
}