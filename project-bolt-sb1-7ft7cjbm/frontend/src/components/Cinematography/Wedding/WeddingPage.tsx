import React from "react";
import Navbar from "../../HomePage/Navbar";
import WeddingBanner from "./WeddingBanner";
import WeddingGallery from "./WeddingGallery";

const WeddingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <WeddingBanner />
        <WeddingGallery />
      </main>
    </div>
  );
};

export default WeddingPage;