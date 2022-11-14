import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import apartmentData from "../data/apartmentData";

const ShowApartments = ({ img, name, price }) => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img src={img} alt="" className="img" />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            {name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" component="p">
              {price}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ShowApartments;
