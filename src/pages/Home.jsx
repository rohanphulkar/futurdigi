import React from "react";
import Blog from "../components/Blogs/Blog";
import Contact from "../components/Contact/Contact";
import Features from "../components/Features/Features";
import Features2 from "../components/Features/Features2";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Team from "../components/Team/Team";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Features2 />
      <Services />
      <Team />
      <Testimonial />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
