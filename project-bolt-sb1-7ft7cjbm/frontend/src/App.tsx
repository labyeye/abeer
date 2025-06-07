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
import CineWeddingBannerManager from "./dashboard/components/Cinematography/Wedding/CineWeddingBannerManager";
import CineWeddingGalleryManager from "./dashboard/components/Cinematography/Wedding/CineWeddingGalleryManager";
import PreWeddingPage from "./components/Cinematography/Pre Wedding/PreWeddingPage";
import CinePreWeddingBannerManager from "./dashboard/components/Cinematography/Pre Wedding/CinePreWeddingBannerManager";
import CinePreWeddingGalleryManager from "./dashboard/components/Cinematography/Pre Wedding/CinePreWeddingGalleryManager";
import BabyshowerPage from "./components/Cinematography/Baby shower/BabySourPage";
import CineBabyshowerBannerManager from "./dashboard/components/Cinematography/Baby Shower/CineBabySourBannerManager";
import CineBabyshowerGalleryManager from "./dashboard/components/Cinematography/Baby Shower/CineBabySourGalleryManager";
import EventPage from "./components/Cinematography/Event/EventPage";
import CineBirthdayBannerManager from "./dashboard/components/Cinematography/Birthday/CineBirthdayBannerManager";
import CineBirthdayGalleryManager from "./dashboard/components/Cinematography/Birthday/CineBirthdayGalleryManager";
import CineEventBannerManager from "./dashboard/components/Cinematography/Event/CineEventBannerManager";
import CineEventGalleryManager from "./dashboard/components/Cinematography/Event/CineEventGalleryManager";
import CineBabyShootBannerManager from "./dashboard/components/Cinematography/Baby Shoot/CineBabyShootBannerManager";
import CineBabyShootGalleryManager from "./dashboard/components/Cinematography/Baby Shoot/CineBabyShootGalleryManager";
import SportsPage from "./components/Cinematography/Sports/SportsPage";
import PoliticalPage from "./components/Cinematography/Political/PoliticalPage";
import CinemaPage from "./components/Cinematography/Cinema/CinemaPage";
import CineFilmBannerManager from "./dashboard/components/Cinematography/Film/CineFilmBannerManager";
import CineFilmGalleryManager from "./dashboard/components/Cinematography/Film/CineFilmGalleryManager";
import CinePoliticalBannerManager from "./dashboard/components/Cinematography/Political/CinePoliticalBannerManager";
import CinePoliticalGalleryManager from "./dashboard/components/Cinematography/Political/CinePoliticalGalleryManager";
import CineSportsBannerManager from "./dashboard/components/Cinematography/Sports/CineSportsBannerManager";
import CineSportsGalleryManager from "./dashboard/components/Cinematography/Sports/CineSportsGalleryManager";

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
          <Route
            path="/cinematography/prewedding"
            element={<PreWeddingPage />}
          />
          <Route
            path="/cinematography/babyshower"
            element={<BabyshowerPage />}
          />
          <Route
            path="/cinematography/babyshower"
            element={<SportsPage />}
          />
          <Route
            path="/cinematography/babyshower"
            element={<PoliticalPage />}
          />
          <Route
            path="/cinematography/babyshower"
            element={<CinemaPage />}
          />
          <Route path="/cinematography/event" element={<EventPage />} />
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
              path="cinematography/prewedding-banner"
              element={<CinePreWeddingBannerManager />}
            />
            <Route
              path="cinematography/prewedding-gallery"
              element={<CinePreWeddingGalleryManager />}
            />
            <Route
              path="cinematography/babyshower-banner"
              element={<CineBabyshowerBannerManager />}
            />
            <Route
              path="cinematography/babyshower-gallery"
              element={<CineBabyshowerGalleryManager />}
            />
            <Route
              path="cinematography/birthday-banner"
              element={<CineBirthdayBannerManager />}
            />
            <Route
              path="cinematography/birthday-gallery"
              element={<CineBirthdayGalleryManager />}
            />
            <Route
              path="cinematography/event-banner"
              element={<CineEventBannerManager />}
            />
            <Route
              path="cinematography/event-gallery"
              element={<CineEventGalleryManager />}
            />
            <Route
              path="cinematography/babyshoot-banner"
              element={<CineBabyShootBannerManager />}
            />
            <Route
              path="cinematography/babyshoot-gallery"
              element={<CineBabyShootGalleryManager />}
            />
            <Route
              path="cinematography/film-gallery"
              element={<CineFilmBannerManager />}
            />
            <Route
              path="cinematography/film-gallery"
              element={<CineFilmGalleryManager />}
            />
            <Route
              path="cinematography/political-gallery"
              element={<CinePoliticalBannerManager />}
            />
            <Route
              path="cinematography/political-gallery"
              element={<CinePoliticalGalleryManager />}
            />
            <Route
              path="cinematography/sports-gallery"
              element={<CineSportsBannerManager />}
            />
            <Route
              path="cinematography/sports-gallery"
              element={<CineSportsGalleryManager />}
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
