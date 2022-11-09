import React, { useContext } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import { HomeContext } from "../../../context/HomeContext";

export default function Add2iDialog() {
  const { handleSec2iInputChange, handleFormSubmit, newSec2i } = useContext(HomeContext);
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
                htmlFor="h1"
                className="form-label ">
                H1
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="h1"
                onChange={handleSec2iInputChange}
                name="h1"
                value={newSec2i.h1}
                placeholder="placeholder"
              />
            </div>

            <div className="col">
              <label
                htmlFor="p1"
                className="form-label ">
                P1
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="p1"
                onChange={handleSec2iInputChange}
                value={newSec2i.p1}
                name="p1"
                placeholder="placeholder"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="h2"
                className="form-label ">
                H2
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="h2"
                onChange={handleSec2iInputChange}
                value={newSec2i.h2}
                name="h2"
                placeholder="placeholder"
              />
            </div>

            <div className="col">
              <label
                htmlFor="p2"
                className="form-label ">
                P2
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="p2"
                onChange={handleSec2iInputChange}
                value={newSec2i.p2}
                name="p2"
                placeholder="placeholder"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="h3"
                className="form-label ">
                H3
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="h3"
                onChange={handleSec2iInputChange}
                value={newSec2i.h3}
                name="h3"
                placeholder="placeholder"
              />
            </div>

            <div className="col">
              <label
                htmlFor="p3"
                className="form-label ">
                P3
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="p3"
                onChange={handleSec2iInputChange}
                value={newSec2i.p3}
                name="p3"
                placeholder="placeholder"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="title"
                className="form-label ">
                Title
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="title"
                onChange={handleSec2iInputChange}
                value={newSec2i.title}
                name="title"
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
                onChange={handleSec2iInputChange}
                value={newSec2i.description}
                name="description"
                placeholder="placeholder"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="time"
                className="form-label ">
                Time
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="time"
                onChange={handleSec2iInputChange}
                value={newSec2i.time}
                name="time"
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
              onClick={handleFormSubmit}>
              Add
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
