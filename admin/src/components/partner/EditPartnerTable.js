import React, { useContext, useEffect, useState } from "react";
import Header from "../Header";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import axios from "axios";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import ImageUploading from "react-images-uploading";
import Image from "next/image";

const EditPartnerTable = ({ singlePartner, setIsUpdated, id }) => {
  const { updatedSuccess, somethingWentWrong } = useContext(MiscellaneousContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  useEffect(() => {
    reset(singlePartner);
  }, [singlePartner]);

  const [images, setImages] = useState();
  const onChange = (imageList) => {
    setImages(imageList);
  };

  const updatePartner = async () => {
    const formData = new FormData();
    formData.append("title", handleAllField.title);
    formData.append("subtitle", handleAllField.subtitle);
    if (images) {
      formData.append("thumbnail", images[0].file, images[0].file.name);
    }
    try {
      // const res = await axios.put(`http://localhost:4000/api/partner/${id}`, formData);
      const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/partner/${id}`, formData);
      //
      reset();
      updatedSuccess();
      setIsUpdated(2);
      console.log("Update success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  return (
    <div>
      <Header pageTitle={`Partner / ${id}`} />

      <div>
        <form
          onSubmit={handleSubmit(updatePartner)}
          className="customCard p-3 overflow_hidden">
          <h4>Edit Partner </h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row ">
            <label
              htmlFor="title"
              className="form-label p_zero_first_cap mt-3 h6 ">
              Partner Name
            </label>
            <input
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              placeholder="Partner Name"
              {...register("title", { required: "title is required" })}
            />
            {errors.title && <p className="form_hook_error">{`${errors.title.message}`}</p>}
          </div>

          <div className="row">
            <label
              htmlFor="subtitle"
              className="form-label p_zero_first_cap mt-3 h6 ">
              Partner Description
            </label>
            <input
              type="text"
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              placeholder="Partner Description"
              {...register("subtitle", { required: "subtitle is required" })}
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
                // write your building UI
                <div className="upload__image-wrapper  px-0  w-100">
                  <button
                    type="button"
                    className=" input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
                    // style={isDragging ? { color: "red" } : null}
                    onClick={onImageUpload}
                    {...dragProps}>
                    Select New Banner
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
            {handleAllField.thumbnail && (
              <Image
                src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${handleAllField.thumbnail}`}
                alt=""
                width="80"
                height={80}
                className="img-fluid custom-border-radius-50-per"
              />
            )}
          </div>

          <div className="mt-3 d-flex justify-content-end  gap-2">
            <Button
              type="submit"
              className="customCard px-4">
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPartnerTable;
