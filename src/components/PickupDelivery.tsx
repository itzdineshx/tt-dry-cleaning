import { MessageCircle, Package, Truck, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PickupDelivery = () => {
  const phoneNumber = "9841871508";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=Hi, I want to schedule a pickup`;

  const steps = [
    {
      number: "1",
      icon: MessageCircle,
      title: "Message Us",
      description: "Send a WhatsApp message or call us to schedule your pickup",
    },
    {
      number: "2",
      icon: Package,
      title: "We Collect",
      description: "Our delivery person picks up your clothes from your doorstep",
    },
    {
      number: "3",
      icon: CheckCircle,
      title: "We Clean",
      description: "Your clothes are professionally cleaned with care",
    },
    {
      number: "4",
      icon: Truck,
      title: "We Deliver",
      description: "Fresh, clean clothes delivered back to you within 24-48 hours",
    },
  ];

  return (
    <section id="pickup" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Free Pickup & Delivery
          </h2>
          <p className="text-muted-foreground text-lg">
            We make laundry effortless. Just message us on WhatsApp and we'll handle everything.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 h-full">
                {/* Step Number */}
                <div className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center mb-4">
                  <span className="text-white font-bold">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>

              {/* Arrow (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Service Area Info */}
        <div className="bg-secondary/50 rounded-2xl p-8 md:p-10 text-center">
          <h3 className="text-xl font-display font-bold text-foreground mb-3">
            Service Area: 3-5 km from Porur
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We serve SRM Ramapuram campus, Porur, Valasaravakkam, Ramapuram, and surrounding areas. 
            Free pickup and delivery for all orders!
          </p>
          <Button variant="whatsapp" size="lg" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Schedule Pickup on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PickupDelivery;
