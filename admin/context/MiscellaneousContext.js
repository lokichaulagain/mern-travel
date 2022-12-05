import { useState, createContext, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const MiscellaneousContext = createContext();
export const MiscellaneousContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const createSuccess = () => toast.success("Successfully Created");
  const loginSuccess = () => toast.success("Login Success");
  const invalidCredential = () => toast.success("Invalid Credentials");
  const updatedSuccess = () => toast.success("Successfully Updated");
  const deleteSuccess = () => toast.success("Successfully Deleted");
  const somethingWentWrong = () => toast.error("Something Went Wrong !");

  return <MiscellaneousContext.Provider value={{ updatedSuccess, invalidCredential, loginSuccess, createSuccess, deleteSuccess, somethingWentWrong, handleClickOpen, handleClose, open }}>{children}</MiscellaneousContext.Provider>;
};
