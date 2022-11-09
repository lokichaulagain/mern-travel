import mongoose from "mongoose";

const foodSection3Schema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    image: {
      type: String,
    },

    description: {
      type: String,
    },

    price: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("FoodSection3", foodSection3Schema);
