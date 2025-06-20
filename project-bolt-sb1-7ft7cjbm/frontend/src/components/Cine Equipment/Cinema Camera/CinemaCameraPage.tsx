import React from "react";
import CinemaCameraBanner from "./CinemaCameraBanner";
import ArriCameraGallery from "./Arri Camera/ArriCameraGallery";
const CinemaCameraPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      
      <main className="flex-grow">
        <CinemaCameraBanner />
        <ArriCameraGallery/>
        
      </main>
    </div>
  );
};

export default CinemaCameraPage;