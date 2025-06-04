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
    const image = await GalleryImage.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ msg: 'Image not found' });
    }

    await image.remove();
    res.json({ msg: 'Image removed' });
  } catch (err) {
    console.error(err.message);
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