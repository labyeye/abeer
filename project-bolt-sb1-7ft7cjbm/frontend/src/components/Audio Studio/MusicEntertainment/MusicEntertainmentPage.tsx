import React from "react";
import Navbar from "../../HomePage/Navbar";
import MusicEntertainmentBanner from "./MusicEntertainmentBanner";
import MusicEntertainmentGallery from "./MusicEntertainmentGallery";

const MusicEntertainmentPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      <Navbar />
      
      <main className="flex-grow">
        <MusicEntertainmentBanner />
        <MusicEntertainmentGallery />
      </main>
    </div>
  );
};

export default MusicEntertainmentPage;