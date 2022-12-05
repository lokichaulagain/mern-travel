import mongoose from "mongoose";

const carousel3Schema = new mongoose.Schema({
  image: {
    type: String,
  },
});

export default mongoose.model("Carousel3", carousel3Schema);
