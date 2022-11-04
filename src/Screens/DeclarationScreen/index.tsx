import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import Button from "@mui/material/Button";
import BackButton from "../../assets/BackButton.svg";
import FormPreview from "../../Components/formpreview";
import "./index.css";
import CustomizedSteppers from "../../Components/Stepper";
import { useNavigate } from "react-router-dom";

function Declaration() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/confirmation");
  };
  const handleBack = () => {
    navigate("/package-selection");
  };

  return (
    <div className="declaration-screen">
      <CustomizedSteppers activeStep={2} />
      <div className="declaration-content">
        <div className="checkboxes">
          <div className="declaration-and-button">
            <Button onClick={handleBack}>
              <img src={BackButton} />
            </Button>
            <div className="information-on-page">
              <h1>Declaration</h1>
            </div>
          </div>
          <div className="check-form">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                className="checking"
                label="I hereby declare that none of the proposed members are habitual consumers of alcohol, tobacco, gutka or any recreational drugs."
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                className="checking"
                label="I hereby declare that all proposed members are in good health and entirely free from any mental or physical impairments or deformities, disease/condition."
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                className="checking"
                label="I have understood that there is 30 days waiting period for all disease and 2 years on named ailments. (list of named ailments)."
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                className="checking"
                label="I understood that this policy doesn't cover Pre-existing diseases    ."
              />
            </FormGroup>
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

export default Declaration;
