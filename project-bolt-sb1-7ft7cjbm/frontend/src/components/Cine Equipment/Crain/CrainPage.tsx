import React from "react";
import CrainBanner from "./CrainBanner";
import CrainGallery from "./CrainGallery";
const CrainPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >      
      <main className="flex-grow">
        <CrainBanner />
        <CrainGallery />
      </main>
    </div>
  );
};

export default CrainPage;