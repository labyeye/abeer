import React from "react";
import Navbar from "../../HomePage/Navbar";
import BabyshowerBanner from "./BabySourBanner";
import BabyshowerGallery from "./BabySourGallery";
import BabyshootGallery from "../Baby Shoot/PhoBabyShootGallery";
import BirthdayGallery from "../Birthday/BirthdayGallery";

const BabyshowerPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      <Navbar />
      
      <main className="flex-grow">
        <BabyshowerBanner />
        <BabyshowerGallery />
        <BabyshootGallery/>
        <BirthdayGallery/>
      </main>
    </div>
  );
};

export default BabyshowerPage;