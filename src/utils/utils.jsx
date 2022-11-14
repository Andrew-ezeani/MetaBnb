import React from "react";
import Box from "@mui/material/Box";
import pageData from "./data";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const pages = pageData.map((page, index) => {
  return (
    <Link
      key={index}
      component={RouterLink}
      to={page[0]}
      underline="none"
      sx={{ fontSize: "20px", color: "#434343" }}
    >
      {page[1]}
    </Link>
  );
});

const mobileDevicePages = pageData.map((page, index) => {
  return (
    <List key={index}>
      <ListItem button divider onClick={() => setOpenDrawer(false)}>
        <Divider />
        <ListItemText sx={{ textAlign: "center" }}>{pages}</ListItemText>
      </ListItem>
    </List>
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

export { GradientText, pages, mobileDevicePages };
