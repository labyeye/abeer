import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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
// const productAdsImages: CategoryImage[] = [
//   {
//     id: 1,
//     image:
//       "https://cdn.dribbble.com/userupload/15393098/file/original-a7d0766ecd8673dd37ed98479422b12b.jpg?resize=400x0",
//     title: "ProductAd1",
//   },
//   {
//     id: 2,
//     image:
//       "https://img.freepik.com/premium-vector/marketing-ads-post-products-eps-file_774564-129.jpg",
//     title: "ProductAd2",
//   },
//   {
//     id: 3,
//     image:
//       "https://terzettodigital.com/wp-content/uploads/2022/01/product-photography-ad-created-by-freepik.jpg",
//     title: "ProductAd2",
//   },
//   {
//     id: 4,
//     image:
//       "https://png.pngtree.com/png-clipart/20220429/original/pngtree-advertising-poster-for-cosmetic-product-for-catalog-png-image_7577529.png",
//     title: "ProductAd2",
//   },
//   {
//     id: 5,
//     image:
//       "https://i.pinimg.com/736x/f1/e2/49/f1e24968eb4bbb795bfe3a23e4e57b56.jpg",
//     title: "ProductAd2",
//   },
// ];

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
      // case "productads":
      //   return productAdsImages;
      default:
        return [];
    }
  })();
  const [background, setBackground] = useState(bgImage || images[0]?.image);

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

        <div className="relative w-full h-auto overflow-visible">
          <div className="overflow-hidden relative pl-10 pr-10">
            <Swiper
              modules={[Navigation]}
              slidesPerView={2}
              spaceBetween={20}
              centeredSlides={false}
              loop={true}
              navigation={{
                nextEl: `.next-btn-${category}`,
                prevEl: `.prev-btn-${category}`,
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
              className=" overflow-visible"
              style={{
                paddingLeft: "30px",
                paddingRight: "0px",
                marginLeft: "-40px",
                marginRight: "-40px",
              }}
            >
              {images.map((img) => (
                <SwiperSlide key={img.id}>
                  {({ isActive }) => (
                    <div
                      className={`h-100 transition-all duration-300 transform-origin-center ${
                        isActive ? "scale-120 z-20" : "scale-90 opacity-60 z-10"
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
    </section>
  );
};

export default CategoryShowcase;
