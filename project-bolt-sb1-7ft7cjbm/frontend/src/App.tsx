import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/HomePage/Navbar";
import HeroSlider from "./components/HomePage/HeroSlider";
import Gallery from "./components/HomePage/Gallery";
import {GalleryManager} from "./dashboard/components/GalleryManager";
import AboutServices from "./components/HomePage/AboutServices";
import CategoryShowcase from "./components/HomePage/CategoryShowcase";
import Contact from "./components/HomePage/Contact";
import Footer from "./components/HomePage/Footer";
import { Login } from "./dashboard/pages/Login";
import { DashboardLayout } from "./dashboard/DashboardLayout";
import { Dashboard } from "./dashboard/pages/Dashboard";
import { HeroSliderManager } from "./dashboard/components/HeroSliderManager";
import { CategoryShowcaseManager } from "./dashboard/components/CategoryShowcaseManager";
import axios from "axios";

function AppContent() {
  const location = useLocation();
  const isDashboardRoute =
    location.pathname.startsWith("/dashboard") ||
    location.pathname === "/login";
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://abeer.onrender.com/api/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="font-sans">
      {!isDashboardRoute && <Navbar />}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSlider />
                <Gallery />
                <AboutServices />
                {categories.map((category) => (
                  <div key={category._id} className="mb-20">
                    <CategoryShowcase
                      title={category.title}
                      bgImage={category.bgImage}
                      description={category.description}
                      category={category.category}
                      images={category.images}
                    />
                  </div>
                ))}
                <Contact />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="gallery" element={<GalleryManager />} />
            <Route index element={<Dashboard />} />
            <Route path="homeslides" element={<HeroSliderManager />} />
            <Route path="homeslides/new" element={<HeroSliderManager />} />
            <Route path="categories" element={<CategoryShowcaseManager />} />
            <Route
              path="categories/new"
              element={<CategoryShowcaseManager />}
            />
          </Route>
        </Routes>
      </main>
      {!isDashboardRoute && <Footer />}
      <ToastContainer position="bottom-right" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
