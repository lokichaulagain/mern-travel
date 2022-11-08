import mongoose from "mongoose";

const shelterSection3Schema = new mongoose.Schema(
  {
    btnName: {
      type: String,
    },

    title: {
      type: String,
    },

    subtitle: {
      type: String,
    },

    li1: {
      type: String,
    },

    li2: {
      type: String,
    },

    li3: {
      type: String,
    },

    description: {
      type: String,
    },

    lgCarousel: {
      type: Array,
      default: [],
    },

    smCarousel: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("ShelterSection3", shelterSection3Schema);
