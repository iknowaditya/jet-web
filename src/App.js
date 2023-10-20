import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./routes/Home";
import Book from "./routes/BookNow";
import ContactUs from "./routes/ContactUs";
import Fleet from "./routes/Fleet";
import Experience from "./routes/Experience";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booknow" element={<Book />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  );
}

export default App;
