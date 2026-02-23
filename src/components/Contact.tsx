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
import emailjs from "@emailjs/browser";

/* ---------------- FORM VALIDATION ---------------- */
const contactSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const IconCircle = ({ icon: Icon }: { icon: any }) => (
  <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center shadow-md">
    <Icon className="w-6 h-6 text-white" />
  </div>
);

export default function Contact() {
  const phoneNumber = "9841871508";
  const whatsappLink = `https://wa.me/91${phoneNumber}`;
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSent(true);
      form.reset();
    } catch (error) {
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-100 py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sky-500 font-semibold tracking-wide uppercase">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold mt-2 mb-6">
            Get In Touch
          </h2>

          <p className="text-gray-600 mb-10 max-w-md">
            Ready to get started? Contact us via WhatsApp or phone.
            We’re here to help with all your laundry needs.
          </p>

          <div className="space-y-8">

            <div className="flex items-start gap-5">
              <IconCircle icon={PhoneCall} />
              <div>
                <p className="text-gray-500">Phone</p>
                <p className="text-lg font-semibold">
                  +91 {phoneNumber}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <IconCircle icon={MessageCircle} />
              <div>
                <p className="text-gray-500">WhatsApp</p>
                <p className="text-lg font-semibold">
                  +91 {phoneNumber}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <IconCircle icon={MapPin} />
              <div>
                <p className="text-gray-500">Location</p>
                <p className="font-medium">
                  Near SRM Ramapuram, Porur, Chennai
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <IconCircle icon={Clock} />
              <div>
                <p className="text-gray-500">Working Hours</p>
                <p className="font-medium">
                  8:00 AM – 9:00 PM (All Days)
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-12 rounded-3xl shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-2">
            Send us a Message
          </h3>
          <p className="text-gray-500 mb-8">
            Have questions about our services? We'd love to hear from you!
          </p>

          {sent ? (
            <div className="text-center py-10">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">Message Sent!</h3>
              <Button
                className="mt-6 bg-sky-500"
                onClick={() => setSent(false)}
              >
                Send Another
              </Button>
            </div>
          ) : (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <Label>Full Name *</Label>
                  <Input
                    placeholder="Your full name"
                    {...form.register("name")}
                  />
                </div>

                <div>
                  <Label>Phone Number *</Label>
                  <Input
                    placeholder="Your phone number"
                    {...form.register("phone")}
                  />
                </div>
              </div>

              <div>
                <Label>Email Address *</Label>
                <Input
                  placeholder="your.email@example.com"
                  {...form.register("email")}
                />
              </div>

              <div>
                <Label>Message *</Label>
                <Textarea
                  rows={5}
                  placeholder="Tell us about your laundry needs..."
                  {...form.register("message")}
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-sky-500 hover:bg-sky-600 text-white py-6 text-lg rounded-xl"
              >
                {loading ? "Sending..." : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}