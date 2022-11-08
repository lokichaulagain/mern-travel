import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { toast } from "react-toastify";

export const AncientHimalayanContext = createContext();

export const AncientHimalayanContextProvider = ({ children }) => {
  const [mails, setMails] = useState([]);
  const [cmsData, setCmsData] = useState({});
  const [isUpdated, setIsUpdated] = useState(0);

  const deleteSuccess = () => toast.success("Successfully Deleted");

  useEffect(() => {
    const fetchAllMails = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/contact");
        setMails(res.data);
        setIsUpdated(0);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllMails();
  }, [isUpdated]);

  const deleteMail = async (id) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/contact/" + id);
      deleteSuccess();
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchCmsData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/cms");
        setCmsData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCmsData();
  }, [isUpdated]);

  return <AncientHimalayanContext.Provider value={{ mails, cmsData, deleteMail }}>{children}</AncientHimalayanContext.Provider>;
};
