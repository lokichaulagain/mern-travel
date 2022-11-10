import React, { useContext, useState } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import TextInputField from "../TextInputField";
import { TeamContext } from "../../../context/TeamContext";

export default function AddNewDialog() {
  // const {  handleTeamInputChange, handleTeamFormSubmit } = useContext(TeamContext);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
          // onSubmit={handleTeamFormSubmit}
          className="customCard p-3 overflow_hidden">
          <h4>Create New Service </h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="title"
                className="form-label ">
                Title here
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="fullName"
                // onChange={handleTeamInputChange}
                name="name"
                placeholder="placeholder"
              />
            </div>

            <div className="col">
              <label
                htmlFor="title"
                className="form-label ">
                Title here
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="fullName"
                // onChange={handleTeamInputChange}
                name="profilePicture"
                placeholder="placeholder"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="title"
                className="form-label ">
                Title here
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="fullName"
                // onChange={handleTeamInputChange}
                name="position"
                placeholder="placeholder"
              />
            </div>

            <div className="col">
              <label
                htmlFor="title"
                className="form-label ">
                Title here
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="fullName"
                // onChange={handleTeamInputChange}
                name="description"
                placeholder="placeholder"
              />
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
              className="customCard px-4"
              onClick={handleClose}>
              Add
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}