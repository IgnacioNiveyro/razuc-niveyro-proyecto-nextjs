import Search from '@/app/ui/search';
import BookitLogo from '@/app/ui/bookitlogo';

export default function TopNav() {
  return (
    <div className="w-full bg-gradient-to-b from-[#F8F4E1] to-[#E8E1C4] text-[#3B2C35] fixed top-0 left-0 shadow-lg rounded-b-lg">
      {/* Inicio de la primera sección */}
      <div className="flex justify-end items-center w-full" style={{ paddingLeft: '15%', paddingRight: '15%' }}>
        <div className="w-30%">
          <span>Iniciar sesión</span>
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
          {/* Aquí puedes agregar más elementos si es necesario */}
        </div>
      </div>
      {/* Fin de la segunda sección */}
      
      <hr style={{ border: 'none', borderTop: '1px solid black', width: '70%', marginLeft: '15%', marginRight: '15%' }} />

      {/* Inicio de la tercera sección */}
      <div className="flex justify-start items-center w-full" style={{ paddingLeft: '15%', paddingRight: '15%' }}>
        <div className="w-30%">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="block p-2 rounded hover:bg-[#B7B7A4]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 rounded hover:bg-[#B7B7A4]">
                  Shop
                </a>
              </li>
              {/* Puedes agregar más categorías aquí */}
            </ul>
          </nav>
        </div>
      </div>
      {/* Fin de la tercera sección */}
    </div>
  );
}
