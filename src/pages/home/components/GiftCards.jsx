import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import image from "../../../assets/images/Frame 59546.png";
import { GradientText } from "../../../utils/utils";
const NftGiftCard = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        padding: "0 20px",
        maxWidth: "100vw",
        minHeight: "100vh",
        marginTop: "4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        background: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
      }}
    >
      <Box sx={{ width: "33%", color: "#FFF" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: "3rem",
            lineHeight: "60px",
          }}
        >
          Metabnb NFTs
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.125rem", lineHeight: "35px", marginTop: "2rem" }}
        >
          Discover our NFT gift cards collection. Loyal customers get amazing
          gift cards which are traded as NFTs. These NFTs give our customers
          access to loads of our exclusive services
        </Typography>
        <Button
          variant="contained"
          sx={{
            background:
              "linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)",
            borderRadius: "8px",
            width: "156px",
            height: "48px",
            marginTop: "2.5rem",
          }}
        >
          <GradientText text={"Learn more"} />
        </Button>
      </Box>
      <Box sx={{ width: "49%" }}>
        <img src={image} alt="" />
      </Box>
    </Container>
  );
};

export default NftGiftCard;
