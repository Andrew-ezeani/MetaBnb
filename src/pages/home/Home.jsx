import React from "react";
import Hero from "./components/Hero";
import Wallets from "./components/Wallets";
import DisplayPlaces from "../../components/DisplayPlaces";
import Container from "@mui/material/Container";
import NftGiftCard from "./components/GiftCards";

const Home = () => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "100vw",
          marginTop: "4em",
        }}
      >
        <Hero />
      </Container>
      <Wallets />
      <Container
        maxWidth={false}
        sx={{
          border: "2px solid black",
          maxWidth: "100vw",
          minHeight: "100vh",
          marginBottom: "5.31rem",
        }}
      >
        <DisplayPlaces isSlice={true} />
      </Container>
      <NftGiftCard />
    </>
  );
};

export default Home;
