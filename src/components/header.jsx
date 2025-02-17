import { Home, Code, FolderKanban, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-cyan-950 text-white p-5 ">
      <div className="max-w-full  md:px-8 ">
        <div className="flex justify-between p-4 h-16">
          {/* Logo */}
          <div className="flex">
            <h1 className="text-3xl md:text-4xl font-bold ">Mon Portfolio</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="/" 
              className="hover:text-blue-200 transition flex items-center gap-2"
            >
              <Home size={40} />
              <span>Accueil</span>
            </a>
            
            <a 
              href="#Competences" 
              className="hover:text-blue-200 transition flex items-center gap-2"
            >
              <Code size={40} />
              <span>Compétences</span>
            </a>
            
            <a 
              href="#projects" 
              className="hover:text-blue-200 transition flex items-center gap-2"
            >
              <FolderKanban size={40} />
              <span>Projets</span>
            </a>
            
            <a 
              href="#contact" 
              className="hover:text-blue-200 transition flex items-center gap-2"
            >
              <Mail size={40} />
              <span>Contact</span>
            </a>
          </nav>


          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-blue-800 transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            
            <a 
              href="#Competences" 
              className=" hover:bg-blue-800 px-4 py-2 rounded-lg transition flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Code size={40} />
              <span>Compétences</span>
            </a>
            
            <a 
              href="#projects" 
              className=" hover:bg-blue-800 px-4 py-2 rounded-lg transition flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FolderKanban size={40} />
              <span>Projets</span>
            </a>
            
            <a 
              href="#contact" 
              className=" hover:bg-blue-800 px-4 py-2 rounded-lg transition flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Mail size={40} />
              <span>Contact</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}