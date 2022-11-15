import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { toast } from "react-toastify";

export const TeamContext = createContext();

export const TeamContextProvider = ({ children }) => {
  const [members, setMembers] = useState([]);
  const [isUpdated, setIsUpdated] = useState(0);
  const [singleData, setSingleData] = useState({});

  const deleteSuccess = () => toast.success("Successfully Deleted");
  const createSuccess = () => toast.success("Successfully Created");

  const [newMember, setNewMember] = useState({
    name: "",
    profilePicture: "",
    position: "",
    description: "",
  });

  const handleTeamInputChange = (e) => {
    setNewMember({
      ...newMember,
      [e.target.name]: e.target.value,
    });
  };

  const handleTeamFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/team", newMember);
      setIsUpdated(1);
      createSuccess();
      console.log("Form has been submitted");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchAllTeamMember = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/team");
        setMembers(res.data);
        setIsUpdated(0);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllTeamMember();
  }, [isUpdated]);

  const fetchTeamDataById = async (id) => {
    try {
      const res = await axios.get(`http://localhost:4000/api/team/${id}`);
      setSingleData(res.data);
      console.log(res.data);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTeamMember = async (id) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/team/" + id);
      deleteSuccess();
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  return <TeamContext.Provider value={{ fetchTeamDataById, singleData, members, deleteTeamMember, newMember, handleTeamInputChange, handleTeamFormSubmit }}>{children}</TeamContext.Provider>;
};
