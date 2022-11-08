import mongoose from "mongoose";

const HomeSection2iiSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    subtitle: {
      type: String,
    },

    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("HomeSection2ii", HomeSection2iiSchema);
