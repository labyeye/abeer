import { Slide } from "../models/HomeSlide.js";

export const getSlides = async (req, res) => {
  try {
    const slides = await Slide.find().sort("order");
    res.json(slides);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSlide = async (req, res) => {
  try {
    const slide = new Slide(req.body);
    await slide.save();
    res.status(201).json(slide);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const reorderSlides = async (req, res) => {
  try {
    const { orderedIds } = req.body;
    
    await Promise.all(orderedIds.map(async (id, index) => {
      await Slide.findByIdAndUpdate(id, { order: index });
    }));
    
    res.json({ message: "Slides reordered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteSlide = async (req, res) => {
  try {
    await Slide.findByIdAndDelete(req.params.id);
    res.json({ message: "Slide deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};