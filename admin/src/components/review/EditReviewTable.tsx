import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";

const EditReviewTable = ({ singleReview, setIsUpdated }: any) => {
  const { updatedSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const router = useRouter();
  const id = router.query.id;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  useEffect(() => {
    reset(singleReview);
  }, [singleReview]);

  const updateReview = async () => {
    try {
      // const res = await axios.put(`http://localhost:4000/api/review/${id}`, handleAllField);
      const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/review/${id}`, handleAllField);
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
      <form
        onSubmit={handleSubmit(updateReview)}
        className="customCard p-3 overflow_hidden">
        <h4 className="text-center h4">Edit Client Review </h4>

        <div className="row ">
          <label
            htmlFor="image"
            className="form-label p_zero_first_cap h6 mt-3 ">
            Image
          </label>
          <input
            type="text"
            className=" input_field_style form-control form-control-lg   border-0  rounded-0"
            defaultValue={singleReview.image}
            {...register("image", { required: "Image is required" })}
            placeholder="Image"
          />
          {errors.image && <p className="form_hook_error">{`${errors.image.message}`}</p>}
        </div>

        <div className="row ">
          <label
            htmlFor="name"
            className="form-label p_zero_first_cap h6 mt-3 ">
            Name
          </label>
          <input
            className=" input_field_style form-control form-control-lg   border-0  rounded-0"
            defaultValue={singleReview.name}
            {...register("name", { required: "Name is required" })}
            placeholder="Name"
          />
          {errors.name && <p className="form_hook_error">{`${errors.name.message}`}</p>}
        </div>

        <div className="row">
          <label
            htmlFor="description"
            className="form-label p_zero_first_cap h6 mt-3 ">
            Description
          </label>
          <input
            className=" input_field_style form-control form-control-lg   border-0  rounded-0"
            id="description"
            defaultValue={singleReview.description}
            {...register("description", { required: "Description is required" })}
            placeholder="Description"
          />
          {errors.description && <p className="form_hook_error">{`${errors.description.message}`}</p>}
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
  );
};

export default EditReviewTable;
