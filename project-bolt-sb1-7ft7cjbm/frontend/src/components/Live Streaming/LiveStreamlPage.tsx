import React from "react";
import LiveStreamBanner from "./LiveStreamBanner";
import LiveStreamGallery from "./LiveStreamGallery";

const LiveStreamPage = () => {

  return (
    <div className="min-h-screen flex flex-col bg-fixed bg-cover bg-center">
      <main className="flex-grow">
        <LiveStreamBanner />
        <LiveStreamGallery />
      </main>
    </div>
  );
};

export default LiveStreamPage;