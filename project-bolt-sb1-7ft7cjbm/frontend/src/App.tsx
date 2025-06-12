import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/HomePage/Navbar";
import Footer from "./components/HomePage/Footer";
import { AppRoutes } from "./routes/AppRoutes/index";
import axios from "axios";

function AppContent() {
  const location = useLocation();
  const isDashboardRoute =
    location.pathname.startsWith("/dashboard") ||
    location.pathname === "/login";
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasFeaturedItems, setHasFeaturedItems] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, galleryRes] = await Promise.all([
          axios.get("https://abeer.onrender.com/api/categories"),
          axios.get("https://abeer.onrender.com/api/livestream-gallery")
        ]);
        setCategories(categoriesRes.data);
        // Check if there are any featured items
        const featuredItemsExist = galleryRes.data.some((item: any) => item.isFeatured);
        setHasFeaturedItems(featuredItemsExist);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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