import { useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import InputDefaults from "../InputDefaults";
import { isEmailValid } from "../utils/validations";
import FunctionalPhoneInput from "./FunctionalPhoneInput";

const firstNameErrorMessage: string = "First name must be at least 2 characters long";
const lastNameErrorMessage: string = "Last name must be at least 2 characters long";
const emailErrorMessage: string = "Email is Invalid";
const cityErrorMessage: string = "State is Invalid";
const phoneNumberErrorMessage: string = "Invalid Phone Number";

export const FunctionalForm = ({ handleUserInformation }) => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);

    handleUserInformation({
      firstName: firstNameInput,
      lastName: lastNameInput,
      email: email,
      city: city,
    });

    if (firstNameInput.length <= 2) {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }

    if (lastNameInput.length <= 2) {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }

    if (!city) {
      setCityError(true);
    } else {
      setCityError(false);
    }

    if (!email) {
      setEmailError(true);
    } else if (!isEmailValid(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailError(false);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
    setCityError(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <u>
        <h3>User Information Form</h3>
      </u>

      {/* first name input */}
      <InputDefaults
        labelData="First Name"
        inputProps={{
          onChange: (e) => setFirstNameInput(e.target.value),
          value: firstNameInput,
          type: "text",
          placeholder: "Jane",
        }}
      />
      {formSubmitted && firstNameError && (
        <ErrorMessage message={firstNameErrorMessage} show={true} />
      )}

      {/* last name input */}
      <InputDefaults
        labelData="Last Name"
        inputProps={{
          onChange: (e) => setLastNameInput(e.target.value),
          value: lastNameInput,
          type: "text",
          placeholder: "Doe",
        }}
      />
      {formSubmitted && lastNameError && (
        <ErrorMessage message={lastNameErrorMessage} show={true} />
      )}

      {/* Email Input */}
      <InputDefaults
        labelData="Email"
        inputProps={{
          onChange: handleEmailChange,
          value: email,
          type: "text",
          placeholder: "bobby@bobbymechanicshop.com",
        }}
      />
      {formSubmitted && emailError && (
        <ErrorMessage message={emailErrorMessage} show={true} />
      )}

      {/* City Input */}
      <InputDefaults
        labelData="City"
        inputProps={{
          onChange: handleCityChange,
          value: city,
          type: "text",
          placeholder: "Hobbiton",
          list: "cities",
        }}
      />
      {formSubmitted && cityError && (
        <ErrorMessage message={cityErrorMessage} show={true} />
      )}

      <FunctionalPhoneInput />
      <ErrorMessage message={phoneNumberErrorMessage} show={false} />

      <input type="submit" value="Submit" />
    </form>
  );
};