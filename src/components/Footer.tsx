import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sansevieria</h3>
            <p className="text-sm opacity-90">
              Transforming plastic waste into clean energy for a sustainable future.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/technology" className="hover:text-secondary transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/founder" className="hover:text-secondary transition-colors">
                  Founder
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="hover:text-secondary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/market" className="hover:text-secondary transition-colors">
                  Market
                </Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-secondary transition-colors">
                  Impact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Tel Aviv, Israel</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:contact@sansevieria.com" className="hover:text-secondary transition-colors">
                  contact@sansevieria.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>&copy; {currentYear} Sansevieria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
