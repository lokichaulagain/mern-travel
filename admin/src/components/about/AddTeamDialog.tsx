import React, { useState } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import TextInputField from "../TextInputField";

export default function AddTeamDialog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [teamValues, setTeamValues] = useState({
    name: "",
    position: "",
    email: "",
    phone: "",
    socialLink1: "",
    socialLink2: "",
  });

  const handleInputChange = (e: any) => {
    setTeamValues({
      ...teamValues,
      [e.target.name]: e.target.value,
    });
  };
  console.log(teamValues);


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
              <TextInputField name="name" value={teamValues.name} onchange="handleInputChange" type="text" placeholder="Name" label="Name" />
            </div>
            <div className="col">
              <TextInputField name="position" value={teamValues.position} onchange="handleInputChange" type="text" placeholder="Position" label="Position" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <TextInputField name="email" value={teamValues.email} onchange="handleInputChange" type="text" placeholder="Email" label="Email" />
            </div>
            <div className="col">
              <TextInputField name="phone" value={teamValues.phone} onchange="handleInputChange" type="text" placeholder="Phone " label="Phone" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <TextInputField name="socialLink1" value={teamValues.socialLink1} onchange="handleInputChange" type="text" placeholder="SocialLink 1" label="SocialLink 1" />
            </div>
            <div className="col">
              <TextInputField name="socialLink2" value={teamValues.socialLink2} onchange="handleInputChange" type="text" placeholder="SocialLink 2" label="SocialLink 2" />
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
