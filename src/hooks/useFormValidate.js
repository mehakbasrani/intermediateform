import { useState } from "react";

const useFormValidate = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submittedValues, setSubmittedValues] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = (values) => {
    let errors = {};

    if (!values.name.trim()) {
      errors.name = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    if (!values.phoneNo) {
      errors.phoneNo = "Phone number is required";
    } else if (!/^\d{10}$/.test(values.phoneNo)) {
      errors.phoneNo = "Phone number is invalid. It should be 10 digits long.";
    }

    if (!values.skills.length) {
      errors.skills = "At least one skill is required";
    }

    if (!values.interviewDate) {
      errors.interviewDate = "Preferred interview date is required";
    }

    if (!values.interviewTime) {
      errors.interviewTime = "Preferred interview time is required";
    }

    if (values.position === "developer" || values.position === "designer") {
      if (!values.experience) {
        errors.experience = "Experience is required";
      }
    }

    if (values.position === "designer") {
      if (!values.portfolio_url) {
        errors.portfolio_url = "Portfolio URL is required";
      } else if (
        !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
          values.portfolio_url
        )
      ) {
        errors.portfolio_url = "Portfolio URL is invalid";
      }
    }
    if (values.position === "manager" && !values.mgmt_experince) {
      errors.mgmt_experince = "Management experience is required";
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmittedValues(values);
      console.log("Form submitted successfully", values);
    }
  };

  return {
    values,
    handleChange,
    handleSubmit,
    errors,
    submittedValues,
  };
};

export default useFormValidate;
