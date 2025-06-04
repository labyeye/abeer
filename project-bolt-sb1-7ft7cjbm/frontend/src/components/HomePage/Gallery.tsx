import React, { useState } from "react";

interface GalleryImage {
  id: number;
  category: string;
  image: string;
  title: string;
  height?: number; // Optional height property for masonry variation
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    category: "portrait",
    image:
      "https://images.pexels.com/photos/1559193/pexels-photo-1559193.jpeg?auto=compress&cs=tinysrgb&w=1080",
    title: "Urban Portrait",
    height: 2, // This will make this item taller
  },
  {
    id: 2,
    category: "portrait",
    image:
      "https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&w=1080",
    title: "Neon Silhouette",
    height: 1,
  },
  {
    id: 3,
    category: "portrait",
    image:
      "https://images.pexels.com/photos/2531158/pexels-photo-2531158.jpeg?auto=compress&cs=tinysrgb&w=1080",
    title: "Blue Light Portrait",
    height: 1,
  },
  {
    id: 4,
    category: "creative",
    image:
      "https://images.pexels.com/photos/923657/pexels-photo-923657.jpeg?auto=compress&cs=tinysrgb&w=1080",
    title: "Neon Sign",
    height: 2,
  },
  {
    id: 5,
    category: "creative",
    image:
      "https://images.pexels.com/photos/1424246/pexels-photo-1424246.jpeg?auto=compress&cs=tinysrgb&w=1080",
    title: "Abstract Light",
    height: 1,
  },
  {
    id: 6,
    category: "nature",
    image:
      "https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&w=1080",
    title: "Mountain Landscape",
    height: 2,
  },
  {
    id: 7,
    category: "nature",
    image:
      "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&w=1080",
    title: "Forest Path",
    height: 1,
  },
  {
    id: 8,
    category: "video",
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1080",
    title: "Camera Equipment",
    height: 1,
  },
  {
    id: 9,
    category: "portrait",
    image:
      "https://images.pexels.com/photos/1559193/pexels-photo-1559193.jpeg?auto=compress&cs=tinysrgb&w=1080",
    title: "Urban Portrait",
    height: 1,
  },
  {
    id: 10,
    category: "portrait",
    image:
      "https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&w=1080",
    title: "Neon Silhouette",
    height: 2,
  },
  {
    id: 11,
    category: "portrait",
    image:
      "https://images.pexels.com/photos/2531158/pexels-photo-2531158.jpeg?auto=compress&cs=tinysrgb&w=1080",
    title: "Blue Light Portrait",
    height: 1,
  },
  {
    id: 12,
    category: "creative",
    image:
      "https://images.pexels.com/photos/923657/pexels-photo-923657.jpeg?auto=compress&cs=tinysrgb&w=1080",
    title: "Neon Sign",
    height: 1,
  },
  {
    id: 13,
    category: "creative",
    image:
      "https://images.pexels.com/photos/1424246/pexels-photo-1424246.jpeg?auto=compress&cs=tinysrgb&w=1080",
    title: "Abstract Light",
    height: 2,
  },
  {
    id: 14,
    category: "nature",
    image:
      "https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&w=1080",
    title: "Mountain Landscape",
    height: 1,
  },
  {
    id: 15,
    category: "nature",
    image:
      "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&w=1080",
    title: "Forest Path",
    height: 1,
  },
  {
    id: 16,
    category: "video",
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1080",
    title: "Camera Equipment",
    height: 2,
  },
  {
    id: 17,
    category: "nature",
    image:
      "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&w=1080",
    title: "Forest Path",
    height: 1,
  },
  {
    id: 18,
    category: "video",
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1080",
    title: "Camera Equipment",
    height: 1,
  },
];
const categories = ["all", "portrait", "creative", "nature", "video"];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

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
                <span
                  className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#263f49] after:w-0 after:transition-all after:duration-300
      group-hover:after:w-full"
                >
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
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
