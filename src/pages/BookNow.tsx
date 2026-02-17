import { Calendar, MessageCircle, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

const priceList = [
  { service: "Wash & Iron", price: "₹80 / kg" },
  { service: "Dry Cleaning", price: "Starts from ₹120" },
  { service: "Steam Iron", price: "₹20 / cloth" },
  { service: "Curtain Cleaning", price: "₹60 / kg" },
  { service: "Shoe Cleaning", price: "₹300 / pair" },
];

export default function BookNow() {
  return (
    <section className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-5xl mx-auto px-6 space-y-12">

        {/* BOOK CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
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
              asChild
              variant="outline"
              className="border-sky-500 text-sky-500 text-lg px-6 py-6"
            >
              <a href="/#contact">
                Contact Form
              </a>
            </Button>
          </div>
        </div>

        {/* PRICE LIST */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Price List
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {priceList.map((item) => (
              <div
                key={item.service}
                className="flex items-center justify-between border rounded-xl px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <IndianRupee className="w-5 h-5 text-sky-500" />
                  <span className="font-medium">
                    {item.service}
                  </span>
                </div>

                <span className="font-semibold text-sky-600">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            * Prices may vary based on fabric type and quantity.
          </p>
        </div>

      </div>
    </section>
  );
}
