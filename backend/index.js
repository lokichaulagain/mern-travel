import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import contactRoute from "./routes/contact.route.js";
import homeRoute from "./routes/home.route.js";
import teamRoute from "./routes/team.route.js";
import shelterRoute from "./routes/shelter.route.js";
import cmsRoute from "./routes/cms.route.js";
import cors from "cors";

const port = process.env.PORT;

app.use(express.json());
app.use(cors());

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

//serverCheck
app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to the server" });
});

app.use("/api/contact", contactRoute);
app.use("/api/home", homeRoute);
app.use("/api/team", teamRoute);
app.use("/api/shelter", shelterRoute);
app.use("/api/cms", cmsRoute);

//portListening
app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running at port ${port}`);
  } else {
    console.log("Error while running the server", error);
  }
});
