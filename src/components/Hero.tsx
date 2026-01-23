import { Phone, MessageCircle, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const phoneNumber = "9841871508";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=Hi, I'm interested in your laundry services`;

  const trustBadges = [
    "Free Pickup & Delivery",
    "Student Discounts",
    "Same Day Service",
  ];

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <MapPin className="w-4 h-4" />
            Near SRM Ramapuram, Porur, Chennai
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Professional Laundry & Dry Cleaning
            <span className="block mt-2 text-white/90">You Can Trust</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Quality laundry services for SRM students and Porur residents. 
            Fast turnaround, affordable prices, and doorstep pickup & delivery.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                <CheckCircle className="w-4 h-4 text-white" />
                {badge}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us Now
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href={`tel:+91${phoneNumber}`}>
                <Phone className="w-5 h-5" />
                Call: {phoneNumber}
              </a>
            </Button>
          </div>

          {/* Quick Info */}
          <div className="flex items-center gap-6 mt-10 text-white/80 text-sm animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Open 8 AM - 9 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>3-5 km Service Area</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
