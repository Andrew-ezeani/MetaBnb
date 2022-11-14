import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Hero from "./components/Hero";
import Wallets from "./components/Wallets";
import ShowApartments from "../../components/ShowApartments";
import apartmentData from "../../data/apartmentData";

const Home = () => {
  const apartments = apartmentData.slice(0, 8);

  return (
    <>
      <Container
        sx={{
          marginTop: "4em",
        }}
      >
        <Hero />
      </Container>
      <Wallets />
      <Container>
        <Grid container spacing={5}>
          {apartments.map((apartment) => {
            return (
              <ShowApartments
                isSlice={true}
                key={apartment.id}
                img={apartment.poster_img}
                name={apartment.name}
                price={apartment.price}
              />
            );
          })}

          <ShowApartments />
        </Grid>
      </Container>
    </>
  );
};

export default Home;
