import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "9841871508";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=Hi, I'm interested in your laundry services`;

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#students", label: "For Students" },
    { href: "#pickup", label: "Pickup & Delivery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full hero-gradient flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg md:text-xl">TT</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-foreground text-lg leading-tight">TT Dry Cleaning</h1>
              <p className="text-xs text-muted-foreground">Near SRM Ramapuram</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            <Button
              variant="whatsapp"
              size="sm"
              className="hidden sm:flex"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                <span className="hidden md:inline">WhatsApp</span>
              </a>
            </Button>
            <Button
              variant="phone"
              size="sm"
              asChild
            >
              <a href={`tel:+91${phoneNumber}`}>
                <Phone className="w-4 h-4" />
                <span className="hidden md:inline">Call Now</span>
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-foreground hover:bg-secondary rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden px-4 py-3 text-accent hover:bg-secondary rounded-lg font-medium transition-colors flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
