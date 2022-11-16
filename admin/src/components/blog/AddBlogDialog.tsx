import React, { useContext } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import { BlogContext } from "../../../context/BlogContext";

export default function AddBlogDialog() {
  const { newBlog, handleBlogInputChange, handleBlogFormSubmit } = useContext(BlogContext);
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
                htmlFor="title"
                className="form-label ">
                Title
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                onChange={handleBlogInputChange}
                name="title"
                value={newBlog.title}
                placeholder="placeholder"
              />
            </div>

            <div className="col">
              <label
                htmlFor="thumbnail"
                className="form-label ">
                thumbnail
              </label>
              <input
                type="file"
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="thumbnail"
                onChange={handleBlogInputChange}
                value={newBlog.thumbnail}
                name="thumbnail"
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
                id="description"
                onChange={handleBlogInputChange}
                value={newBlog.description}
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
              onClick={handleBlogFormSubmit}>
              Add
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
