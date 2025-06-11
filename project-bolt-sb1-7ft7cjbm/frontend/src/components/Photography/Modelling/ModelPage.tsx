import React from "react";
import Navbar from "../../HomePage/Navbar";
import ModellingBanner from "./ModellingBanner";
import ModelGallery from "./ModelGallery";
import ProductGallery from "../Product/PhoProductGallery";

const ModelPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      
      <main className="flex-grow">
        <ModellingBanner />
        <ModelGallery />
        <ProductGallery/>
      </main>
    </div>
  );
};

export default ModelPage;