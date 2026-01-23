import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const phoneNumber = "9841871508";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=Hi, I'm interested in your laundry services`;

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98418 71508",
      link: `tel:+91${phoneNumber}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91 98418 71508",
      link: whatsappLink,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Near SRM Ramapuram, Porur, Chennai",
      link: "https://maps.google.com/?q=SRM+Ramapuram+Porur+Chennai",
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "8:00 AM - 9:00 PM (All Days)",
      link: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to get started? Contact us via WhatsApp or phone. 
              We're here to help with all your laundry needs!
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-foreground font-medium">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="whatsapp" size="lg" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={`tel:+91${phoneNumber}`}>
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2799673785893!2d80.1732!3d13.0272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260000000000%3A0x0!2sSRM%20Institute%20of%20Science%20and%20Technology%2C%20Ramapuram!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TT Dry Cleaning Location"
            />
          </div>
        </div>

        {/* Trust Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 text-muted-foreground text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Trusted by 500+ Customers
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Serving Since 2015
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              100% Satisfaction Guaranteed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
