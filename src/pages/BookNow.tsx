import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BookNow() {
  return (
    <section className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-3xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-10 text-center"
        >
          <Calendar className="w-14 h-14 text-sky-500 mx-auto mb-4" />

          <h1 className="text-3xl font-bold mb-3">
            Book Laundry Service
          </h1>

          <p className="text-gray-600 mb-8">
            Schedule your laundry pickup or contact us instantly via WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-green-500 hover:bg-green-600 text-lg px-6 py-6"
            >
              <a
                href="https://wa.me/919841871508?text=Hi, I want to book a laundry service"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </a>
            </Button>

            <Button
              variant="outline"
              className="border-sky-500 text-sky-500 text-lg px-6 py-6"
              asChild
            >
              <a href="/#contact">
                Contact Form
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
