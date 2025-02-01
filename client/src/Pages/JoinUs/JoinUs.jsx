import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// Importing Icons
import { FaAsterisk, FaSpinner } from "react-icons/fa";

// Importing CSS
import "./JoinUs.css";

const JoinUs = () => {
  const [recruiting, setRecruiting] = useState("Yes"); // either "Yes" or "No"
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    console.log(formData);
  };

  // Watch the regNo field to convert it to uppercase
  const regNo = watch("reg_no");

  useEffect(() => {
    setValue("reg_no", regNo?.toUpperCase());
  }, [regNo, setValue]);

  return (
    <>
      <div className="joinarea flex justify-center items-center px-8 pb-16 pt-32 sm:pb-8 ">
        {loading ? (
          <div className="flex justify-center items-center">
            <FaSpinner className="spinner text-center text-xl sm:text-3xl" />
          </div>
        ) : error ? (
          <div className="flex">
            Error in loading the form! Please try again later
          </div>
        ) : (
          <div className="box relative">
            {/* Testing */}
            <div
              className={`absolute flex justify-center items-center z-[10]
    w-full h-full inset-0 backdrop-blur-md bg-white/30 ${
      recruiting === "No" ? "visible" : "hidden"
    }`}
            >
              <div
                className="closed-thing w-[90%] text-xl font-semibold alert alert-info
    shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              >
                <h3>Sorry recruitments are currently closed :(</h3>
                <p>
                  Follow our social media to get updates regarding recruitments
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-gray-700 outline-none block text-[40px] xl:text-[44px] font-bold mx-auto mb-3 w-full text-center">
                Recruitment Form
              </h2>
              <p className="text-center mb-7">
                Fill this form to apply to our club! We will get back to you
                after looking through your application via email or call!
              </p>
              <form
                name="form"
                className="w-full"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <div className="flex flex-wrap">
                  {/* Name */}
                  <div className="mb-3 w-full md:w-1/2 px-2">
                    <label
                      className="text-sm font-medium text-gray-700 flex items-center"
                      htmlFor="name"
                    >
                      Name:{" "}
                      <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                    </label>
                    <input
                      className={`form-control ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      name="Name"
                      disabled={recruiting === "Yes" ? false : true}
                      type="text"
                      id="name"
                      placeholder="Name eg: Aakash Kumar Yadav"
                      {...register("name", {
                        required: "Name is required",
                        pattern: {
                          value: /^[A-Za-z ]+$/,
                          message: "Invalid name",
                        },
                      })}
                    />
                    {errors.name && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </div>
                    )}
                  </div>
                  {/* Registration No */}
                  <div className="mb-3 w-full md:w-1/2 px-2">
                    <label
                      className="text-sm font-medium text-gray-700 flex items-center"
                      htmlFor="reg_no"
                    >
                      Registration No:{" "}
                      <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                    </label>
                    <input
                      className={`form-control ${
                        errors.reg_no ? "border-red-500" : ""
                      }`}
                      name="Registration No"
                      disabled={recruiting === "Yes" ? false : true}
                      type="text"
                      id="reg_no"
                      placeholder="Registration No. eg: RA2211032020XXX"
                      {...register("reg_no", {
                        required: "Registration number is required",
                        pattern: {
                          value: /^(1|2)[0-9](B|M)[A-Z]{2}[0-9]{4}$/,
                          message: "Invalid register number",
                        },
                      })}
                    />
                    {errors.reg_no && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.reg_no.message}
                      </div>
                    )}
                  </div>
                  {/* SRM Email */}
                  <div className="mb-3 w-full px-2">
                    <label
                      className="text-sm font-medium text-gray-700 flex items-center"
                      htmlFor="srmEmail"
                    >
                      SRM Email:{" "}
                      <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                    </label>
                    <input
                      className={`form-control ${
                        errors.srmEmail ? "border-red-500" : ""
                      }`}
                      name="SRM Email"
                      disabled={recruiting === "Yes" ? false : true}
                      type="email"
                      id="srmEmail"
                      placeholder="Email eg: ay14XX@srmist.edu.in"
                      {...register("srmEmail", {
                        required: "Email is required",
                      })}
                    />
                    {errors.srmEmail && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.srmEmail.message}
                      </div>
                    )}
                  </div>
                  {/* Phone Number */}
                  <div className="mb-3 w-full md:w-1/2 px-2">
                    <label
                      className="text-sm font-medium text-gray-700 flex items-center"
                      htmlFor="phone_no"
                    >
                      Phone No:{" "}
                      <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                    </label>
                    <input
                      className={`form-control ${
                        errors.phone_no ? "border-red-500" : ""
                      }`}
                      name="Phone No"
                      disabled={recruiting === "Yes" ? false : true}
                      type="tel"
                      id="phone_no"
                      placeholder="Phone number eg: 8072XXXXXX"
                      {...register("phone_no", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Invalid phone number",
                        },
                      })}
                    />
                    {errors.phone_no && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.phone_no.message}
                      </div>
                    )}
                  </div>
                  {/* Academic Year */}
                  <div className="mb-3 w-full md:w-1/2 px-2">
                    <label
                      htmlFor="academicYear"
                      className="text-sm font-medium text-gray-700 flex items-center"
                    >
                      Academic Year:{" "}
                      <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                    </label>
                    <select
                      className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm ${
                        errors.academicYear ? "border-red-500" : ""
                      }`}
                      name="Academic Year"
                      id="academicYear"
                      disabled={recruiting === "Yes" ? false : true}
                      {...register("academicYear", {
                        required: "Academic year is required",
                      })}
                    >
                      <option value="">Select an option</option>
                      {/* <option value="competitive_programming">
                          Competitive Programming
                        </option> */}
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                    </select>
                    {errors.academicYear && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.academicYear.message}
                      </div>
                    )}
                  </div>
                  {/* Branch */}
                  <div className="mb-3 w-full md:w-1/2 px-2">
                    <label
                      htmlFor="branch"
                      className="text-sm font-medium text-gray-700 flex items-center"
                    >
                      Branch:{" "}
                      <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                    </label>
                    <select
                      className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm ${
                        errors.branch ? "border-red-500" : ""
                      }`}
                      name="Branch"
                      id="branch"
                      disabled={recruiting === "Yes" ? false : true}
                      {...register("branch", {
                        required: "Branch is required",
                      })}
                    >
                      <option value="">Select an option</option>
                      {/* <option value="competitive_programming">
                          Competitive Programming
                        </option> */}
                      <option value="1">CSE-Core</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                    </select>
                    {errors.branch && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.branch.message}
                      </div>
                    )}
                  </div>
                  {/* Are you in any other club? */}
                  <div className="mb-3 w-full md:w-1/2 px-2">
                    <label
                      htmlFor="anyOtherClub"
                      className="text-sm font-medium text-gray-700 flex items-center"
                    >
                      Are you in any other club?{" "}
                      <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                    </label>
                    <select
                      className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm ${
                        errors.anyOtherClub ? "border-red-500" : ""
                      }`}
                      name="Any Other Club"
                      id="anyOtherClub"
                      disabled={recruiting === "Yes" ? false : true}
                      {...register("anyOtherClub", {
                        required: "This field is required",
                      })}
                    >
                      <option value="">Select an option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    {errors.anyOtherClub && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.anyOtherClub.message}
                      </div>
                    )}
                  </div>
                  {/* Introduce Yourself */}
                  <div className="mb-3 w-full px-2">
                    <label
                      className="text-sm font-medium text-gray-700 flex items-center"
                      htmlFor="introduceYourself"
                    >
                      Introduce Yourself{" "}
                      <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                    </label>
                    <textarea
                      className={`form-control ${
                        errors.introduceYourself ? "border-red-500" : ""
                      }`}
                      name="Introduce Yourself"
                      type="text"
                      id="introduceYourself"
                      rows="5"
                      placeholder="Briefly introduce yourlsef"
                      {...register("introduceYourself", {
                        required: "This field is required",
                      })}
                    />
                    {errors.introduceYourself && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.introduceYourself.message}
                      </div>
                    )}
                  </div>
                  {/* Why join this club */}
                  <div className="mb-3 w-full px-2">
                    <label
                      className="text-sm font-medium text-gray-700 flex items-center"
                      htmlFor="whyJoin"
                    >
                      Why join this club?{" "}
                      <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                    </label>
                    <textarea
                      className="form-control"
                      disabled={recruiting === "Yes" ? false : true}
                      placeholder="Write some reason for applying for this club"
                      name="Why Join This Club"
                      id="whyJoin"
                      rows="5"
                      {...register("whyJoin", {
                        required: "This field is equired",
                      })}
                    />
                    {errors.whyJoin && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.whyJoin.message}
                      </div>
                    )}
                  </div>
                </div>
                {/* Submit btn */}
                <button
                  name="Submit"
                  type="submit"
                  onClick={handleSubmit}
                  disabled={recruiting === "Yes" ? false : true}
                  className={`btnSubmit btn-primary ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Submit{" "}
                  {loading ? (
                    <FaSpinner className="ml-3 inline spinner text-center text-sm sm:text-sm" />
                  ) : (
                    ""
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default JoinUs;
