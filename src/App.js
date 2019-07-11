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
          <p className="firstParagraph">I'm a software engineer based in Paris (France), specializing in building (and occasionally designing) exceptional, high-quality websites and applications.</p>
          <a href="" className="btn btn-primary btn-lg mb-5">Contact me !</a>
          <hr />
        </Columns>

      </Section>

      <Section styleData="align-items-center" >

        <Columns styleData="col-12 mt-5 mx-auto col-md-12">
        <h3 className="mb-2">01. About me</h3>
        </Columns>

        <Columns styleData="col-10 mt-5 mx-auto col-md-10">
          
          
          <p className="leftAlign">Hello! I'm Brittany, a software engineer based in Boston, MA who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.
          Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.
          </p>
          <p className="leftAlign">
            Here is some techs i've used :
          </p>

          <ol>
            <li>Java</li>
            <li>JavaScript</li>
            <li>PHP</li>
          </ol>
        </Columns>

        <Columns styleData="col-2 mt-5 mx-auto col-md-2">
          <img className="img-fluid" src="https://avatars3.githubusercontent.com/u/37505772?s=460&v=4"/>
        </Columns>

      </Section>

    </div>
  );
}

export default App;
