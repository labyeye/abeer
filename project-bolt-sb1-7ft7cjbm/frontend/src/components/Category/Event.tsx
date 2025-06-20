import React from "react";
import EventCategoryBanner from "../Cinematography/Event/EventBanner";
import EventCategoryVideoGallery from "../Cinematography/Event/EventGallery";
import EventCategoryPhotoGallery from "../Photography/Event/EventGallery";

const EventCategoryPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center"
    >      
      <main className="flex-grow">
        <EventCategoryBanner />
        <EventCategoryVideoGallery />
        <EventCategoryPhotoGallery />
      </main>
    </div>
  );
};

export default EventCategoryPage;