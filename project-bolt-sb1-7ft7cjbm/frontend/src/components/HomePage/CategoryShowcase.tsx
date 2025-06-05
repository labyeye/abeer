import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/fonts.css";

interface CategoryImage {
  id: number;
  image: string;
  title: string;
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
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const [activeBgImage, setActiveBgImage] = useState(bgImage);

  // Filter out images with empty URLs
  const validImages = images.filter((img) => img.image);

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
          <button className="bg-blue-600 text-white hover:bg-white hover:text-[#263f49] px-6 py-3 rounded-lg transition mb-30">
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
              onSlideChange={(swiper) => {
                const activeIndex = swiper.realIndex;
                if (validImages[activeIndex]) {
                  setActiveBgImage(validImages[activeIndex].image);
                }
              }}
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
                      className={`h-[500px] w-[370px] transition-all duration-300 transform-origin-center ${
                        isActive ? "scale-100 z-20" : "scale-75 opacity-60 z-10"
                      } w-full rounded-xl overflow-hidden shadow-lg border-4 border-white`}
                    >
                      <img
                        src={img.image}
                        alt={img.title}
                        className="h-full w-full object-cover"
                      />
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
    </section>
  );
};

export default CategoryShowcase;