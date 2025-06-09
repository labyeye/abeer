import React from "react";
import Navbar from "../../HomePage/Navbar";
import PhotoStudioBanner from "./PhotoStudioBanner";
import PhotoStudioGallery from "./PhotoStudioGallery";

const PhotoStudioPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      <Navbar />
      
      <main className="flex-grow">
        <PhotoStudioBanner />
        <PhotoStudioGallery />
      </main>
    </div>
  );
};

export default PhotoStudioPage;