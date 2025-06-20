import React from "react";
import WeddingCategoryBanner from "../Cinematography/Wedding/WeddingBanner";
import WeddingCategoryVideoGallery from "../Cinematography/Wedding/WeddingGallery";
import WeddingCategoryPhotoGallery from "../Photography/Wedding/WeddingGallery";

const WeddingCategoryPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >      
      <main className="flex-grow">
        <WeddingCategoryBanner />
        <WeddingCategoryVideoGallery />
        <WeddingCategoryPhotoGallery />
      </main>
    </div>
  );
};

export default WeddingCategoryPage;