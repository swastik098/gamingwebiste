/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "../Home/Button";
import * as Yup from "yup";
import { useFormik } from "formik";
import{numberRegex} from "../../utils/helper"
const RegisterForm = () => {
  // const [studioName, setStudioName] = useState("");
  // const [number, setNumber] = useState("");
  // const [email, setEmail] = useState("");
  // const [location, setLocation] = useState("");
  // const [website, setWebsite] = useState("");
  // const [gameName, setGameName] = useState("");
  // const [c, setPortfolioLink] = useState("");
  const initialValues = {
    studioName: "",
    number: "",
    email: "",
    location: "",
    website: "",
    gameName: "",
    portfoloio: "",
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // handle form submission here
  // };

  // const validateEmail = (value) => {
  //   const re = /\S+@\S+\.\S+/;
  //   return re.test(value);
  // };

  // const validateLink = (value) => {
  //   const re = /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/;
  //   return re.test(value);
  // };

  // const isFormValid = () => {
  //   return (
  //     studioName !== "" &&
  //     number !== "" &&
  //     validateEmail(email) &&
  //     location !== "" &&
  //     validateLink(website) &&
  //     gameName !== "" &&
  //     validateLink(portfolioLink)
  //   );
  // };
  const signUpSchema = Yup.object({
    studioName: Yup.string().min(2).max(25).required("Please enter your name"),
    number: Yup.string().nullable().max(10).matches(numberRegex,{message:"Please add a valid number"}).required("Please enter your number"),
    email: Yup.string().email().required("Please enter your email"),
    location: Yup.string().min(6).required("Please enter your location"),
    website: Yup.string().min(6).required("Please enter your website url"),
    gameName: Yup.string().min(6).required("Please enter your Game Name"),
  });

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      validateOnChange: true,
      validateOnBlur: true,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: (values, action) => {
        console.log("values", values);
        //// to get rid of all the values after submitting the form
        action.resetForm();
      },
    });

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto pb-5 pt-5">
      <div className="mb-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center text-white">
          Register Now
        </h1>
        <label htmlFor="studioName" className="block font-medium mb-1 text-white">
          Studio Name
        </label>
        <input
          type="text"
          id="studioName"
          name="studioName"
          value={values?.studioName}
          // onChange={(event) => setStudioName(event.target.value)}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full border-gray-900 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          // required
        />
        {touched?.studioName && errors?.studioName ? (
          <p className="form-error">{errors.studioName}</p>
        ) : null}
      </div>
      <div className="mb-4">
        <label htmlFor="number" className="block font-medium mb-1 text-white">
          Number
        </label>
        <input
          // type="text"
          id="number"
          name="number"
          value={values?.number}
          onChange={handleChange}
          onBlur={handleBlur}
          // onChange={(event) => setNumber(event.target.value)}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          // required
        />
        {touched?.number && errors?.number ? (
          <p className="form-error">{errors.number}{console.log(errors,"error")}</p>
        ) : null}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-1 text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={values?.email}
          onChange={handleChange}
          onBlur={handleBlur}
          // onChange={(event) => setEmail(event.target.value)}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          // required
        />
        {touched?.email && errors?.email ? (
          <p className="form-error">{errors.email}</p>
        ) : null}
      </div>
      <div className="mb-4">
        <label htmlFor="location" className="block font-medium mb-1 text-white">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={values?.location}
          onChange={handleChange}
          onBlur={handleBlur}
          // onChange={(event) => setLocation(event.target.value)}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          // required
        />
        {touched?.location && errors?.location ? (
          <p className="form-error">{errors.location}</p>
        ) : null}
      </div>
      <div className="mb-4">
        <label htmlFor="website" className="block font-medium mb-1 text-white">
          Website
        </label>
        <input
          type="text"
          id="website"
          name="website"
          value={values?.website}
          onChange={handleChange}
          onBlur={handleBlur}
          // onChange={(event) => setWebsite(event.target.value)}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          // required
        />
         {touched?.location && errors?.location ? (
          <p className="form-error">{errors.website}</p>
        ) : null}
      </div>
      <div className="mb-4">
        <label htmlFor="gameName" className="block font-medium mb-1 text-white">
          Game Name
        </label>
        <input
          type="text"
          id="gameName"
          name="gameName"
          value={values?.gameName}
          onChange={handleChange}
          onBlur={handleBlur}
          // onChange={(event) => setGameName(event.target.value)}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          // required
        />
         {touched?.location && errors?.location ? (
          <p className="form-error">{errors.gameName}</p>
        ) : null}
      </div>
      <div className="mb-4">
        <label htmlFor="portfolioLink" className="block font-medium mb-1 text-white">
          Portfolio Link
        </label>
        <input
          type="text"
          id="portfolioLink"
          name="portfoloio"
          value={values?.portfoloio}
          onChange={handleChange}
          onBlur={handleBlur}
          // onChange={(event) => setPortfolioLink(event.target.value)}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          // required
        />
      </div>
      <div className="text-center">
       <button type="submit"  className={`text-2xl  bg-gradient-to-b from-blue to-white-500 hover:bg-blue-950 text-black font-bold py-3 px-4 rounded-lg`} >RegisterNow</button>
        {/* <Button text={"RegisterNow!"}  type={"submit"} /> */}
      </div>
     
    </form>
  );
};

export default RegisterForm;
