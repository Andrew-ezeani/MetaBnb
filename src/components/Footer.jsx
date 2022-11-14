import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import whiteLogo from "../assets/Group.svg";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Copyright from "@mui/icons-material/Copyright";
import { Grid } from "@mui/material";

const Footer = () => {
  const GridText = ({ fs, h, type, text }) => {
    return (
      <Typography variant={type} sx={{ fontSize: fs, lineHeight: h }}>
        {text}
      </Typography>
    );
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        marginTop: "-1.31rem",
        background: "#1D1D1E",
        height: "20.125rem",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          marginTop: "1.8rem",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <img src={whiteLogo} alt="" width="233px" />
        <Box
          sx={{
            width: "139px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Facebook sx={{ color: "#FFF" }} />
          <Instagram sx={{ color: "#FFF" }} />
          <Twitter sx={{ color: "#FFF" }} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Copyright sx={{ color: "#FFF" }} />
          <Typography sx={{ color: "#fff" }}>2022 Metabnb</Typography>
        </Box>
      </Box>
      <Grid
        container
        columnSpacing={5}
        sx={{
          width: "698px",
          color: "#FFF",
          marginTop: "3rem",
        }}
      >
        <Grid item xs={4}>
          <GridText type={"h3"} fs={"1.125rem"} h={"1.4"} text={"Community"} />
          <GridText type={"body1"} fs={"0.875rem"} h={"2.1"} text={"NFTs"} />
          <GridText type={"body1"} fs={"0.875rem"} h={"2.1"} text={"Tokens"} />
          <GridText
            type={"body1"}
            fs={"0.875rem"}
            h={"2.1"}
            text={"Landlords"}
          />
          <GridText type={"body1"} fs={"0.875rem"} h={"2.1"} text={"Discord"} />
        </Grid>
        <Grid item xs={4}>
          <GridText type={"h3"} fs={"1.125rem"} h={"1.4"} text={"Places"} />
          <GridText type={"body1"} fs={"0.875rem"} h={"2.1"} text={"Castle"} />
          <GridText type={"body1"} fs={"0.875rem"} h={"2.1"} text={"Farms"} />
          <GridText type={"body1"} fs={"0.875rem"} h={"2.1"} text={"Beach"} />
          <GridText
            type={"body1"}
            fs={"0.875rem"}
            h={"2.1"}
            text={"Learn more"}
          />
        </Grid>
        <Grid item xs={4}>
          <GridText type={"h3"} fs={"1.125rem"} h={"1.4"} text={"About us"} />
          <GridText
            type={"body1"}
            fs={"0.875rem"}
            h={"2.1"}
            text={"Road map"}
          />
          <GridText
            type={"body1"}
            fs={"0.875rem"}
            h={"2.1"}
            text={"Creators"}
          />
          <GridText type={"body1"} fs={"0.875rem"} h={"2.1"} text={"Career"} />
          <GridText
            type={"body1"}
            fs={"0.875rem"}
            h={"2.1"}
            text={"Contact us"}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
