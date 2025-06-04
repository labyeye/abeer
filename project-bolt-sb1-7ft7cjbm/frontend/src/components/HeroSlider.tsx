import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slide1 from "../assets/images/homeslider/slide-1.jpg"

const slides = [
  {
    id: 1,
    image:
      slide1,
    title: "Welcome To",
    subtitle: "Abeer Motion Picture Pvt Ltd",
    description:
      "A filmmaking studio & institute",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/1261731/pexels-photo-1261731.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Discover",
    subtitle: "My Vision",
    description:
      "Through my lens, I strive to create timeless images that tell stories and evoke emotions.",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Capture",
    subtitle: "The Moment",
    description:
      "Every photograph is a fragment of time preserved forever, a story waiting to be told.",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/5244261/pexels-photo-5244261.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Artistic",
    subtitle: "Expression",
    description:
      "Photography is my way of communicating emotions and perspectives without using words.",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/2403013/pexels-photo-2403013.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Professional",
    subtitle: "Excellence",
    description:
      "With years of experience, I bring technical expertise and creative vision to every project.",
  },
];

const HeroSlider: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-screen w-full bg-cover bg-center flex items-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl text-white">
                  <h2 className="text-white-500 text-xl mb-5">{slide.title}</h2>
                  <h1 className="text-5xl font-bold mb-2 text-white inline-block animate-fadeUp">
  {slide.subtitle}
</h1>

                  <p className="text-lg text-gray-200 mb-8 ml-40">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-white text-[#263f49] px-6 py-3 rounded transition duration-300 hover:bg-[#263f49] hover:text-white border border-transparent hover:border-[#263f49]">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev absolute left-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30">
        <ChevronLeft size={24} />
      </div>
      <div className="swiper-button-next absolute right-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30">
        <ChevronRight size={24} />
      </div>
      <div className="swiper-pagination absolute bottom-10 z-20 flex justify-center gap-2"></div>
    </section>
  );
};

export default HeroSlider;
