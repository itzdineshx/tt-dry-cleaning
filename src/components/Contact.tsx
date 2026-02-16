import { motion } from "framer-motion";
import {
  PhoneCall,
  MessageCircle,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* Yellow Icon */
const IconCircle = ({ icon: Icon }: { icon: any }) => (
  <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
    <Icon className="w-7 h-7 text-white" />
  </div>
);

const Contact = () => {
  const phoneNumber = "9841871508";
  const whatsappLink = `https://wa.me/91${phoneNumber}`;

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT – CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sky-500 font-medium uppercase tracking-wide mb-2">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get In Touch
          </h2>

          <p className="text-lg text-gray-600 max-w-xl mb-12">
            Ready to get started? Reach out to us anytime.
            We’re happy to help with all your laundry needs.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6">
              <IconCircle icon={PhoneCall} />
              <div>
                <p className="text-gray-500 mb-1">Phone</p>
                <p className="text-xl font-semibold text-slate-900">
                  +91 {phoneNumber}
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <IconCircle icon={MessageCircle} />
              <div>
                <p className="text-gray-500 mb-1">WhatsApp</p>
                <p className="text-xl font-semibold text-slate-900">
                  +91 {phoneNumber}
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <IconCircle icon={MapPin} />
              <div>
                <p className="text-gray-500 mb-1">Location</p>
                <p className="text-lg font-semibold text-slate-900">
                  Near SRM Ramapuram, Porur, Chennai
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <IconCircle icon={Clock} />
              <div>
                <p className="text-gray-500 mb-1">Working Hours</p>
                <p className="text-lg font-semibold text-slate-900">
                  8:00 AM – 9:00 PM (All Days)
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-12 flex-wrap">
            <Button
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-6"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>

            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 px-6 py-6"
              asChild
            >
              <a href={`tel:+91${phoneNumber}`}>
                <PhoneCall className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </motion.div>

        {/* RIGHT – SEND MESSAGE FORM (IMAGE STYLE) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-10">

            <h3 className="text-3xl font-bold mb-2">
              Send us a Message
            </h3>
            <p className="text-gray-600 mb-8">
              Have questions about our services? We'd love to hear from you!
            </p>

            <form className="space-y-6">

              {/* NAME + PHONE */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your laundry needs..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              {/* SUBMIT */}
              <Button className="bg-sky-500 hover:bg-sky-600 text-white w-full py-6 text-lg">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
