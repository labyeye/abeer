import { Route } from "react-router-dom";
import { DashboardLayout } from "../../dashboard/DashboardLayout";
import { Dashboard } from "../../dashboard/pages/Dashboard";
import { HeroSliderManager } from "../../dashboard/components/HeroSliderManager";
import { CategoryShowcaseManager } from "../../dashboard/components/CategoryShowcaseManager";
import { GalleryManager } from "../../dashboard/components/GalleryManager";
import CineWeddingBannerManager from "../../dashboard/components/Cinematography/Wedding/CineWeddingBannerManager";
import CineWeddingGalleryManager from "../../dashboard/components/Cinematography/Wedding/CineWeddingGalleryManager";
import CinePreWeddingBannerManager from "../../dashboard/components/Cinematography/Pre Wedding/CinePreWeddingBannerManager";
import CinePreWeddingGalleryManager from "../../dashboard/components/Cinematography/Pre Wedding/CinePreWeddingGalleryManager";
import CineBabyshowerBannerManager from "../../dashboard/components/Cinematography/Baby Shower/CineBabySourBannerManager";
import CineBabyshowerGalleryManager from "../../dashboard/components/Cinematography/Baby Shower/CineBabySourGalleryManager";
import CineBirthdayBannerManager from "../../dashboard/components/Cinematography/Birthday/CineBirthdayBannerManager";
import CineBirthdayGalleryManager from "../../dashboard/components/Cinematography/Birthday/CineBirthdayGalleryManager";
import CineEventBannerManager from "../../dashboard/components/Cinematography/Event/CineEventBannerManager";
import CineEventGalleryManager from "../../dashboard/components/Cinematography/Event/CineEventGalleryManager";
import CineBabyShootBannerManager from "../../dashboard/components/Cinematography/Baby Shoot/CineBabyShootBannerManager";
import CineBabyShootGalleryManager from "../../dashboard/components/Cinematography/Baby Shoot/CineBabyShootGalleryManager";
import CineFilmBannerManager from "../../dashboard/components/Cinematography/Film/CineFilmBannerManager";
import CineFilmGalleryManager from "../../dashboard/components/Cinematography/Film/CineFilmGalleryManager";
import CinePoliticalBannerManager from "../../dashboard/components/Cinematography/Political/CinePoliticalBannerManager";
import CinePoliticalGalleryManager from "../../dashboard/components/Cinematography/Political/CinePoliticalGalleryManager";
import CineSportsBannerManager from "../../dashboard/components/Cinematography/Sports/CineSportsBannerManager";
import CineSportsGalleryManager from "../../dashboard/components/Cinematography/Sports/CineSportsGalleryManager";
import CineadtBannerManager from "../../dashboard/components/Cinematography/Advertising/CineAdBannerManager";
import CineAdGalleryManager from "../../dashboard/components/Cinematography/Advertising/CineAdGalleryManager";
import PhoAerialBannerManager from "../../dashboard/components/Photography/Aerial Photography/PhoAerialBannerManager";
import PhoArialGalleryManager from "../../dashboard/components/Photography/Aerial Photography/PhoAerialGalleryManager";
import PhoWeddingBannerManager from "../../dashboard/components/Photography/Wedding/PhoWeddingBannerManager";
import PhoWeddingGalleryManager from "../../dashboard/components/Photography/Wedding/PhoWeddingGalleryManager";
import PhoBabyShootBannerManager from "../../dashboard/components/Photography/Baby Shoot/PhoBabyShootBannerManager";
import PhoBabyShootGalleryManager from "../../dashboard/components/Photography/Baby Shoot/PhoBabyShootGalleryManager";
import PhoBabyshowerBannerManager from "../../dashboard/components/Photography/Baby Shower/PhoBabySourBannerManager";
import PhoBabyshowerGalleryManager from "../../dashboard/components/Photography/Baby Shower/PhoBabySourGalleryManager";
import PhoPoliticalBannerManager from "../../dashboard/components/Photography/Political/PhoPoliticalBannerManager";
import PhoPoliticalGalleryManager from "../../dashboard/components/Photography/Political/PhoPoliticalGalleryManager";
import PhoModelGalleryManager from "../../dashboard/components/Photography/Modelling/PhoModellingGalleryManager";
import PhoModellingBannerManager from "../../dashboard/components/Photography/Modelling/PhoModellingBannerManager";




