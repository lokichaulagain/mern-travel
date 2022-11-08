import mongoose from "mongoose";

const HomeSection3iiSchema = new mongoose.Schema(
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

export default mongoose.model("HomeSection3ii", HomeSection3iiSchema);
