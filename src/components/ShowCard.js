import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ShowCard({ show }) {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/shows/${show.id}`)} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={show.posterUrl}
          alt={show.title}
          sx={{ height: "100px" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {show.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
