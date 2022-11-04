import Button from "@mui/material/Button";
import * as React from "react";
import "./index.css";
import BackButton from "../../assets/BackButton.svg";
import CustomizedSteppers from "../../Components/Stepper";

function Confirmed() {
  
    return (
      <div className="confirmed-screen">
        <CustomizedSteppers activeStep={3} />
        <div className="confirmation">
          <div className="confirmation-and-button">
            <div className="information-on-page">
              <h1>Congratulations</h1>
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
      </div>
    );
  }
  
  export default Confirmed;