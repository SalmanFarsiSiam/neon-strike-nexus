
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, HelpCircle, Download, Map, Info } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "How To Setup", path: "/setup", icon: <HelpCircle size={18} /> },
    { name: "Downloads", path: "/downloads", icon: <Download size={18} /> },
    { name: "Maps", path: "/maps", icon: <Map size={18} /> },
    { name: "FAQ", path: "/faq", icon: <Info size={18} /> },
    { name: "About", path: "/about", icon: <Info size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 py-3">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-neon-blue text-3xl font-bold">
            <span>MPA</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center backdrop-blur-md rounded-full px-6 py-2 border border-white/10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-1 px-4 py-1 rounded-full transition-colors ${
                location.pathname === item.path
                  ? "text-neon-blue"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.icon}
              <span className="ml-1">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-200 hover:text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden p-4 bg-white/10 backdrop-blur-lg border-t border-white/10">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-2 py-3 px-4 rounded-md ${
                  location.pathname === item.path 
                    ? "bg-white/10 text-neon-blue" 
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
