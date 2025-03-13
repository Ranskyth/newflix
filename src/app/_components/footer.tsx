export function Footer() {
    return (
      <footer className="bg-[#2c2c2c] text-white p-4 text-center mt-8 shadow-md">
        <p className="text-sm">&copy; {new Date().getFullYear()} Filmes. Todos os direitos reservados.</p>
        <nav className="mt-2">
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400 transition">Política de Privacidade</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition">Termos de Uso</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition">Contato</a>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }