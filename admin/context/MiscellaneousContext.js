import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { toast } from "react-toastify";

export const MiscellaneousContext = createContext();

export const MiscellaneousContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return <MiscellaneousContext.Provider value={{ handleClickOpen, handleClose, open }}>{children}</MiscellaneousContext.Provider>;
};
