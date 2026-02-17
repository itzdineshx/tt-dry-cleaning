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

/* ---------------- FORM VALIDATION ---------------- */
const contactSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormData = z.infer<typeof contactSchema>;

/* ---------------- ICON CIRCLE ---------------- */
const IconCircle = ({ icon: Icon }: { icon: any }) => (
  <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
    <Icon className="w-7 h-7 text-white" />
  </div>
);

export default function Contact() {
  const phoneNumber = "9841871508";
  const whatsappLink = `https://wa.me/91${phoneNumber}`;
  const [sent, setSent] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await fetch("https://formspree.io/f/mykdjojd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setSent(true);
    form.reset();
  };

  return (
    <section
      id="contact"
      className="bg-slate-50 py-20"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT – CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sky-500 font-medium uppercase tracking-wide mb-2">
            Contact Us
          </p>

          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Get In Touch
          </h2>

          <p className="text-lg text-gray-600 mb-10 max-w-md">
            Ready to get started? Contact us via WhatsApp or phone.
            We’re here to help with all your laundry needs.
          </p>

          <div className="space-y-6">
            <div className="flex gap-5">
              <IconCircle icon={PhoneCall} />
              <div>
                <p className="text-gray-500">Phone</p>
                <p className="text-xl font-semibold">+91 {phoneNumber}</p>
              </div>
            </div>

            <div className="flex gap-5">
              <IconCircle icon={MessageCircle} />
              <div>
                <p className="text-gray-500">WhatsApp</p>
                <p className="text-xl font-semibold">+91 {phoneNumber}</p>
              </div>
            </div>

            <div className="flex gap-5">
              <IconCircle icon={MapPin} />
              <div>
                <p className="text-gray-500">Location</p>
                <p className="text-lg font-semibold">
                  Near SRM Ramapuram, Porur, Chennai
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <IconCircle icon={Clock} />
              <div>
                <p className="text-gray-500">Working Hours</p>
                <p className="text-lg font-semibold">
                  8:00 AM – 9:00 PM (All Days)
                </p>
              </div>
            </div>
          </div>

          <Button asChild className="mt-10 bg-green-500 hover:bg-green-600">
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>
          </Button>
        </motion.div>

        {/* RIGHT – SEND MESSAGE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-10"
        >
          {/* 🔥 THIS WAS MISSING BEFORE */}
          <h3 className="text-2xl font-bold mb-2">
            Send us a Message
          </h3>
          <p className="text-gray-600 mb-8">
            Have questions about our services? We'd love to hear from you!
          </p>

          {sent ? (
            <div className="text-center py-10">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-2">
                Message Sent Successfully!
              </h4>
              <p className="text-gray-600">
                We’ll contact you shortly.
              </p>
              <Button className="mt-6" onClick={() => setSent(false)}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <div>
                <Label>Full Name *</Label>
                <Input {...form.register("name")} placeholder="Your full name" />
              </div>

              <div>
                <Label>Phone Number *</Label>
                <Input {...form.register("phone")} placeholder="Your phone number" />
              </div>

              <div>
                <Label>Email Address *</Label>
                <Input {...form.register("email")} placeholder="your@email.com" />
              </div>

              <div>
                <Label>Message *</Label>
                <Textarea
                  {...form.register("message")}
                  rows={4}
                  placeholder="Tell us about your laundry needs..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-lg py-6"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
