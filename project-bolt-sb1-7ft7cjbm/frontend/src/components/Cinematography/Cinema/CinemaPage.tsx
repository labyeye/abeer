import React from "react";
import CinemaBanner from "./CinemaBanner";
import CinemaGallery from "./CinemaGallery";

const CinemaPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      
      <main className="flex-grow">
        <CinemaBanner />
        <CinemaGallery />
      </main>
    </div>
  );
};

export default CinemaPage;