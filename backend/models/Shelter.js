import mongoose from "mongoose";

const shelterRoute = new mongoose.Schema(
  {
    image: {
      type: String,
    },

    title: {
      type: String,
    },

    subtitle: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Shelter", shelterRoute);
