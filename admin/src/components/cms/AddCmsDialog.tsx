import React from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";

export default function AddCmsDialog() {
  const createSuccess = () => toast.success("Successfully Created");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const createCms = async () => {
    try {
      // const res = await axios.post("http://localhost:4000/api/cms", handleAllField);
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/cms`, handleAllField);
      // 
      createSuccess();
      reset();
      console.log("Form has been submitted");
      router.push("/cms");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit(createCms)}
          className="customCard p-3 overflow_hidden">
          <h4 className="text-center h4 my-4">Create New CMS </h4>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="companyName"
                className="form-label mt-2 ">
                Company Name
              </label>
              <input
                className=" input_field_style form-control form-control-lg px-2   border-0  rounded-0"
                {...register("companyName", { required: "companyName is required" })}
                placeholder="companyName"
              />
              {errors.companyName && <p className="form_hook_error">{`${errors.companyName.message}`}</p>}
            </div>

            <div className="col">
              <label
                htmlFor="companyLogo"
                className="form-label mt-2 ">
                Company Logo
              </label>
              <input
                type="text"
                className=" input_field_style form-control form-control-lg px-2   border-0  rounded-0"
                {...register("companyLogo", { required: "companyLogo is required" })}
                placeholder="companyLogo"
              />
              {errors.companyLogo && <p className="form_hook_error">{`${errors.companyLogo.message}`}</p>}
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="facebookUrl"
                className="form-label mt-2 ">
                FacebookUrl
              </label>
              <input
                className=" input_field_style form-control form-control-lg px-2   border-0  rounded-0"
                {...register("facebookUrl", { required: "facebookUrl is required" })}
                placeholder="facebookUrl"
              />
              {errors.facebookUrl && <p className="form_hook_error">{`${errors.facebookUrl.message}`}</p>}
            </div>

            <div className="col">
              <label
                htmlFor="instagramUrl"
                className="form-label mt-2 ">
                InstagramUrl
              </label>
              <input
                className=" input_field_style form-control form-control-lg px-2   border-0  rounded-0"
                {...register("instagramUrl", { required: "instagramUrl is required" })}
                placeholder="instagramUrl"
              />
              {errors.instagramUrl && <p className="form_hook_error">{`${errors.instagramUrl.message}`}</p>}
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="twitterUrl"
                className="form-label mt-2 ">
                TwitterUrl
              </label>
              <input
                className=" input_field_style form-control form-control-lg px-2   border-0  rounded-0"
                {...register("twitterUrl", { required: "twitterUrl is required" })}
                placeholder="twitterUrl"
              />
              {errors.twitterUrl && <p className="form_hook_error">{`${errors.twitterUrl.message}`}</p>}
            </div>

            <div className="col">
              <label
                htmlFor="email"
                className="form-label mt-2 ">
                Email
              </label>
              <input
                className=" input_field_style form-control form-control-lg px-2   border-0  rounded-0"
                {...register("email", { required: "email is required" })}
                placeholder="email"
              />
              {errors.email && <p className="form_hook_error">{`${errors.email.message}`}</p>}
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="phone1"
                className="form-label mt-2 ">
                Phone1
              </label>
              <input
                className=" input_field_style form-control form-control-lg px-2   border-0  rounded-0"
                {...register("phone1", { required: "phone1 is required" })}
                placeholder="phone1"
              />
              {errors.phone1 && <p className="form_hook_error">{`${errors.phone1.message}`}</p>}
            </div>

            <div className="col">
              <label
                htmlFor="phone2"
                className="form-label mt-2 ">
                phone2
              </label>
              <input
                className=" input_field_style form-control form-control-lg px-2   border-0  rounded-0"
                {...register("phone2", { required: "phone2 is required" })}
                placeholder="phone2"
              />
              {errors.phone2 && <p className="form_hook_error">{`${errors.phone2.message}`}</p>}
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="whatsapp"
                className="form-label mt-2 ">
                Whatsapp
              </label>
              <input
                className=" input_field_style form-control form-control-lg px-2   border-0  rounded-0"
                {...register("whatsapp", { required: "whatsapp is required" })}
                placeholder="whatsapp"
              />
              {errors.whatsapp && <p className="form_hook_error">{`${errors.whatsapp.message}`}</p>}
            </div>
          </div>

          <div className="mt-3 d-flex justify-content-end  gap-2">
            <Button
              onClick={() => reset()}
              type="button"
              className="customCard px-4">
              Reset
            </Button>

            <Button
              type="submit"
              className="customCard px-4">
              Create
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
