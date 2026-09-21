import mongoose from "mongoose";

const heroSchema = new mongoose.Schema(
  {
    tag: {
      type: String,
      required: true,
    },

    title1: {
      type: String,
      required: true,
    },

    title2: {
      type: String,
      required: true,
    },

    title3: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
    button1Text: {
      type: String,
    },
    button1Link: {
      type: String,
    },
    button2Text: {
      type: String,
    },
    button2Link: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Hero = mongoose.model("Hero", heroSchema);
