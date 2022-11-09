import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { toast } from "react-toastify";

export const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {
  const [foodSec2, setFoodSec2] = useState([]);
  const [foodSec3, setFoodSec3] = useState([]);
  const [isUpdated, setIsUpdated] = useState(0);

  const deleteSuccess = () => toast.success("Successfully Deleted");

  useEffect(() => {
    const fetchAllFoodSection2 = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/food/sec2");
        setFoodSec2(res.data);
        setIsUpdated(0);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllFoodSection2();
  }, [isUpdated]);

  const deleteFoodSection2 = async (id) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/food/sec2/" + id);
      deleteSuccess();
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchAllFoodSection3 = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/food/sec3");
        setFoodSec3(res.data);
        setIsUpdated(0);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllFoodSection3();
  }, [isUpdated]);

  const deleteFoodSection3 = async (id) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/food/sec3/" + id);
      deleteSuccess();
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  return <FoodContext.Provider value={{ foodSec2, foodSec3, deleteFoodSection2, deleteFoodSection3 }}>{children}</FoodContext.Provider>;
};
