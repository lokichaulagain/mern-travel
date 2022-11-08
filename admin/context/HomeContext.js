import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { toast } from "react-toastify";

export const HomeContext = createContext();

export const HomeContextProvider = ({ children }) => {
  const [sec5, setSec5] = useState([]);
  const [sec4, setSec4] = useState([]);
  const [sec3i, setSec3i] = useState([]);
  const [sec3ii, setSec3ii] = useState([]);
  const [sec2i, setSec2i] = useState([]);
  const [sec2ii, setSec2ii] = useState([]);
  const [isUpdated, setIsUpdated] = useState(0);

  const deleteSuccess = () => toast.success("Successfully Deleted");

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
  console.log(sec5);

  useEffect(() => {
    const fetchAllSec4 = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/home/sec4");
        setSec4(res.data);
        setIsUpdated(0);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllSec4();
  }, [isUpdated]);
  console.log(sec4);

  useEffect(() => {
    const fetchAllSec3i = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/home/sec3i");
        setSec3i(res.data);
        setIsUpdated(0);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllSec3i();
  }, [isUpdated]);
  console.log(sec3i);

  useEffect(() => {
    const fetchAllSec3ii = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/home/sec3ii");
        setSec3ii(res.data);
        setIsUpdated(0);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllSec3ii();
  }, [isUpdated]);
  console.log(sec3ii);

  useEffect(() => {
    const fetchAllSec2i = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/home/sec2i");
        setSec2i(res.data);
        setIsUpdated(0);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllSec2i();
  }, [isUpdated]);
  console.log(sec2i);

  useEffect(() => {
    const fetchAllSec2ii = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/home/sec2ii");
        setSec2ii(res.data);
        setIsUpdated(0);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllSec2ii();
  }, [isUpdated]);
  console.log(sec2ii);

  const deleteMail = async (id) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/contact/" + id);
      deleteSuccess();
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  return <HomeContext.Provider value={{ deleteMail }}>{children}</HomeContext.Provider>;
};
