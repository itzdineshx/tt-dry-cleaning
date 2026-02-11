import { Shirt, Sparkles, Wind, Scissors } from "lucide-react";
import { motion } from "framer-motion";
import type { FC } from "react";

import laundryImg from "../assets/laundry.jpg";
import dryCleanImg from "../assets/dry-cleaning.png";
import ironingImg from "../assets/ironing.jpg";
import stainImg from "../assets/express.jpg";

/* 🔹 Types */
interface ServiceItem {
  title: string;
  image: string;
  icon: FC<{ className?: string }>;
}

/* 🔹 Animation Variants */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Services: FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Laundry Express",
      image: laundryImg,
      icon: Shirt,
    },
    {
      title: "Dry Cleaning",
      image: dryCleanImg,
      icon: Sparkles,
    },
    {
      title: "Ironing Service",
      image: ironingImg,
      icon: Wind,
    },
    {
      title: "Stain Cleaning",
      image: stainImg,
      icon: Scissors,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* 🔹 Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-sky-500">Services</span>{" "}
            <span className="text-foreground">
              Designed For Your Convenience
            </span>
          </h2>

          <p className="text-muted-foreground text-lg">
            Enjoy a smoother, smarter laundry experience with services thoughtfully
            designed around your comfort and schedule.
          </p>
        </motion.div>

        {/* 🔹 Services Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="rounded-3xl overflow-hidden shadow-lg bg-card"
              >
                {/* 🔹 Image */}
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover"
                  />

                  {/* 🔹 Floating Label */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-xl px-5 py-3 flex items-center gap-3 shadow-xl">
                    <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">
                      {service.title}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
