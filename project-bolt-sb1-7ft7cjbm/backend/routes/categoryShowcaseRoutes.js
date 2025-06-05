// categoryShowcaseRoutes.js
const express = require('express');
const router = express.Router();
const CategoryShowcase = require('../models/CategoryShowcase');
const authMiddleware = require('../middleware/auth');

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await CategoryShowcase.find().sort('order');
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete category
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const category = await CategoryShowcase.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });

    // Replace remove() with deleteOne()
    await CategoryShowcase.deleteOne({ _id: req.params.id });
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Reorder categories
router.post('/reorder', authMiddleware, async (req, res) => {
  try {
    const { orderedIds } = req.body;
    
    // Update order for each category
    const bulkOps = orderedIds.map((id, index) => ({
      updateOne: {
        filter: { _id: id },
        update: { $set: { order: index } }
      }
    }));

    await CategoryShowcase.bulkWrite(bulkOps);
    res.json({ message: 'Categories reordered successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post('/', authMiddleware, async (req, res) => {
  const category = new CategoryShowcase({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    images: req.body.images || []
  });

  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update category
router.patch('/:id', authMiddleware, async (req, res) => {
  try {
    const category = await CategoryShowcase.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });

    if (req.body.title) category.title = req.body.title;
    if (req.body.description) category.description = req.body.description;
    if (req.body.category) category.category = req.body.category;
    if (req.body.images) category.images = req.body.images;

    const updatedCategory = await category.save();
    res.json(updatedCategory);
  } catch (err) {
    // ...
  }
});

module.exports = router;