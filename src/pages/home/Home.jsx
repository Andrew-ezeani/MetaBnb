import React from "react";
import Hero from "./components/Hero";
import Wallets from "./components/Wallets";
import DisplayApartments from "../../components/DisplayApartments";
import Container from "@mui/material/Container";

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
      <DisplayApartments isSlice={true} />
    </>
  );
};

export default Home;
