import React from "react";
import {
  Container,
  AppBar,
  Box,
  Toolbar,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import coloredLogo from "../../../assets/images/color logo.svg";
import DrawerComp from "../../DrawerComp";
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
      <Container>
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
              <DrawerComp />
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
