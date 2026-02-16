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

/* ---------------- VALIDATION ---------------- */
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

/* ---------------- ICON ---------------- */
const IconCircle = ({ icon: Icon }: { icon: any }) => (
  <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center">
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
    await new Promise((res) => setTimeout(res, 1500));
    console.log("Form Submitted:", data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    form.reset();
  };

  return (
    <section id="contact" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>

          <div className="space-y-6">
            <div className="flex gap-5">
              <IconCircle icon={PhoneCall} />
              <p className="text-xl font-semibold">+91 {phoneNumber}</p>
            </div>

            <div className="flex gap-5">
              <IconCircle icon={MessageCircle} />
              <p className="text-xl font-semibold">WhatsApp Available</p>
            </div>

            <div className="flex gap-5">
              <IconCircle icon={MapPin} />
              <p className="text-lg">Near SRM Ramapuram, Porur</p>
            </div>

            <div className="flex gap-5">
              <IconCircle icon={Clock} />
              <p className="text-lg">8:00 AM – 9:00 PM</p>
            </div>
          </div>

          <Button className="mt-8 bg-green-500 hover:bg-green-600" asChild>
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>
          </Button>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-10"
        >
          {isSubmitted ? (
            <div className="text-center py-10">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">Message Sent!</h3>
              <Button onClick={() => setIsSubmitted(false)} className="mt-4">
                Send Another
              </Button>
            </div>
          ) : (
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label>Full Name</Label>
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
                <Textarea rows={4} {...form.register("message")} />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sky-500 hover:bg-sky-600"
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
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
};

export default Contact;
