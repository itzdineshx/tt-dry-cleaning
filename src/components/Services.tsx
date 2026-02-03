import { Shirt, Sparkles, Wind, Home, Scissors, Flame } from "lucide-react";

import laundryImg from "../assets/laundry.jpg";
import dryCleanImg from "../assets/dry-cleaning.png";
import homeBulkImg from "../assets/home-bulk.jpg";
import extraImg from "../assets/extra-services.jpg";
import ironingImg from "../assets/ironing.jpg";
import expressImg from "../assets/express.jpg";

const Services = () => {
  const serviceCategories = [
    {
      icon: Shirt,
      title: "Laundry Services",
      description: "Complete wash and care for everyday clothing",
      services: ["KG Wash", "Wash & Iron", "Steam Ironing", "Student Washing"],
      color: "bg-primary/10 text-primary",
      image: laundryImg,
    },
    {
      icon: Sparkles,
      title: "Dry Cleaning",
      description: "Professional care for delicate fabrics",
      services: ["Sarees", "Suits & Blazers", "Silk Clothes", "Children Clothes"],
      color: "bg-accent/10 text-accent",
      image: dryCleanImg,
    },
    {
      icon: Home,
      title: "Home & Bulk Cleaning",
      description: "Large items cleaned with precision",
      services: ["Bed Sheets", "Blankets", "Carpets", "Sofa Covers"],
      color: "bg-primary/10 text-primary",
      image: homeBulkImg,
    },
    {
      icon: Scissors,
      title: "Extra Services",
      description: "Special treatments for tough jobs",
      services: ["Stain Removal", "Bleaching", "Darning", "Fabric Repair"],
      color: "bg-accent/10 text-accent",
      image: extraImg,
    },
    {
      icon: Wind,
      title: "Ironing Services",
      description: "Crisp finish for all your clothes",
      services: ["EB Ironing", "Gas Ironing", "Coal Ironing", "Steam Press"],
      color: "bg-primary/10 text-primary",
      image: ironingImg,
    },
    {
      icon: Flame,
      title: "Express Service",
      description: "When you need it fast",
      services: ["Same Day Delivery", "Rush Orders", "Priority Cleaning", "Quick Press"],
      color: "bg-accent/10 text-accent",
      image: expressImg,
    },
  ];

  return (

    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Complete Laundry Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From everyday clothes to delicate fabrics, we handle everything with care and professionalism.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-card card-hover border border-border/50"
            >
              {/* ✅ Image */}
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-44 object-cover rounded-xl mb-6"
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mb-6`}
              >
                <category.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {category.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {category.description}
              </p>

              {/* Service List */}
              <ul className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <li
                    key={serviceIndex}
                    className="flex items-center gap-2 text-foreground/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
