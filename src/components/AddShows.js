import React from "react";
import { TextField, Paper, Box } from "@mui/material/";

export default function AddShows() {
  return (
    <>
      <Paper
        sx={{ padding: "10vh", display: "flex", justifyContent: "center" }}
      >
        <h1>Add Show</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="titleField" label="Title" variant="filled" />
          <TextField id="posterUrl" label="URL of Poster" variant="filled" />
          <TextField id="genre" label="Genre" variant="filled" />
          <TextField id="network" label="Creator" variant="filled" />
          <TextField id="description" label="Description" variant="outlined" />
        </Box>
      </Paper>
    </>
  );
}
