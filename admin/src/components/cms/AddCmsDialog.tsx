import React, { useContext } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import { CmsContext } from "../../../context/CmsContext";

export default function AddCmsDialog() {
  const { cmsData, newCmsData, handleCmsInputChange, handleCmsFormSubmit, open, handleClose, handleClickOpen } = useContext(CmsContext);
  // const [open, setOpen] = React.useState(false);
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

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
                htmlFor="companyName"
                className="form-label ">
                Company Name
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="companyName"
                onChange={handleCmsInputChange}
                name="companyName"
                value={newCmsData.companyName}
                placeholder="placeholder"
              />
            </div>

            <div className="col">
              <label
                htmlFor="companyLogo"
                className="form-label ">
                Company Logo
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="companyLogo"
                onChange={handleCmsInputChange}
                value={newCmsData.companyLogo}
                name="companyLogo"
                placeholder="placeholder"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="facebookUrl"
                className="form-label ">
                FacebookUrl
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="facebookUrl"
                onChange={handleCmsInputChange}
                value={newCmsData.facebookUrl}
                name="facebookUrl"
                placeholder="placeholder"
              />
            </div>

            <div className="col">
              <label
                htmlFor="instagramUrl"
                className="form-label ">
                InstagramUrl
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="instagramUrl"
                onChange={handleCmsInputChange}
                value={newCmsData.instagramUrl}
                name="instagramUrl"
                placeholder="placeholder"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="twitterUrl"
                className="form-label ">
                TwitterUrl
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="twitterUrl"
                onChange={handleCmsInputChange}
                value={newCmsData.twitterUrl}
                name="twitterUrl"
                placeholder="placeholder"
              />
            </div>

            <div className="col">
              <label
                htmlFor="email"
                className="form-label ">
                Email
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="email"
                onChange={handleCmsInputChange}
                value={newCmsData.email}
                name="email"
                placeholder="placeholder"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="phone1"
                className="form-label ">
                Phone1
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="phone1"
                onChange={handleCmsInputChange}
                value={newCmsData.phone1}
                name="phone1"
                placeholder="placeholder"
              />
            </div>

            <div className="col">
              <label
                htmlFor="whatsapp"
                className="form-label ">
                Whatsapp
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="whatsapp"
                onChange={handleCmsInputChange}
                value={newCmsData.whatsapp}
                name="whatsapp"
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
              onClick={handleCmsFormSubmit}>
              Add
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
