export function Header() {
    return (
      <header className="bg-[#2c2c2c] mb-10 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Filmes</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400 transition">Início</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition">Populares</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition">Lançamentos</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition">Favoritos</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }