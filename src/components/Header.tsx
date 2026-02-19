import {
  Menu,
  X,
  Shirt,
  GraduationCap,
  Truck,
  PhoneCall,
  IndianRupee,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
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
            {navLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-2 text-foreground/80 hover:text-sky-600 font-medium"
              >
                <Icon className="w-4 h-4 text-sky-600/80" />
                {label}
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* DESKTOP PRICE LIST */}
            <Button
              asChild
              className="hidden sm:flex bg-sky-600 hover:bg-sky-700"
            >
              <Link to="/price-list">
                <IndianRupee className="w-4 h-4 mr-2" />
                Price List
              </Link>
            </Button>

            {/* MOBILE MENU TOGGLE */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE NAV */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-1">

              {navLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  className="px-4 py-3 flex items-center gap-3 hover:bg-secondary rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-5 h-5 text-sky-600" />
                  {label}
                </a>
              ))}

              {/* MOBILE PRICE LIST */}
              <Link
                to="/price-list"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 mx-4 py-3 flex items-center justify-center gap-2 bg-sky-600 text-white rounded-lg font-semibold"
              >
                <IndianRupee className="w-5 h-5" />
                Price List
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
