import mongoose from "mongoose";

const carousel1Schema = new mongoose.Schema({
  image: {
    type: String,
  },

  days: {
    type: String,
  },

  groupSize: {
    type: String,
  },

  difficultyLevel: {
    type: String,
  },

  title: {
    type: String,
  },

  description: {
    type: String,
  },
});

export default mongoose.model("Carousel1", carousel1Schema);
