import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import logoColor from "@/assets/logo-color.png";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Impact", path: "/impact" },
    { name: "Contact", path: "/contact" }
  ];
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
      isScrolled 
        ? "backdrop-blur-md bg-black/30 shadow-md shadow-black/30"
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img 
            src={logoColor} 
            alt="Sansevieria Waste Refineries" 
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Navigation Links - Clean White Text (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-sans text-sm font-medium transition-all duration-200",
                location.pathname === link.path 
                  ? "text-white" 
                  : "text-white/80 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden w-10 h-10 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center"
          aria-label="Open navigation menu"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>
    </nav>
  );
};
export default Navigation;