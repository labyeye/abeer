import React from "react";
import Navbar from "../../HomePage/Navbar";
import SportsBanner from "./SportsBanner";
import SportsGallery from "./SportsGallery";

const PhoSportsPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      
      <main className="flex-grow">
        <SportsBanner />
        <SportsGallery />
      </main>
    </div>
  );
};

export default PhoSportsPage;