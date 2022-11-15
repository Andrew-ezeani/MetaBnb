import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Tune from "@mui/icons-material/Tune";
import DisplayApartments from "../components/DisplayPlaces";
import Divider from "@mui/material/Divider";

const Places = () => {
  const TextComp = ({ text }) => {
    return (
      <Typography
        variant="body1"
        sx={{ fontSize: "1.25rem", lineHeight: "1.6" }}
      >
        {text}
      </Typography>
    );
  };
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "100vw",
          marginTop: { xs: "6rem", lg: "10rem" },
          marginBottom: { xs: "4rem", lg: "3rem" },
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          gap: { xs: "1rem", sm: "6rem" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", sm: "57.6rem" },
            height: "1.4",
            marginLeft: "16px",
            alignItems: "center",
            justifyContent: { xs: "flex-start", sm: "space-between" },
            flexWrap: "wrap",
            gap: { xs: "25px", sm: "0" },
          }}
        >
          <TextComp text={"Restaurant"} />
          <TextComp text={"Cottage"} />
          <TextComp text={"Castle"} />
          <TextComp text={"fantast city"} />
          <TextComp text={"beach"} />
          <TextComp text={"Carbins"} />
          <TextComp text={"Off-grid"} />
          <TextComp text={"farm"} />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", lg: "10.063rem" },
            height: "100%",
            marginRight: "10px",
            position: "relative",
          }}
        >
          <TextField
            id="Search for location"
            type="text"
            placeholder="Location"
            color="secondary"
            sx={{
              height: "100%",
              border: "1px solid #B4B4B4",
              width: { xs: "100%", sm: "100%" },
              borderRadius: "0px 8px 8px 0px",
            }}
          />
          <Tune
            sx={{
              position: "absolute",
              width: "24px",
              height: "24px",
              top: "50%",
              right: "5%",
              transform: "translateY(-50%)",
              color: "#B4B4B4",
            }}
          />
        </Box>
      </Container>
      <Container
        maxWidth={false}
        sx={{
          minHeight: "100vh",
          marginBottom: "5.31rem",
        }}
      >
        <DisplayApartments />
      </Container>
    </>
  );
};

export default Places;
