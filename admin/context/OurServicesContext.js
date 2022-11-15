import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { toast } from "react-toastify";

export const OurServicesContext = createContext();
export const OurServicesContextProvider = ({ children }) => {
  const [sec5, setSec5] = useState([]);
  const [isUpdated, setIsUpdated] = useState(0);
  const [singleData, setSingleData] = useState({})
  const deleteSuccess = () => toast.success("Successfully Deleted");
  const createSuccess = () => toast.success("Successfully Created");

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchAllSec5 = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/home/sec5");
        setSec5(res.data);
        setIsUpdated(0);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllSec5();
  }, [isUpdated]);



    const fetchSingleService = async (id) => {
      try {
        const res = await axios.get(`http://localhost:4000/api/home/sec5/${id}`);
        setSingleData(res.data);
        setIsUpdated(0);
      } catch (error) {
        console.log(error);
      }
    };


  const deleteSec5 = async (id) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/home/sec5/" + id);
      deleteSuccess();
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  const [newSec5, setNewSec5] = useState({
    title: "",
    description: "",
    icon: "",
  });

  const handleSec5InputChange = (e) => {
    setNewSec5({
      ...newSec5,
      [e.target.name]: e.target.value,
    });
  };

  const handleSec5FormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/home/sec5", newSec5);
      createSuccess();
      setIsUpdated(1);
      handleClose();
      console.log("Form has been submitted");
      setNewSec5({
        title: "",
        description: "",
        icon: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return <OurServicesContext.Provider value={{fetchSingleService,singleData, handleSec5FormSubmit, handleSec5InputChange, sec5, newSec5, open, handleClose, handleClickOpen ,deleteSec5}}>{children}</OurServicesContext.Provider>;
};
