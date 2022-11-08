import mongoose from "mongoose";

const HomeSection2iSchema = new mongoose.Schema(
  {
    h1: {
      type: String,
    },

    p1: {
      type: String,
    },

    h2: {
      type: String,
    },

    p2: {
      type: String,
    },

    h3: {
      type: String,
    },

    p3: {
      type: String,
    },

    title: {
      type: String,
    },
    description: {
      type: String,
    },

    time: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("HomeSection2i", HomeSection2iSchema);
