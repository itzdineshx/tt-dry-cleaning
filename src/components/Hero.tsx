import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle,
  Zap,
  Shirt,
  Sparkles,
  ShoppingBag,
  Package
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  { icon: Zap, label: "Steam Ironing" },
  { icon: Shirt, label: "Wash & Iron" },
  { icon: Sparkles, label: "Ultra Cleaning" },
  { icon: ShoppingBag, label: "Bag Cleaning" },
  { icon: Package, label: "Wash & Fold" },
];

const Hero: React.FC = () => {
  const phoneNumber = "9841871508";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=Hi, I'm interested in your laundry services`;

  const trustBadges = [
    "Free Pickup & Delivery",
    "Student Discounts",
    "Same Day Service",
  ];

  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ================= HERO CONTENT ================= */}
      <div className="relative container mx-auto px-6 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl text-white space-y-6"
          >
            {/* Location */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              <MapPin className="w-4 h-4" />
              Near SRM Ramapuram, Porur, Chennai
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Professional</span>
              <span className="block">
                <span>Laundry &</span>
                <span className="ml-2 text-sky-400">Dry Cleaning</span>
              </span>
              <span className="block text-white/90 mt-1">
                You Can Trust
              </span>
            </h1>

            <p className="text-white/85 max-w-lg">
              Quality laundry services for SRM students and Porur residents.
              Fast turnaround, affordable prices.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium"
                >
                  <CheckCircle className="w-3 h-3" />
                  {badge}
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" asChild>
                <a href={whatsappLink} target="_blank">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>

              <Button variant="heroOutline" size="lg" asChild>
                <a href={`tel:+91${phoneNumber}`}>
                  <Phone className="w-5 h-5" />
                  Call: {phoneNumber}
                </a>
              </Button>
            </div>

            {/* Quick info */}
            <div className="flex gap-6 pt-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Open 8 AM – 9 PM
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                3–5 km Service Area
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:flex justify-end"
          >
            <img
              src="/hero.png"
              alt="Laundry Service"
              className="w-[380px] h-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* ================= MOVING NEWS-STYLE STRIP ================= */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <motion.div
          className="flex w-max gap-16 items-center py-4"
          animate={{ x: ["0px", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity
          }}
        >
          {[...services, ...services].map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="
                  flex items-center gap-3 whitespace-nowrap
                  text-lg font-semibold
                  bg-gradient-to-r from-white via-sky-300 to-sky-500
                  bg-clip-text text-transparent
                "
              >
                <Icon className="w-6 h-6 text-sky-400" />
                <span>{service.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
       <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-white pointer-events-none" />

    </section>
  );
};

export default Hero;
