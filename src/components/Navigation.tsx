import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
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
    { name: "Technology", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Impact", path: "/market" },
    { name: "Journey", path: "/founder" },
    { name: "Contact", path: "/contact" }
  ];
  return (
    <>
      {/* Minimal Top Navbar - Logo Only */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out text-white",
        isScrolled 
          ? "backdrop-blur-md bg-black/30 shadow-md shadow-black/30 border-b border-white/10"
          : "bg-transparent backdrop-blur-none"
      )}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo - Left with Bubble */}
          <Link 
            to="/" 
            className="text-2xl md:text-3xl font-sans font-bold text-teal-300 tracking-wide hover:text-teal-200 transition-all duration-200 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2"
            style={{ filter: 'drop-shadow(0 0 4px rgba(0,191,165,0.3))' }}
          >
            Sansevieria Waste Refineries
          </Link>

          {/* Navigation Links - Inline with Bubbles (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-sans text-sm font-medium transition-all duration-200 py-2 px-4 rounded-xl",
                  "bg-white/10 backdrop-blur-sm border border-white/5",
                  "hover:bg-white/20 hover:border-white/10 hover:scale-[1.02]",
                  location.pathname === link.path 
                    ? "text-teal-300 bg-teal-500/20 border-teal-400/30" 
                    : "text-white/90 hover:text-teal-300"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-colors flex items-center justify-center"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navigation;