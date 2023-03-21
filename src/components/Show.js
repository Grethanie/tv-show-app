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
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10vh",
          }}
        >
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              bgcolor: "grey.200",
              alignItems: "center",
              height: "70vh",
              width: "70vw",
            }}
          >
            <img src={show.posterUrl} alt={show.title} />
            {show.title}
          </Paper>
        </Container>
      )}
    </>
  );
}
