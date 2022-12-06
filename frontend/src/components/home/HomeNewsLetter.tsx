import styles from "../../styles/scss/Home.module.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const HomeNewsLetter = () => {
  const mailSendSuccess = () => toast.success("We will notify our updates");
  const sendMailError = () => toast.error("Something Went Wrong");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const createSubscriber = async () => {
    try {
      const res = await axios.post("http://localhost:4000/api/subscriber", handleAllField);
      console.log("Form has been submitted");
      mailSendSuccess();
      reset();
    } catch (error) {
      console.log(error);
      sendMailError();
    }
  };

  return (
    <div
      className="container-fluid py-5 "
      style={{ backgroundColor: "#EFF2F7" }}>
      <div className="container ">
        <form
          onSubmit={handleSubmit(createSubscriber)}
          className="row container  ">
          <div className="row">
            <h2 className="h2 fw-bolder mainColor">NEWSLETTER</h2>
            <h6 className="h6 mainColor mt-3 ">Subscribe now to our newsletter</h6>
          </div>

          <div className="col col-12   col-lg-4 col-md-12 col-sm-12  mt-4">
            <div>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Name"
                className="form-control"
              />
              {errors.name && <span className="field_required_warning">This field is required</span>}
            </div>
          </div>

          <div className="col col-12  col-lg-4 col-md-12 col-sm-12 mt-4">
            <div>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="form-control"
              />
              {errors.email && <span className="field_required_warning">This field is required</span>}
            </div>
          </div>

          <div className="col  col-lg-4  d-grid gap-2 col-md-12 col-sm-12  mt-4">
            <div>
              <button
                type="submit"
                className="btn btn-primary w-100">
                Subscribe
              </button>
            </div>
          </div>
        </form>

        <div className="form-check ms-3 ">
          <input
            className="form-check-input  "
            type="checkbox"
            id="flexCheckChecked"
          />
          <p className="form-check-label   mt-4 paraColor">By click subscribe you accept the terms of service and the privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeNewsLetter;
