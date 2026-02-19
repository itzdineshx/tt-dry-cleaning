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

/* ---------------- ICON CIRCLE ---------------- */
const IconCircle = ({ icon: Icon }: { icon: any }) => (
  <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center">
    <Icon className="w-7 h-7 text-white" />
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

  /* ---------------- EMAIL SEND ---------------- */
  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSent(true);
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        {/* LEFT */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <IconCircle icon={PhoneCall} />
              <p className="text-xl font-semibold">+91 {phoneNumber}</p>
            </div>

            <div className="flex gap-4">
              <IconCircle icon={MessageCircle} />
              <p className="text-xl font-semibold">WhatsApp</p>
            </div>

            <div className="flex gap-4">
              <IconCircle icon={MapPin} />
              <p>Near SRM Ramapuram, Porur, Chennai</p>
            </div>

            <div className="flex gap-4">
              <IconCircle icon={Clock} />
              <p>8:00 AM – 9:00 PM</p>
            </div>
          </div>

          <Button asChild className="mt-8 bg-green-500">
            <a href={whatsappLink} target="_blank">
              WhatsApp Us
            </a>
          </Button>
        </motion.div>

        {/* RIGHT */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="bg-white p-10 rounded-2xl shadow-lg">

          {sent ? (
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">Message Sent!</h3>
              <Button className="mt-4" onClick={() => setSent(false)}>
                Send Another
              </Button>
            </div>
          ) : (
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <Label>Name</Label>
                <Input {...form.register("name")} />
              </div>

              <div>
                <Label>Phone</Label>
                <Input {...form.register("phone")} />
              </div>

              <div>
                <Label>Email</Label>
                <Input {...form.register("email")} />
              </div>

              <div>
                <Label>Message</Label>
                <Textarea {...form.register("message")} rows={4} />
              </div>

              <Button type="submit" disabled={loading} className="w-full bg-sky-500">
                {loading ? "Sending..." : <><Send className="mr-2" /> Send Message</>}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
