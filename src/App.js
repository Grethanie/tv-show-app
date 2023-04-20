import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Home, Shows, Show, NotFound, ShowForm } from "./components";
import { createTheme, ThemeProvider } from "@mui/material/";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3E7193",
        secondary: "#F2F2F2",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/shows/:id" element={<Show />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/shows/add" element={<ShowForm />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
