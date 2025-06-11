import React from "react";
import Navbar from "../HomePage/Navbar";
import GovernmentBanner from "./GovernmentBanner";
import GovernmentGallery from "./GovernmentGallery";

const GovernmentPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >      
      <main className="flex-grow">
        <GovernmentBanner />
        <GovernmentGallery />
      </main>
    </div>
  );
};

export default GovernmentPage;