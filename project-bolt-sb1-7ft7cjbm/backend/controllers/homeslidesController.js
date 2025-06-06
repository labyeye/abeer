const HomeSlide = require("../models/HomeSlide")

exports.getSlides = async (req, res) => {
  try {
    const slides = await HomeSlide.find().sort("order");
    res.json(slides);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createSlide = async (req, res) => {
  try {
    const slide = new HomeSlide(req.body);
    await slide.save();
    res.status(201).json(slide);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.reorderSlides = async (req, res) => {
  try {
    const { orderedIds } = req.body;
    
    await Promise.all(orderedIds.map(async (id, index) => {
      await HomeSlide.findByIdAndUpdate(id, { order: index });
    }));
    
    res.json({ message: "Slides reordered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteSlide = async (req, res) => {
  try {
    await HomeSlide.findByIdAndDelete(req.params.id);
    res.json({ message: "Slide deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};