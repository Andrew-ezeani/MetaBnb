import React, { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { mobileDevicePages } from "../utils/utils";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawer}
        PaperProps={{
          sx: {
            width: "100%",
            paddingTop: "4.1rem",
          },
        }}
        onClose={() => setOpenDrawer(false)}
      >
        {mobileDevicePages}
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
