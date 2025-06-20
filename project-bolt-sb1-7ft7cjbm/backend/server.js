require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const homeSlideRoutes = require('./routes/homeslides');
const categoryShowcaseRoutes = require('./routes/categoryShowcaseRoutes');
const cineweddingbannerRoutes = require('./routes/Cinematography/Wedding/cineweddingBannerRoutes');
const cineweddingGalleryRoutes = require('./routes/Cinematography/Wedding/cinegalleryRoutes');
const cinepreweddingBannerRoutes = require('./routes/Cinematography/Pre Wedding/cinepreweddingBannerRoutes');
const cinepreweddingGalleryRoutes = require('./routes/Cinematography/Pre Wedding/PrecinegalleryRoutes');
const cinebabyshowerBannerRoutes = require('./routes/Cinematography/Baby shower/cinebabysourBannerRoutes');
const cinebabyshowerGalleryRoutes = require('./routes/Cinematography/Baby shower/cinebabysourgalleryRoutes');
const cinebabyShootBannerRoutes = require('./routes/Cinematography/Baby Shoot/cinebabyShootBannerRoutes');
const cinebabyShootGalleryRoutes = require('./routes/Cinematography/Baby Shoot/cinebabyShootgalleryRoutes');
const cinebirthdayBannerRoutes = require('./routes/Cinematography/Birthday/cineBirthdayBannerRoutes');
const cinebirthdayGalleryRoutes = require('./routes/Cinematography/Birthday/cineBirthdaygalleryRoutes');
const cineEventBannerRoutes = require('./routes/Cinematography/Event/EventBannerRoutes');
const cineEventShootGalleryRoutes = require('./routes/Cinematography/Event/EventgalleryRoutes');
const cineSportsBannerRoutes = require('./routes/Cinematography/Sports/cineSportsBannerRoutes');
const cineSportsGalleryRoutes = require('./routes/Cinematography/Sports/cineSportsgalleryRoutes');
const cineAdBannerRoutes = require('./routes/Cinematography/Advertising/cineAdBannerRoutes');
const cineAdGalleryRoutes = require('./routes/Cinematography/Advertising/cineAdgalleryRoutes');
const cinePoliticalBannerRoutes = require('./routes/Cinematography/Political/cinePoliticalBannerRoutes');
const cinePoliticalGalleryRoutes = require('./routes/Cinematography/Political/cinePoliticalgalleryRoutes');
const cineFilmBannerRoutes = require('./routes/Cinematography/Cinema/cineFilmBannerRoutes');
const cineFilmGalleryRoutes = require('./routes/Cinematography/Cinema/cineFilmgalleryRoutes');
const phoAerialBannerRoutes = require('./routes/PhotoGraphy/Aerial Photography/phoAerialBannerRoutes');
const phoAerialGalleryRoutes = require('./routes/PhotoGraphy/Aerial Photography/phoAerialgalleryRoutes');
const phoBabySourBannerRoutes = require('./routes/PhotoGraphy/Baby shower/phobabysourBannerRoutes');
const phoBabySourGalleryRoutes = require('./routes/PhotoGraphy/Baby shower/phobabysourgalleryRoutes');
const phoBirthdayBannerRoutes = require('./routes/PhotoGraphy/Birthday/phoBirthdayBannerRoutes');
const phoBirthdayGalleryRoutes = require('./routes/PhotoGraphy/Birthday/phoBirthdaygalleryRoutes');
const phoEventBannerRoutes = require('./routes/PhotoGraphy/Event/phoEventBannerRoutes');
const phoEventGalleryRoutes = require('./routes/PhotoGraphy/Event/phoEventgalleryRoutes');
const phoBookBannerRoutes = require('./routes/PhotoGraphy/PhotoBook/phoBookRoutes');
const phoBookGalleryRoutes = require('./routes/PhotoGraphy/PhotoBook/phoBookgalleryRoutes');
const phoPoliticalBannerRoutes = require('./routes/PhotoGraphy/Political/phoPoliticalBannerRoutes');
const phoPoliticalGalleryRoutes = require('./routes/PhotoGraphy/Political/phoPoliticalgalleryRoutes');
const phoPreWeddingBannerRoutes = require('./routes/PhotoGraphy/Pre Wedding/phopreweddingBannerRoutes');
const phoPreWeddingGalleryRoutes = require('./routes/PhotoGraphy/Pre Wedding/phopreweddinggalleryRoutes');
const phoSportsBannerRoutes = require('./routes/PhotoGraphy/Sports/phoSportsBannerRoutes');
const phoSportsGalleryRoutes = require('./routes/PhotoGraphy/Sports/phoSportsgalleryRoutes');
const phoWeddingBannerRoutes = require('./routes/PhotoGraphy/Wedding/phoweddingBannerRoutes');
const phoWeddingGalleryRoutes = require('./routes/PhotoGraphy/Wedding/phogalleryRoutes');
const phoBabyShootBannerRoutes = require('./routes/PhotoGraphy/Baby Shoot/phobabyShootBannerRoutes');
const phoBabyShootGalleryRoutes = require('./routes/PhotoGraphy/Baby Shoot/phobabyShootgalleryRoutes');
const phoModelBannerRoutes = require('./routes/PhotoGraphy/Modelling/phoModelBannerRoutes');
const phoModelGalleryRoutes = require('./routes/PhotoGraphy/Modelling/phoModelgalleryRoutes');
const phoStudioBannerRoutes = require('./routes/PhotoGraphy/Photo Studio/phoStudioBannerRoutes');
const phoStudioGalleryRoutes = require('./routes/PhotoGraphy/Photo Studio/phoStudiogalleryRoutes');
const liveStreamBannerRoutes = require('./routes/LiveStream/LiveStreamBannerRoutes');
const liveStreamGalleryRoutes = require('./routes/LiveStream/LiveStreamgalleryRoutes');
const governmentBannerRoutes = require('./routes/Government/GovernmentBannerRoutes');
const governmentGalleryRoutes = require('./routes/Government/GovernmentgalleryRoutes');
const AdvertisingBannerRoutes = require('./routes/Audio Studio/Advertising/AdvertisingBannerRoutes');
const AdvertisinggalleryRoutes = require('./routes/Audio Studio/Advertising/AdvertisinggalleryRoutes');
const EducationalBannerRoutes = require('./routes/Audio Studio/Educational/EducationalBannerRoutes');
const EducationalgalleryRoutes = require('./routes/Audio Studio/Educational/EducationalgalleryRoutes');
const AudioProductionBannerRoutes = require('./routes/Audio Studio/AudioProduction/AudioProductionBannerRoutes');
const AudioProductiongalleryRoutes = require('./routes/Audio Studio/AudioProduction/AudioProductiongalleryRoutes');
const MusicEntertainmentBannerRoutes = require('./routes/Audio Studio/MusicEntertainment/MusicEntertainmentBannerRoutes');
const MusicEntertainmentgalleryRoutes = require('./routes/Audio Studio/MusicEntertainment/MusicEntertainmentgalleryRoutes');
const CrainBannerRoutes = require('./routes/Cine Equipment/Crain/CrainBannerRoutes');
const CrainGalleryRoutes = require('./routes/Cine Equipment/Crain/CraingalleryRoutes');
const WallLedp3BannerRoutes = require('./routes/Cine Equipment/WallLedp3/WallLedp3BannerRoutes');
const WallLedp3GalleryRoutes = require('./routes/Cine Equipment/WallLedp3/WallLedp3galleryRoutes');
const CinemaLightBannerRoutes = require('./routes/Cine Equipment/Cinema Light/CinemaLightBannerRoutes');
const CinemaLightGalleryRoutes = require('./routes/Cine Equipment/Cinema Light/CinemaLightgalleryRoutes');
const FCPXBannerRoutes = require('./routes/Post Production/FCPX/FCPXBannerRoutes');
const FCPXGalleryRoutes = require('./routes/Post Production/FCPX/FCPXgalleryRoutes');
const GradingBannerRoutes = require('./routes/Post Production/Grading/GradingBannerRoutes');
const GradingGalleryRoutes = require('./routes/Post Production/Grading/GradinggalleryRoutes');
const RecordBannerRoutes = require('./routes/Post Production/Record/RecordBannerRoutes');
const RecordGalleryRoutes = require('./routes/Post Production/Record/RecordgalleryRoutes');
const VFXBannerRoutes = require('./routes/Post Production/VFX/VFXBannerRoutes');
const VFXGalleryRoutes = require('./routes/Post Production/VFX/VFXgalleryRoutes');
const CinemaCameraBannerRoutes = require('./routes/Cine Equipment/Cinema Camera/CinemaCameraBannerRoutes');
const ArrigalleryRoutes = require('./routes/Cine Equipment/Cinema Camera/ArrigalleryRoutes');
const BurranogalleryRoutes = require('./routes/Cine Equipment/Cinema Camera/BurranogalleryRoutes');
const FX3galleryRoutes = require('./routes/Cine Equipment/Cinema Camera/FX3galleryRoutes');
const FX6galleryRoutes = require('./routes/Cine Equipment/Cinema Camera/FX6galleryRoutes');
const RedCameragalleryRoutes = require('./routes/Cine Equipment/Cinema Camera/RedCameragalleryRoutes');
const Vennice2galleryRoutes = require('./routes/Cine Equipment/Cinema Camera/Vennice2galleryRoutes');
const ReviewRoutes = require('./routes/reviewRoutes');
const folderRoutes = require('./routes/folderRoutes');
const selectionRoutes = require('./routes/selectionRoutes');
const app = express();
const { google } = require('googleapis');
const path = require('path');

