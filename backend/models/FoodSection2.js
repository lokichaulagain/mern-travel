import mongoose from "mongoose";

const foodSection2Schema = new mongoose.Schema(
  {
    icon: {
      type: String,
    },

    title: {
      type: String,
    },

    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("FoodSection2", foodSection2Schema);
