import { useState } from "react";
import Button from "../Home/Button";

const RegisterForm = () => {
  const [studioName, setStudioName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [gameName, setGameName] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  const validateEmail = (value) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(value);
  };

  const validateLink = (value) => {
    const re = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    return re.test(value);
  };

  const isFormValid = () => {
    return (
      studioName !== "" &&
      number !== "" &&
      validateEmail(email) &&
      location !== "" &&
      validateLink(website) &&
      gameName !== "" &&
      validateLink(portfolioLink)
    );
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto pb-5 pt-5">
      <div className="mb-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Register Now
        </h1>
        <label htmlFor="studioName" className="block font-medium mb-1">
          Studio Name
        </label>
        <input
          type="text"
          id="studioName"
          name="studioName"
          value={studioName}
          onChange={(event) => setStudioName(event.target.value)}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="number" className="block font-medium mb-1">
          Number
        </label>
        <input
          type="text"
          id="number"
          name="number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="location" className="block font-medium mb-1">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="website" className="block font-medium mb-1">
          Website
        </label>
        <input
          type="text"
          id="website"
          name="website"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="gameName" className="block font-medium mb-1">
          Game Name
        </label>
        <input
          type="text"
          id="gameName"
          name="gameName"
          value={gameName}
          onChange={(event) => setGameName(event.target.value)}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="portfolioLink" className="block font-medium mb-1">
          Portfolio Link
        </label>
        <input
          type="text"
          id="portfolioLink"
          name="portfolioLink"
          value={portfolioLink}
          onChange={(event) => setPortfolioLink(event.target.value)}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="text-center">
        <Button text={"RegisterNow!"} />
      </div>
    </form>
  );
};

export default RegisterForm;
