import React, { useState } from "react";
import { Box, Drawer, IconButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import routeData from "../../data/routesData";
import ButtonComp from "../Button";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawer}
        PaperProps={{
          sx: {
            width: { xs: "100%", sm: "50%" },
            paddingTop: "4.1rem",
          },
        }}
        onClose={() => setOpenDrawer(false)}
      >
        {routeData.map((page, index) => {
          return (
            <List key={index}>
              <ListItem button divider onClick={() => setOpenDrawer(false)}>
                <Divider />
                <Link
                  component={RouterLink}
                  to={page[0]}
                  underline="none"
                  sx={{
                    fontSize: { xs: "20px", sm: "30px" },
                    color: "#434343",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  {page[1]}
                </Link>
              </ListItem>
            </List>
          );
        })}
        <ButtonComp width={"90%"} />
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        {openDrawer ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </>
  );
};

export default DrawerComp;
