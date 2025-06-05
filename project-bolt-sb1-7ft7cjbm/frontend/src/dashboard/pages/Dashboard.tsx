// In Dashboard.tsx:
import { GalleryManager } from "../components/GalleryManager";
import { HeroSliderManager } from "../components/HeroSliderManager";
import { CategoryShowcaseManager } from "../components/CategoryShowcaseManager";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Gallery Management</h2>
          <Link
            to="/dashboard/gallery"
            className="text-blue-600 hover:text-blue-800"
          >
            Manage Gallery
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Hero Slider Management</h2>
          <Link
            to="/dashboard/homeslides"
            className="text-blue-600 hover:text-blue-800"
          >
            Manage Slides
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Category Management</h2>
          <Link
            to="/dashboard/categories"
            className="text-blue-600 hover:text-blue-800"
          >
            Manage Categories
          </Link>
        </div>
      </div>
    </div>
  );
};
