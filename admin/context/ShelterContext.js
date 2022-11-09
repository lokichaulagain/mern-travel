import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { toast } from "react-toastify";

export const ShelterContext = createContext();

export const ShelterContextProvider = ({ children }) => {
  const [sec2, setSec2] = useState([]);
  const [sec3, setSec3] = useState([]);
  const [isUpdated, setIsUpdated] = useState(0);

  const deleteSuccess = () => toast.success("Successfully Deleted");

  useEffect(() => {
    const fetchAllShelterSec2 = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/shelter/sec2");
        setSec2(res.data);
        setIsUpdated(0);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllShelterSec2();
  }, [isUpdated]);

  useEffect(() => {
    const fetchAllShelterSec3 = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/shelter/sec3");
        setSec3(res.data);
        setIsUpdated(0);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllShelterSec3();
  }, [isUpdated]);

  const deleteShelterSec2 = async (id) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/shelter/sec2/" + id);
      deleteSuccess();
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteShelterSec3 = async (id) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/shelter/sec3/" + id);
      deleteSuccess();
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  return <ShelterContext.Provider value={{ sec2, sec3, deleteShelterSec2, deleteShelterSec3 }}>{children}</ShelterContext.Provider>;
};
