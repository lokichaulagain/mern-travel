import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { toast } from "react-toastify";

export const PricePackageContext = createContext();
export const PricePackageContextProvider = ({ children }) => {
  const [isUpdated, setIsUpdated] = useState(0);
  const [pricePackages, setPricePackages] = useState([]);

  const deleteSuccess = () => toast.success("Successfully Deleted");
  const createSuccess = () => toast.success("Successfully Created");

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [newPricePackage, setNewPricePackage] = useState({
    title: "",
    amount: "",
    duration: "",
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
    p6: "",
    p7: "",
    p8: "",
    p8: "",
  });

  const handlePricePackageInputChange = (e) => {
    setNewCmsData({
      ...newPricePackage,
      [e.target.name]: e.target.value,
    });
  };

  const handlePricePackageFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/pricePackage", newPricePackage);
      setIsUpdated(1);
      createSuccess();
      handleClose();
      console.log("Form has been submitted");
    } catch (error) {
      console.log(error);
    }
  };

  const deletePricePackage = async (id) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/pricePackage/" + id);
      deleteSuccess();
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchPricePackages = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/pricePackage");
        setPricePackages(res.data);
        setIsUpdated(0);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPricePackages();
  }, [isUpdated]);

  return <PricePackageContext.Provider value={{ pricePackages, deletePricePackage, handlePricePackageInputChange, handlePricePackageFormSubmit, open, handleClose, handleClickOpen, newPricePackage }}>{children}</PricePackageContext.Provider>;
};
