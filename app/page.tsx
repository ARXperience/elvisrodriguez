import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import AuthoritySection from "@/components/AuthoritySection";
import ServicesSection from "@/components/ServicesSection";
import ColorDiagnosisSection from "@/components/ColorDiagnosisSection";
import VideoGallery from "@/components/VideoGallery";
import CinematicBanner from "@/components/CinematicBanner";
import HomeCareSection from "@/components/HomeCareSection";
import ProductStore from "@/components/ProductStore";
import SmartAgendaSection from "@/components/SmartAgendaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import BlogSection from "@/components/BlogSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Marquee variant="dark" />
        <AuthoritySection />
        <ServicesSection />
        <ColorDiagnosisSection />
        <VideoGallery />
        <CinematicBanner />
        <HomeCareSection />
        <ProductStore />
        <SmartAgendaSection />
        <TestimonialsSection />
        <LocationSection />
        <BlogSection />
        <Marquee variant="light" />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
