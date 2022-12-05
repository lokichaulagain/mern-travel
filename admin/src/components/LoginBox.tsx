import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { MiscellaneousContext } from "../../context/MiscellaneousContext";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function LoginBox() {
  const { invalidCredential, loginSuccess, isAuthenticated } = useContext(MiscellaneousContext);
  const router = useRouter();

  const login = async () => {
    try {
      const res = await signIn("credentials", {
        email: handleAllField.email,
        password: handleAllField.password,
        redirect: false,
      });
      isAuthenticated && loginSuccess();
      isAuthenticated && router.push("/");
    } catch (error) {
      console.log(error);
      invalidCredential();
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  let handleAllField = watch();

  return (
    <div className="customCard w-50 p-5">
      <div>
        <h3 className="text-center">Login</h3>
        <p className="text-center">Access to our dashboard</p>
      </div>

      <form
        action=""
        onSubmit={handleSubmit(login)}>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label  h6">
            Email Address
          </label>
          <input
            type="email"
            className="form-control form-control-lg rounded-1"
            {...register("email", { required: "email is required" })}
            placeholder="Email Address "
          />
          {errors.email && <p className="form_hook_error">{`${errors.email.message}`}</p>}
        </div>

        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label g h6">
            Email Address
          </label>
          <input
            type="text"
            className="form-control form-control-lg rounded-1"
            {...register("password", { required: "password is required" })}
            placeholder="Password "
          />
          {errors.password && <p className="form_hook_error">{`${errors.password.message}`}</p>}
        </div>

        <div className="pt-3">
          <button
            type="submit"
            className="btn btn-primary w-100 btn-lg rounded-1">
            Login
          </button>
        </div>
      </form>

      <h6 className="pt-4 text-center">
        Dont have an account yet ?
        <Link href={"/auth/signup"}>
          <a className="register_span"> Register</a>
        </Link>
      </h6>
    </div>
  );
}
