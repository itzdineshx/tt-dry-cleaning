import { GraduationCap, Percent, Truck, MessageCircle, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const StudentSection = () => {
  const phoneNumber = "9841871508";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=Hi, I'm an SRM student interested in your laundry services`;

  const benefits = [
    {
      icon: Percent,
      title: "Student Discounts",
      description: "Special pricing for SRM hostel and PG students",
    },
    {
      icon: Truck,
      title: "Hostel Pickup",
      description: "We come to your hostel for pickup and delivery",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Get your clothes back within 24-48 hours",
    },
    {
      icon: Shield,
      title: "Careful Handling",
      description: "Your clothes are treated with utmost care",
    },
  ];

  return (
    <section id="students" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              For SRM Students
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Student-Friendly Laundry Services
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              We understand the busy life of college students. That's why we offer 
              affordable, convenient laundry services with hostel pickup and quick delivery.
              Focus on your studies – we'll handle the laundry!
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button variant="whatsapp" size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Get Student Discount
              </a>
            </Button>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-large border border-border/50">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full hero-gradient flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  SRM Ramapuram Students
                </h3>
                <p className="text-muted-foreground mb-6">
                  Special rates for hostel & PG residents
                </p>

                {/* Pricing Example */}
                <div className="bg-secondary rounded-2xl p-6 mb-6">
                  <div className="text-sm text-muted-foreground mb-2">Starting from</div>
                  <div className="text-4xl font-display font-bold text-primary mb-2">
                    ₹40<span className="text-lg text-muted-foreground">/kg</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Wash & Iron Service</div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-foreground">500+</div>
                    <div className="text-xs text-muted-foreground">Students Served</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">24hr</div>
                    <div className="text-xs text-muted-foreground">Turnaround</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">Free</div>
                    <div className="text-xs text-muted-foreground">Pickup</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSection;
