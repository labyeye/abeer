import React, { useState, useEffect } from "react";
import axios from "axios";

interface GalleryImage {
  _id: string;
  category: string;
  image: string;
  title: string;
  height: number;
}

const categories = ["all", "wedding", "pre wedding", "event", "government & political event","filmmaking"];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await axios.get("https://abeer.onrender.com/api/gallery");
        setGalleryImages(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch images", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  if (loading) return <div>Loading gallery...</div>;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-1 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`group px-4 py-2 capitalize transition duration-300 rounded-md font-medium relative
                  ${
                    activeCategory === category
                      ? "bg-[#263f49] text-white shadow-md"
                      : "bg-gray-200 text-[#263f49] hover:bg-[#b0c7d9]"
                  }`}
              >
                <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#263f49] after:w-0 after:transition-all after:duration-300 group-hover:after:w-full">
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredImages.map((image) => (
            <div
              key={image._id}
              className={`break-inside-avoid relative group rounded-lg overflow-hidden shadow-md 
                ${image.height === 2 ? "h-[400px]" : "h-[200px]"}`}
            >
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#263f49] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-semibold">{image.title}</h3>
                  <p className="text-sm text-gray-300 mt-2 capitalize">
                    {image.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;