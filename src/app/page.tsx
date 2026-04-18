import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ValueProposition />
      <HowItWorks />
      <Features />
      <Comparison />
      <Testimonials />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}
