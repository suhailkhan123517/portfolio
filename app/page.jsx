import About from "@/components/About";
import Contact from "@/components/Contact";
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
    </>
  );
};

export default Home;
