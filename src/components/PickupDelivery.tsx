import { motion, cubicBezier } from "framer-motion";
import {
  PhoneCall,
  Truck,
  Sparkles,
  PackageCheck
} from "lucide-react";

/* ===================== STEPS DATA ===================== */
const steps = [
  {
    id: 1,
    title: "Book Your Laundry Pickup",
    desc: "Schedule a pickup in just a few clicks — message us on WhatsApp or give us a quick call.",
    icon: PhoneCall,
  },
  {
    id: 2,
    title: "Pickup by TT Dry Cleaning",
    desc: "Our delivery executive collects your laundry from your doorstep quickly and safely.",
    icon: Truck,
  },
  {
    id: 3,
    title: "Expert Cleaning Process",
    desc: "Your clothes are washed, dried, ironed, and folded using professional techniques.",
    icon: Sparkles,
  },
  {
    id: 4,
    title: "Fast & Fresh Delivery",
    desc: "Fresh, clean, and neatly packed clothes are delivered back to your home on time.",
    icon: PackageCheck,
  },
];

/* ===================== ANIMATIONS ===================== */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: cubicBezier(0.25, 0.46, 0.45, 0.94) },
  },
};

/* ===================== COMPONENT ===================== */
const PickupDelivery: React.FC = () => {
  return (
    <section id="pickup" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===================== HEADING ===================== */}
        <div className="mb-14">
          <p className="text-sky-500 font-medium uppercase tracking-wide">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-tight">
            How <span className="text-sky-500">TT Dry Cleaning</span> <br />
            Simplifies Your Laundry Experience
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl">
            From pickup to delivery, we handle your laundry with care so you can
            relax and enjoy fresh clothes every time.
          </p>
        </div>

        {/* ===================== CONTENT ===================== */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ---------- LEFT SIDE : VIDEO ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg bg-white"
          >
            <video
              src="/pickup-delivery.mp4"   
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/pickup-process.jpg" 
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* ---------- RIGHT SIDE : STEPS ---------- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  className="flex items-start gap-5"
                >
                  {/* ICON */}
                  <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mt-1 max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PickupDelivery;
