import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import coloredLogo from "../../assets/color logo.svg";
import MobileMenu from "./MobileMenu";
import { routes } from "../../utils/utils";
import ButtonComp from "../Button";

const NavBar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Box
          sx={{
            maxWidth: "33.3%",
            marginLeft: "8px",
            display: "flex",
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
              {routes}
            </Box>
            <ButtonComp width={"170px"} />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
