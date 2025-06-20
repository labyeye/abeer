import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/HomePage/Navbar";
import Footer from "./components/HomePage/Footer";
import { AppRoutes } from "./routes/AppRoutes/index";
import axios from "axios";
import Preloader from "./components/HomePage/Preloader";

function AppContent() {
  const location = useLocation();
  const isDashboardRoute =
    location.pathname.startsWith("/dashboard") || location.pathname === "/login";
  const isHomePage = location.pathname === "/";

  const [categories, setCategories] = useState<any[]>([]);
  const [hasFeaturedItems, setHasFeaturedItems] = useState(false);
  const [loading, setLoading] = useState(isHomePage);
  const [fadeOutPreloader, setFadeOutPreloader] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false); // New state to track data loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, galleryRes] = await Promise.all([
          axios.get("https://abeer.onrender.com/api/categories"),
          axios.get("https://abeer.onrender.com/api/livestream-gallery")
        ]);
        setCategories(categoriesRes.data);
        const featuredItemsExist = galleryRes.data.some((item: any) => item.isFeatured);
        setHasFeaturedItems(featuredItemsExist);
        setDataLoaded(true); // Mark data as loaded
      } catch (error) {
        console.error("Error fetching data:", error);
        setDataLoaded(true); // Even if error occurs, we should proceed
      }
    };

    fetchData();
  }, [isHomePage]);

  useEffect(() => {
    // Only start fade out when data is loaded and we're on home page
    if (dataLoaded && isHomePage) {
      setFadeOutPreloader(true);
      setTimeout(() => setLoading(false), 3500); // Adjust timing as needed
    }
  }, [dataLoaded, isHomePage]);

  if (loading && isHomePage) {
    return <Preloader isFadingOut={fadeOutPreloader} />;
  }

  return (
    <div className="font-sans">
      {!isDashboardRoute && <Navbar hasFeaturedItems={hasFeaturedItems} />}
      <main>
        <AppRoutes categories={categories} />
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