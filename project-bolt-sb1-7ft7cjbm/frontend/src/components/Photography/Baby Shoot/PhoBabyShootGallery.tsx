import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import aboutBg from "../../../assets/images/about-bg.jpg";

type GalleryItem = {
  _id: string;
  title: string;
  description: string;
  place: string;
  views: string;
  thumbnail: string;
  videoUrl: string;
};

const BabyshootGallery = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log("Fetching Babyshoot gallery...");
    const fetchGalleryItems = async () => {
      try {
        const response = await axios.get("http://localhost:2500/api/pho-baby-shoot-gallery");
        setGalleryItems(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load gallery items");
        setLoading(false);
        console.error(err);
      }
    };

    fetchGalleryItems();
  }, []);

  const openModal = (item: GalleryItem) => {
    setSelectedVideo(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <section className="py-20 relative min-h-screen">
      {/* Background with reduced opacity - Change opacity-10 to your desired value */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 z-0"
        style={{ backgroundImage: `url(${aboutBg})` }}
      />

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#263f49] mb-12 text-center">
          Our Aerial Photography
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">{item.views}</p>
                  <p className="text-white text-sm">{item.place}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#263f49] mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default BabyshootGallery;