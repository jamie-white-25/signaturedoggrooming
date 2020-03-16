import React from "react";
import "./App.css";
import MainNavBar from "./components/layouts/MainNavBar";
import LogoBanner from "./components/layouts/LogoBanner";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <React.Fragment>
      <MainNavBar />
      <LogoBanner />
      <Home />
    </React.Fragment>
  );
}

export default App;
