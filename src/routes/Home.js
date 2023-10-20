import React from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Second from "../Components/Second";
import Third from "../Components/Third";

import Testimonial from "../Components/Testimonial";
import Contact from "../Components/Contact";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Third />
      <Second />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
