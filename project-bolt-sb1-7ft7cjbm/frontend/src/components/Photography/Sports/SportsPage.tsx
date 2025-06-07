import React from "react";
import Navbar from "../../HomePage/Navbar";
import SportsBanner from "./SportsBanner";
import SportsGallery from "./SportsGallery";

const SportsPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      <Navbar />
      
      <main className="flex-grow">
        <SportsBanner />
        <SportsGallery />
      </main>
    </div>
  );
};

export default SportsPage;