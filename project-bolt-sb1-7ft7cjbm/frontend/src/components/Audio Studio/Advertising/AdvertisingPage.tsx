import React from "react";
import AdvertisingBanner from "./AdvertisingBanner";
import AdvertisingGallery from "./AdvertisingGallery";

const AdvertisingPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >      
      <main className="flex-grow">
        <AdvertisingBanner />
        <AdvertisingGallery />
      </main>
    </div>
  );
};

export default AdvertisingPage;