import React from "react";
import PoliticalCategoryBanner from "../Cinematography/Political/PoliticalBanner";
import PoliticalCategoryVideoGallery from "../Cinematography/Political/PoliticalGallery";
import PoliticalCategoryPhotoGallery from "../Photography/Political/PoliticalGallery";

const PoliticalCategoryPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >      
      <main className="flex-grow">
        <PoliticalCategoryBanner />
        <PoliticalCategoryVideoGallery />
        <PoliticalCategoryPhotoGallery />
      </main>
    </div>
  );
};

export default PoliticalCategoryPage;