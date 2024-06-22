import React from "react";
import useFormValidate from "../hooks/useFormValidate";

const FormTwo = () => {
  const formData = {
    name: "",
    phoneNo: "",
    email: "",
    position: "",
    experience: "",
    portfolio_url: "",
    mgmt_experince: "",
    skills: [],
    interviewDate: "",
    interviewTime: "",
  };

  const { values, handleChange, handleSubmit, errors, submittedValues } =
    useFormValidate(formData);

  const handleSelectChange = (event) => {
    handleChange(event);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    let updatedSkills = [...values.skills];

    if (checked) {
      updatedSkills.push(value);
    } else {
      updatedSkills = updatedSkills.filter((skill) => skill !== value);
    }

    handleChange({ target: { name: "skills", value: updatedSkills } });
  };

  return (
    <>
      <nav className="bg-gray-800 py-4 w-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-white font-bold text-xl">
                Intermediate Dynamic Form
              </span>
            </div>
            <div className="flex items-en">
              <button
                onClick={(e) => handleSubmit(e)}
                className="border border-2 border-white px-5 py-2 text-white  rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="pt-20 gap-6">
        <form className="flex gap-6 gap-y-2 max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid w-[90%] grid-cols-2 gap-6 gap-y-2 max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="mb-4">
              <label className="block font-bold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border focus:outline-none border-gray-300 rounded ${
                  errors.name ? "border border-red-600 bg-red-100" : ""
                }`}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border focus:outline-none border-gray-300 rounded ${
                  errors.email ? "border border-red-600 bg-red-100" : ""
                }`}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">Phone Number</label>
              <input
                type="number"
                name="phoneNo"
                value={values.phoneNo}
                onChange={handleChange}
                className={`w-full px-3 py-2 border focus:outline-none border-gray-300 rounded ${
                  errors.phoneNo ? "border border-red-600 bg-red-100" : ""
                }`}
              />
              {errors.phoneNo && <p>{errors.phoneNo}</p>}
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">
                Preferred Interview Date
              </label>
              <input
                type="date"
                name="interviewDate"
                value={values.interviewDate}
                onChange={handleChange}
                className={`w-full px-3 py-2 border focus:outline-none border-gray-300 rounded ${
                  errors.interviewDate ? "border border-red-600 bg-red-100" : ""
                }`}
              />
              {errors.interviewDate && <p>{errors.interviewDate}</p>}
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">
                Preferred Interview Time
              </label>
              <input
                type="time"
                name="interviewTime"
                value={values.interviewTime}
                onChange={handleChange}
                className={`w-full px-3 py-2 border focus:outline-none border-gray-300 rounded ${
                  errors.interviewTime ? "border border-red-600 bg-red-100" : ""
                }`}
              />
              {errors.interviewTime && <p>{errors.interviewTime}</p>}
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">Additional Skills</label>
              <input
                className="mr-2"
                type="checkbox"
                name="skill1"
                value="Javascript"
                checked={values.skills.includes("Javascript")}
                onChange={handleCheckboxChange}
              />
              <label className="font-medium mr-6">Javascript</label>
              <input
                className="mr-2"
                type="checkbox"
                name="skill2"
                value="Python"
                checked={values.skills.includes("Python")}
                onChange={handleCheckboxChange}
              />
              <label className="font-medium mr-6">Python</label>
              <input
                className="mr-2"
                type="checkbox"
                name="skill3"
                value="NodeJs"
                checked={values.skills.includes("NodeJs")}
                onChange={handleCheckboxChange}
              />
              <label className="font-medium mr-6">NodeJs</label>
              <input
                className="mr-2"
                type="checkbox"
                name="skill4"
                value="MongoDB"
                checked={values.skills.includes("MongoDB")}
                onChange={handleCheckboxChange}
              />
              <label className="font-medium mr-6">MongoDB</label>
              {errors.skills && <p>{errors.skills}</p>}
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">
                Applying for Position
              </label>
              <select
                name="position"
                onChange={handleSelectChange}
                value={values.position}
                className={`w-full px-3 py-2 border border-gray-300 rounded ${
                  errors.position ? "border border-red-600 bg-red-100" : ""
                }`}
              >
                <option value="">Position</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
              </select>
              {errors.position && <p>{errors.position}</p>}
            </div>
            <div className="mb-4 opacity-0"></div>
            <div className="mb-4">
              {values.position === "developer" && (
                <div>
                  <label className="block font-bold mb-2">Experience</label>
                  <input
                    type="number"
                    name="experience"
                    value={values.experience}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border focus:outline-none border-gray-300 rounded ${
                      errors.experience
                        ? "border border-red-600 bg-red-100"
                        : ""
                    }`}
                  />
                  {errors.experience && <p>{errors.experience}</p>}
                </div>
              )}
              {values.position === "designer" && (
                <div>
                  <label className="block font-bold mb-2">Experience</label>
                  <input
                    type="number"
                    name="experience"
                    value={values.experience}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border focus:outline-none border-gray-300 rounded ${
                      errors.experience
                        ? "border border-red-600 bg-red-100"
                        : ""
                    }`}
                  />
                  {errors.experience && <p>{errors.experience}</p>}
                  <label className="block font-bold mb-2">Portfolio URL:</label>
                  <input
                    type="url"
                    name="portfolio_url"
                    value={values.portfolio_url}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border focus:outline-none border-gray-300 rounded ${
                      errors.portfolio_url
                        ? "border border-red-600 bg-red-100"
                        : ""
                    }`}
                  />
                  {errors.portfolio_url && <p>{errors.portfolio_url}</p>}
                </div>
              )}
              {values.position === "manager" && (
                <div>
                  <label
                    htmlFor="mgmt_experince"
                    className="block font-bold mb-2"
                  >
                    Management Experience:
                  </label>
                  <input
                    type="number"
                    name="mgmt_experince"
                    value={values.mgmt_experince}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border focus:outline-none border-gray-300 rounded ${
                      errors.mgmt_experince
                        ? "border border-red-600 bg-red-100"
                        : ""
                    }`}
                  />
                  {errors.mgmt_experince && <p>{errors.mgmt_experince}</p>}
                </div>
              )}
            </div>
          </div>
        </form>
        {submittedValues && (
          <div className="flex items-center justify-center w-screen h-screen bg-gray-600 overflow-x-hidden">
            <div className="w-full md:pt-24  pb-0 max-w-md">
              <div className="bg-gray-800 shadow-md rounded-xl md:px-8 px-4  pb-10 mb-4">
                <div className=" flex  justify-center pt-10">
                  <div className="bg-gray-900 rounded-lg shadow-lg p-8">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center">
                        <svg
                          className="text-gray-400 w-12 h-12"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="text-left text-white">
                      <p>
                        <span className="font-bold">Name:</span>{" "}
                        {submittedValues.name}
                      </p>
                      <p>
                        <span className="font-bold">Email:</span>{" "}
                        {submittedValues.email}
                      </p>
                      <p>
                        <span className="font-bold text-white">
                          Phone Number:{" "}
                        </span>
                        {submittedValues.phoneNo}
                      </p>
                      <p>
                        <span className="font-bold text-white">
                          Position Applied:{" "}
                        </span>
                        {submittedValues.position}
                      </p>
                      {submittedValues.experience && (
                        <p>
                          <span className="font-bold">
                            Relevant Experience:{" "}
                          </span>
                          {submittedValues.experience}
                        </p>
                      )}
                      {submittedValues.mgmt_experience && (
                        <p>
                          <span className="font-bold">
                            Management Experience:{" "}
                          </span>
                          {submittedValues.mgmt_experience}
                        </p>
                      )}
                      {submittedValues.portfolio_url && (
                        <p>
                          <span className="font-bold">Portfolio URL: </span>
                          {submittedValues.portfolio_url}
                        </p>
                      )}
                      <p>
                        <span className="font-bold text-white">
                          Additional Skills:{" "}
                        </span>
                        {submittedValues.skills?.join(", ")}
                      </p>
                      <p>
                        <span className="font-bold text-white">
                          Preferred Interview Date and Time:{" "}
                        </span>
                        {submittedValues.interviewDate}{" "}
                        {submittedValues.interviewTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FormTwo;
