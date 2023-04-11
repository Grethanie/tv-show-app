import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Home, Shows, Show, NotFound, ShowForm } from "./components";

function App() {
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
