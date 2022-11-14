import React from "react";
import Box from "@mui/material/Box";
import metaMask from "../../../assets/images/metaMask.svg";
import mbToken from "../../../assets/images/mbToken.svg";
import openSea from "../../../assets/images/openSea.svg";

const Wallets = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%)",
        display: "flex",
        alignItems: "center",
        padding: "10px 100px",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <img src={mbToken} alt="" />
      </Box>
      <Box>
        <img src={metaMask} alt="" />
      </Box>
      <Box>
        <img src={openSea} alt="" />
      </Box>
    </Box>
  );
};

export default Wallets;
