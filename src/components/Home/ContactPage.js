/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

const ContactPage = () => {
  const sendEmail = (event) => {
    event.preventDefault();

    // Parameters for sending the email
    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      company: formData.company,
      message: formData.message,
    };

    // Your Email.js service ID, template ID, and user ID
    const serviceID = "service_27md7fu";
    const templateID = "template_w0aqhu8";
    const userID = "MzNklvzdmK7_OCBDo";

    // Send the email
    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(async (response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setFormData(initialFormData); // Clear the form

        // Store the form data in Firestore
        try {
          await addDoc(collection(db, "contacts"), {
            formData,
          });
          setFormData("");
          console.log(formData);
          alert("Email Sent");
        } catch (error) {
          console.error("Error storing form data in Firestore:", error);
        }

        // .then(() => {
        //   console.log("Form data stored in Firestore");
        // })
        // .catch((error) => {
        //   console.error("Error storing form data in Firestore:", error);
        // });
      })
      .catch((error) => {
        console.error("Email failed to send:", error);
      });
  };

  const initialFormData = {
    fullName: "",
    email: "",
    company: "",
    message: "",
    agreeToTerms: false,
    // receiveUpdates: false,
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "agreeToTerms" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail(event);
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formData); // Send form data to server or display it in the console
  //   setFormData(initialFormData);
  // };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 bg-gray-800 rounded-lg m-6 font-sans">
      <h1 className="text-5xl text-white font-bold mb-4">
        Let's talk About Your Project
      </h1>
      <p className="text-xl text-white mb-4">
        We are ready to discuss the details of your project and answer any of
        your questions: just fill out the form below
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label
              htmlFor="fullName"
              className="block text-white font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="email" className="block text-white font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="company" className="block text-white font-bold mb-2">
            Company
          </label>
          <input
            type="text"
            name="company"
            id="company"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white font-bold mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="agreeToTerms"
              className="form-checkbox h-5 w-5 text-gray-600"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
            />
            <span className="ml-2 text-white">
              I agree to the{" "}
              <a
                // href="https://www.termsfeed.com/live/7ec52a2b-6fac-41db-a05d-6571af9d4ef6"
                download
                className="underline"
              >
                Terms &amp; Conditions
              </a>
            </span>
          </label>
        </div>
        <div className=" flex justify-center items-center">
          <button
            type="submit"
            className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Contact Us
          </button>
        </div>
      </form>
    </div>
  );
};
export default ContactPage;
