import React from "react";
import PlacesCardTemplate from "./PlacesCardTemplate";
import placesData from "../data/placesData";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const DisplayPlaces = ({ isSlice }) => {
  const places = !isSlice ? placesData : placesData.slice(0, 8);

  return (
    <>
      {isSlice && (
        <Typography
          variant="h2"
          sx={{
            marginBottom: "4rem",
            textAlign: "center",
            fontWeight: "700",
            fontSize: { xs: "2rem", sm: "3rem" },
            lineHeight: { xs: "1.3", sm: "1.85" },
          }}
        >
          Inspiration for your next adventure
        </Typography>
      )}

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: {
            xs: "center",
            sm: "space-around",
            lg: "space-between",
          },
          rowGap: "2rem",
        }}
      >
        {places.map((place) => {
          return (
            <PlacesCardTemplate
              key={place.id}
              img={place.poster_img}
              name={place.name}
              price={place.price}
              distance={place.distance}
              duration={place.duration}
              rating={place.rating}
            />
          );
        })}
      </Box>
    </>
  );
};

export default DisplayPlaces;
