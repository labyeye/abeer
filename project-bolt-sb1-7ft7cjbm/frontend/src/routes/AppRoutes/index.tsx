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
import GovernmentPage from "../../components/Government/GovernmentPage";
import CampaigningPage from "../../components/Campaigning/CampaigningPage";
import AdvertisingPage from "../../components/Audio Studio/Advertising/AdvertisingPage";
import EducationalPage from "../../components/Audio Studio/Educational/EducationalPage";
import MusicEntertainmentPage from "../../components/Audio Studio/MusicEntertainment/MusicEntertainmentPage";
import AudioProductionPage from "../../components/Audio Studio/AudioProduction/AudioProductionPage";
import CrainPage from "../../components/Cine Equipment/Crain/CrainPage";
import Wallledp3Page from "../../components/Cine Equipment/Wallledp3/Wallledp3Page";
import CinemaLightPage from "../../components/Cine Equipment/CinemaLight/CinemaLightPage";
import FCPXPage from "../../components/Post Production/FCPX/FCPXPage";
import VFXPage from "../../components/Post Production/VFX/VFXPage";
import GradingPage from "../../components/Post Production/Grading/GradingPage";
import RecordPage from "../../components/Post Production/Record/RecordPage";
import CinemaCameraPage from "../../components/Cine Equipment/Cinema Camera/CinemaCameraPage";
import ReviewPage from "../../components/pages/ReviewPage";
import ImageSelector from "../../components/pages/ImageSelector";
import WeddingCategoryPage from "../../components/Category/WeddingPage";
import PreWeddingCategoryPage from "../../components/Category/PreWeddingPage";
import PoliticalCategoryPage from "../../components/Category/PoliticalPage";
import EventCategoryPage from "../../components/Category/Event";
interface AppRoutesProps {
  categories: any[];
}

export const AppRoutes = ({ categories }: AppRoutesProps) => (
  <Routes>
    {/* Public Routes */}
    <Route path="/" element={<HomePage categories={categories} />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/livestream" element={<LiveStreamPage />} />
    <Route path="/government" element={<GovernmentPage />} />
    <Route path="/campaigning" element={<CampaigningPage />} />
    <Route path="/category/wedding" element={<WeddingCategoryPage />} />
    <Route path="/category/pre-wedding" element={<PreWeddingCategoryPage />} />
    <Route path="/category/event" element={<EventCategoryPage />} />
    <Route path="/category/filmmaking" element={<CinemaPage />} />
     <Route path="/category/government-&-political-event" element={<PoliticalCategoryPage />} />
    <Route path="/review" element={<ReviewPage />} />
    <Route path="/image-selector" element={<ImageSelector />} />
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
    <Route path="/photography/album" element={<PhoBookPage />} />
    <Route path="/audiostudio/advertise" element={<AdvertisingPage />} />
    <Route path="/audiostudio/education" element={<EducationalPage />} />
    <Route path="/audiostudio/production" element={<AudioProductionPage />} />
    <Route path="/audiostudio/music" element={<MusicEntertainmentPage />} />
    <Route path="/cineequipment/crain" element={<CrainPage />} />
    <Route path="/cineequipment/wallledp3" element={<Wallledp3Page />} />
    <Route path="/cineequipment/cinemalight" element={<CinemaLightPage />} />
    <Route path="/cineequipment/cinemacamera" element={<CinemaCameraPage />} />

    <Route path="/postproduction/fcpx" element={<FCPXPage />} />
    <Route path="/postproduction/vfx" element={<VFXPage />} />
    <Route path="/postproduction/grading" element={<GradingPage />} />
    <Route path="/postproduction/record" element={<RecordPage />} />
    {/* Auth Route */}
    <Route path="/login" element={<Login />} />

    {/* Dashboard Routes */}
    {DashboardRoutes}
  </Routes>
);
