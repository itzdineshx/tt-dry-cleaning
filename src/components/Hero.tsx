import { Phone, MessageCircle, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
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

      <div className="relative container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT – fade + slide */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl text-white space-y-6"
          >

            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mt-4">
              <MapPin className="w-4 h-4" />
              Near SRM Ramapuram, Porur, Chennai
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Professional</span>
              <span className="block">
                <span className="text-white">Laundry &</span>
                <span className="ml-2 text-sky-400">Dry Cleaning</span>
              </span>
              <span className="block text-white/90 mt-1">
                You Can Trust
              </span>
            </h1>

            <p className="text-white/85 text-base max-w-lg">
              Quality laundry services for SRM students and Porur residents.
              Fast turnaround, affordable prices.
            </p>

            {/* Trust Badges */}
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

            {/* CTA Buttons */}
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

            {/* Quick Info */}
            <div className="flex gap-6 pt-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Open 8 AM - 9 PM
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                3–5 km Service Area
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE – fade + scale ONCE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:flex justify-end items-center"
          >
            <img
              src="/hero.png"
              alt="Dry Cleaning"
              className="w-[380px] h-auto"
            />
          </motion.div>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
