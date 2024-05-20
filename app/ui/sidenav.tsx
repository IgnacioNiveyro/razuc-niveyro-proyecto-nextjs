export default function SideNav() {
    return (
      <div className="h-full w-64 bg-[#F8F4E1] text-[#3B2C35] fixed top-0 left-0 flex flex-col shadow-lg rounded-r-lg">
        <div className="p-4 text-2xl font-bold border-b border-[#DFD1B5]">
          E-Commerce
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
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
            <li>
              <a href="#" className="block p-2 rounded hover:bg-[#B7B7A4]">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded hover:bg-[#B7B7A4]">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded hover:bg-[#B7B7A4]">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded hover:bg-[#B7B7A4]">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded hover:bg-[#B7B7A4]">
                Support
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
  