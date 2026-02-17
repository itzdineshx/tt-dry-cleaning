import {
  Menu,
  X,
  Shirt,
  GraduationCap,
  Truck,
  PhoneCall,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services", icon: Shirt },
    { href: "#students", label: "For Students", icon: GraduationCap },
    { href: "#pickup", label: "Pickup & Delivery", icon: Truck },
    { href: "#contact", label: "Contact", icon: PhoneCall },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12">
              <img
                src="/logo.png"
                alt="TT Dry Cleaning"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="hidden sm:block">
              <p className="font-bold text-lg leading-tight">
                <span className="text-black">TT</span>{" "}
                <span className="text-sky-600">Dry Cleaning</span>
              </p>
              <p className="text-xs text-muted-foreground">
                Laundry | Dry Cleaning | Ironing
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-foreground/80 hover:text-sky-600 font-medium"
                >
                  <Icon className="w-4 h-4 text-sky-600/80" />
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* DESKTOP BOOK NOW */}
            <Button asChild className="hidden sm:flex bg-sky-600 hover:bg-sky-700">
              <Link to="/book-now">
                <Calendar className="w-4 h-4 mr-2" />
                Book Now
              </Link>
            </Button>

            {/* MOBILE MENU TOGGLE */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE NAV */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-1">

              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 flex items-center gap-3 hover:bg-secondary rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5 text-sky-600" />
                    {link.label}
                  </a>
                );
              })}

              {/* MOBILE BOOK NOW */}
              <Link
                to="/book-now"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 mx-4 py-3 flex items-center justify-center gap-2 bg-sky-600 text-white rounded-lg font-semibold"
              >
                <Calendar className="w-5 h-5" />
                Book Now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
