import AccordionSection from "./components/section/AccordionSection";
import AirlinesSection from "./components/section/AirlinesSection";
import BannerSection from "./components/section/BannerSection";
import BlogAndBanner from "./components/section/BlogAndBanner";
import DestinationSection from "./components/section/DestinationSection";
import Footer from "./components/section/Footer";
import Header from "./components/section/Header";
import HeroSection from "./components/section/HeroSection";
import MapSection from "./components/section/MapSection";
import ReservationSection from "./components/section/ReservationSection";
import TestimonialSection from "./components/section/TestimonialSection";
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AirlinesSection />
      <DestinationSection />
      <ReservationSection />
      <MapSection />
      <BlogAndBanner />
      <TestimonialSection />
      <AccordionSection />
      <BannerSection />
      <Footer />
    </>
  );
}

export default App;
