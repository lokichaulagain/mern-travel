import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { toast } from "react-toastify";

export const CmsContext = createContext();
export const CmsContextProvider = ({ children }) => {
  const [isUpdated, setIsUpdated] = useState(0);
  const [cmsData, setCmsData] = useState([]);
  const deleteSuccess = () => toast.success("Successfully Deleted");
  const createSuccess = () => toast.success("Successfully Created");

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [newCmsData, setNewCmsData] = useState({
    companyName: "",
    companyLogo: "",
    facebookUrl: "",
    instagramUrl: "",
    twitterUrl: "",
    email: "",
    phone1: "",
    whatsapp: "",
    googleUrl: "",
    twitterUrl: "",
  });

  const handleCmsInputChange = (e) => {
    setNewCmsData({
      ...newCmsData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCmsFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/cms", newCmsData);
      setIsUpdated(1);
      createSuccess();
      handleClose();
      console.log("Form has been submitted");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCms = async (id) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/cms/" + id);
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
        setIsUpdated(0);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCmsData();
  }, [isUpdated]);

  return <CmsContext.Provider value={{ cmsData, newCmsData, deleteCms, handleCmsInputChange, handleCmsFormSubmit, open, handleClose, handleClickOpen }}>{children}</CmsContext.Provider>;
};
