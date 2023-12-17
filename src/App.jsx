import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
const App = () => {
  useEffect(() => {
    AOS.init({ easing: "ease-in-out" });
  }, []);
  return (
    <div className="max-w-[85rem] mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
