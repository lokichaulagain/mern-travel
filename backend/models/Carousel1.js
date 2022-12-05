import mongoose from "mongoose";

const carousel1Schema = new mongoose.Schema({
  image: {
    type: String,
  },
});

export default mongoose.model("Carousel1", carousel1Schema);
