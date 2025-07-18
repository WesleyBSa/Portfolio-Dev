import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-20 w-full px-4 md:px-8 py-4 md:py-6">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-gray-100">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
            Wesley
          </span>
          <span className="text-gray-100"> Dev</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#sobre" className="text-gray-300 hover:text-orange-400 font-medium transition-all duration-300 relative group">
            Sobre
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#projetos" className="text-gray-300 hover:text-orange-400 font-medium transition-all duration-300 relative group">
            Projetos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contato" className="text-gray-300 hover:text-orange-400 font-medium transition-all duration-300 relative group">
            Contato
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 hover:text-orange-400 transition-colors duration-300 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 absolute inset-x-0 top-full bg-gray-900/95 border-t border-orange-400/20 backdrop-blur-md rounded-b-lg mx-4">
          <div className="flex flex-col py-4 px-6 space-y-4">
            <a 
              href="#sobre" 
              className="text-gray-300 hover:text-orange-400 font-medium transition-colors duration-300 py-2 border-b border-gray-800/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#projetos" 
              className="text-gray-300 hover:text-orange-400 font-medium transition-colors duration-300 py-2 border-b border-gray-800/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Projetos
            </a>
            <a 
              href="#contato" 
              className="text-gray-300 hover:text-orange-400 font-medium transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;