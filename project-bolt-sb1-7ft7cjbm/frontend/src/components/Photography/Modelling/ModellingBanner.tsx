import React, { useEffect, useState } from "react";
import axios from "axios";

interface ModellingBannerData {
  title: string;
  description: string;
  backgroundImageUrl: string;
}

const ModellingBanner = () => {
  const [banner, setBanner] = useState<ModellingBannerData | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await axios.get(
          "https://abeer.onrender.com/api/pho-model-banner/active"
        );
        setBanner(response.data);
      } catch (error) {
        console.error("Error fetching banner:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
  }, []);

  if (loading)
    return <div className="h-[500px] bg-gray-200 animate-pulse"></div>;
  if (!banner)
    return (
      <div className="h-[500px] flex items-center justify-center bg-gray-100">
        No banner available
      </div>
    );

  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: imageError
            ? "linear-gradient(to right, #263f49, #2d4b58)"
            : `url(${banner.backgroundImageUrl})`,
        }}
      >
        <img
          src={banner.backgroundImageUrl}
          alt=""
          className="hidden"
          onError={() => setImageError(true)}
        />
      </div>

      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative h-full flex items-center justify-center text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {banner.title}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            {banner.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModellingBanner;
