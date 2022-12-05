import React, { useContext, useState } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { MiscellaneousContext } from "../../context/MiscellaneousContext";
import axios from "axios";
import Image from "next/image";
import ImageUploading from "react-images-uploading";

export default function AddPartnerDialog({ setIsUpdated }) {
  const { handleClickOpen, handleClose, open } = useContext(MiscellaneousContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const [images, setImages] = useState();
  const onChange = (imageList) => {
    setImages(imageList);
  };

  const createPartner = async () => {
    const formData = new FormData();
    formData.append("title", handleAllField.title);
    formData.append("subtitle", handleAllField.subtitle);
    if (images) {
      formData.append("thumbnail", images[0].file, images[0].file.name);
    }
    try {
      // const res = await axios.post("http://localhost:4000/api/partner", formData);
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/partner`, formData);

      setIsUpdated(1);
      handleClose();
      reset();
      console.log("Form has been submitted");
    } catch (error) {
      console.log(error);
    }
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
        <form
          onSubmit={handleSubmit(createPartner)}
          className="customCard p-3 overflow_hidden">
          <h4>Create New Partner </h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row ">
            <label
              htmlFor="title"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Partner Name
            </label>
            <input
              className=" input_field_style form-control form-control-lg  border-0  rounded-0"
              placeholder="Partner Name"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && <p className="form_hook_error">{`${errors.title.message}`}</p>}
          </div>

          <div className="row">
            <label
              htmlFor="subtitle"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Partner Description
            </label>
            <input
              type="text"
              className=" input_field_style form-control form-control-lg  border-0  rounded-0"
              placeholder="Partner Description"
              {...register("subtitle", { required: "Subtitle is required" })}
            />
            {errors.subtitle && <p className="form_hook_error">{`${errors.subtitle.message}`}</p>}
          </div>

          <div className="row">
            <label
              htmlFor="formFile"
              className="form-label px-0 mt-2 h6 ">
              Banner Image
            </label>
            <ImageUploading
              value={images}
              onChange={onChange}
              maxNumber={1}
              dataURLKey="data_url"
              acceptType={["jpg", "png", "jpeg", "webp"]}>
              {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                <div className="upload__image-wrapper  px-0  w-100">
                  <button
                    type="button"
                    className=" input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
                    // style={isDragging ? { color: "red" } : null}
                    onClick={onImageUpload}
                    {...dragProps}>
                    Click or Drop here
                  </button>
                  &nbsp;
                  {imageList.map((image, index) => (
                    <div
                      key={index}
                      className="image-item margin_minus  d-flex gap-3">
                      <div className="banner_table_image_div">
                        <Image
                          src={image.data_url}
                          alt=""
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>

                      <div className="image-item__btn-wrapper">
                        <button
                          type="button"
                          onClick={() => onImageRemove(index)}
                          className="btn btn-danger btn rounded-0">
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
          </div>

          <div className="mt-3 d-flex justify-content-end  gap-2">
            <Button
              className="customCard px-3"
              onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="customCard px-4">
              Add
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
