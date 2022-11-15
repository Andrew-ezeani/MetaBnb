import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import routesData from "../data/routesData";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

const routes = routesData.map((route, index) => {
  return (
    <Link
      key={index}
      component={RouterLink}
      to={route[0]}
      underline="none"
      sx={{ fontSize: "20px", color: "#434343" }}
    >
      {route[1]}
    </Link>
  );
});

const GradientText = ({ text }) => {
  return (
    <Box
      component="span"
      sx={{
        background: "linear-gradient(60deg,#A02279 100%, #FFC089 60% )",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      {text}
    </Box>
  );
};

const WalletBtn = ({ text, image, bg }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        width: "100%",
        padding: "12px 20px",
        display: "flex",
        borderRadius: "12px",
        border: "1px solid #CFD8DC",
        color: "#000",

        "&:hover": {
          backgroundColor: "#F8F9FA",
        },
      }}
    >
      <img
        src={image}
        alt=""
        style={{
          width: "40px",
          marginRight: "10px",
        }}
      />
      {text}
      <ArrowForwardIos
        sx={{
          marginLeft: "auto",
          width: "40px",
          color: "#959DA6",
        }}
      />
    </Button>
  );
};

export { GradientText, routes, WalletBtn };
