import mongoose from "mongoose";

const aboutUsSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
    },

    title: {
      type: String,
    },

    description1: {
      type: String,
    },

    description2: {
      type: String,
    },

    dropDownContent: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("AboutUs", aboutUsSchema);
