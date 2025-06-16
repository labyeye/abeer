import React from "react";
import WeddingBanner from "./VFXBanner";
import WeddingGallery from "./VFXGallery";

const WeddingPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      
      <main className="flex-grow">
        <WeddingBanner />
        <WeddingGallery />
      </main>
    </div>
  );
};

export default WeddingPage;