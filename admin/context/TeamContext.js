import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { toast } from "react-toastify";

export const TeamContext = createContext();

export const TeamContextProvider = ({ children }) => {
  const [members, setMembers] = useState([]);
  const [isUpdated, setIsUpdated] = useState(0);

  const deleteSuccess = () => toast.success("Successfully Deleted");

  const [team, setTeam] = useState({
    name: "",
    profilePicture: "",
    position: "",
    description: "",
  });

  const handleTeamInputChange = (e) => {
    setTeam({
      ...team,
      [e.target.name]: e.target.value,
    });
  };
  console.log(team);

  const handleTeamFormSubmit = () => {
    e.preventDefault();
    console.log("Form has been submitted");
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

  const deleteTeamMember = async (id) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/team/" + id);
      deleteSuccess();
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  return <TeamContext.Provider value={{ members, deleteTeamMember, team, handleTeamInputChange,handleTeamFormSubmit }}>{children}</TeamContext.Provider>;
};
