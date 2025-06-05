import mongoose from "mongoose";

const slideSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

export const Slide = mongoose.model("HomeSlide", slideSchema);