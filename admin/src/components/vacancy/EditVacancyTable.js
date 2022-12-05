import React, { useEffect, useContext, useState } from "react";
import { Button } from "@mui/material";
import Header from "../Header";
import { useForm } from "react-hook-form";
import axios from "axios";
import dynamic from "next/dynamic";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import { useRouter } from "next/router";
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});
import ImageUploading from "react-images-uploading";
import Image from "next/image";

const EditVacancyTable = ({ singleVacancy, setIsUpdated, id }) => {
  const router = useRouter();

  const { updatedSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [content, setContent] = useState("");

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

  useEffect(() => {
    reset(singleVacancy);
  }, [singleVacancy]);

  const updateVacancy = async () => {
    const formData = new FormData();
    formData.append("position", handleAllField.position);
    formData.append("location", handleAllField.location);
    formData.append("qualification", handleAllField.qualification);
    formData.append("description", content);
    formData.append("jobType", handleAllField.jobType);
    if (images) {
      formData.append("thumbnail", images[0].file, images[0].file.name);
    }

    try {
      // const res = await axios.put(`http://localhost:4000/api/vacancy/${id}`, formData);
      const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/vacancy/${id}`, formData);
      reset();
      updatedSuccess();
      setIsUpdated(3);
      console.log("Update success");
      router.push("/vacancy");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  return (
    <div>
      <Header pageTitle={`Blog / ${id}`} />

      <div>
        <form
          onSubmit={handleSubmit(updateVacancy)}
          className="customCard p-3 overflow_hidden">
          <h4 className="text-center h4">Create Vacancy </h4>

          <div className="row ">
            <label
              htmlFor="position"
              className="form-label mt-3 h6 p_zero_first_cap ">
              position
            </label>
            <input
              className="  input_field_style form-control form-control-lg px-2    border-0  rounded-0"
              {...register("position", { required: "position is required" })}
              placeholder="position"
            />
            {errors.position && <p className="form_hook_error">{`${errors.position.message}`}</p>}
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

          <div className="row ">
            <label
              htmlFor="jobType"
              className="form-label mt-3 h6 p_zero_first_cap ">
              jobType
            </label>
            <input
              className=" input_field_style form-control form-control-lg px-2    border-0  rounded-0"
              {...register("jobType", { required: "jobType is required" })}
              placeholder="placeholder"
            />
            {errors.jobType && <p className="form_hook_error">{`${errors.jobType.message}`}</p>}
          </div>

          <div className="row">
            <label
              htmlFor="location"
              className="form-label mt-3 h6 p_zero_first_cap ">
              location
            </label>
            <input
              className=" input_field_style form-control form-control-lg px-2    border-0  rounded-0"
              {...register("location", { required: "location is required" })}
              placeholder="location"
            />
            {errors.location && <p className="form_hook_error">{`${errors.location.message}`}</p>}
          </div>

          <div className="row ">
            <label
              htmlFor="qualification"
              className="form-label mt-3 h6 p_zero_first_cap ">
              Qualification
            </label>
            <input
              className=" input_field_style form-control form-control-lg px-2    border-0  rounded-0"
              {...register("qualification", { required: "qualification is required" })}
              placeholder="qualification"
            />
            {errors.qualification && <p className="form_hook_error">{`${errors.qualification.message}`}</p>}
          </div>

          <div className="row">
            <label
              htmlFor="description"
              className="form-label mt-3 h6 p_zero_first_cap ">
              Description
            </label>
            <JoditEditor
              value={content}
              onChange={(newContent) => {
                setContent(newContent);
              }}
            />
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

export default EditVacancyTable;
