import React from "react";
import Navbar from "../../HomePage/Navbar";
import WeddingBanner from "./WeddingBanner";
import WeddingGallery from "./WeddingGallery";

const PhoWeddingPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      <Navbar />
      
      <main className="flex-grow">
        <WeddingBanner />
        <WeddingGallery />
      </main>
    </div>
  );
};

export default PhoWeddingPage;