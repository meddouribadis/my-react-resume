import React from 'react';
import logo from './logo.svg';
import Header from "./components/Header"
import Section from "./components/Section"
import Columns from "./components/Columns"

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Section styleData="align-items-center" >

        <Columns styleData="col-12 mt-5 mx-auto col-md-12 order-md-12 leftAlign firstSection">
          <h1>Hi, my name is</h1>
          <h2>Badis Meddouri</h2>
          <h3>I build things for the web.</h3>
          <p className="firstParagraph">I'm a software engineer based in Boston, MA specializing in building (and occasionally designing) exceptional, high-quality websites and applications.</p>
          <hr />
        </Columns>

        <Columns styleData="col-12 mt-5 mx-auto col-md-12 order-md-12 leftAlign firstSection">
          <h1>Hi, my name is</h1>
          <h2>Badis Meddouri</h2>
          <h3>I build things for the web.</h3>
        </Columns>


      </Section>
    </div>
  );
}

export default App;
