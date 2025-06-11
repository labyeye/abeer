import React from "react";
import Navbar from "../../HomePage/Navbar";
import PoliticalBanner from "./PoliticalBanner";
import PoliticalGallery from "./PoliticalGallery";

const PhoPoliticalPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      
      <main className="flex-grow">
        <PoliticalBanner />
        <PoliticalGallery />
      </main>
    </div>
  );
};

export default PhoPoliticalPage;