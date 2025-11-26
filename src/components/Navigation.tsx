import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border" : "bg-gradient-to-b from-black/30 to-transparent"}`}>
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold transition-colors" style={{ color: isScrolled ? '#004d47' : 'white' }}>
            Sansevieria
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors ${location.pathname === link.path ? (isScrolled ? "text-[#004d47]" : "text-[#00e5c2]") : (isScrolled ? "text-foreground hover:text-[#004d47]" : "text-white/90 hover:text-white")}`}>
                {link.name}
              </Link>)}
            <Button 
              asChild 
              size="sm" 
              className="font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#004d47',
                color: 'white'
              }}
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className={`md:hidden transition-colors ${isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-[#00e5c2]'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in bg-background/95 backdrop-blur-md rounded-lg p-4 -mx-2">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`block text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? "text-primary" : "text-foreground"}`} onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </Link>)}
            <Button 
              asChild 
              size="sm" 
              className="w-full font-semibold"
              style={{
                backgroundColor: '#004d47',
                color: 'white'
              }}
            >
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get in Touch
              </Link>
            </Button>
          </div>}
      </div>
    </nav>;
};
export default Navigation;