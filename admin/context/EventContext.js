import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { toast } from "react-toastify";

export const EventContext = createContext();

export const EventContextProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [isUpdated, setIsUpdated] = useState(0);

  const deleteSuccess = () => toast.success("Successfully Deleted");

  useEffect(() => {
    const fetchAllEvent = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/event");
        setEvents(res.data);
        setIsUpdated(0);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllEvent();
  }, [isUpdated]);

  const deleteEvent = async (id) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/event/" + id);
      deleteSuccess();
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  return <EventContext.Provider value={{ events, deleteEvent }}>{children}</EventContext.Provider>;
};
