import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import axios from "axios";
import Image from "next/image";
import ImageUploading from "react-images-uploading";
import { useForm } from "react-hook-form";

export default function AddProductTable({ categories, colors, sizes, setIsUpdated }) {
  const { handleClose, createSuccess, somethingWentWrong } = useContext(MiscellaneousContext);

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

  const createProduct = async () => {
    const formData = new FormData();
    formData.append("name", handleAllField.name);
    formData.append("color", handleAllField.color);
    formData.append("size", handleAllField.size);
    formData.append("category", handleAllField.category);
    formData.append("description", handleAllField.description);
    formData.append("featured", handleAllField.featured);
    formData.append("topSelling", handleAllField.topSelling);
    if (images) {
      formData.append("thumbnail", images[0].file, images[0].file.name);
    }
    try {
      // const res = await axios.post("http://localhost:4000/api/product/", formData);
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/product`, formData);

      // 
      setIsUpdated(1);
      handleClose();
      createSuccess();
      reset();
      console.log("Form has been submitted");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit(createProduct)}
          className="customCard p-3 overflow_hidden">
          <h4>Create New Service </h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row ">
            <label
              htmlFor="name"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Name
            </label>
            <input
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              {...register("name", { required: "name is required" })}
              placeholder="name"
            />
            {errors.name && <p className="form_hook_error">{`${errors.name.message}`}</p>}
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

          <div className="row ">
            <label
              htmlFor="color"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Color
            </label>

            <div className="choose_size_product_wrapper">
              {colors &&
                colors.map((color, index) => (
                  <div
                    key={index}
                    className="form-check form-check-inline ">
                    <input
                      {...register("color", { required: "Color is required" })}
                      className="form-check-input"
                      type="checkbox"
                      id="colorCheckBox"
                      value={color.name}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="colorCheckBox">
                      {" "}
                      {color.name}
                    </label>
                  </div>
                ))}
            </div>

            {errors.color && <p className="form_hook_error">{`${errors.color.message}`}</p>}
          </div>

          <div className="row">
            <label
              htmlFor="size"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Size
            </label>

            <div className="choose_size_product_wrapper">
              {sizes &&
                sizes.map((size, index) => (
                  <div className="form-check form-check-inline ">
                    <input
                      {...register("size", { required: "size is required" })}
                      className="form-check-input"
                      type="checkbox"
                      id="sizeCheckBox"
                      value={size.name}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="sizeCheckBox">
                      {" "}
                      {size.name}
                    </label>
                  </div>
                ))}
            </div>

            {errors.size && <p className="form_hook_error">{`${errors.size.message}`}</p>}
          </div>

          <div className="row ">
            <label
              htmlFor="category"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Category
            </label>

            <select
              {...register("category", { required: "category is required" })}
              className="form-select input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
              aria-label="Select category">
              <option
                selected
                value={"Null"}>
                Select Category
              </option>
              {categories &&
                categories.map((category, index) => (
                  <option
                    key={index}
                    value={category._id}>
                    {category.name}
                  </option>
                ))}
            </select>
            {errors.category && <p className="form_hook_error">{`${errors.category.message}`}</p>}
          </div>

          <div className="row">
            <label
              htmlFor="description"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Description
            </label>
            <input
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              {...register("description", { required: "description is required" })}
              placeholder="description"
            />
            {errors.description && <p className="form_hook_error">{`${errors.description.message}`}</p>}
          </div>

          <div className="row ">
            <label
              htmlFor="featured"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Featured Product
            </label>

            <select
              {...register("featured", { required: "featured is required" })}
              className="form-select input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
              aria-label="Select featured">
              <option
                selected
                value={"Null"}>
                Select Featured or Not
              </option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            {errors.category && <p className="form_hook_error">{`${errors.category.message}`}</p>}
          </div>

          <div className="row ">
            <label
              htmlFor="topSelling"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Top Selling Product
            </label>

            <select
              {...register("topSelling", { required: "TopSelling is required" })}
              className="form-select input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
              aria-label="Select topSelling">
              <option
                selected
                value={"Null"}>
                Select Top Selling Product Or Not
              </option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            {errors.topSelling && <p className="form_hook_error">{`${errors.topSelling.message}`}</p>}
          </div>

          <div className="mt-3 d-flex justify-content-end  gap-2">
            <Button
              type="submit"
              className="customCard px-4">
              Add
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
