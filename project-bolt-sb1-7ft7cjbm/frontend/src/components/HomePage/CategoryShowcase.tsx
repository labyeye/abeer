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

  const validImages = images
    .filter((img) => img && (img.image?.trim() || img.video?.trim()))
    .map((img, index) => ({
      ...img,
      id: img.id || img._id || index,
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
      className="relative py-28 transition-all duration-500"
      style={{
        backgroundImage: `url(${activeBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_700px] gap-10 items-end min-h-[700px]">
        {/* Left Text */}
        <div className="text-white">
          <h2 className="text-7xl font-denton-bold mb-10 mr-10">{title}</h2>
          <p className="text-2s mb-10">{description}</p>
          <button 
            className="bg-blue-600 text-white hover:bg-white hover:text-[#263f49] px-6 py-3 rounded-lg transition mb-30"
            onClick={handleExploreClick}
          >
            Explore Now
          </button>
        </div>

        {/* Right slider + arrows + dots container */}
        <div className="relative w-full h-auto flex flex-col items-center overflow-visible">
          {/* Slider container */}
          <div className="overflow-hidden relative w-full pl-10 pr-10">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={2}
              spaceBetween={20}
              centeredSlides={false}
              loop={validImages.length > 1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
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
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 15,
                },
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              }}
              className="overflow-visible"
              style={{
                paddingLeft: "10px",
                paddingRight: "0px",
                marginLeft: "-40px",
                marginRight: "-40px",
              }}
              key={swiperReady ? "ready" : "not-ready"}
            >
              {validImages.map((img) => (
                <SwiperSlide key={img.id}>
                  {({ isActive }) => (
                    <div
                      className={`block h-[500px] w-[370px] transition-all duration-300 transform-origin-center ${
                        isActive ? "scale-100 z-20" : "scale-75 opacity-60 z-10"
                      } w-full rounded-xl overflow-hidden shadow-lg border-4 border-white cursor-pointer`}
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
                              <div className="bg-black/50 rounded-full p-4">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="white"
                                  className="w-12 h-12"
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
                          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
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

      {/* Navigation buttons */}
      {validImages.length > 1 && (
        <>
          <button
            ref={prevRef}
            className={`prev-btn-${category} absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30 ml-4`}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-white"
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
            className={`next-btn-${category} absolute right-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30 mr-4`}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-white"
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
        className={`pagination-${category} mt-6 flex justify-center space-x-3`}
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