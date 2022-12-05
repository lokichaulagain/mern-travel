import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { Button } from "@mui/material";
import Header from "../Header";
import axios from "axios";
import { useForm } from "react-hook-form";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";

const EditStandardTable = ({ setIsUpdated, singleStandard }: any) => {
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
    reset(singleStandard);
  }, [singleStandard]);

  const updateStandard = async () => {
    try {
      // const res = await axios.put(`http://localhost:4000/api/standard/${id}`, handleAllField);
      const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/standard/${id}`, handleAllField);
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
      <Header pageTitle={`Standard /Edit / ${id}`} />
      <form
        onSubmit={handleSubmit(updateStandard)}
        className="customCard p-3 overflow_hidden">
        <h4 className="text-center h3">Edit standard </h4>

        <div className="row ">
          <label
            htmlFor="title"
            className="form-label p_zero_first_cap mt-3 h6 ">
            Title
          </label>
          <input
            className=" input_field_style form-control form-control-lg   border-0  rounded-0"
            {...register("title", { required: "title is required" })}
            defaultValue={singleStandard.title}
            placeholder="placeholder"
          />
          {errors.title && <p className="form_hook_error">{`${errors.title.message}`}</p>}
        </div>

        <div className="row ">
          <label
            htmlFor="icon"
            className="form-label p_zero_first_cap mt-3 h6 ">
            icon
          </label>
          <input
            className=" input_field_style form-control form-control-lg   border-0  rounded-0"
            {...register("icon", { required: "icon is required" })}
            defaultValue={singleStandard.icon}
            placeholder="placeholder"
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
  );
};

export default EditStandardTable;
