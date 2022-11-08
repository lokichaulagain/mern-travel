import React, { useState } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import TextInputField from "../TextInputField";

export default function AddCmsDialog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [blogValues, setBlogValues] = useState({
    title: "",
    thumbnail: "",
    description: "",
  });

  const handleInputChange = (e: any) => {
    setBlogValues({
      ...blogValues,
      [e.target.name]: e.target.value,
    });
  };
  console.log(blogValues);


  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form has been submitted");
  };

  return (
    <>
      <Grid container justifyContent="end">
        <Button size="large" onClick={handleClickOpen} className="customCard px-4">
          New Cms
        </Button>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleFormSubmit} className="customCard p-3 overflow_hidden">
          <h4>Create New Cms Data </h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row">
            <div className="col">
              <TextInputField name="title" value={blogValues.title} onchange="handleInputChange" type="text" placeholder="lokendra" label="Title" />
            </div>
            <div className="col">
              <TextInputField name="thumbnail" value={blogValues.thumbnail} onchange="handleInputChange" type="text" placeholder="Thumbnail" label="Thumbnail" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <TextInputField name="description" value={blogValues.description} onchange="handleInputChange" type="text" placeholder="Thumbnail" label="Description" />
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
