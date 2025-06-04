import React from "react";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Gallery from "./components/Gallery";
import AboutServices from "./components/AboutServices";
import CategoryShowcase from "./components/CategoryShowcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <HeroSlider />
        <Gallery />
        <AboutServices />

        <div className="mb-20">
          <CategoryShowcase
            title="WEDDING"
            description="Capturing beautiful moments on your special day with artistic vision and attention to detail."
            category="wedding"
            bgImage="https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=1920"
          />
        </div>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
