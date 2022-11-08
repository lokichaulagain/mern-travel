import React, { useState } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import TextInputField from "../TextInputField";

export default function AddOurApproachDialog() {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [approachValues, setApproachValues] = useState({
    title: "",
    description: "",
    point1: "",
    point2: "",
  });

  const handleInputChange = (e: any) => {
    setApproachValues({
      ...approachValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form has been submitted");
  };

  return (
    <>
      <Grid container justifyContent="end">
        <Button size="large" onClick={handleClickOpen} className="customCard px-4">
          New Approach
        </Button>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleFormSubmit} className="customCard p-3 overflow_hidden">
          <h4>Create New Approach </h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row">
            <div className="col">
              <TextInputField name="title" value={approachValues.title} onchange="handleInputChange" type="text" placeholder="Title" label="Title" />
            </div>
            <div className="col">
              <TextInputField name="description" value={approachValues.description} onchange="handleInputChange" type="text" placeholder="Description" label="Description" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <TextInputField name="point1" value={approachValues.point1} onchange="handleInputChange" type="text" placeholder="Point1" label="Point1" />
            </div>
            <div className="col">
              <TextInputField name="point2" value={approachValues.point2} onchange="handleInputChange" type="text" placeholder="Point2" label="Point2" />
            </div>
          </div>

          <div className="mt-3 d-flex justify-content-end  gap-2">
            <Button className="customCard px-3" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" className="customCard px-4" onClick={handleClose}>
              Add
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
