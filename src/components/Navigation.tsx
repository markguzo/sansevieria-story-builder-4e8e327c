import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg bg-black/40 text-white border-b border-white/10">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo - Elegant serif in teal */}
          <Link to="/" className="text-2xl font-serif text-teal-300 hover:text-teal-200 transition-colors">
            Sansevieria
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal-400 hover:after:w-full after:transition-all ${
                  location.pathname === link.path 
                    ? "text-teal-300" 
                    : "text-white/80 hover:text-teal-200"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              asChild 
              size="sm" 
              className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-500 transition-all shadow-lg shadow-teal-500/25 font-semibold"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu - Sheet Component */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden flex flex-col gap-1.5 p-2">
                <span className="w-6 h-0.5 bg-teal-400 transition-all" />
                <span className="w-6 h-0.5 bg-teal-400 transition-all" />
                <span className="w-6 h-0.5 bg-teal-400 transition-all" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/95 backdrop-blur-xl border-white/10 flex flex-col">
              <div className="flex-1 flex flex-col gap-6 mt-8">
                {navLinks.map(link => (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    className={`block py-3 text-lg font-medium transition-colors ${
                      location.pathname === link.path 
                        ? "text-teal-300" 
                        : "text-white hover:text-teal-300"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Button 
                asChild 
                size="lg" 
                className="w-full bg-teal-600 text-white py-4 rounded-full hover:bg-teal-500 transition-all font-semibold mt-auto"
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;