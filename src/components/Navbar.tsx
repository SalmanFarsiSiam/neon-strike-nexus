
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, HelpCircle, Download, Map, Info } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={isMobile ? 20 : 18} /> },
    { name: "How To Setup", path: "/setup", icon: <HelpCircle size={isMobile ? 20 : 18} /> },
    { name: "Downloads", path: "/downloads", icon: <Download size={isMobile ? 20 : 18} /> },
    { name: "Maps", path: "/maps", icon: <Map size={isMobile ? 20 : 18} /> },
    { name: "FAQ", path: "/faq", icon: <Info size={isMobile ? 20 : 18} /> },
    { name: "About", path: "/about", icon: <Info size={isMobile ? 20 : 18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 py-3">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-neon-blue text-2xl md:text-3xl font-bold">
            <span>MPA</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center backdrop-blur-md rounded-full px-6 py-2 border border-white/10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-1 px-4 py-1 rounded-full transition-colors relative ${
                location.pathname === item.path
                  ? "text-neon-blue after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-neon-blue"
                  : "text-gray-300 hover:text-white hover:after:w-full"
              } after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-neon-blue after:transition-all after:duration-300`}
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
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - Fixed overlay with higher z-index */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-black/90 backdrop-blur-lg">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <div className="text-neon-blue text-2xl font-bold">
                  <span>MPA</span>
                </div>
              </Link>
              <button 
                onClick={toggleMenu}
                className="text-gray-200 hover:text-white"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center gap-3 py-4 px-4 rounded-lg transition-colors relative ${
                      location.pathname === item.path 
                        ? "bg-white/10 text-neon-blue after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-neon-blue" 
                        : "text-gray-300 hover:text-white hover:bg-white/5 hover:after:w-[calc(100%-2rem)]"
                    } after:absolute after:bottom-0 after:left-4 after:w-0 after:h-0.5 after:bg-neon-blue after:transition-all after:duration-300`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <span className="text-lg font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
