import React from "react";
import MusicEntertainmentBanner from "./MusicEntertainmentBanner";
import MusicEntertainmentGallery from "./MusicEntertainmentGallery";

const MusicEntertainmentPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >      
      <main className="flex-grow">
        <MusicEntertainmentBanner />
        <MusicEntertainmentGallery />
      </main>
    </div>
  );
};

export default MusicEntertainmentPage;