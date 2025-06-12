const WallLedP3Banner = require('../../../models/Cine Equipment/WallLedP3/WallLedP3Banner');

const isValidImageUrl = (url) => {
  try {
    new URL(url);
    return true; // Don't restrict by file extension
  } catch {
    return false;
  }
};


exports.getActiveBanner = async (req, res) => {
  try {
    const banner = await WallLedP3Banner.findOne({ isActive: true });
    if (!banner) {
      return res.status(404).json({ message: "No active banner found" });
    }
    res.json(banner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllBanners = async (req, res) => {
  try {
    const banners = await WallLedP3Banner.find().sort({ createdAt: -1 });
    res.json(banners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBanner = async (req, res) => {
  try {
    const { title, description, backgroundImageUrl, isActive } = req.body;

    if (!isValidImageUrl(backgroundImageUrl)) {
      return res.status(400).json({ message: "Invalid image URL format" });
    }

    const newBanner = new WallLedP3Banner({
      title,
      description,
      backgroundImageUrl,
      isActive: isActive || false
    });

    await newBanner.save();
    res.status(201).json(newBanner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, backgroundImageUrl, isActive } = req.body;
    
    if (backgroundImageUrl && !isValidImageUrl(backgroundImageUrl)) {
      return res.status(400).json({ message: "Invalid image URL format" });
    }
    
    const updateData = { 
      title, 
      description, 
      backgroundImageUrl,
      ...(isActive !== undefined && { isActive })
    };
    
    if (isActive) {
      await WallLedP3Banner.updateMany({ _id: { $ne: id } }, { isActive: false });
    }

    const updatedBanner = await WallLedP3Banner.findByIdAndUpdate(id, updateData, { new: true });
    res.json(updatedBanner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteBanner = async (req, res) => {
  try {
    await WallLedP3Banner.findByIdAndDelete(req.params.id);
    res.json({ message: 'Banner deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};