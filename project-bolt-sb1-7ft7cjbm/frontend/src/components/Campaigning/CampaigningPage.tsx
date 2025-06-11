import React, { useState, useEffect } from "react";
import Navbar from "../HomePage/Navbar";
import CampaigningBanner from "./CampaigningBanner";
import CampaigningGallery from "./CampaigningGallery";
import axios from "axios";

const CampaigningPage = () => {
  const [hasGalleryItems, setHasGalleryItems] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkGalleryItems = async () => {
      try {
        const response = await axios.get("https://abeer.onrender.com/api/campaigning-gallery");
        setHasGalleryItems(response.data && response.data.length > 0);
      } catch (error) {
        console.error("Error checking gallery items:", error);
        setHasGalleryItems(false);
      } finally {
        setLoading(false);
      }
    };

    checkGalleryItems();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-fixed bg-cover bg-center">
      <main className="flex-grow">
        <CampaigningBanner />
        <CampaigningGallery />
      </main>
    </div>
  );
};

export default CampaigningPage;