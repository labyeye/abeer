import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Import Pagination
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Import pagination styles
import "./css/fonts.css";
import w1 from "../assets/images/category/wedding/1.png";
import w2 from "../assets/images/category/wedding/2.png";
import w3 from "../assets/images/category/wedding/3.png";
import w4 from "../assets/images/category/wedding/4.png";

interface CategoryShowcaseProps {
  title: string;
  description: string;
  category: string;
  bgImage: string;
}

interface CategoryImage {
  id: number;
  image: string;
  title: string;
}

const weddingImages: CategoryImage[] = [
  {
    id: 1,
    image: w1,
    title: "Wedding1",
  },
  {
    id: 2,
    image: w2,
    title: "Wedding2",
  },
  {
    id: 3,
    image: w3,
    title: "Wedding3",
  },
  {
    id: 4,
    image: w4,
    title: "Wedding4",
  },
  {
    id: 5,
    image:
      "https://getethnic.com/wp-content/uploads/2025/01/Indian-Wedding-Trends-2025-11.webp",
    title: "Wedding5",
  },
];

const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({
  title,
  description,
  category,
  bgImage,
}) => {
  const images = (() => {
    switch (category) {
      case "wedding":
        return weddingImages;
      default:
        return [];
    }
  })();

  const [background, setBackground] = useState(bgImage || images[0]?.image);

  // Create refs for prev and next buttons
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // Since refs are null on first render, we use state to trigger swiper update
  const [swiperReady, setSwiperReady] = useState(false);

  return (
    <section
      className="relative py-28 transition-all duration-500 ease-in-out"
      style={{
        backgroundImage: `url(${background})`,
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
          <p className="text-gray-300 mb-8">
            Lorem ipsum dolor sit amet consectetur. Quam tempus volutpat
            molestie ultrices odio. Iaculis venenatis dignissim ultrices proin
            nisi diam donec.
          </p>
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
              loop={true}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{
                clickable: true,
                el: `.pagination-${category}`,
              }}
              onSwiper={() => {
                // This forces swiper to reinit navigation once refs are ready
                setSwiperReady(true);
              }}
              onSlideChange={(swiper) => {
                const newBg = images[swiper.realIndex]?.image;
                if (newBg) setBackground(newBg);
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
              // When swiperReady changes, force swiper to update navigation
              key={swiperReady ? "ready" : "not-ready"}
            >
              {images.map((img) => (
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

      {/* Buttons with refs */}
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

      <div
        className={`pagination-${category} mt-6 flex justify-center space-x-3`}
      />
    </section>
  );
};

export default CategoryShowcase;
