import mongoose from "mongoose";

const PricePackageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    amount: {
      type: String,
    },

    duration: {
      type: String,
    },

    p1: {
      type: String,
    },

    p2: {
      type: String,
    },

    p3: {
      type: String,
    },

    p4: {
      type: String,
    },
    p5: {
      type: String,
    },

    p6: {
      type: String,
    },

    p7: {
      type: String,
    },

    p8: {
      type: String,
    },

    p9: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("PricePackage", PricePackageSchema);
