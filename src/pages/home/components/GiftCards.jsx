import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import image from "../../../assets/Frame 59546.png";
import { GradientText } from "../../../utils/utils";
const NftGiftCard = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        padding: { xs: "30px", sm: "30px 55px", lg: "0 20px" },
        maxWidth: "100vw",
        minHeight: "100vh",
        marginTop: "4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap",
        background: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
      }}
    >
      <Box sx={{ width: { xs: "100%", lg: "33%" }, color: "#FFF" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", lg: "3rem" },
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
            width: { xs: "100%", lg: "156px" },
            height: "48px",
            marginTop: "2.5rem",
          }}
        >
          <GradientText text={"Learn more"} />
        </Button>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", lg: "49%" },
          marginTop: { xs: "4rem", lg: "0" },
          marginBottom: { xs: "4rem", lg: "0" },
        }}
      >
        <img src={image} alt="" />
      </Box>
    </Container>
  );
};

export default NftGiftCard;
