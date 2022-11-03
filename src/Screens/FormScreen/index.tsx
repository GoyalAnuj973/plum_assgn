import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "./index.css";
import { useFormControls } from "./formValidation";
import Divider from "@mui/material/Divider";
import FormPreview from "../../Components/formpreview";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const plan_names = [
  "Self",
  "Parents",
  "Self + Parents",
  "Self + Spouse + Kids",
  "Self + Spouse + Kids + Parents",
];

const plan_short_form = [
  "One (Individual)",
  "Pro (Individual)",
  "Plus (Individual + Individual)",
  "Max (Floater)",
  "Grand (Floater + Individual)",
];

function getStyles(plan: string, planName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      planName.indexOf(plan) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const inputFieldValues = [
  {
    name: "email",
    label: "Personal email address",
    id: "my-email",
  },
  {
    name: "contact",
    label: "Mobile number",
    id: "my-contact",
  },
  {
    name: "address",
    label: "Address line 01",
    id: "my-address",
  },
  {
    name: "address",
    label: "Address Line 02",
    id: "my-address",
  },
  {
    name: "pincode",
    label: "Pincode",
    id: "my-pincode",
  },
  {
    name: "state",
    label: "State",
    id: "my-state",
  },
];

const Form = () => {
  const theme = useTheme();
  const [planName, setPlanName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof planName>) => {
    const {
      target: { value },
    } = event;
    setPlanName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls();

  return (
    <div className="outer-div-1">
      <div className="outer-div-2">
        <div className="form-screen">
          <div className="information-on-page">
            <h1>Choose your plan</h1>
            <p>Hello, Anisha,</p>
            <p>
              Increase yours and your family's health insurance cover by{" "}
              <b>₹20 lakhs</b> with Super top-up!
            </p>
          </div>

          <div className="plan-details-form">
            {/* <div className="plan-details"></div> */}
            <FormControl sx={{ m: 1, width: 500, mt: 3 }}>
              <div className="plan-details">
                <h3>
                  <b>Plan details</b>
                </h3>
              </div>
              <Divider className="divider1" />
              <p>Your plan type</p>
              <Select
                multiple
                displayEmpty
                value={planName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>Select Your Plan</em>;
                  }

                  return selected;
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>Select Your Plan</em>
                </MenuItem>
                {plan_names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, planName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="basic-details-form">
            <div className="basic-details">
              <h3>
                <b>Basic details (required)</b>
              </h3>
            </div>
            {/* <Divider className="divider2" /> */}
            <form
              className="form-elements"
              onSubmit={handleFormSubmit}
              autoComplete="off"
            >
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  {inputFieldValues.map((inputFieldValue, index) => {
                    return (
                      <Grid item>
                        <Item>
                          <TextField
                            key={index}
                            onBlur={handleInputValue}
                            onChange={handleInputValue}
                            name={inputFieldValue.name}
                            label={inputFieldValue.label}
                            autoComplete="none"
                            {...(errors[inputFieldValue.name] && {
                              error: true,
                              helperText: errors[inputFieldValue.name],
                            })}
                          />
                        </Item>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </form>
          </div>
        </div>
        <div className="side-form-preview">
          <FormPreview />
        </div>
      </div>
      <Button className="next-button" type="submit">
        {/* disabled={!formIsValid()} */}
        Next
      </Button>
    </div>
  );
};

export default Form;

{
  /* <Grid item>
                <Item>
                  <TextField
                    placeholder="email"
                    label="Personal email address"
                  />
                </Item>
              </Grid>

              <Grid item>
                <Item>
                  <TextField placeholder="contact no." label="Mobile number" />
                </Item>
              </Grid>

              <Grid item>
                <Item>
                  <TextField
                    placeholder="flat no./block no."
                    label="Address line 01"
                  />
                </Item>
              </Grid>

              <Grid item>
                <Item>
                  <TextField placeholder="street" label="Address line 02" />
                </Item>
              </Grid>

              <Grid item>
                <Item>
                  <TextField placeholder="area pin" label="Pincode" />
                </Item>
              </Grid>

              <Grid item>
                <Item>
                  <TextField placeholder="state" label="State" />
                </Item>
              </Grid> */
}
