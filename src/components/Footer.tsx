import { Phone, Mail, MapPin } from "lucide-react";
import { Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";

/* 🔹 SAFE fade animation */
const fadeOnly = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as any },
  },
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-100">

      {/* 🔵 CTA SECTION (NO OVERLAP – SAFE) */}
      <motion.div
        variants={fadeOnly}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 pt-20"
      >
        <div className="bg-gradient-to-r from-sky-500 to-blue-600
                        rounded-2xl p-10 md:p-12 shadow-xl
                        flex flex-col md:flex-row
                        items-center justify-between gap-8 text-white">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold mb-2">
              Visit TT Dry Cleaning
            </h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Professional laundry services near SRM Ramapuram & Porur.
              Walk in or find us instantly on Google Maps.
            </p>

            <a
              href="https://maps.google.com/?q=SRM+Ramapuram+Porur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-white text-sky-600
                         font-semibold px-6 py-2 rounded-full text-sm
                         hover:bg-white/90 transition"
            >
              Open in Google Maps
            </a>
          </div>

          {/* RIGHT MAP (ERROR-FREE) */}
          <div className="w-full md:w-80 h-44 rounded-xl overflow-hidden bg-white">
            <iframe
              title="TT Dry Cleaning Location"
              src="https://www.google.com/maps?q=SRM+Ramapuram+Porur&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

        </div>
      </motion.div>

      {/* ⚪ MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* BRAND */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              TT <span className="text-sky-500">Dry Cleaning</span>
            </h3>

            <p className="text-sm text-slate-600 max-w-md">
              Trusted laundry partner for SRM Ramapuram students and
              Porur residents. Clean. Affordable. Reliable.
            </p>

            <div className="flex gap-3">
              <a className="w-8 h-8 bg-slate-200 rounded-full
                            flex items-center justify-center hover:bg-sky-500
                            hover:text-white transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a className="w-8 h-8 bg-slate-200 rounded-full
                            flex items-center justify-center hover:bg-sky-500
                            hover:text-white transition">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>About Us</li>
              <li>Services</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900">Support</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Student Offers</li>
              <li>Feedback</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 98418 71508
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                ttdrycleaning@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                SRM Ramapuram, Porur, Chennai
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t mt-12 pt-6
                        flex flex-col sm:flex-row
                        justify-between text-xs text-slate-500">
          <p>© {year} TT Dry Cleaning. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
