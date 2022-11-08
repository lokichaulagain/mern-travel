import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    email: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Subscriber", subscriberSchema);
