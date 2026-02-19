import { IndianRupee } from "lucide-react";

type PriceItem = {
  service: string;
  price: string;
};

const priceList: PriceItem[] = [
  { service: "Wash & Iron", price: "₹80 / kg" },
  { service: "Dry Cleaning", price: "Starts from ₹120" },
  { service: "Steam Iron", price: "₹20 / cloth" },
  { service: "Curtain Cleaning", price: "₹60 / kg" },
  { service: "Shoe Cleaning", price: "₹300 / pair" },
];

const PriceList: React.FC = () => {
  return (
    <section className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Price List
          </h1>

          <div className="grid sm:grid-cols-2 gap-4">
            {priceList.map((item) => (
              <div
                key={item.service}
                className="flex items-center justify-between border rounded-xl px-5 py-4 hover:shadow-sm transition"
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
};

export default PriceList;
