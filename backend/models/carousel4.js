import mongoose from "mongoose";

const carousel4Schema = new mongoose.Schema(
  {
    image: {
      type: String,
    },

    title: {
      type: String,
    },

    subtitle: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Carousel4", carousel4Schema);
