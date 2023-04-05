import React from "react";
import logo from "../assets/images/logo.jpg";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <img src={logo} alt="home" />
        <h1> Welcome to TV Tracker</h1>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
      >
        <p>
          Here you can see a selection of TV shows and their overviews,<br></br>
          add to the list, and see details of each show in one place.
        </p>
      </Box>
    </>
  );
}
