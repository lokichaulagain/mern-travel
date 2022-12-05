import axios from "axios";
import { useState, createContext } from "react";
import { toast } from "react-toastify";

export const MailContext = createContext();

export const MailContextProvider = ({ children }) => {
  const [mails, setMails] = useState([]);
  const [singleMail, setSingleMail] = useState({});
  const [isUpdated, setIsUpdated] = useState(0);

  const deleteSuccess = () => toast.success("Successfully Deleted");

  const fetchAllMails = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/contact`);
      setMails(res.data);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSingleMail = async (id) => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/contact/${id}`);
      setSingleMail(res.data);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMail = async (id) => {
    try {
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/contact` + id);
      deleteSuccess();
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  return <MailContext.Provider value={{ fetchAllMails, fetchSingleMail, singleMail, isUpdated, mails, deleteMail }}>{children}</MailContext.Provider>;
};
