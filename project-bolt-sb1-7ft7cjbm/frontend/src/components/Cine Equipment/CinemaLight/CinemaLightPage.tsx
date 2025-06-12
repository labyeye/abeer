import React from "react";
import CinemaLightBanner from "./CinemaLightBanner";
import CinemaLightGallery from "./CinemaLightGallery";
const CinemaLightPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >      
      <main className="flex-grow">
        <CinemaLightBanner />
        <CinemaLightGallery />
      </main>
    </div>
  );
};

export default CinemaLightPage;