connectDB();

app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(bodyParser.json());
// Replace the auth initialization with:
const auth = new google.auth.GoogleAuth({
  credentials: {
    type: 'service_account',
    project_id: process.env.GOOGLE_PROJECT_ID,
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CLIENT_ID,
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${encodeURIComponent(process.env.GOOGLE_CLIENT_EMAIL)}`
  },
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

// Make drive client available to routes
app.use(async (req, res, next) => {
  try {
    const authClient = await auth.getClient();
    req.drive = google.drive({ version: 'v3', auth: authClient });
    next();
  } catch (error) {
    console.error('Google Drive auth failed:', error);
    next(error);
  }
});
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/slides', homeSlideRoutes);
app.use('/api/categories', categoryShowcaseRoutes);
app.use('/api/cine-wedding-banner',cineweddingbannerRoutes);
app.use('/api/cine-wedding-gallery', cineweddingGalleryRoutes);
app.use('/api/cine-prewedding-banner',cinepreweddingBannerRoutes);
app.use('/api/cine-prewedding-gallery', cinepreweddingGalleryRoutes);
app.use('/api/cine-babyshower-banner',cinebabyshowerBannerRoutes);
app.use('/api/cine-babyshower-gallery', cinebabyshowerGalleryRoutes);
app.use('/api/cine-babyshoot-banner',cinebabyShootBannerRoutes);
app.use('/api/cine-babyshoot-gallery', cinebabyShootGalleryRoutes);
app.use('/api/cine-birthday-banner',cinebirthdayBannerRoutes);
app.use('/api/cine-birthday-gallery', cinebirthdayGalleryRoutes);
app.use('/api/cine-event-banner',cineEventBannerRoutes);
app.use('/api/cine-event-gallery', cineEventShootGalleryRoutes);
app.use('/api/cine-sports-banner',cineSportsBannerRoutes);
app.use('/api/cine-sports-gallery', cineSportsGalleryRoutes);
app.use('/api/cine-political-banner',cinePoliticalBannerRoutes);
app.use('/api/cine-political-gallery', cinePoliticalGalleryRoutes);
app.use('/api/cine-film-banner', cineFilmBannerRoutes);
app.use('/api/cine-film-gallery', cineFilmGalleryRoutes);
app.use('/api/cine-ad-banner', cineAdBannerRoutes);
app.use('/api/cine-ad-gallery', cineAdGalleryRoutes);
app.use('/api/pho-aerial-banner', phoAerialBannerRoutes);
app.use('/api/pho-aerial-gallery', phoAerialGalleryRoutes);
app.use('/api/pho-baby-sour-banner', phoBabySourBannerRoutes);
app.use('/api/pho-baby-sour-gallery', phoBabySourGalleryRoutes);
app.use('/api/pho-birthday-banner', phoBirthdayBannerRoutes);
app.use('/api/pho-birthday-gallery', phoBirthdayGalleryRoutes);
app.use('/api/pho-event-banner', phoEventBannerRoutes);
app.use('/api/pho-event-gallery', phoEventGalleryRoutes);
app.use('/api/pho-film-banner', phoBookBannerRoutes);
app.use('/api/pho-film-gallery', phoBookGalleryRoutes);
app.use('/api/pho-political-banner', phoPoliticalBannerRoutes);
app.use('/api/pho-political-gallery', phoPoliticalGalleryRoutes);
app.use('/api/pho-pre-wedding-banner', phoPreWeddingBannerRoutes);
app.use('/api/pho-pre-wedding-gallery', phoPreWeddingGalleryRoutes);
app.use('/api/pho-sports-banner', phoSportsBannerRoutes);
app.use('/api/pho-sports-gallery', phoSportsGalleryRoutes);
app.use('/api/pho-wedding-banner', phoWeddingBannerRoutes);
app.use('/api/pho-wedding-gallery', phoWeddingGalleryRoutes);
app.use('/api/pho-baby-shoot-banner', phoBabyShootBannerRoutes);
app.use('/api/pho-baby-shoot-gallery', phoBabyShootGalleryRoutes);
app.use('/api/pho-model-banner', phoModelBannerRoutes);
app.use('/api/pho-model-gallery', phoModelGalleryRoutes);
app.use('/api/pho-studio-banner', phoStudioBannerRoutes);
app.use('/api/pho-studio-gallery', phoStudioGalleryRoutes);
app.use('/api/pho-book-banner', phoBookBannerRoutes);
app.use('/api/pho-book-gallery', phoBookGalleryRoutes);
app.use('/api/livestream-banner', liveStreamBannerRoutes);
app.use('/api/livestream-gallery', liveStreamGalleryRoutes);
app.use('/api/government-banner', governmentBannerRoutes);
app.use('/api/government-gallery', governmentGalleryRoutes);
app.use('/api/campaigning-banner', require('./routes/Campaigning/CampaigningBannerRoutes'));
app.use('/api/campaigning-gallery', require('./routes/Campaigning/CampaigninggalleryRoutes'));
app.use('/api/audio-advertising-banner', AdvertisingBannerRoutes);
app.use('/api/audio-advertising-gallery', AdvertisinggalleryRoutes);
app.use('/api/audio-educational-banner', EducationalBannerRoutes);
app.use('/api/audio-educational-gallery', EducationalgalleryRoutes);
app.use('/api/audio-production-banner', AudioProductionBannerRoutes);
app.use('/api/audio-production-gallery', AudioProductiongalleryRoutes);
app.use('/api/audio-entertainment-banner', MusicEntertainmentBannerRoutes);
app.use('/api/audio-entertainment-gallery', MusicEntertainmentgalleryRoutes);
app.use('/api/cineequip-crain-banner', CrainBannerRoutes);
app.use('/api/cineequip-crain-gallery', CrainGalleryRoutes);
app.use('/api/cineequip-wall-banner', WallLedp3BannerRoutes);
app.use('/api/cineequip-wall-gallery', WallLedp3GalleryRoutes);
app.use('/api/cineequip-light-banner', CinemaLightBannerRoutes);
app.use('/api/cineequip-light-gallery', CinemaLightGalleryRoutes);
app.use('/api/cineequip-camera-banner', CinemaCameraBannerRoutes);
app.use('/api/cineequip-arri-banner', ArrigalleryRoutes);
app.use('/api/cineequip-burrano-banner', BurranogalleryRoutes);
app.use('/api/cineequip-fx3-banner', FX3galleryRoutes);
app.use('/api/cineequip-fx6-banner', FX6galleryRoutes);
app.use('/api/cineequip-redcamera-banner', RedCameragalleryRoutes);
app.use('/api/cineequip-vennice2-banner', Vennice2galleryRoutes);
app.use('/api/postproduction-fcpx-banner', FCPXBannerRoutes);
app.use('/api/postproduction-fcpx-gallery', FCPXGalleryRoutes);
app.use('/api/postproduction-grading-banner', GradingBannerRoutes);
app.use('/api/postproduction-grading-gallery', GradingGalleryRoutes);
app.use('/api/postproduction-record-banner', RecordBannerRoutes);
app.use('/api/postproduction-record-gallery', RecordGalleryRoutes);
app.use('/api/postproduction-vfx-banner', VFXBannerRoutes);
app.use('/api/postproduction-vfx-gallery', VFXGalleryRoutes);
app.use('/api/reviews', ReviewRoutes);
app.use('/api/folders', folderRoutes);
app.use('/api/selections', selectionRoutes);


const PORT = process.env.PORT || 2500;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));