import Subscriber from "../models/Subscriber.js";
import createError from "../utils/error.js";
import nodemailer from "nodemailer";

const createSubscriber = async (req, res, next) => {
  try {
    const newSubscriber = new Subscriber(req.body);
    const savedSubscriber = await newSubscriber.save();
    res.status(200).json(savedSubscriber);

    // Nodemailer email send start
    const contactEmail = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, //
      auth: {
        user: "lokendrachaulagain803@gmail.com",
        pass: "keodnnbwcunkxqmi",
      },
    });

    contactEmail.verify((error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Ready to Send");
      }
    });

    const email = req.body.email;
    const mail = {
      // from: name,
      to: "lokendrachaulagain803@gmail.com",
      subject: "Contact Form Submission",
      html: `
             <p>Email: ${email}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
    // Nodemailer email send end
  } catch (error) {
    return next(createError(500, "Server Error while creating Subscriber !!!"));
  }
};

const deleteSubscriber = async (req, res, next) => {
  try {
    const deletedSubscriber = await Subscriber.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedSubscriber);
  } catch (error) {
    return next(createError(500, "Server Error while deleting Subscriber !!!"));
  }
};

const getAllSubscriber = async (req, res, next) => {
  try {
    const allSubscriber = await Subscriber.find();
    res.status(200).json(allSubscriber);
  } catch (error) {
    return next(createError(500, "Server Error while getting all Subscriber !!!"));
  }
};

export { createSubscriber, deleteSubscriber, getAllSubscriber };
