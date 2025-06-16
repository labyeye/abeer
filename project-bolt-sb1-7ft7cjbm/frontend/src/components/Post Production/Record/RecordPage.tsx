import React from "react";
import RecordBanner from "./RecordBanner";
import RecordGallery from "./RecordGallery";

const RecordPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-fixed bg-cover bg-center">
      <main className="flex-grow">
        <RecordBanner />
        <RecordGallery />
      </main>
    </div>
  );
};

export default RecordPage;
