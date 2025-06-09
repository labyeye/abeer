import React from "react";
import Navbar from "../../HomePage/Navbar";
import PhoBookBanner from "./PhoBookBanner";
import PhoBookGallery from "./PhoBookGallery";

const PhoBookPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      <Navbar />
      
      <main className="flex-grow">
        <PhoBookBanner />
        <PhoBookGallery />
      </main>
    </div>
  );
};

export default PhoBookPage;