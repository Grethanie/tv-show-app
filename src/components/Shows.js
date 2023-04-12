import React, { useState, useEffect } from "react";
import { Paper, Grid, Box, Container } from "@mui/material";
import ShowCard from "./ShowCard";

export default function Shows() {
  const [shows, setShows] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/shows")
      .then((res) => res.json())
      .then((data) => {
        setShows(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Container>
          <h1>Shows</h1>
          <Box sx={{ display: "flex", width: "90%" }}>
            <Grid container rowSpacing={7} columnSpacing={7}>
              {shows.map((show) => (
                <Grid key={show.id} item xs={12} sm={6} md={4} lg={3}>
                  <ShowCard show={show} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      )}
    </>
  );
}
