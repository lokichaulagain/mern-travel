import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function RegisterBox() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  let handleAllField = watch();
  console.log(handleAllField);

  return (
    <div className="customCard w-50 p-5">
      <div>
        <h3 className="text-center">Register</h3>
        <p className="text-center">Access to our dashboard</p>
      </div>

      <div className="mb-3">
        <label
          htmlFor="email"
          className="form-label  h6">
          Email Address
        </label>
        <input
          type="email"
          className="form-control form-control-lg"
          {...register("email", { required: "Email is required" })}
          placeholder="Email Address "
        />
        {errors.email && <p className="form_hook_error">{`${errors.email.message}`}</p>}
      </div>

      <div className="mb-3">
        <label
          htmlFor="password"
          className="form-label g h6">
          Password
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          {...register("password", { required: "Password is required" })}
          placeholder="Password "
        />
        {errors.password && <p className="form_hook_error">{`${errors.password.message}`}</p>}
      </div>

      <div className="mb-3">
        <label
          htmlFor="email"
          className="form-label g h6">
          Confirm Password
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          {...register("confirmPassword", { required: "ConfirmPassword is required" })}
          placeholder="Confirm Password "
        />
        {errors.confirmPassword && <p className="form_hook_error">{`${errors.confirmPassword.message}`}</p>}
      </div>

      <div className="pt-3">
        <button
          type="button"
          className="btn btn-primary w-100 btn-lg">
          Register
        </button>
      </div>

      <h6 className="pt-4 text-center">
        Already have an account ?
        <Link href={"/auth/signin"}>
          <a className="register_span"> Login</a>
        </Link>
      </h6>
    </div>
  );
}
