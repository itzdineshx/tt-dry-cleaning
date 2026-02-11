import { motion } from "framer-motion";
import { PhoneCall, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

/* Yellow Icon Component */
const IconCircle = ({ icon: Icon }: { icon: any }) => {
  return (
    <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
      <Icon className="w-7 h-7 text-white" />
    </div>
  );
};

const Contact = () => {
  const phoneNumber = "9841871508";
  const whatsappLink = `https://wa.me/91${phoneNumber}`;

  return (
    <section className="bg-slate-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-sky-500 font-medium uppercase tracking-wide mb-2"
          >
            Contact Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-xl mb-12"
          >
            Ready to get started? Contact us via WhatsApp or phone.
            We’re here to help with all your laundry needs.
          </motion.p>

          {/* Phone – LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true }}
            className="flex gap-6 mb-8"
          >
            <IconCircle icon={PhoneCall} />
            <div>
              <p className="text-base text-gray-500 mb-1">Phone</p>
              <p className="text-xl font-semibold text-slate-900">
                +91 {phoneNumber}
              </p>
            </div>
          </motion.div>

          {/* WhatsApp – RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-6 mb-8"
          >
            <IconCircle icon={MessageCircle} />
            <div>
              <p className="text-base text-gray-500 mb-1">WhatsApp</p>
              <p className="text-xl font-semibold text-slate-900">
                +91 {phoneNumber}
              </p>
            </div>
          </motion.div>

          {/* Location – BOTTOM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex gap-6 mb-8"
          >
            <IconCircle icon={MapPin} />
            <div>
              <p className="text-base text-gray-500 mb-1">Location</p>
              <p className="text-lg font-semibold text-slate-900">
                Near SRM Ramapuram, Porur, Chennai
              </p>
            </div>
          </motion.div>

          {/* Working Hours – SCALE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-6 mb-12"
          >
            <IconCircle icon={Clock} />
            <div>
              <p className="text-base text-gray-500 mb-1">Working Hours</p>
              <p className="text-lg font-semibold text-slate-900">
                8:00 AM – 9:00 PM (All Days)
              </p>
            </div>
          </motion.div>

          {/* CTA BUTTONS – UP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.25 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <Button
              className="bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-6"
              asChild
            >
              <a href={whatsappLink} target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>

            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-6 py-6"
              asChild
            >
              <a href={`tel:+91${phoneNumber}`}>
                <PhoneCall className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
