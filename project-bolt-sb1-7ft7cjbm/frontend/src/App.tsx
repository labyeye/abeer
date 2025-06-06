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
import Footer from "./components/HomePage/Footer";
import { Login } from "./dashboard/pages/Login";
import { DashboardLayout } from "./dashboard/DashboardLayout";
import { Dashboard } from "./dashboard/pages/Dashboard";
import { HeroSliderManager } from "./dashboard/components/HeroSliderManager";
import { CategoryShowcaseManager } from "./dashboard/components/CategoryShowcaseManager";
import { GalleryManager } from "./dashboard/components/GalleryManager";
import axios from "axios";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import WeddingPage from "./components/Cinematography/Wedding/WeddingPage";
import CineWeddingBannerManager from "./dashboard/components/CineWeddingBannerManager";
import CineWeddingGalleryManager from "./dashboard/components/CineWeddingGalleryManager";

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
          <Route path="/" element={<HomePage categories={categories} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cinematography/wedding" element={<WeddingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="gallery" element={<GalleryManager />} />
            <Route index element={<Dashboard />} />
            <Route path="homeslides" element={<HeroSliderManager />} />
            <Route path="homeslides/new" element={<HeroSliderManager />} />
            <Route path="categories" element={<CategoryShowcaseManager />} />
            <Route
              path="cinematography/banner"
              element={<CineWeddingBannerManager />}
            />
            <Route
              path="cinematography/gallery"
              element={<CineWeddingGalleryManager />}
            />
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
