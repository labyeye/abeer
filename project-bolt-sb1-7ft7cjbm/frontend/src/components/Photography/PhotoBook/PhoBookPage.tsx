import React from "react";
import Navbar from "../../HomePage/Navbar";
import EventBanner from "./PhoBookBanner";
import EventGallery from "./PhoBookGallery";

const EventPage = () => {
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

export default EventPage;