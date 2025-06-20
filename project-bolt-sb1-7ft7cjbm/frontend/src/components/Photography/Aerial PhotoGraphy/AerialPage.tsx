import React from "react";
import Navbar from "../../HomePage/Navbar";
import CinemaBanner from "./AerialBanner";
import CinemaGallery from "./AerialGallery";

const PhoAerialPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      
      <main className="flex-grow">
        <CinemaBanner />
        <CinemaGallery />
      </main>
    </div>
  );
};

export default PhoAerialPage;