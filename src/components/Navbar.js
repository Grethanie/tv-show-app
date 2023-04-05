import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/";

export default function Navbar() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3E7193",
        secondary: "#F2F2F2",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              TV Tracker
            </Typography>
            <Button color="inherit" href="/">
              Home
            </Button>
            <Button color="inherit" href="/Shows">
              Shows
            </Button>
            <Button color="inherit" href="/Shows/Add">
              Add Shows
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
