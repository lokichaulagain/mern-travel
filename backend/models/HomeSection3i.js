import mongoose from "mongoose";

const HomeSection3iSchema = new mongoose.Schema(
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

export default mongoose.model("HomeSection3i", HomeSection3iSchema);
