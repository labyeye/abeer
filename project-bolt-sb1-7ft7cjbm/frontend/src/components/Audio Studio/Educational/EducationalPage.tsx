import React from "react";
import Navbar from "../../HomePage/Navbar";
import EducationalBanner from "./EducationalBanner";
import EducationalGallery from "./EducationalGallery";

const EducationalPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      <Navbar />
      
      <main className="flex-grow">
        <EducationalBanner />
        <EducationalGallery />
      </main>
    </div>
  );
};

export default EducationalPage;