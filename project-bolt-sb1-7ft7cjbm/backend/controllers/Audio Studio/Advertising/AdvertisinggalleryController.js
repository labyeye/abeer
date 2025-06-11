const AdvertisingGalleryItem = require('../../../models/Audio Studio/Advertising/AdvertisingGalleryItem');

// Get all gallery items
exports.getAllGalleryItems = async (req, res) => {
  try {
    const items = await AdvertisingGalleryItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new gallery item
exports.createGalleryItem = async (req, res) => {
  const { title, description, place, thumbnail, videoUrl, isFeatured } = req.body;
  
  try {
    const newItem = new AdvertisingGalleryItem({
      title,
      description,
      place,
      thumbnail,
      videoUrl,
      isFeatured: isFeatured || false
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update gallery item
exports.updateGalleryItem = async (req, res) => {
  try {
    const updatedItem = await AdvertisingGalleryItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete gallery item
exports.deleteGalleryItem = async (req, res) => {
  try {
    await AdvertisingGalleryItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Gallery item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};