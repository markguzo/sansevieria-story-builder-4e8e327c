import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Sansevieria</h3>
            <p className="text-sm text-white/80">
              Transforming plastic waste into premium fuel for a sustainable future.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-white/80 hover:text-accent transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/market" className="text-white/80 hover:text-accent transition-colors">
                  Impact
                </Link>
              </li>
              <li>
                <Link to="/founder" className="text-white/80 hover:text-accent transition-colors">
                  Journey
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-white/80">
                <MapPin size={16} />
                <span>Tel Aviv, Israel</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-white/80" />
                <a href="mailto:contact@sansevieria.com" className="text-white/80 hover:text-accent transition-colors">
                  contact@sansevieria.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Social Media</h4>
            <div className="flex gap-4">
              {/* Add social media icons here */}
              <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent transition-colors cursor-pointer" />
              <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent transition-colors cursor-pointer" />
              <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent transition-colors cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>&copy; {currentYear} Sansevieria. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
