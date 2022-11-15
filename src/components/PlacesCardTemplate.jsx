import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import heart from "../assets/heart.png";

const PlacesCardTemplate = ({
  img,
  name,
  price,
  distance,
  duration,
  rating,
}) => {
  const CardText = ({ text }) => {
    return (
      <Typography variant="body1" sx={{ fontSize: "12px" }}>
        {text}
      </Typography>
    );
  };

  return (
    <Box>
      <Paper
        elevation={2}
        sx={{
          border: "1px solid #D7D7D7",
          borderRadius: "15px",
          width: "292px",
          maxWidth: "18.25rem",
          height: "372px",
        }}
      >
        <Box padding={2} sx={{ position: "relative" }}>
          <img src={img} alt="" className="img" />
          <img
            src={heart}
            alt=""
            style={{
              width: "24px",
              position: "absolute",
              top: "6%",
              right: "8%",
              outline: "none",
              border: "none",
              color: "#FFF",
            }}
          />
          <Box
            sx={{
              marginTop: ".5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "space-between",
              gap: ".3rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <CardText text={name} />
              <CardText text={price} />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <CardText text={distance} />
              <CardText text={duration} />
            </Box>
            <Rating name="read-only" value={rating} readOnly />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default PlacesCardTemplate;
