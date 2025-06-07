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

const EventGallery = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log("Fetching Event gallery...");
    const fetchGalleryItems = async () => {
      try {
        const response = await axios.get("https://abeer.onrender.com/api/pho-book-gallery");
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
          Our Event Films
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item._id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="relative">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/30 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
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

      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-black" style={{ paddingBottom: '75%', position: 'relative' }}>
              <div className="absolute inset-0">
                <ReactPlayer
                  url={selectedVideo.videoUrl}
                  width="100%"
                  height="100%"
                  controls={true}
                  playing={true}
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="mt-4 text-white">
              <h3 className="text-xl font-bold">{selectedVideo.title}</h3>
              <p className="text-gray-300">{selectedVideo.description}</p>
              <div className="flex justify-between mt-2 text-sm text-gray-400">
                <span>{selectedVideo.place}</span>
                <span>{selectedVideo.views}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventGallery;