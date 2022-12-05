import mongoose from "mongoose";

const carousel2Schema = new mongoose.Schema({
  image: {
    type: String,
  },
});

export default mongoose.model("Carousel2", carousel2Schema);
