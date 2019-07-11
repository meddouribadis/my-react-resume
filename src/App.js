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
        <Columns styleData="col-12 mx-auto col-md-12 order-md-12">Yoyo Yoyo </Columns>
      </Section>
    </div>
  );
}

export default App;