export const DashboardRoutes = (
  <Route path="/dashboard" element={<DashboardLayout />}>
    {/* Main Dashboard Routes */}
    <Route index element={<Dashboard />} />
    <Route path="gallery" element={<GalleryManager />} />
    <Route path="homeslides" element={<HeroSliderManager />} />
    <Route path="homeslides/new" element={<HeroSliderManager />} />
    <Route path="categories" element={<CategoryShowcaseManager />} />
    <Route path="categories/new" element={<CategoryShowcaseManager />} />

    {/* Cinematography - Wedding */}
    <Route
      path="cinematography/wedding-banner"
      element={<CineWeddingBannerManager />}
    />
    <Route
      path="cinematography/wedding-gallery"
      element={<CineWeddingGalleryManager />}
    />

    {/* Cinematography - Pre Wedding */}
    <Route
      path="cinematography/prewedding-banner"
      element={<CinePreWeddingBannerManager />}
    />
    <Route
      path="cinematography/prewedding-gallery"
      element={<CinePreWeddingGalleryManager />}
    />

    {/* Cinematography - Baby Shower */}
    <Route
      path="cinematography/babyshower-banner"
      element={<CineBabyshowerBannerManager />}
    />
    <Route
      path="cinematography/babyshower-gallery"
      element={<CineBabyshowerGalleryManager />}
    />

    {/* Cinematography - Birthday */}
    <Route
      path="cinematography/birthday-banner"
      element={<CineBirthdayBannerManager />}
    />
    <Route
      path="cinematography/birthday-gallery"
      element={<CineBirthdayGalleryManager />}
    />

    {/* Cinematography - Event */}
    <Route
      path="cinematography/event-banner"
      element={<CineEventBannerManager />}
    />
    <Route
      path="cinematography/event-gallery"
      element={<CineEventGalleryManager />}
    />

    {/* Cinematography - Baby Shoot */}
    <Route
      path="cinematography/babyshoot-banner"
      element={<CineBabyShootBannerManager />}
    />
    <Route
      path="cinematography/babyshoot-gallery"
      element={<CineBabyShootGalleryManager />}
    />

    {/* Cinematography - Film */}
    <Route
      path="cinematography/film-banner"
      element={<CineFilmBannerManager />}
    />
    <Route
      path="cinematography/film-gallery"
      element={<CineFilmGalleryManager />}
    />

    {/* Cinematography - Political */}
    <Route
      path="cinematography/political-banner"
      element={<CinePoliticalBannerManager />}
    />
    <Route
      path="cinematography/political-gallery"
      element={<CinePoliticalGalleryManager />}
    />

    {/* Cinematography - Sports */}
    <Route
      path="cinematography/sports-banner"
      element={<CineSportsBannerManager />}
    />
    <Route
      path="cinematography/sports-gallery"
      element={<CineSportsGalleryManager />}
    />

    {/* Cinematography - Advertising */}
    <Route
      path="cinematography/ad-banner"
      element={<CineadtBannerManager />}
    />
    <Route
      path="cinematography/ad-gallery"
      element={<CineAdGalleryManager />}
    />

    {/* Photography*/}
    <Route
      path="photography/aerial-banner"
      element={<PhoAerialBannerManager />}
    />
    <Route
      path="photography/aerial-gallery"
      element={<PhoArialGalleryManager />}
    />
    <Route
      path="photography/wedding-banner"
      element={<PhoWeddingBannerManager />}
    />
    <Route
      path="photography/wedding-gallery"
      element={<PhoWeddingGalleryManager />}
    />
    <Route
      path="photography/babyshoot-gallery"
      element={<PhoBabyShootGalleryManager />}
    />
    <Route
      path="photography/babyshower-banner"
      element={<PhoBabyshowerBannerManager />}
    />
    <Route
      path="photography/babyshower-gallery"
      element={<PhoBabyshowerGalleryManager />}
    />
    <Route
      path="photography/wedding-banner"
      element={<PhoWeddingBannerManager />}
    />
    <Route
      path="photography/wedding-gallery"
      element={<PhoWeddingGalleryManager />}
    />
    <Route
      path="photography/modelling-banner"
      element={<PhoModellingBannerManager />}
    />
    <Route
      path="photography/modelling-gallery"
      element={<PhoModelGalleryManager />}
    />
    <Route
      path="photography/political-banner"
      element={<PhoPoliticalBannerManager />}
    />
    <Route
      path="photography/political-gallery"
      element={<PhoPoliticalGalleryManager />}
    />
  </Route>
);
