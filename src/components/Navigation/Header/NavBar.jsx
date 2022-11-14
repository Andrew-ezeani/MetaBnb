import React from "react";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import coloredLogo from "../../../assets/color logo.svg";
import MobileMenu from "./MobileMenu";
import { pages } from "../../../utils/utils";
const NavBar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  const handleClick = () => alert("clicked!");

  return (
    <AppBar
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: "100vw" }}>
        <Toolbar>
          <Box
            sx={{
              maxWidth: "33.3%",
              display: "flex",
              [theme.breakpoints.down("sm")]: {
                border: "2px solid red",
              },
            }}
          >
            <img src={coloredLogo} alt="" />
          </Box>
          {isMatch ? (
            <>
              <MobileMenu />
            </>
          ) : (
            <>
              <Box
                sx={{
                  margin: "0 auto",
                  width: "33.3%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {pages}
              </Box>
              <Button
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);",
                  borderRadius: "10px",
                  width: "170px",
                  height: "48px",
                }}
                onClick={handleClick}
              >
                Connect Wallet
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
