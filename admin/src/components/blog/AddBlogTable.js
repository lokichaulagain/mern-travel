import React, { useContext } from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import ImageUploading from "react-images-uploading";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import axios from "axios";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

export default function AddBlogTable() {
  const router = useRouter();
  const [content, setContent] = useState("");
  const { createSuccess } = useContext(MiscellaneousContext);
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

  const createBlog = async () => {
    const formData = new FormData();
    formData.append("title", handleAllField.title);
    formData.append("category", handleAllField.category);
    formData.append("description", content);
    if (images) {
      formData.append("thumbnail", images[0].file, images[0].file.name);
    }
    try {
      // const res = await axios.post("http://localhost:4000/api/blog", formData);
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/blog`, formData);
      // 
      createSuccess();
      reset();
      console.log("Form has been submitted");
      router.push("/blog");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit(createBlog)}
          className="customCard p-3 overflow_hidden">
          <h4>Create New Blog </h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row ">
            <label
              htmlFor="title"
              className="form-label p_zero_first_cap h6 mt-3 ">
              Title
            </label>
            <input
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              {...register("title", { required: "title is required" })}
              placeholder="title"
            />
            {errors.title && <p className="form_hook_error">{`${errors.title.message}`}</p>}
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

          <div className="row">
            <label
              htmlFor="category"
              className="form-label p_zero_first_cap h6 mt-3 ">
              Category
            </label>
            <input
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              {...register("category", { required: "category is required" })}
              placeholder="category"
            />
            {errors.category && <p className="form_hook_error">{`${errors.category.message}`}</p>}
          </div>

          <div className="row">
            <label
              htmlFor="description"
              className="form-label p_zero_first_cap h6 mt-3 ">
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
              id={`${content}`}
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
