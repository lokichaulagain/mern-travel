import React, { useState } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import TextInputField from "../TextInputField";

export default function AddServiceDialog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [serviceValues, setServiceValues] = useState({
    name: "",
    description: "",
    thumbnail: "",
    smallImage1: "",
    smallImage2: "",
  });

  const handleInputChange = (e: any) => {
    setServiceValues({
      ...serviceValues,
      [e.target.name]: e.target.value,
    });
  };
  console.log(serviceValues);


  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form has been submitted");
  };

  return (
    <>
      <Grid container justifyContent="end">
        <Button size="large" onClick={handleClickOpen} className="customCard px-4">
          New Service
        </Button>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleFormSubmit} className="customCard p-3 overflow_hidden">
          <h4>Create New Service </h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row">
            <div className="col">
              <TextInputField name="name" value={serviceValues.name} onchange="handleInputChange" type="text" placeholder="Name" label="Name" />
            </div>
            <div className="col">
              <TextInputField name="description" value={serviceValues.description} onchange="handleInputChange" type="text" placeholder="Description" label="Description" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <TextInputField name="thumbnail" value={serviceValues.thumbnail} onchange="handleInputChange" type="text" placeholder="Thumbnail" label="Thumbnail" />
            </div>
            <div className="col">
              <TextInputField name="smallImage1" value={serviceValues.smallImage1} onchange="handleInputChange" type="text" placeholder="Small Image1" label="Small Image 1" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <TextInputField name="smallImage2" value={serviceValues.smallImage2} onchange="handleInputChange" type="text" placeholder="Small Image2" label="Small Image 2" />
            </div>
            <div className="col"></div>
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
