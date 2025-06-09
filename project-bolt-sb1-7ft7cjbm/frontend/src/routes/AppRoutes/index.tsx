import { Routes, Route } from "react-router-dom";
import { DashboardRoutes } from "../DashbaordRoutes/index";
import { Login } from "../../dashboard/pages/Login";
import HomePage from "../../components/pages/HomePage";
import AboutPage from "../../components/pages/AboutPage";
import WeddingPage from "../../components/Cinematography/Wedding/WeddingPage";
import PreWeddingPage from "../../components/Cinematography/Pre Wedding/PreWeddingPage";
import BabyshowerPage from "../../components/Cinematography/Baby shower/BabySourPage";
import EventPage from "../../components/Cinematography/Event/EventPage";
import SportsPage from "../../components/Cinematography/Sports/SportsPage";
import PoliticalPage from "../../components/Cinematography/Political/PoliticalPage";
import CinemaPage from "../../components/Cinematography/Cinema/CinemaPage";
import CineAdPage from "../../components/Cinematography/Advertising/CineAdPage";
import PhoAerialPage from "../../components/Photography/Aerial PhotoGraphy/AerialPage";
import PhoWeddingPage from "../../components/Photography/Wedding/WeddingPage";
import PhoPreWeddingPage from "../../components/Photography/Pre Wedding/PreWeddingPage";
import PhoBabyshowerPage from "../../components/Photography/Baby shower/BabySourPage";
import PhoEventPage from "../../components/Photography/Event/EventPage";
import ModelPage from "../../components/Photography/Modelling/ModelPage";
import PhotoStudioPage from "../../components/Photography/Photo Studio/PhoStudioPage";
import PhoSportsPage from "../../components/Photography/Sports/SportsPage";
import PhoPoliticalPage from "../../components/Photography/Political/PoliticalPage";
import PhoBookPage from "../../components/Photography/PhotoBook/PhoBookPage";
import LiveStreamPage from "../../components/Live Streaming/LiveStreamlPage";


interface AppRoutesProps {
  categories: any[];
}

export const AppRoutes = ({ categories }: AppRoutesProps) => (
  <Routes>
    {/* Public Routes */}
    <Route path="/" element={<HomePage categories={categories} />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/livestream" element={< LiveStreamPage/>} />
    <Route path="/cinematography/wedding" element={<WeddingPage />} />
    <Route path="/cinematography/prewedding" element={<PreWeddingPage />} />
    <Route path="/cinematography/babyshower" element={<BabyshowerPage />} />
    <Route path="/cinematography/event" element={<EventPage />} />
    <Route path="/cinematography/sports" element={<SportsPage />} />
    <Route path="/cinematography/political" element={<PoliticalPage />} />
    <Route path="/cinematography/film" element={<CinemaPage />} />
    <Route path="/cinematography/ad" element={<CineAdPage />} />
    <Route path="/photography/aerial" element={<PhoAerialPage />} />
    <Route path="/photography/wedding" element={<PhoWeddingPage />} />
    <Route path="/photography/prewedding" element={<PhoPreWeddingPage />} />
    <Route path="/photography/babyshower" element={<PhoBabyshowerPage />} />
    <Route path="/photography/event" element={<PhoEventPage />} />
    <Route path="/photography/modelling" element={<ModelPage />} />
    <Route path="/photography/studio" element={<PhotoStudioPage />} />
    <Route path="/photography/sports" element={<PhoSportsPage />} />
    <Route path="/photography/political" element={<PhoPoliticalPage />} />
    <Route path="/photography/album" element={< PhoBookPage/>} />
    

    
    {/* Auth Route */}
    <Route path="/login" element={<Login />} />
    
    {/* Dashboard Routes */}
    {DashboardRoutes}
  </Routes>
);