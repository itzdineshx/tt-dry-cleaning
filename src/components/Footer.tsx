import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";

/* 🔹 SAFE animations (NO x / y movement) */
const fadeOnly = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as any },
  },
};

const staggerFade = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const Footer = () => {
  const phoneNumber = "9841871508";
  const whatsappLink = `https://wa.me/91${phoneNumber}`;
  const currentYear = new Date().getFullYear();

  const instagramLink = "https://www.instagram.com/ttdrycleaning";
  const facebookLink = "https://www.facebook.com/ttdrycleaning";

  return (
    <footer className="bg-foreground text-background">
      {/* ✅ ONE container only */}
      <div className="container-section px-4 sm:px-6 lg:px-12 py-16 pb-8">

        {/* GRID */}
        <motion.div
          variants={staggerFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-12 mb-12"
        >
          {/* 🔴 BRAND – STATIC (NO motion.div) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12">
                <img
                  src="/logo.png"
                  alt="TT Dry Cleaning"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  TT <span className="text-sky-500">Dry Cleaning</span>
                </h3>
                <p className="text-sm text-background/60">
                  Professional Laundry Services
                </p>
              </div>
            </div>

            <p className="text-background/70 text-sm max-w-md leading-relaxed">
              Your trusted laundry partner near SRM Ramapuram. Quality cleaning,
              affordable prices, and convenient pickup & delivery services.
            </p>
          </div>

          {/* QUICK LINKS */}
          <motion.div variants={fadeOnly}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["Services", "For Students", "Pickup & Delivery", "Contact"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="text-background/70 hover:text-primary transition cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* OUR SERVICES */}
          <motion.div variants={fadeOnly}>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Wash & Fold</li>
              <li>Dry Cleaning</li>
              <li>Ironing & Pressing</li>
              <li>Shoe Cleaning</li>
              <li>Curtain Cleaning</li>
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={fadeOnly}>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:+91${phoneNumber}`}
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition"
                >
                  <Phone className="w-4 h-4" />
                  +91 98418 71508
                </a>
              </li>

              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>

              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                Near SRM Ramapuram, Porur, Chennai
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* FOLLOW US */}
        <motion.div
          variants={fadeOnly}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <p className="text-sm font-semibold mb-2">Follow Us</p>
          <div className="flex gap-3">
            <motion.a
              whileHover={{ scale: 1.15 }}
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition"
            >
              <Instagram className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition"
            >
              <Facebook className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* DIVIDER */}
        <div className="mt-6 border-t border-background/10" />

        {/* BOTTOM TEXT */}
        <motion.div
          variants={fadeOnly}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-8 text-center text-sm text-background/50"
        >
          <p>© {currentYear} TT Dry Cleaning. All rights reserved.</p>
          <p className="mt-1">
            Serving SRM Ramapuram students and Porur residents with quality laundry services.
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
