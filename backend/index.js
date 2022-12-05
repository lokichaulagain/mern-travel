import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import contactRoute from "./routes/contact.route.js";
import teamRoute from "./routes/team.route.js";
import blogRoute from "./routes/blog.route.js";
import vacancyRoute from "./routes/vacancy.route.js";
import foodRoute from "./routes/subscriber.route.js";

import homeCarouselRoute from "./routes/homeCarousel.route.js";
import carousel1Route from "./routes/carousel1.route.js";
import carousel2Route from "./routes/carousel2.route.js";
import carousel3Route from "./routes/carousel3.route.js";
import shelterRoute from "./routes/shelter.route.js";
import reviewRoute from "./routes/review.route.js";

import cmsRoute from "./routes/cms.route.js";
import subscriberRoute from "./routes/subscriber.route.js";
import carousel4Route from "./routes/carousel4.route.js";

import cors from "cors";
import cookieParser from "cookie-parser";

const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

//DbConnection
mongoose
  .connect(process.env.MONGO_DB_URI, {
    autoIndex: true,
  })
  .then(() => {
    console.log("MongoDb connected successfully !");
  })
  .catch((error) => {
    console.log("MondoDb Disconnected !!!", error);
  });
app.use("/gem", express.static("./gem"));
//serverCheck
app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to the server" });
});

app.use("/api/contact", contactRoute);
app.use("/api/team", teamRoute);
app.use("/api/blog", blogRoute);
app.use("/api/vacancy", vacancyRoute);
app.use("/api/food", foodRoute);
app.use("/api/cms", cmsRoute);

app.use("/api/homeCarousel", homeCarouselRoute);
app.use("/api/carousel1", carousel1Route);
app.use("/api/carousel2", carousel2Route);
app.use("/api/carousel3", carousel3Route);
app.use("/api/shelter", shelterRoute);
app.use("/api/carousel4", carousel4Route);
app.use("/api/review", reviewRoute);

app.use("/api/subscriber", subscriberRoute);

//portListening
app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running at port ${port}`);
  } else {
    console.log("Error while running the server", error);
  }
});
