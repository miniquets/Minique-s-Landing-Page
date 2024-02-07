import React from "react";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  Whatminiquetsuero,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

import "./App.css";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Whatminiquetsuero />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
