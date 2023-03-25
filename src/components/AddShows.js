import { React, useEffect, useState } from "react";
import { TextField, Paper, Box, Button } from "@mui/material/";

export default function AddShows() {
  let { show, setShow } = useState({});

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");

    fetch("http://localhost:4000/shows", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(show),
    });
  };

  let handleChange = (e) => {
    setShow({ ...show, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Paper
        sx={{ padding: "10vh", display: "flex", justifyContent: "center" }}
      >
        <form onSubmit={handleSubmit}>
          <Button type="submit" variant="contained">
            Add Show
          </Button>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              onChange={handleChange}
              name="title"
              id="titleField"
              aria-label="title"
              label="Title"
              variant="filled"
            />
            <TextField
              onChange={handleChange}
              name="posterUrl"
              id="posterUrl"
              aria-label="posterUrl"
              label="URL of Poster"
              variant="filled"
            />
            <TextField
              onChange={handleChange}
              name="genre"
              id="genre"
              aria-label="genre"
              label="Genre"
              variant="filled"
            />
            <TextField
              onChange={handleChange}
              name="network"
              id="network"
              aria-label="network"
              label="Creator"
              variant="filled"
            />
            <TextField
              multiline
              name="description"
              rows={4}
              onChange={handleChange}
              id="description"
              aria-label="description"
              label="Description"
              variant="outlined"
            />
          </Box>
        </form>
      </Paper>
    </>
  );
}
