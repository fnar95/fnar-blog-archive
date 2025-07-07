import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TwitterSection from "@/components/TwitterSection";
import YouTubeSection from "@/components/YouTubeSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <Hero />
      <About />
      <TwitterSection />
      <YouTubeSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
