const EventGalleryItem = require('../../../models/Cinematography/Event/CineEventGalleryItem');

exports.getAllGalleryItems = async (req, res) => {
  try {
    const items = await EventGalleryItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createGalleryItem = async (req, res) => {
  const { title, description, place, thumbnail, videoUrl, isFeatured } = req.body;
  
  try {
    const newItem = new EventGalleryItem({
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

exports.updateGalleryItem = async (req, res) => {
  try {
    const updatedItem = await EventGalleryItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteGalleryItem = async (req, res) => {
  try {
    await EventGalleryItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Gallery item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};