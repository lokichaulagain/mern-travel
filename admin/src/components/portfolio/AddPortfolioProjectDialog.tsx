import React, { useState } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import TextInputField from "../TextInputField";

export default function AddPortfolioProjectDialog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [portfolioValues, setPortfolioValues] = useState({
    name: "",
    logo: "",
    link: "",
  });

  const handleInputChange = (e: any) => {
    setPortfolioValues({
      ...portfolioValues,
      [e.target.name]: e.target.value,
    });
  };
  console.log(portfolioValues);


  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form has been submitted");
  };

  return (
    <>
      <Grid container justifyContent="end">
        <Button size="large" onClick={handleClickOpen} className="customCard px-4">
          New Portfolio
        </Button>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleFormSubmit} className="customCard p-3 overflow_hidden">
          <h4>Create New Portfolio Project </h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row">
            <div className="col">
              <TextInputField name="logo" value={portfolioValues.logo} onchange="handleInputChange" type="file" placeholder="Logo" label="Logo" />
            </div>
            <div className="col">
              <TextInputField name="name" value={portfolioValues.name} onchange="handleInputChange" type="text" placeholder="Name" label="Name" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <TextInputField name="link" value={portfolioValues.link} onchange="handleInputChange" type="text" placeholder="Link" label="Link" />
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
