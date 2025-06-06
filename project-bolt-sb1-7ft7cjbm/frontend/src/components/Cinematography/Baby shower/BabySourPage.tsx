import React from "react";
import Navbar from "../../HomePage/Navbar";
import BabyshowerBanner from "./BabySourBanner";
import BabyshowerGallery from "./BabySourGallery";

const BabyshowerPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      <Navbar />
      
      <main className="flex-grow">
        <BabyshowerBanner />
        <BabyshowerGallery />
      </main>
    </div>
  );
};

export default BabyshowerPage;