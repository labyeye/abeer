import React from "react";
import Navbar from "../../HomePage/Navbar";
import EventBanner from "./EventBanner";
import EventGallery from "./EventGallery";

const PhoEventPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      <Navbar />
      
      <main className="flex-grow">
        <EventBanner />
        <EventGallery />
      </main>
    </div>
  );
};

export default PhoEventPage;