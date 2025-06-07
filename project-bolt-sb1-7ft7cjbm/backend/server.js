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
const cinePoliticalBannerRoutes = require('./routes/Cinematography/Political/cinePoliticalBannerRoutes');
const cinePoliticalGalleryRoutes = require('./routes/Cinematography/Political/cinePoliticalgalleryRoutes');
const cineFilmBannerRoutes = require('./routes/Cinematography/Cinema/cineFilmBannerRoutes');
const cineFilmGalleryRoutes = require('./routes/Cinematography/Cinema/cineFilmgalleryRoutes');
const app = express();

connectDB();

app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(bodyParser.json());

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

const PORT = process.env.PORT || 2500;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));