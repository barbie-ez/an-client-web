import React from "react";
import logo from "./logo.svg";
import "./styles/index.scss";
import { Header } from "./components/Header/index";
import { Slider } from "./components/Slider";
import { Card } from "react-bootstrap";
import { Anime } from "./components/Anime";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Anime />
    </div>
  );
}

export default App;
