import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FormPreview from "../../Components/formpreview";
import Button from "@mui/material/Button";
import BackButton from "../../assets/BackButton.svg";
import "./index.css";
import Husband from "../../assets/Husband-Filled.svg";
import CustomizedSteppers from "../../Components/Stepper";
import { useNavigate } from "react-router-dom";

const marks = [
  {
    value: 1,
    label: "₹1L",
  },
  {
    value: 2,
    label: "₹2L",
  },
  {
    value: 3,
    label: "₹3L",
  },
  {
    value: 5,
    label: "₹5L",
  },
];

function valuetext(value: number) {
  return `₹${value}L`;
}

function valueLabelFormat(value: number) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

function Package() {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/declaration");
  };
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="screen-2">
      <CustomizedSteppers activeStep={1} />
      <div className="screen-2-content">
        <div className="package-and-info">
          <div className="info-about-page">
            <Button onClick={handleBack}>
              <img src={BackButton} />
            </Button>
            <div className="information-on-page">
              <h1>Select your deductible amount</h1>

              <p>
                Select the deductible amount for the policy (or policies) below.
              </p>
              <p>(what is a deductible?)</p>
            </div>
          </div>
          <div className="plan-person">
            <h3>
              <b>Self (Individual)</b>
            </h3>
            <div className="person">
              <img src={Husband} />
              <h6>
                <b>John Doe</b>
              </h6>
            </div>
          </div>
          <div className="plans-selection">
            <div className="sums">
              <p>Sum insured of ₹20,00,000 with a deductible of {}</p>
            </div>
            <Box className="slider" sx={{ width: 300 }}>
              <Slider
                aria-label="Restricted values"
                defaultValue={3}
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                step={4}
                valueLabelDisplay="auto"
                marks={marks}
              />
            </Box>
          </div>
        </div>
        <div className="side-form-preview">
          <FormPreview />
        </div>
      </div>
      <Button className="next-button" type="submit" onClick={handleNext}>
        {/* disabled={!formIsValid()} */}
        Next
      </Button>
    </div>
  );
}

export default Package;
