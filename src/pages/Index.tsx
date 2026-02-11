import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import StudentSection from "@/components/StudentSection";
import PickupDelivery from "@/components/PickupDelivery";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials"; 
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <StudentSection />
        <PickupDelivery />
        <Contact />
        <Testimonials />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
