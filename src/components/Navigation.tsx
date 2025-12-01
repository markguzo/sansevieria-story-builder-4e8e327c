import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          {/* Logo - Left */}
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-sans font-bold text-teal-300 tracking-wide hover:text-teal-200 transition-all duration-200"
            style={{ filter: 'drop-shadow(0 0 4px rgba(0,191,165,0.3))' }}
          >
            Sansevieria
          </Link>

          {/* Menu Button - Right */}
          <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <PopoverTrigger asChild>
              <button 
                className="w-10 h-10 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6 text-white" />
              </button>
            </PopoverTrigger>
            <PopoverContent 
              side="bottom" 
              align="end" 
              sideOffset={12}
              className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-lg p-4 shadow-xl max-w-xs w-56 transition-all duration-300 ease-in-out"
            >
              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "font-sans text-base font-medium transition-colors py-3",
                      location.pathname === link.path 
                        ? "text-teal-600 dark:text-teal-400" 
                        : "text-gray-800 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400",
                      index !== navLinks.length - 1 && "border-b border-gray-200 dark:border-gray-700"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <Button 
                  asChild 
                  className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-teal-500 transition-colors w-full"
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </nav>
    </>
  );
};
export default Navigation;