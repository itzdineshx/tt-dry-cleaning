import { Phone, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  const phoneNumber = "9841871508";
  const whatsappLink = `https://wa.me/91${phoneNumber}`;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/80">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">TT</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-background text-xl">TT Dry Cleaning</h3>
                <p className="text-sm text-background/60">Professional Laundry Services</p>
              </div>
            </div>
            <p className="text-background/70 max-w-md">
              Your trusted laundry partner near SRM Ramapuram. Quality cleaning, 
              affordable prices, and convenient pickup & delivery services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-background/70 hover:text-background transition-colors">Services</a></li>
              <li><a href="#students" className="text-background/70 hover:text-background transition-colors">For Students</a></li>
              <li><a href="#pickup" className="text-background/70 hover:text-background transition-colors">Pickup & Delivery</a></li>
              <li><a href="#contact" className="text-background/70 hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-background mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:+91${phoneNumber}`} className="flex items-center gap-2 text-background/70 hover:text-background transition-colors">
                  <Phone className="w-4 h-4" />
                  +91 98418 71508
                </a>
              </li>
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-background/70">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Near SRM Ramapuram, Porur, Chennai</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 text-center text-sm text-background/50">
          <p>© {currentYear} TT Dry Cleaning. All rights reserved.</p>
          <p className="mt-1">Serving SRM Ramapuram students and Porur residents with quality laundry services.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
