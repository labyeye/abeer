const VFXGalleryItem = require('../../../models/Post Production/VFX/VFXGalleryItem');

// Get all gallery items
exports.getAllVFXGalleryItems = async (req, res) => {
  try {
    const items = await VFXGalleryItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new gallery item
exports.createVFXGalleryItem = async (req, res) => {
  const { title, description, place, thumbnail, videoUrl, isFeatured } = req.body;
  
  try {
    const newItem = new VFXGalleryItem({
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
exports.updateVFXGalleryItem = async (req, res) => {
  try {
    const updatedItem = await VFXGalleryItem.findByIdAndUpdate(
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
exports.deleteVFXGalleryItem = async (req, res) => {
  try {
    await VFXGalleryItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Gallery item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};