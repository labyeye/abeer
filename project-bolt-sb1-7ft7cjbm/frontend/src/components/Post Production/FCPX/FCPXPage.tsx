import React from "react";
import FCPXBanner from "./FCPXBanner";
import FCPXGallery from "./FCPXGallery";

const FCPXPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >      
      <main className="flex-grow">
        <FCPXBanner />
        <FCPXGallery />
      </main>
    </div>
  );
};

export default FCPXPage;