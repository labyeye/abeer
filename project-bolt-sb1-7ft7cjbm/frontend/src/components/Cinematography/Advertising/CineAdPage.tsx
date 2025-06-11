import React from "react";
import CineAdBanner from "./CineAdBanner";
import CineAdGallery from "./CineAdGallery";

const CineAdPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >      
      <main className="flex-grow">
        <CineAdBanner />
        <CineAdGallery />
      </main>
    </div>
  );
};

export default CineAdPage;