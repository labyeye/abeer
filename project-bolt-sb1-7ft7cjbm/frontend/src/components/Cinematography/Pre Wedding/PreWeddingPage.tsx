import React from "react";
import PreWeddingBanner from "./PreWeddingBanner";
import PreWeddingGallery from "./PreWeddingGallery";

const PreWeddingPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >      
      <main className="flex-grow">
        <PreWeddingBanner />
        <PreWeddingGallery />
      </main>
    </div>
  );
};

export default PreWeddingPage;