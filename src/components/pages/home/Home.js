import React from "react";
import AboutMe from "./AboutMe";
import Services from "./Services";
import LatestWork from "./LatestWork";
import Contact from "./Contact";
import Footer from "../../layouts/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <AboutMe />
      <Services />
      <LatestWork />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
