import React from "react";
import logo from "./logo.svg";
import "./styles/index.scss";
import { Header } from "./components/Header/index";
import { Footer } from "./components/Footer/index";
import AnimesPage from "./containers/AnimesPage";

function App() {
  return (
    <div className="App">
      <Header />
      <AnimesPage />
      <Footer />
    </div>
  );
}

export default App;
