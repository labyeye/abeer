import React from "react";
import EventBanner from "./EventBanner";
import EventGallery from "./EventGallery";

const EventPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >
      
      <main className="flex-grow">
        <EventBanner />
        <EventGallery />
      </main>
    </div>
  );
};

export default EventPage;