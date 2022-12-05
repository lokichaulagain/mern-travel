import mongoose from "mongoose";

const eventBannerSchema = new mongoose.Schema({
  image: {
    type: String,
  },

  status: {
    type: String,
  },
});

export default mongoose.model("EventBanner", eventBannerSchema);
