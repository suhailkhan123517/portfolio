import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Work from "@/components/Work";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
