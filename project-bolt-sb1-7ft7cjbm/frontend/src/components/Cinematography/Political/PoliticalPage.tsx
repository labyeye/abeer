import React from "react";
import Navbar from "../../HomePage/Navbar";
import PoliticalBanner from "./PoliticalBanner";
import PoliticalGallery from "./PoliticalGallery";

const PoliticalPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      <Navbar />
      
      <main className="flex-grow">
        <PoliticalBanner />
        <PoliticalGallery />
      </main>
    </div>
  );
};

export default PoliticalPage;