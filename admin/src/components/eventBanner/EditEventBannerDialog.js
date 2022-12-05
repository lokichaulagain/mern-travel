import React, { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { HiArrowLeft } from "react-icons/hi";
import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import ImageUploading from "react-images-uploading";
import Image from "next/image";

export default function EditEventBannerDialog({ setSingleEventBanner, setIsUpdated, id, singleEventBanner }) {
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
    reset(singleEventBanner);
  }, [singleEventBanner]);

  const [images, setImages] = useState();
  const onChange = (imageList) => {
    setImages(imageList);
  };

  const updateEventBanner = async () => {
    const formData = new FormData();
    formData.append("status", handleAllField.status);
    if (images) {
      formData.append("thumbnail", images[0].file, images[0].file.name);
    }
    try {
      // const res = await axios.put(`http://localhost:4000/api/eventBanner/${id}`, formData);
      const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/eventBanner/${id}`, formData);
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
    <>
      {setSingleEventBanner && (
        <div>
          <form
            onSubmit={handleSubmit(updateEventBanner)}
            className="customCard p-3 overflow_hidden"
            method="post">
            <Link href={"/banner"}>
              <div className="arrow_back_div d-flex align-items-center gap-1 pb-2">
                <HiArrowLeft className="arrow_back" />
                <h4>Back</h4>
              </div>
            </Link>

            <h4>Edit Event Banner</h4>

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

            <div className="row">
              <label
                htmlFor="description"
                className="form-label p_zero_first_cap mt-3 h6 ">
                Active Status
              </label>

              <select
                {...register("status", { required: "status is required" })}
                className="form-select input_field_style form-control form-control-lg  border-0  rounded-0"
                aria-label="Banner hide show status1 ">
                <option value="0">Inactive</option>
                <option value="1">Active</option>
              </select>
              {errors.status && <p className="form_hook_error">{`${errors.status.message}`}</p>}
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
      )}
    </>
  );
}
