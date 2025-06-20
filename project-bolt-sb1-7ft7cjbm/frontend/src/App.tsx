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
    location.pathname.startsWith("/dashboard") ||
    location.pathname === "/login";

  const [categories, setCategories] = useState<any[]>([]);
  const [hasFeaturedItems, setHasFeaturedItems] = useState(false);
  const [loading, setLoading] = useState(true);
const [fadeOutPreloader, setFadeOutPreloader] = useState(false);

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
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      // Start fade out first
      setFadeOutPreloader(true);
      // Then remove preloader after fade duration (e.g., 1s)
      setTimeout(() => setLoading(false), 1000); 
    }
  };

  fetchData();
}, []);

  if (loading) {
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