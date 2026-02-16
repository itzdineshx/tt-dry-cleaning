import { motion } from "framer-motion";
import {
  PhoneCall,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

/* ================= VALIDATION ================= */
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

/* ================= ICON ================= */
const IconCircle = ({ icon: Icon }: { icon: any }) => (
  <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
    <Icon className="w-7 h-7 text-white" />
  </div>
);

const Contact = () => {
  const phoneNumber = "9841871508";
  const whatsappLink = `https://wa.me/91${phoneNumber}`;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((res) => setTimeout(res, 1500));
      console.log("Submitted:", data);
      setIsSubmitted(true);
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-50 py-20 overflow-hidden">
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
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-6" asChild>
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>

            <Button variant="outline" className="border-sky-600 text-sky-600 px-6 py-6" asChild>
              <a href={`tel:+91${phoneNumber}`}>
                <PhoneCall className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </motion.div>

        {/* RIGHT – FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-10"
        >
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                Thank you for your message!
              </h3>
              <p className="text-gray-600 mb-6">
                We’ll get back to you within 24 hours.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <>
              <h3 className="text-3xl font-bold mb-2">Send us a Message</h3>
              <p className="text-gray-600 mb-8">
                Have questions about our services? We'd love to hear from you!
              </p>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label>Full Name *</Label>
                    <Input {...form.register("name")} />
                  </div>
                  <div>
                    <Label>Phone *</Label>
                    <Input {...form.register("phone")} />
                  </div>
                </div>

                <div>
                  <Label>Email *</Label>
                  <Input type="email" {...form.register("email")} />
                </div>

                <div>
                  <Label>Message *</Label>
                  <Textarea rows={4} {...form.register("message")} />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white py-6"
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;