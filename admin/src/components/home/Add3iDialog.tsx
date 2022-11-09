import React, { useContext } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import { HomeContext } from "../../../context/HomeContext";

export default function Add3iDialog() {
  const { handle3iFormSubmit, handleSec3iInputChange, newSec3i, open, handleClickOpen, handleClose } = useContext(HomeContext);

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
                onChange={handleSec3iInputChange}
                name="title"
                value={newSec3i.title}
                placeholder="placeholder"
              />
            </div>

            <div className="col">
              <label
                htmlFor="subtitle"
                className="form-label ">
                subtitle
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="subtitle"
                onChange={handleSec3iInputChange}
                value={newSec3i.subtitle}
                name="subtitle"
                placeholder="placeholder"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="description"
                className="form-label ">
                description
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                onChange={handleSec3iInputChange}
                value={newSec3i.description}
                name="description"
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
              onClick={handle3iFormSubmit}>
              Add
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
