import React from "react";
import PreWeddingCategoryBanner from "../Cinematography/Pre Wedding/PreWeddingBanner";
import PreWeddingCategoryVideoGallery from "../Cinematography/Pre Wedding/PreWeddingGallery";
import PreWeddingCategoryPhotoGallery from "../Photography/Pre Wedding/PreWeddingGallery";

const PreWeddingCategoryPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >      
      <main className="flex-grow">
        <PreWeddingCategoryBanner />
        <PreWeddingCategoryVideoGallery />
        <PreWeddingCategoryPhotoGallery />
      </main>
    </div>
  );
};

export default PreWeddingCategoryPage;