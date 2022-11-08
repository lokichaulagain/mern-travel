import React, { useState } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import TextInputField from "../TextInputField";

export default function AddAboutDialog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [aboutValues, setAboutValues] = useState({
    title1: "",
    description1: "",
    title2: "",
    description2: "",
    title3: "",
    description3: "",
    title4: "",
    description4: "",
  });

  const handleInputChange = (e: any) => {
    setAboutValues({
      ...aboutValues,
      [e.target.name]: e.target.value,
    });
  };
  console.log(aboutValues);


  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form has been submitted");
  };

  return (
    <>
      <Grid container justifyContent="end">
        <Button size="large" onClick={handleClickOpen} className="customCard px-4">
          New About
        </Button>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleFormSubmit} className="customCard p-3 overflow_hidden">
          <h4>Create New Service </h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row">
            <div className="col">
              <TextInputField name="title1" value={aboutValues.title1} onchange="handleInputChange" type="text" placeholder="Title 1" label="Title 1" />
            </div>
            <div className="col">
              <TextInputField name="description1" value={aboutValues.description1} onchange="handleInputChange" type="text" placeholder="Description 1" label="Description 1" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <TextInputField name="title2" value={aboutValues.title2} onchange="handleInputChange" type="text" placeholder="Title 2" label="Title 2" />
            </div>
            <div className="col">
              <TextInputField name="description2" value={aboutValues.description2} onchange="handleInputChange" type="text" placeholder="Description 2" label="Description 2" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <TextInputField name="title3" value={aboutValues.title3} onchange="handleInputChange" type="text" placeholder="Title 3" label="Title 3" />
            </div>
            <div className="col">
              <TextInputField name="description3" value={aboutValues.description3} onchange="handleInputChange" type="text" placeholder="Description 3" label="Description 3" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <TextInputField name="title4" value={aboutValues.title4} onchange="handleInputChange" type="text" placeholder="Title 4" label="Title 4" />
            </div>
            <div className="col">
              <TextInputField name="description4" value={aboutValues.description4} onchange="handleInputChange" type="text" placeholder="Description 4" label="Description 4" />
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
