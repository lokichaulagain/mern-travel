import mongoose from "mongoose";

const homeCarouselSchema = new mongoose.Schema({
  image: {
    type: String,
  },
});

export default mongoose.model("HomeCarousel", homeCarouselSchema);
