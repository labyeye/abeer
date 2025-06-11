import React from "react";
import Navbar from "../../HomePage/Navbar";
import WeddingBanner from "./WeddingBanner";
import WeddingGallery from "./WeddingGallery";

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