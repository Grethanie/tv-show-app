import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";

export default function Show() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("onload useEffect");
    fetch(`http://localhost:4000/shows/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setShow(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Container
          sx={{
            // display: "flex",
            // flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "5vh",
          }}
        >
          <Paper
            maxheight="xl"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              bgcolor: "grey.200",
              alignItems: "center",
              padding: "5vh",
              width: "70vw",
            }}
          >
            <Box
              component="img"
              src={show.posterUrl}
              alt={show.title}
              sx={{ maxWidth: "50vw" }}
            />
            <h1>{show.title}</h1>
            <p>{show.genre}</p>
            <Box sx={{ border: "10vh" }}>
              <p sx={{ padding: "10vh" }}>{show.description}</p>
            </Box>
          </Paper>
        </Container>
      )}
    </>
  );
}
