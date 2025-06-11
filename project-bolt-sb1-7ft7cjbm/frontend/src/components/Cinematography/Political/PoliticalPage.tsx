import React from "react";
import PoliticalBanner from "./PoliticalBanner";
import PoliticalGallery from "./PoliticalGallery";

const PoliticalPage = () => {
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

export default PoliticalPage;