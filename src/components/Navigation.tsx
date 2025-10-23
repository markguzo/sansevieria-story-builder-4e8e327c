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
  const navLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "About",
    path: "/about"
  }, {
    name: "Products",
    path: "/products"
  }, {
    name: "Market",
    path: "/market"
  }, {
    name: "Founder",
    path: "/founder"
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-4 bg-slate-100">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Sansevieria
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors hover:text-secondary ${location.pathname === link.path ? "text-secondary" : "text-foreground"}`}>
                {link.name}
              </Link>)}
            <Button asChild variant="default" size="sm">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`block text-sm font-medium transition-colors hover:text-secondary ${location.pathname === link.path ? "text-secondary" : "text-foreground"}`} onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </Link>)}
            <Button asChild variant="default" size="sm" className="w-full">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get in Touch
              </Link>
            </Button>
          </div>}
      </div>
    </nav>;
};
export default Navigation;