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
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shows" element={<Shows />} />
          <Route path="/Shows/:id" element={<Show />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Shows/Add" element={<ShowForm type="add" />} />
          <Route path="/shows/:id/edit" element={<ShowForm type="edit" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
