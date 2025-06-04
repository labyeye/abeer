import React from "react";
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
import AboutServices from "./components/HomePage/AboutServices";
import CategoryShowcase from "./components/HomePage/CategoryShowcase";
import Contact from "./components/HomePage/Contact";
import Footer from "./components/HomePage/Footer";
import { Login } from "./dashboard/pages/Login";
import { DashboardLayout } from "./dashboard/DashboardLayout";
import { Dashboard } from "./dashboard/pages/Dashboard";

function AppContent() {
  const location = useLocation();
  const isDashboardRoute =
    location.pathname.startsWith("/dashboard") ||
    location.pathname === "/login";

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
                <div className="mb-20">
                  <CategoryShowcase
                    title="Wedding"
                    description="Capturing beautiful moments on your special day with artistic vision and attention to detail."
                    category="wedding"
                    bgImage="https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  />
                </div>
                <div className="mb-20">
                  <CategoryShowcase
                    title="Pre Wedding"
                    description="Capturing beautiful moments on your special day with artistic vision and attention to detail."
                    category="wedding"
                    bgImage="https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  />
                </div>
                <div className="mb-20">
                  <CategoryShowcase
                    title="Event"
                    description="Capturing beautiful moments on your special day with artistic vision and attention to detail."
                    category="wedding"
                    bgImage="https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  />
                </div>
                <div className="mb-20">
                  <CategoryShowcase
                    title="Regional Event"
                    description="Capturing beautiful moments on your special day with artistic vision and attention to detail."
                    category="wedding"
                    bgImage="https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  />
                </div>
                <div className="mb-20">
                  <CategoryShowcase
                    title="Gov. Event / Political Event"
                    description="Capturing beautiful moments on your special day with artistic vision and attention to detail."
                    category="wedding"
                    bgImage="https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  />
                </div>
                <div className="mb-20">
                  <CategoryShowcase
                    title="Filmmaking"
                    description="Capturing beautiful moments on your special day with artistic vision and attention to detail."
                    category="wedding"
                    bgImage="https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  />
                </div>
                <div className="mb-20">
                  <CategoryShowcase
                    title="Institute"
                    description="Capturing beautiful moments on your special day with artistic vision and attention to detail."
                    category="wedding"
                    bgImage="https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  />
                </div>{" "}
                <Contact />{" "}
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
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
