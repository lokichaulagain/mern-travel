import mongoose from "mongoose";

const HomeSection4Schema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("HomeSection4", HomeSection4Schema);
