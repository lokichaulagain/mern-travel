import Subscriber from "../models/Subscriber.js";
import createError from "../utils/error.js";
import nodemailer from "nodemailer";

const createSubscriber = async (req, res, next) => {
  try {
    const newSubscriber = new Contact(req.body);
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

    const name = req.body.name;
    const email = req.body.email;
    const mail = {
      // from: name,
      to: "lokendrachaulagain803@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
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
    return next(createError(500, "Server Error while creating contact !!!"));
  }
};



const deleteSubscriber = async (req, res, next) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedContact);
  } catch (error) {
    return next(createError(500, "Server Error while deleting contact !!!"));
  }
};

const getContactById = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.status(200).json(contact);
  } catch (error) {
    return next(createError(500, "Server Error while getting Contact by Id !!!"));
  }
};

const getAllContact = async (req, res, next) => {
  try {
    const allContact = await Contact.find();
    res.status(200).json(allContact);
  } catch (error) {
    return next(createError(500, "Server Error while getting all aboutUsContent !!!"));
  }
};

export { createSubscriber, updateContact, deleteSubscriber, getContactById, getAllContact };
