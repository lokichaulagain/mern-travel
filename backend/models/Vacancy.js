import mongoose from "mongoose";

const vacancySchema = new mongoose.Schema(
  {
    position: {
      type: String,
    },

    image: {
      type: String,
    },

    description: {
      type: String,
    },

    location: {
      type: String,
    },

    qualification: {
      type: String,
    },

    jobType: {
      type: String,
    },

    url: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Vacancy", vacancySchema);
