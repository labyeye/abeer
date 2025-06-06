require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const homeSlideRoutes = require('./routes/homeslides');
const categoryShowcaseRoutes = require('./routes/categoryShowcaseRoutes');

const app = express();

// Connect Database
connectDB();

app.use(cors({
  origin: true,  // Reflect the request origin
  credentials: true,
}));

app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/slides', homeSlideRoutes);
app.use('/api/categories', categoryShowcaseRoutes);

const PORT = process.env.PORT || 2500;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));