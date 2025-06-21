import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/fonts.css";

interface CategoryImage {
  id?: number;
  _id?: string;
  image: string;
  title: string;
  video?: string;
  link?: string;
}

interface CategoryShowcaseProps {
  title: string;
  description: string;
  category: string;
  bgImage: string;
  images: CategoryImage[];
}

const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({
  title,
  description,
  category,
  bgImage,
  images = [],
}) => {
  const navigate = useNavigate();
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const [activeBgImage, setActiveBgImage] = useState(bgImage);
  const [selectedVideo, setSelectedVideo] = useState<CategoryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
useEffect(() => {
  if (swiperReady && prevRef.current && nextRef.current) {
    const nav = {
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    };
    const swiperEl = document.querySelector(".swiper") as any;
    if (swiperEl?.swiper) {
      swiperEl.swiper.params.navigation.prevEl = nav.prevEl;
      swiperEl.swiper.params.navigation.nextEl = nav.nextEl;
      swiperEl.swiper.navigation.init();
      swiperEl.swiper.navigation.update();
    }
  }
}, [swiperReady]);

  const validImages = images
  .filter((img) => img && (img.image?.trim() || img.video?.trim()))
  .map((img, index) => ({
    ...img,
    id: typeof img.id === "number" ? img.id : index, // ✅ Ensures type number
    image: img.image?.trim() || "",
    video: img.video?.trim() || "",
    link: img.link?.trim() || "",
  }));


  const openModal = (item: CategoryImage) => {
    if (item.video) {
      setSelectedVideo(item);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  const handleSlideChange = (swiper: any) => {
    const activeIndex = swiper.realIndex;
    if (validImages[activeIndex]) {
      setActiveBgImage(validImages[activeIndex].image);
    }
  };

  const handleExploreClick = () => {
    // Convert category to lowercase and handle special cases
    const categoryPath = category.toLowerCase().replace(/\s+/g, '-');
    navigate(`/category/${categoryPath}`);
  };
  

  return (
     <section
      className="relative py-16 md:py-28 transition-all duration-500" // Reduced padding on mobile
      style={{
        backgroundImage: `url(${activeBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-[1fr_700px] gap-6 md:gap-10 items-end min-h-[500px] md:min-h-[700px]">
        {/* Left Text - Adjusted for mobile */}
        <div className="text-white px-4 md:px-0">
          <h2 className="text-4xl md:text-7xl font-denton-bold mb-6 md:mb-10 md:mr-10">{title}</h2>
          <p className="text-base md:text-2xl mb-6 md:mb-10">{description}</p>
          <button 
            className="bg-blue-600 text-white hover:bg-white hover:text-[#263f49] px-6 py-3 rounded-lg transition mb-6 md:mb-30 text-sm md:text-base"
            onClick={handleExploreClick}
          >
            Explore Now
          </button>
        </div>

        {/* Right slider + arrows + dots container */}
        <div className="relative w-full h-auto flex flex-col items-center overflow-visible">
          {/* Slider container */}
          <div className="overflow-hidden relative w-full pl-2 pr-2 md:pl-10 md:pr-10">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1.2} // Default to 1.2 slides on mobile
              spaceBetween={10} // Reduced space on mobile
              centeredSlides={false}
              loop={validImages.length > 1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
                disabledClass: "opacity-30 cursor-default", // Style for disabled buttons
              }}
              pagination={{
                clickable: true,
                el: `.pagination-${category}`,
              }}
              onSwiper={() => {
                setSwiperReady(true);
              }}
              onSlideChange={handleSlideChange}
              breakpoints={{
                // Updated breakpoints for better responsiveness
                0: { // Mobile
                  slidesPerView: 1.2,
                  spaceBetween: 10,
                },
                480: { // Small tablets
                  slidesPerView: 1.5,
                  spaceBetween: 15,
                },
                640: { // Tablets
                  slidesPerView: 1.8,
                  spaceBetween: 15,
                },
                768: { // Larger tablets
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: { // Desktop
                  slidesPerView: 2,
                  spaceBetween: 25,
                }
              }}
              className="overflow-visible"
              style={{
                paddingLeft: "0px", // Reduced padding on mobile
                paddingRight: "0px",
                marginLeft: "-10px", // Reduced margin on mobile
                marginRight: "-10px",
              }}
              key={swiperReady ? "ready" : "not-ready"}
            >
              {validImages.map((img) => (
                <SwiperSlide key={img.id}>
                  {({ isActive }) => (
                    <div
                      className={`block h-[300px] md:h-[500px] w-full max-w-[340px] md:w-[370px] transition-all duration-300 transform-origin-center ${
                        isActive ? "scale-100 z-20" : "scale-90 md:scale-75 opacity-80 md:opacity-60 z-10"
                      } rounded-xl overflow-hidden shadow-lg border-2 md:border-4 border-white cursor-pointer`}
                      onClick={() => openModal(img)}
                    >
                      <div className="block h-full w-full relative">
                        {img.video ? (
                          <>
                            <img
                              src={img.image}
                              alt={img.title || "Video thumbnail"}
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                  "/placeholder.jpg";
                              }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-black/50 rounded-full p-2 md:p-4">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="white"
                                  className="w-8 h-8 md:w-12 md:h-12"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </div>
                          </>
                        ) : (
                          <img
                            src={img.image}
                            alt={img.title || "Category image"}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                "/placeholder.jpg";
                            }}
                          />
                        )}
                        {img.title && (
                          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 md:p-4 text-sm md:text-base">
                            {img.title}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Navigation buttons - Made smaller on mobile */}
      {validImages.length > 1 && (
        <>
          <button
            ref={prevRef}
            className={`prev-btn-${category} absolute left-0 top-1/2 z-20 flex h-8 w-8 md:h-12 md:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30 ml-2 md:ml-4`}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 md:w-6 md:h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            ref={nextRef}
            className={`next-btn-${category} absolute right-0 top-1/2 z-20 flex h-8 w-8 md:h-12 md:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30 mr-2 md:mr-4`}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 md:w-6 md:h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      <div
        className={`pagination-${category} mt-4 md:mt-6 flex justify-center space-x-2 md:space-x-3`}
      />

      {/* Video Modal */}
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
            <div className="bg-black" style={{ paddingBottom: '56.25%', position: 'relative' }}>
              <div className="absolute inset-0">
                <ReactPlayer
                  url={selectedVideo.video}
                  width="100%"
                  height="100%"
                  controls={true}
                  playing={true}
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              </div>
            </div>
            {selectedVideo.title && (
              <div className="mt-4 text-white">
                <h3 className="text-xl font-bold">{selectedVideo.title}</h3>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CategoryShowcase;