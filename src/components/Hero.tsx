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
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      {/* LIGHT + BLUE but LITTLE DARKER */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-sky-400/60 to-blue-600/70" />

      {/* ================= HERO CONTENT ================= */}
      <div className="relative container mx-auto px-6 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl text-slate-900 space-y-6"
          >
            {/* Location */}
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              <MapPin className="w-4 h-4 text-blue-700" />
              Near SRM Ramapuram, Porur, Chennai
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Professional</span>
              <span className="block">
                <span>Laundry &</span>
                {/* SAME COLOR FOR DRY CLEANING */}
                <span className="ml-2 text-sky-500">
                  Dry Cleaning
                </span>
              </span>
              <span className="block text-slate-700 mt-1">
                You Can Trust
              </span>
            </h1>

            <p className="text-slate-700 max-w-lg">
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
                  className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-800"
                >
                  <CheckCircle className="w-3 h-3 text-green-600" />
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
            <div className="flex gap-6 pt-6 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-700" />
                Open 8 AM – 9 PM
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-700" />
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
              className="w-[380px] h-auto drop-shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* ================= MOVING STRIP ================= */}
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
                className="flex items-center gap-3 whitespace-nowrap text-lg font-semibold bg-gradient-to-r from-blue-800 via-sky-600 to-blue-500 bg-clip-text text-transparent"
              >
                <Icon className="w-6 h-6 text-blue-700" />
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
