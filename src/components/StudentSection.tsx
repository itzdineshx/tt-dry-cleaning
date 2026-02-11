import {
  GraduationCap,
  Percent,
  Truck,
  MessageCircle,
  Clock,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

/* 🔹 Yellow Icon */
const YellowIcon = ({ icon: Icon }: { icon: any }) => (
  <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
    <Icon className="w-6 h-6 text-white" />
  </div>
);

const StudentSection = () => {
  const phoneNumber = "9841871508";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=Hi, I'm an SRM student interested in your laundry services`;

  const benefits = [
    {
      icon: Percent,
      title: "Student Discounts",
      description: "Special pricing for SRM hostel and PG students",
      anim: { x: -40 },
    },
    {
      icon: Truck,
      title: "Hostel Pickup",
      description: "We come to your hostel for pickup and delivery",
      anim: { x: 40 },
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Get your clothes back within 24–48 hours",
      anim: { y: 40 },
    },
    {
      icon: Shield,
      title: "Careful Handling",
      description: "Your clothes are treated with utmost care",
      anim: { scale: 0.9 },
    },
  ];

  return (
    <section id="students" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              For SRM Students
            </div>

            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Student-Friendly{" "}
              <span className="text-sky-500">Laundry Services</span>
            </h2>

            <p className="text-lg text-gray-600 mb-10 max-w-xl">
              Affordable, convenient laundry services designed for busy college
              life. Focus on studies — we’ll take care of your laundry.
            </p>

            {/* BENEFITS */}
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, ...benefit.anim }}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <YellowIcon icon={benefit.icon} />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              viewport={{ once: true }}
            >
              <Button
                className="bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-6"
                asChild
              >
                <a href={whatsappLink} target="_blank">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Student Discount
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100"
            >
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-sky-500 flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  SRM Ramapuram Students
                </h3>

                <p className="text-gray-600 mb-6">
                  Special hostel & PG rates
                </p>

                <div className="bg-sky-50 rounded-2xl p-6 mb-6">
                  <div className="text-sm text-gray-500 mb-1">
                    Starting from
                  </div>
                  <div className="text-4xl font-bold text-sky-500">
                    ₹40<span className="text-lg text-gray-500">/kg</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Wash & Iron
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-xs text-gray-500">Students</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">24hr</div>
                    <div className="text-xs text-gray-500">Delivery</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Free</div>
                    <div className="text-xs text-gray-500">Pickup</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Glow */}
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-sky-200/40 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-200/40 rounded-full blur-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StudentSection;
