import React from "react";
import Navbar from "../../HomePage/Navbar";
import BirthdayBanner from "./BirthdayBanner";
import BirthdayGallery from "./BirthdayGallery";

const BirthdayPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      <Navbar />
      
      <main className="flex-grow">
        <BirthdayBanner />
        <BirthdayGallery />
      </main>
    </div>
  );
};

export default BirthdayPage;