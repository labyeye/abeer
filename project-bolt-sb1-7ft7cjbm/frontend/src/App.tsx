import React from "react";
import Navbar from "./components/HomePage/Navbar";
import HeroSlider from "./components/HomePage/HeroSlider";
import Gallery from "./components/HomePage/Gallery";
import AboutServices from "./components/HomePage/AboutServices";
import CategoryShowcase from "./components/HomePage/CategoryShowcase";
import Contact from "./components/HomePage/Contact";
import Footer from "./components/HomePage/Footer";

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
            title="Wedding"
            description="Capturing beautiful moments on your special day with artistic vision and attention to detail."
            category="wedding"
            bgImage="https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=1920"
          />
        </div>
        <div className="mb-20">
          <CategoryShowcase
            title="Pre Wedding"
            description="Capturing beautiful moments on your special day with artistic vision and attention to detail."
            category="wedding"
            bgImage="https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=1920"
          />
        </div>
        <div className="mb-20">
          <CategoryShowcase
            title="Event"
            description="Capturing beautiful moments on your special day with artistic vision and attention to detail."
            category="wedding"
            bgImage="https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=1920"
          />
        </div>
        <div className="mb-20">
          <CategoryShowcase
            title="Regional Event"
            description="Capturing beautiful moments on your special day with artistic vision and attention to detail."
            category="wedding"
            bgImage="https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=1920"
          />
        </div>
        <div className="mb-20">
          <CategoryShowcase
            title="Gov. Event / Political Event"
            description="Capturing beautiful moments on your special day with artistic vision and attention to detail."
            category="wedding"
            bgImage="https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=1920"
          />
        </div>
        <div className="mb-20">
          <CategoryShowcase
            title="Filmmaking"
            description="Capturing beautiful moments on your special day with artistic vision and attention to detail."
            category="wedding"
            bgImage="https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=1920"
          />
        </div>
        <div className="mb-20">
          <CategoryShowcase
            title="Institute"
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
