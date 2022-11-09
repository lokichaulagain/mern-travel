import axios from "axios";
import { useEffect, useState, createContext, useContext } from "react";
import { toast } from "react-toastify";
import { MiscellaneousContext } from "./MiscellaneousContext";

export const HomeContext = createContext();

export const HomeContextProvider = ({ children }) => {
  const [sec5, setSec5] = useState([]);
  const [sec4, setSec4] = useState([]);
  const [sec3i, setSec3i] = useState([]);
  const [sec3ii, setSec3ii] = useState([]);
  const [sec2i, setSec2i] = useState([]);
  const [sec2ii, setSec2ii] = useState([]);
  const [isUpdated, setIsUpdated] = useState(0);

  const { handleClickOpen, handleClose, open } = useContext(MiscellaneousContext);

  const deleteSuccess = () => toast.success("Successfully Deleted");
  const createdSuccess = () => toast.success("Successfully Created");

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

  const [newSec3i, setNewSec3i] = useState({
    title: "",
    subtitle: "",
    description: "",
  });

  const handleSec3iInputChange = (e) => {
    setNewSec3i({
      ...newSec3i,
      [e.target.name]: e.target.value,
    });
  };

  const handle3iFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/home/sec3i", newSec3i);
      createdSuccess();
      setIsUpdated(1);
      handleClose();
      console.log("Form has been submitted");
      setNewSec3i({
        title: "",
        subtitle: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

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

  const [newSec2i, setNewSec2i] = useState({
    h1: "",
    p1: "",
    h2: "",
    p2: "",
    h3: "",
    p3: "",
    title: "",
    description: "",
    time: "",
  });

  const handleSec2iInputChange = (e) => {
    setNewSec2i({
      ...newSec2i,
      [e.target.name]: e.target.value,
    });
  };
  console.log(newSec2i);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/home/sec2i", newSec2i);
      createdSuccess();
      setIsUpdated(1);
      handleClose();
      console.log("Form has been submitted");
      setNewSec2i({
        h1: "",
        p1: "",
        h2: "",
        p2: "",
        h3: "",
        p3: "",
        title: "",
        description: "",
        time: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

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

  const [newSec2ii, setNewSec2ii] = useState({
    title: "",
    subtitle: "",
    description: "",
  });

  const handleSec2iiInputChange = (e) => {
    setNewSec2ii({
      ...newSec2ii,
      [e.target.name]: e.target.value,
    });
  };

  const handle2iiFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/home/sec2ii", newSec2ii);
      createdSuccess();
      setIsUpdated(1);
      handleClose();
      console.log("Form has been submitted");
      setNewSec2ii({
        title: "",
        subtitle: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSec2i = async (id) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/home/sec2i/" + id);
      deleteSuccess();
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSec2ii = async (id) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/home/sec2ii/" + id);
      deleteSuccess();
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };


  const deleteSec3i = async (id) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/home/sec3i/" + id);
      deleteSuccess();
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSec3ii = async (id) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/home/sec3ii/" + id);
      deleteSuccess();
      setIsUpdated(1);
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

  return <HomeContext.Provider value={{ open, handleClickOpen, handleClose, sec5, sec4, sec3ii, sec3i, sec2ii, sec2i, deleteSec2i, deleteSec2ii, deleteSec3i,deleteSec3ii, deleteSec5, handleSec2iInputChange, handleFormSubmit, newSec2i, setNewSec2i, handleSec2iiInputChange, newSec2ii, handle2iiFormSubmit, handle3iFormSubmit, handleSec3iInputChange, newSec3i }}>{children}</HomeContext.Provider>;
};
