import React from "react";
import About from "../components/About";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Team from "../components/Team/Team";
import Testimonials from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Features />
      <Services />
      <Team />
      <Testimonials />
      <CTA />
      <Contact />
    </div>
  );
};

export default Home;
