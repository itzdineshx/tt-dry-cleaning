import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arun Kumar",
    role: "Happy Customer",
    image: "/user1.jpg",
    rating: 5,
    review:
      "Fast, reliable, and professional service. My clothes always come back clean and fresh.",
  },
  {
    name: "Sneha R",
    role: "College Student",
    image: "/user2.jpg",
    rating: 5,
    review:
      "Pickup and delivery are super convenient. I never worry about laundry anymore.",
  },
  {
    name: "Vijay S",
    role: "Working Professional",
    image: "/user3.jpg",
    rating: 4,
    review:
      "Great quality and timely delivery. Clothes are neatly folded and handled with care.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          What People Say{" "}
          <span className="text-sky-500">About TT Dry Cleaning</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Real reviews from customers who love our fast, clean, and reliable
          laundry service 💙
        </p>
      </div>

      {/* SLIDER */}
      <motion.div
        className="flex gap-8 w-max px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...testimonials, ...testimonials].map((item, index) => (
          <div
            key={index}
            className="min-w-[320px] max-w-[320px] bg-white rounded-2xl shadow-lg p-6 relative"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < item.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              {item.review}
            </p>

            {/* User */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-slate-900">
                  {item.name}
                </h4>
                <p className="text-xs text-sky-500">{item.role}</p>
              </div>
            </div>

            <Quote className="absolute bottom-5 right-5 w-8 h-8 text-sky-100" />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
