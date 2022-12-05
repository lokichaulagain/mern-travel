import React, { useContext } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";

export default function AddStandardDialog({ setIsUpdated }: any) {
  const { open, handleClickOpen, handleClose, createSuccess, somethingWentWrong } = useContext(MiscellaneousContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  let handleAllField = watch();

  const createStandard = async () => {
    try {
      // const res = await axios.post("http://localhost:4000/api/standard", handleAllField);
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/standard`, handleAllField);
      //
      handleClose();
      setIsUpdated(7);
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
          onSubmit={handleSubmit(createStandard)}
          className="customCard p-3 overflow_hidden">
          <h4>Create New Standard </h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row ">
            <label
              htmlFor="title"
              className="form-label mt-3 h6 p_zero_first_cap ">
              Title
            </label>
            <input
              className=" input_field_style form-control form-control-lg mb-0 border-0  rounded-0"
              {...register("title", { required: "title is required" })}
              placeholder="placeholder"
            />
            {errors.title && <p className="form_hook_error">{`${errors.title.message}`}</p>}
          </div>

          <div className="row ">
            <label
              htmlFor="icon"
              className="form-label mt-3 h6 p_zero_first_cap ">
              icon
            </label>
            <input
              className=" input_field_style form-control form-control-lg mb-0 border-0  rounded-0"
              {...register("icon", { required: "icon is required" })}
              placeholder="placeholder"
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
