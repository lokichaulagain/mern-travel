import React, { useContext, useState } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";

export default function AddSizeDialog({ setIsUpdated }: any) {
  const { createSuccess, somethingWentWrong } = useContext(MiscellaneousContext);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const createColor = async () => {
    try {
      // const res = await axios.post("http://localhost:4000/api/size", handleAllField);
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/size`, handleAllField);
      // 
      setIsUpdated(5);
      handleClose();
      createSuccess();
      reset();
      console.log("Form has been submitted");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  return (
    <>
      <Grid
        container
        justifyContent="end">
        <Button
          size="large"
          onClick={handleClickOpen}
          className="customCard px-4">
          Add New
        </Button>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClickOpen}>
        <form
          onSubmit={handleSubmit(createColor)}
          className="customCard p-3 overflow_hidden">
          <h4>Create New Sizes Option </h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="name"
                className="form-label mt-2 ">
                Size Name
              </label>
              <input
                className=" input_field_style form-control form-control-lg   border-0  rounded-0"
                {...register("name", { required: "Required field" })}
                placeholder="name"
              />
              {errors.name && <p className="form_hook_error">{`${errors.name.message}`}</p>}
            </div>
          </div>

          <div className="mt-3 d-flex justify-content-end  gap-2">
            <Button
              className="customCard px-3"
              onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="customCard px-4">
              Add
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
