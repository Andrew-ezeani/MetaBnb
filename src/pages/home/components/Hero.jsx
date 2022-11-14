import React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { GradientText } from "../../../utils/utils";
import heroPhoto from "../../../assets/images/Group 4028.svg";

const Hero = () => {
  return (
    <Container
      sx={{
        background: "linear-gradient(60deg, #FFFFFF 10.8%, #FFFFFF 87.34%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "48px",
      }}
    >
      <Box
        sx={{
          maxWidth: "53%",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "3rem",
            color: "#434343",
            lineHeight: "78px",
            marginBottom: "1.7rem",
          }}
        >
          {" "}
          Rent a <GradientText text={"place"} /> away from{" "}
          <GradientText text={"Home"} /> in the{" "}
          <GradientText text={"Metaverse"} />
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: "#434343",
            fontSize: "1.65rem",
            lineHeight: "35px",
            fontWeight: "400",
          }}
        >
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </Typography>
        <Box
          sx={{
            width: "100%",
            position: "relative",
            marginTop: "3rem",
          }}
        >
          <TextField
            id="Search for location"
            type="text"
            fullWidth
            placeholder="Search for Location"
            color="secondary"
            sx={{
              border: "2px solid #A02279",
              borderRadius: "0px 8px 8px 0px",
            }}
          />
          <Button
            variant="contained"
            sx={{
              height: "100%",
              background:
                "linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%)",
              borderRadius: "0px 8px 8px 0px",
              width: "14.375rem",
              position: "absolute",
              top: "0",
              right: "-2px",
              bottom: "0",
            }}
          >
            Connect
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "40%",
        }}
      >
        <img src={heroPhoto} alt="" />
      </Box>
    </Container>
  );
};

export default Hero;
