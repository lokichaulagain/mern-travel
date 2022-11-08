import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import contactRoute from "./routes/contact.route.js";
import cmsRoute from "./routes/cms.route.js";
import nodemailer from "nodemailer";

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

///////////////////////////////////////////////
// const contactEmail = nodemailer.createTransport({
//   service: "gmail",
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, //
//   auth: {
//     user: "lokendrachaulagain803@gmail.com",
//     pass: "keodnnbwcunkxqmi",
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

// app.post("/api/contact", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const message = req.body.message;
//   const mail = {
//     // from: name,
//     to: "lokendrachaulagain803@gmail.com",
//     subject: "Contact Form Submission",
//     html: `<p>Name: ${name}</p>
//              <p>Email: ${email}</p>
//              <p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json({ status: "ERROR" });
//     } else {
//       res.json({ status: "Message Sent" });
//     }
//   });
// });

//serverCheck
app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to the server" });
});

app.use("/api/contact", contactRoute);
app.use("/api/cms", cmsRoute);

//portListening
app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running at port ${port}`);
  } else {
    console.log("Error while running the server", error);
  }
});
