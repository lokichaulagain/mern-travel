import mongoose from "mongoose";

const shelterSection2Schema = new mongoose.Schema(
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

export default mongoose.model("ShelterSection2", shelterSection2Schema);
