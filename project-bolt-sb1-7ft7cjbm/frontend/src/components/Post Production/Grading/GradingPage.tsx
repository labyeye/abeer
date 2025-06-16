import React from "react";
import GradingBanner from "./GradingBanner";
import GradingGallery from "./GradingGallery";

const GradingPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >      
      <main className="flex-grow">
        <GradingBanner />
        <GradingGallery />
      </main>
    </div>
  );
};

export default GradingPage;