const GalleryImage = require('../models/GalleryImage');

exports.getAllImages = async (req, res) => {
  try {
    const images = await GalleryImage.find().sort('order');
    res.json(images);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.createImage = async (req, res) => {
  const { category, image, title, height } = req.body;

  try {
    const newImage = new GalleryImage({
      category,
      image,
      title,
      height: height || 1
    });

    const imageDoc = await newImage.save();
    res.json(imageDoc);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateImage = async (req, res) => {
  const { category, image, title, height } = req.body;

  try {
    let imageDoc = await GalleryImage.findById(req.params.id);
    if (!imageDoc) {
      return res.status(404).json({ msg: 'Image not found' });
    }

    imageDoc.category = category || imageDoc.category;
    imageDoc.image = image || imageDoc.image;
    imageDoc.title = title || imageDoc.title;
    imageDoc.height = height || imageDoc.height;

    await imageDoc.save();
    res.json(imageDoc);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteImage = async (req, res) => {
  try {
    console.log("Attempting to delete image ID:", req.params.id);

    const deletedImage = await GalleryImage.findByIdAndDelete(req.params.id);

    if (!deletedImage) {
      return res.status(404).json({ msg: 'Image not found' });
    }

    res.json({ msg: 'Image removed successfully' });
  } catch (err) {
    console.error("Error deleting image:", err); // Log full error for debugging
    res.status(500).send('Server Error');
  }
};


exports.reorderImages = async (req, res) => {
  try {
    const { orderedIds } = req.body;
    
    await Promise.all(orderedIds.map(async (id, index) => {
      await GalleryImage.findByIdAndUpdate(id, { order: index });
    }));
    
    res.json({ msg: 'Images reordered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};