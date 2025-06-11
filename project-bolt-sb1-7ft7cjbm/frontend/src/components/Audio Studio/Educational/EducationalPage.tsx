import React from "react";
import EducationalBanner from "./EducationalBanner";
import EducationalGallery from "./EducationalGallery";

const EducationalPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >      
      <main className="flex-grow">
        <EducationalBanner />
        <EducationalGallery />
      </main>
    </div>
  );
};

export default EducationalPage;