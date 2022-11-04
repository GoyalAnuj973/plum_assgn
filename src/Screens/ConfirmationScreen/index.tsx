import Button from "@mui/material/Button";
import * as React from "react";
import "./index.css";
import BackButton from "../../assets/BackButton.svg";
import CustomizedSteppers from "../../Components/Stepper";

function Confirmation(props: any) {
  const handleSubmit = () => {};
  return (
    <div className="confirmaiton-screen">
      <CustomizedSteppers activeStep={3} />
      <div className="confirmation">
        <div className="confirmation-and-button">
          <Button>
            <img src={BackButton} />
          </Button>
          <div className="information-on-page">
            <h1>Review and confirm payment</h1>
          </div>
        </div>
        <div className="details">
            {/* respective props should be passed about the details selected and given. */}
          <p>Plan selected: {}</p> 
          <p>Mobile number: {}</p>
          <p>Address line 01: {}</p>
          <p>Pincode: {}</p>
          <p>State: {}</p>
        </div>
      </div>
      <Button className="next-button" type="submit" onClick={handleSubmit}>
        {/* disabled={!formIsValid()} */}
        Submit
      </Button>
    </div>
  );
}

export default Confirmation;
