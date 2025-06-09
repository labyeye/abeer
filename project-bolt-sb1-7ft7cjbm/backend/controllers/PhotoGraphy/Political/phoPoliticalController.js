const PhoPoliticalGalleryItem = require('../../../models/Photography/Political/PhoPoliticalGalleryItem');

// Get all gallery items
exports.getAllGalleryItems = async (req, res) => {
  try {
    const items = await PhoPoliticalGalleryItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new gallery item
exports.createGalleryItem = async (req, res) => {
  const { title, description, place, thumbnail, isFeatured } = req.body;
  
  try {
    const newItem = new PhoPoliticalGalleryItem({
      title,
      description,
      place,
      thumbnail,
     
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
    const updatedItem = await PhoPoliticalGalleryItem.findByIdAndUpdate(
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
    await PhoPoliticalGalleryItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Gallery item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};