import React, { useContext } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import { TeamContext } from "../../../context/TeamContext";

export default function AddTeamMemberDialog() {
  const { members, deleteTeamMember, newMember, handleTeamInputChange, handleTeamFormSubmit } = useContext(TeamContext);
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
        <form className="customCard p-3 overflow_hidden">
          <h4>Create New Service </h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="name"
                className="form-label ">
                Name
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="name"
                onChange={handleTeamInputChange}
                name="name"
                value={newMember.name}
                placeholder="placeholder"
              />
            </div>

            <div className="col">
              <label
                htmlFor="profilePicture"
                className="form-label ">
                ProfilePicture
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="profilePicture"
                onChange={handleTeamInputChange}
                value={newMember.profilePicture}
                name="profilePicture"
                placeholder="placeholder"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="position"
                className="form-label ">
                Position
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="position"
                onChange={handleTeamInputChange}
                value={newMember.position}
                name="position"
                placeholder="placeholder"
              />
            </div>

            <div className="col">
              <label
                htmlFor="description"
                className="form-label ">
                Description
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="description"
                onChange={handleTeamInputChange}
                value={newMember.description}
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
              onClick={handleTeamFormSubmit}>
              Add
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
