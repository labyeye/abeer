import React from "react";
import Navbar from "../../HomePage/Navbar";
import BabyshootBanner from "./BabyShootBanner";
import BabyshootGallery from "./BabyShootGallery";

const BabyshootPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      <Navbar />
      
      <main className="flex-grow">
        <BabyshootBanner />
        <BabyshootGallery />
      </main>
    </div>
  );
};

export default BabyshootPage;