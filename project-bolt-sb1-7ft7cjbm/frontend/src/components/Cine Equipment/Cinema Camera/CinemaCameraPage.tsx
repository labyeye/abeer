import React from "react";
import CinemaCameraBanner from "./CinemaCameraBanner";
import ArriCameraGallery from "./Arri Camera/ArriCameraGallery";
import BuranoGallery from "./Burano/BuranoGallery";
import FX3Gallery from "./FX3/FX3Gallery";
import FX6Gallery from "./Fx6/FX6Gallery";
import RedCameraGallery from "./Red Camera/RedCameraGallery";
import Venice2Gallery from "./Venice 2/Venice2Gallery";
const CinemaCameraPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      
      <main className="flex-grow">
        <CinemaCameraBanner />
        <ArriCameraGallery/>
        <BuranoGallery />
        <FX3Gallery />
        <FX6Gallery />
        <RedCameraGallery />
        <Venice2Gallery />
        
      </main>
    </div>
  );
};

export default CinemaCameraPage;