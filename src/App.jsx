import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Careers from "./pages/Careers";
import Home from "./pages/Home";
import JobApply from "./pages/JobApply";
import JobDetails from "./pages/JobDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      {" "}
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/job-apply" element={<JobApply />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
