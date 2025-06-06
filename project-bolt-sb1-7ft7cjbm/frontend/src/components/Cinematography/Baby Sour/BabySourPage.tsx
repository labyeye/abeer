import React from "react";
import Navbar from "../../HomePage/Navbar";
import BabySourBanner from "./BabySourBanner";
import BabySourGallery from "./BabySourGallery";

const BabySourPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      <Navbar />
      
      <main className="flex-grow">
        <BabySourBanner />
        <BabySourGallery />
      </main>
    </div>
  );
};

export default BabySourPage;