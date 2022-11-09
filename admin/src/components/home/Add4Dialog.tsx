import React, { useContext } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import { HomeContext } from "../../../context/HomeContext";

export default function Add4Dialog() {
  const { newSec4, handleSec4InputChange, sec4, handleSec4FormSubmit, open, handleClickOpen, handleClose } = useContext(HomeContext);

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
                htmlFor="title"
                className="form-label ">
                Title
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                onChange={handleSec4InputChange}
                name="title"
                value={newSec4.title}
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
                onChange={handleSec4InputChange}
                value={newSec4.description}
                name="description"
                placeholder="placeholder"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="icon"
                className="form-label ">
                Icon
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                onChange={handleSec4InputChange}
                value={newSec4.icon}
                name="icon"
                placeholder="placeholder"
              />
            </div>

            <div className="col"></div>
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
              onClick={handleSec4FormSubmit}>
              Add
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
