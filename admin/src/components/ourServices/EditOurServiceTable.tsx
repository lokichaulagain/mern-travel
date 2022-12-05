import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";

const EditOurServiceTable = ({ singleService, setIsUpdated ,id}: any) => {
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
    reset(singleService);
  }, [singleService]);

  const updateService = async () => {
    try {
      // const res = await axios.put(`http://localhost:4000/api/service/${id}`, handleAllField);
      const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/service/${id}`, handleAllField);
      // (`${process.env.NEXT_PUBLIC_API_URL}/getAll`)
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
      <Header pageTitle={`Our Services / Edit / ${id} `} />
      <div>
        <form
          onSubmit={handleSubmit(updateService)}
          className="customCard p-3 overflow_hidden">
          <h4 className="text-center h4">Edit Service </h4>

          <div className="row ">
            <label
              htmlFor="title"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Title
            </label>
            <input
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              {...register("title", { required: "title is required" })}
              defaultValue={singleService.title}
              placeholder="title"
            />
            {errors.title && <p className="form_hook_error">{`${errors.title.message}`}</p>}
          </div>

          <div className="row">
            <label
              htmlFor="subtitle"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Subtitle
            </label>
            <input
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              {...register("subtitle", { required: "subtitle is required" })}
              defaultValue={singleService.subtitle}
              placeholder="subtitle"
            />
            {errors.subtitle && <p className="form_hook_error">{`${errors.subtitle.message}`}</p>}
          </div>

          <div className="row ">
            <label
              htmlFor="icon"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Icon
            </label>
            <input
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              {...register("icon", { required: "icon is required" })}
              defaultValue={singleService.icon}
              placeholder="icon"
            />
            {errors.icon && <p className="form_hook_error">{`${errors.icon.message}`}</p>}
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
    </>
  );
};

export default EditOurServiceTable;
