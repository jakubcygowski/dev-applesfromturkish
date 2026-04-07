import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import ApplesSection from "@/components/ApplesSection";
import PreparationSection from "@/components/PreparationSection";
import ProcessSection from "@/components/ProcessSection";
import GlobalMarketsSection from "@/components/GlobalMarketsSection";
import CertificationsSection from "@/components/CertificationsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ContactForm />
        <ApplesSection />
        <PreparationSection />
        <ProcessSection />
        <GlobalMarketsSection />
        <CertificationsSection />
      </main>
      <Footer />
    </>
  );
}
