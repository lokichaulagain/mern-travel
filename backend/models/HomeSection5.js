import mongoose from "mongoose";

const homeSection5Schema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    description: {
      type: String,
    },

    icon: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("HomeSection5", homeSection5Schema);
