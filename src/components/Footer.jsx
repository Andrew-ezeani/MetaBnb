import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import whiteLogo from "../assets/Group.svg";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Copyright from "@mui/icons-material/Copyright";
import styled from "styled-components";

const Footer = () => {
  const StyledImg = styled.img`
    width: "233px";

    @media (max-width: 600px) {
      width: 30%;
    }
  `;
  const GridText = ({ fs, h, type, text }) => {
    return (
      <Typography variant={type} sx={{ fontSize: fs, lineHeight: h }}>
        {text}
      </Typography>
    );
  };

  return (
    <Box style={{ background: "#1D1D1E" }}>
      <Container
        // maxWidth={false}
        sx={{
          padding: "2rem",
          minHeight: "20.125rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "space-around", lg: "space-between" },
        }}
      >
        <Box
          sx={{
            marginTop: "1.3rem",
            maxHeight: "100%",
            display: "flex",
            flexDirection: { xs: "row", lg: "column" },
            justifyContent: { xs: "space-between", lg: "space-around" },
            alignItems: { xs: "center", lg: "flex-start" },
          }}
        >
          <StyledImg src={whiteLogo} alt="" />
          <Box
            sx={{
              width: { xs: "33%", lg: "139px" },
              display: "flex",
              justifyContent: { xs: "space-evenly", lg: "space-between" },
            }}
          >
            <Facebook
              sx={{ color: "#FFF", fontSize: { xs: "1rem", sm: "2rem" } }}
            />
            <Instagram
              sx={{ color: "#FFF", fontSize: { xs: "1rem", sm: "2rem" } }}
            />
            <Twitter
              sx={{ color: "#FFF", fontSize: { xs: "1rem", sm: "2rem" } }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "flex-end", sm: "flex-start" },
              gap: { xs: "5px", lg: "10px" },
              width: { xs: "30%", sm: "100%" },
            }}
          >
            <Copyright
              sx={{ color: "#FFF", fontSize: { xs: ".8rem", sm: "2rem" } }}
            />
            <Typography
              sx={{ color: "#fff", fontSize: { xs: ".7rem", sm: "1rem" } }}
            >
              2022 Metabnb
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "698px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            color: "#FFF",
            marginTop: "3rem",
          }}
        >
          <Box>
            <GridText
              type={"h3"}
              fs={"1.125rem"}
              h={"1.4"}
              text={"Community"}
            />
            <GridText type={"body1"} fs={"0.875rem"} h={"2.1"} text={"NFTs"} />
            <GridText
              type={"body1"}
              fs={"0.875rem"}
              h={"2.1"}
              text={"Tokens"}
            />
            <GridText
              type={"body1"}
              fs={"0.875rem"}
              h={"2.1"}
              text={"Landlords"}
            />
            <GridText
              type={"body1"}
              fs={"0.875rem"}
              h={"2.1"}
              text={"Discord"}
            />
          </Box>
          <Box>
            <GridText type={"h3"} fs={"1.125rem"} h={"1.4"} text={"Places"} />
            <GridText
              type={"body1"}
              fs={"0.875rem"}
              h={"2.1"}
              text={"Castle"}
            />
            <GridText type={"body1"} fs={"0.875rem"} h={"2.1"} text={"Farms"} />
            <GridText type={"body1"} fs={"0.875rem"} h={"2.1"} text={"Beach"} />
            <GridText
              type={"body1"}
              fs={"0.875rem"}
              h={"2.1"}
              text={"Learn more"}
            />
          </Box>
          <Box>
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
            <GridText
              type={"body1"}
              fs={"0.875rem"}
              h={"2.1"}
              text={"Career"}
            />
            <GridText
              type={"body1"}
              fs={"0.875rem"}
              h={"2.1"}
              text={"Contact us"}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
