import React, { useContext } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import { PricePackageContext } from "../../../context/PricePackageContext";

export default function AddPricePackageDialog() {
  const { pricePackages, newPricePackage, deletePricePackage, handlePricePackageInputChange, handlePricePackageFormSubmit } = useContext(PricePackageContext);

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
                id="title"
                onChange={handlePricePackageInputChange}
                name="title"
                value={newPricePackage.title}
                placeholder="placeholder"
              />
            </div>

            <div className="col">
              <label
                htmlFor="amount"
                className="form-label ">
                Amount
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="amount"
                onChange={handlePricePackageInputChange}
                value={newPricePackage.amount}
                name="amount"
                placeholder="placeholder"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="duration"
                className="form-label ">
                duration
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                onChange={handlePricePackageInputChange}
                value={newPricePackage.duration}
                name="duration"
                placeholder="placeholder"
              />
            </div>

            <div className="col">
              <label
                htmlFor="p1"
                className="form-label ">
                p1
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                onChange={handlePricePackageInputChange}
                value={newPricePackage.p1}
                name="p1"
                placeholder="placeholder"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="p2"
                className="form-label ">
                p2
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="p2"
                onChange={handlePricePackageInputChange}
                value={newPricePackage.p2}
                name="p2"
                placeholder="placeholder"
              />
            </div>

            <div className="col">
              <label
                htmlFor="p3"
                className="form-label ">
                p3
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                onChange={handlePricePackageInputChange}
                value={newPricePackage.p3}
                name="p3"
                placeholder="placeholder"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="p4"
                className="form-label ">
                p4
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="p4"
                onChange={handlePricePackageInputChange}
                value={newPricePackage.p4}
                name="p4"
                placeholder="placeholder"
              />
            </div>

            <div className="col">
              <label
                htmlFor="p5"
                className="form-label ">
                p5
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                onChange={handlePricePackageInputChange}
                value={newPricePackage.p5}
                name="p5"
                placeholder="placeholder"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="p6"
                className="form-label ">
                p6
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="p6"
                onChange={handlePricePackageInputChange}
                value={newPricePackage.p6}
                name="p6"
                placeholder="placeholder"
              />
            </div>

            <div className="col">
              <label
                htmlFor="p7"
                className="form-label ">
                p7
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                onChange={handlePricePackageInputChange}
                value={newPricePackage.p7}
                name="p7"
                placeholder="placeholder"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="p8"
                className="form-label ">
                p8
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="p8"
                onChange={handlePricePackageInputChange}
                value={newPricePackage.p8}
                name="p8"
                placeholder="placeholder"
              />
            </div>

            <div className="col">
              <label
                htmlFor="p9"
                className="form-label ">
                p9
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="p9"
                onChange={handlePricePackageInputChange}
                value={newPricePackage.p9}
                name="p9"
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
              onClick={handlePricePackageFormSubmit}>
              Add
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
