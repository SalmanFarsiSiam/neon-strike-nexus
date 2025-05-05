
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, Settings, LogOut, Home, HelpCircle, Download, Map, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/5 py-3">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-neon-blue text-3xl font-bold">
            <span>MPA</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center bg-navy-dark/80 backdrop-blur-md rounded-full px-6 py-2 border border-white/10">
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

        {/* Auth Section */}
        <div className="hidden md:flex items-center">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-300 mr-2">
                      Username
                    </span>
                    <Avatar className="h-8 w-8 bg-navy-light border border-neon-blue/30">
                      <AvatarFallback className="bg-navy-light text-neon-blue">U</AvatarFallback>
                    </Avatar>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-navy-dark border border-white/10">
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  className="cursor-pointer"
                  onClick={() => setIsLoggedIn(false)}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex gap-2 items-center">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-300 hover:text-white"
                onClick={() => setIsLoggedIn(true)}
              >
                Username
              </Button>
              <Avatar className="h-8 w-8 bg-navy-light border border-neon-blue/30">
                <AvatarFallback className="bg-navy-light text-neon-blue">U</AvatarFallback>
              </Avatar>
            </div>
          )}
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
        <div className="md:hidden p-4 bg-navy-dark border-t border-white/10">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-2 py-3 px-4 rounded-md ${
                  location.pathname === item.path 
                    ? "bg-navy-light text-neon-blue" 
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Auth */}
            <div className="pt-4 border-t border-white/10 mt-2">
              {isLoggedIn ? (
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center gap-3 mb-2 px-4">
                    <Avatar className="h-8 w-8 bg-navy-light border border-neon-blue/30">
                      <AvatarFallback className="bg-navy-light text-neon-blue">U</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-300">Username</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start px-4 text-gray-300"
                    onClick={() => {}}
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start px-4 text-gray-300"
                    onClick={() => {}}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="justify-start px-4 mt-2"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-3 px-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-gray-300 hover:text-white"
                    onClick={() => setIsLoggedIn(true)}
                  >
                    Username
                  </Button>
                  <Avatar className="h-8 w-8 bg-navy-light border border-neon-blue/30">
                    <AvatarFallback className="bg-navy-light text-neon-blue">U</AvatarFallback>
                  </Avatar>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
