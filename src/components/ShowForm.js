import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TextField, Paper, Box, Button } from "@mui/material/";

export default function ShowForm({ type }) {
  let [show, setShow] = useState(undefined);
  const { id } = useParams();

  let handleSubmitAdd = (e) => {
    e.preventDefault();
    console.log("submitting");

    fetch("http://localhost:4000/shows", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(show),
    });
    setShow(undefined);
  };

  let handleSubmitEdit = (e) => {
    e.preventDefault();
    console.log("submitting");

    fetch(`http://localhost:4000/shows/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(show),
    });
    setShow(undefined);
  };

  let handleChange = (e) => {
    setShow({ ...show, [e.target.name]: e.target.value });
    console.log(show);
  };

  return (
    <>
      <Paper
        sx={{ padding: "10vh", display: "flex", justifyContent: "center" }}
      >
        <form onSubmit={type === "add" ? handleSubmitAdd : handleSubmitEdit}>
          <Button color="primary" type="submit" variant="contained">
            {type === "add" ? "Add" : "Edit"} Show
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
              value={show?.title || ""} // this if there is not a show.title, then ""
            />
            <TextField
              onChange={handleChange}
              name="posterUrl"
              id="posterUrl"
              aria-label="posterUrl"
              label="URL of Poster"
              variant="filled"
              value={show?.posterUrl || ""}
            />
            <TextField
              onChange={handleChange}
              name="genre"
              id="genre"
              aria-label="genre"
              label="Genre"
              variant="filled"
              value={show?.genre || ""}
            />
            <TextField
              onChange={handleChange}
              name="network"
              id="network"
              aria-label="network"
              label="Creator"
              variant="filled"
              value={show?.network || ""}
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
              value={show?.description || ""}
            />
          </Box>
        </form>
      </Paper>
    </>
  );
}
