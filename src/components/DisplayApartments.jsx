import React from "react";
import MetaBnbApartments from "./MetaBnbAPartments";
import apartmentData from "../data/apartmentData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const DisplayApartments = ({ isSlice }) => {
  const apartments = !isSlice ? apartmentData : apartmentData.slice(0, 8);

  return (
    <Container
      maxWidth={false}
      sx={{
        marginTop: "4rem",
        maxWidth: "100vw",
      }}
    >
      {isSlice && (
        <Typography
          variant="h2"
          sx={{
            marginBottom: "4rem",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "3rem",
            lineHeight: "59.95px",
          }}
        >
          Inspiration for your next adventure
        </Typography>
      )}

      <Grid container spacing={3} sx={{ width: "100%" }}>
        {apartments.map((apartment) => {
          return (
            <MetaBnbApartments
              key={apartment.id}
              img={apartment.poster_img}
              name={apartment.name}
              price={apartment.price}
              distance={apartment.distance}
              duration={apartment.duration}
              rating={apartment.rating}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

export default DisplayApartments;
