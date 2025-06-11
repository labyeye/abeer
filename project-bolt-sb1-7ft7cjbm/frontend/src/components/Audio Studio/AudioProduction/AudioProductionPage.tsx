import React from "react";
import AudioProductionBanner from "./AudioProductionBanner";
import AudioProductionGallery from "./AudioProductionGallery";

const AudioProductionPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      <main className="flex-grow">
        <AudioProductionBanner />
        <AudioProductionGallery />
      </main>
    </div>
  );
};

export default AudioProductionPage;