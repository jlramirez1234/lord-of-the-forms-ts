import { ErrorMessage } from "../ErrorMessage";

const firstNameErrorMessage:string = "First name must be at least 2 characters long";
const lastNameErrorMessage:string = "Last name must be at least 2 characters long";
const emailErrorMessage:string = "Email is Invalid";
const cityErrorMessage:string = "State is Invalid";
const phoneNumberErrorMessage:string = "Invalid Phone Number";

export const FunctionalForm = () => {
  return (
    <form>
      <u>
        <h3>User Information Form</h3>
      </u>

      {/* first name input */}
      <div className="input-wrap">
        <label>{"First Name"}:</label>
        <input placeholder="Bilbo" />
      </div>
      <ErrorMessage message={firstNameErrorMessage} show={true} />

      {/* last name input */}
      <div className="input-wrap">
        <label>{"Last Name"}:</label>
        <input placeholder="Baggins" />
      </div>
      <ErrorMessage message={lastNameErrorMessage} show={true} />

      {/* Email Input */}
      <div className="input-wrap">
        <label>{"Email"}:</label>
        <input placeholder="bilbo-baggins@adventurehobbits.net" />
      </div>
      <ErrorMessage message={emailErrorMessage} show={true} />

      {/* City Input */}
      <div className="input-wrap">
        <label>{"City"}:</label>
        <input placeholder="Hobbiton" />
      </div>
      <ErrorMessage message={cityErrorMessage} show={true} />

      <div className="input-wrap">
        <label htmlFor="phone">Phone:</label>
        <div id="phone-input-wrap">
          <input type="text" id="phone-input-1" placeholder="55" />
          -
          <input type="text" id="phone-input-2" placeholder="55" />
          -
          <input type="text" id="phone-input-3" placeholder="55" />
          -
          <input type="text" id="phone-input-4" placeholder="5" />
        </div>
      </div>

      <ErrorMessage message={phoneNumberErrorMessage} show={true} />

      <input type="submit" value="Submit" />
    </form>
  );
};
