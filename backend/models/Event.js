import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    thumbnail: {
      type: String,
    },

    time: {
      type: String,
    },

    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
