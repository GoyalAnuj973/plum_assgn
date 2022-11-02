import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function FormPreview() {
  return (
    <Box className="form-preview-container" sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Typography
            className="form-preview"
            sx={{ mt: 4, mb: 2 }}
            variant="h6"
            component="div"
          >
            Form Preview
          </Typography>
          <List className="form-preview-list">
            <ListItem className="form-preview-list-item">
              <ListItemText>Personal email address      -</ListItemText>
            </ListItem>
            <ListItem className="form-preview-list-item">
              <ListItemText>Mobile number      -</ListItemText>
            </ListItem>
            <ListItem className="form-preview-list-item">
              <ListItemText>Address line 01      -</ListItemText>
            </ListItem>
            <ListItem className="form-preview-list-item">
              <ListItemText>Address line 02      -</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Pincode      -</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>State</ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FormPreview;
