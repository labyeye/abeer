import React from "react";
import Navbar from "../HomePage/Navbar";
import CampaigningBanner from "./CampaigningBanner";
import CampaigningGallery from "./CampaigningGallery";

const CampaigningPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      <Navbar />
      
      <main className="flex-grow">
        <CampaigningBanner />
        <CampaigningGallery />
      </main>
    </div>
  );
};

export default CampaigningPage;