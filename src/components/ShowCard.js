import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ShowCard({ show }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" image={show.posterUrl} alt={show.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {show.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
