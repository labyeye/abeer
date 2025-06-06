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

const PORT = process.env.PORT || 2500;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));