import React, { useContext } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";

export default function AddServiceDialog({ setIsUpdated }: any) {
  const { handleClickOpen, handleClose, open, createSuccess, somethingWentWrong } = useContext(MiscellaneousContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const createService = async () => {
    try {
      // const res = await axios.post("http://localhost:4000/api/service", handleAllField);
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/service`, handleAllField);

      setIsUpdated(7);
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
        onClose={handleClose}>
        <form
          onSubmit={handleSubmit(createService)}
          className="customCard p-3 overflow_hidden">
          <h4>Create New Service </h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row ">
            <label
              htmlFor="title"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Title
            </label>
            <input
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              {...register("title", { required: "title is required" })}
              placeholder="title"
            />
            {errors.title && <p className="form_hook_error">{`${errors.title.message}`}</p>}
          </div>

          <div className="row">
            <label
              htmlFor="subtitle"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Subtitle
            </label>
            <input
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              {...register("subtitle", { required: "subtitle is required" })}
              placeholder="subtitle"
            />
            {errors.subtitle && <p className="form_hook_error">{`${errors.subtitle.message}`}</p>}
          </div>

          <div className="row ">
            <label
              htmlFor="icon"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Icon
            </label>
            <input
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              {...register("icon", { required: "icon is required" })}
              placeholder="icon"
            />
            {errors.icon && <p className="form_hook_error">{`${errors.icon.message}`}</p>}
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
