import React from "react";
import HeroSlider from "../HomePage/HeroSlider";
import Gallery from "../HomePage/Gallery";
import AboutServices from "../HomePage/AboutServices";
import CategoryShowcase from "../HomePage/CategoryShowcase";
import Contact from "../HomePage/Contact";

interface HomePageProps {
  categories: any[]; // Consider creating a proper type interface
}

const HomePage: React.FC<HomePageProps> = ({ categories }) => {
  return (
    <>
      <HeroSlider />
      <Gallery />
      <AboutServices />
      {categories.map((category) => (
        <div key={category._id} className="mb-20">
          <CategoryShowcase
            title={category.title}
            bgImage={category.images[0]?.image || ""}
            description={category.description}
            category={category.category}
            images={category.images.map((img: any) => ({
              ...img,
              id: img.id || Math.random(),
            }))}
          />
        </div>
      ))}
      <Contact />
    </>
  );
};

export default HomePage;