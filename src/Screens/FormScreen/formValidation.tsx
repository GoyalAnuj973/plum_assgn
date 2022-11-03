import * as React from "react";
import { useState } from "react";

// const PostContactForm = async (
//     values: any,
// //     successCallback: any,
// //     errorCallback: any
// //   ) => {
// //     // do stuff
// //     // if successful
// //     if (true) successCallback();
// //     else errorCallback();
// };

const initialFormValues = {
  email: "",
  mobile: "",
  address1: "",
  address2: "",
  pincode: "",
  state: "",
};

export const useFormControls = () => {
  // We'll update "values" as the form updates
  const [values, setValues] = useState(initialFormValues);
  // "errors" is used to check the form for errors
  const [errors, setErrors] = useState({} as any);
  const validate: any = (fieldValues = values) => {
    let temp: any = { ...errors };

    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "This field is required.";
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email is not valid.";
    }

    if ("mobile" in fieldValues)
      temp.mobile = fieldValues.mobile ? "" : "This field is required.";

    if ("address1" in fieldValues)
      temp.address1 = fieldValues.address1 ? "" : "This field is required.";

    if ("address2" in fieldValues)
      temp.address2 = fieldValues.address2 ? "" : "This field is required.";

    if ("pincode" in fieldValues)
      temp.pincode = fieldValues.pincode ? "" : "This field is required.";

    if ("state" in fieldValues)
      temp.state = fieldValues.state ? "" : "This field is required.";

    setErrors({
      ...temp,
    });
  };
  const handleInputValue = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    validate({ [name]: value });
  };

//   const handleSuccess = () => {
//     setValues({
//       ...initialFormValues,
//       formSubmitted: true,
//       success: true
//     });
//   };

//   const handleError = () => {
//     setValues({
//       ...initialFormValues,
//       formSubmitted: true,
//       success: false
//     });
//   };
  const handleFormSubmit = async (e: any) => {
    // this function will be triggered by the submit event
    e.preventDefault();
    const isValid =
      Object.values(errors).every((x) => x === "") && formIsValid();
    if (isValid) {
      await PostContactForm(values);
    }
  };
  const formIsValid = (fieldValues = values) => {
    // this function will check if the form values and return a boolean value
    const isValid =
      fieldValues.email &&
      fieldValues.mobile &&
      fieldValues.address1 &&
      fieldValues.address2 &&
      fieldValues.pincode &&
      fieldValues.state &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };
  return {
    values,
    errors,
    handleInputValue,
    handleFormSubmit,
    formIsValid
  };
};

function PostContactForm(values: { email: string; mobile: string; address1: string; address2: string; pincode: string; state: string; }) {
    throw new Error("Function not implemented.");
}

