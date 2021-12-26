import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Title from "./components/common/Title";
import NavBar from "./components/common/NavBar";
import Characters from "./components/Characters";

ReactDOM.render(
  <React.StrictMode>
    <Title />
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
