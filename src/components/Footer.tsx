import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Instagram, Facebook } from "lucide-react";


const Footer = () => {
  const phoneNumber = "9841871508";
  const whatsappLink = `https://wa.me/91${phoneNumber}`;
  const currentYear = new Date().getFullYear();

  const instagramLink = "https://www.instagram.com/ttdrycleaning";
  const facebookLink = "https://www.facebook.com/ttdrycleaning";


  return (
    <footer className="bg-foreground text-background">
      <div className="container-section py-16 pb-8">
        <div className="container-section px-4 sm:px-6 lg:px-12 py-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-12 mb-12">
          


          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground font-bold text-xl">
                TT
              </div>
              <div>
                <h3 className="text-xl font-bold text-background">
                  TT <span className="text-primary">Dry Cleaning</span>
                </h3>
                <p className="text-sm text-background/60">
                  Professional Laundry Services
                </p>
              </div>
            </div>

            <p className="text-background/70 text-sm leading-relaxed max-w-md">
              Your trusted laundry partner near SRM Ramapuram. Quality cleaning,
              affordable prices, and convenient pickup & delivery services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-background/70 hover:text-primary transition-colors">Services</li>
              <li className="text-background/70 hover:text-primary transition-colors">For Students</li>
              <li className="text-background/70 hover:text-primary transition-colors">Pickup & Delivery</li>
              <li className="text-background/70 hover:text-primary transition-colors">Contact</li>
            </ul>
          </div>


          {/* Our Services */}
          <div>
            <h4 className="font-semibold text-background mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Wash & Fold</li>
              <li>Dry Cleaning</li>
              <li>Ironing & Pressing</li>
              <li>Shoe Cleaning</li>
              <li>Curtain Cleaning</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:+91${phoneNumber}`}
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 98418 71508
                </a>
              </li>

              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>

              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Near SRM Ramapuram, Porur, Chennai</span>
              </li>
            </ul>
          </div>
        </div>
  {/* FOLLOW US SECTION */}
  <div className="mt-4 flex flex-col items-center">
    <p className="text-sm font-semibold text-background">
      Follow Us
    </p>


          <div className="flex items-center gap-3">
            <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition">
              <Instagram className="w-4 h-4 text-background" />
              </a>
              <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition">
                <Facebook className="w-4 h-4 text-background" />
                </a>

          </div>
          </div>
        </div>
        {/* HR LINE (down a little) */}
        <div className="mt-6 border-t border-background/10"></div>
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 text-center text-sm text-background/50">
        <p>© {currentYear} TT Dry Cleaning. All rights reserved.</p>
        <p className="mt-1">
        Serving SRM Ramapuram students and Porur residents with quality laundry services.
          </p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
