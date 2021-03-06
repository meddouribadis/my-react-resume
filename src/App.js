import React from 'react';
import logo from './logo.svg';
import Header from "./components/Header"
import Section from "./components/Section"
import Columns from "./components/Columns"
import Timelines from "./components/Timeline"
import Footer from "./components/Footer"
import Image from "./components/Image"
import Observer from '@researchgate/react-intersection-observer'
import './App.css';

class App extends React.Component{

  constructor(){
    super()
    this.myRef = React.createRef();
    this.myRefDeux = React.createRef();
    this.myRefTrois = React.createRef();
    this.myRefQuatre = React.createRef()
  }

  render(){

    var array1 = [{name: '1. About', link: this.myRef}, {name: '2. Experience', link: this.myRefDeux}, {name: '3. Work', link: this.myRefTrois}, {name: '4. Contact', link: this.myRefQuatre}];

    return(
        <div className="App">
          <Header elemArray={array1} />
          <Section styleData="align-items-center mt-5" animationName="opacReveal" refProp={this.myRef}>
    
            <Columns styleData="col-12 mt-5 mx-auto col-md-12 order-md-12 leftAlign firstSection">
              <h1>Hi, my name is</h1>
              <h2>Badis Meddouri 😍</h2>
              <h3 className="mb-5">I build things for the web.</h3>
              <p className="firstParagraph mb-5">I'm a software engineer based in Paris (France), specializing in building (and occasionally designing) exceptional, high-quality websites and applications.</p>
              <a href="/" className="btn btn-primary btn-lg mb-5">Contact me !</a>
              <hr />
            </Columns>
    
          </Section>
    
          <Section styleData="align-items-center" animationName="startAnimation" refProp={this.myRefDeux}>
    
            <Columns styleData="col-12 mt-5 mx-auto col-md-12">
            <h3 className="mb-2">01. About me</h3>
            </Columns>
    
            <Columns styleData="col-9 mt-5 mx-auto col-md-9">
              
              
              <p className="leftAlign">Hello! I'm Brittany, a software engineer based in Boston, MA who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.
              Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.
              </p>
              <p className="leftAlign">
                Here is some techs i've used :
              </p>
    
              <ol className="leftAlign">
                <li>Java</li>
                <li>JavaScript (ES6)</li>
                <li>PHP</li>
                <li>C++</li>
                <li>React</li>
                <li>Angular</li>
                <li>mySQL</li>
              </ol>
            </Columns>
    
            <Columns styleData="col-3 mt-5 mx-auto col-md-3">
              <Image source="https://avatars3.githubusercontent.com/u/37505772?s=460&v=4" styleData="img-fluid rounded" />
            </Columns>
    
            <Columns styleData="col-12 mt-5 mx-auto col-md-12">
              <hr />        
            </Columns>
          </Section>
    
          <Section styleData="align-items-center" animationName="startAnimationVS" refProp={this.myRefTrois}>
    
            <Columns styleData="col-12 mt-5 mx-auto col-md-12">
              <h3 className="mb-2">02. Experience</h3>
            </Columns>

            <Columns styleData="col-8 mt-5 mx-auto col-md-8">
              <Timelines />
            </Columns>

            <Columns styleData="col-12 mt-5 mx-auto col-md-12">
              <hr />        
            </Columns>
          </Section>

          <Section styleData="align-items-center" animationName="startAnimation" refProp={this.myRefQuatre}>
    
            <Columns styleData="col-12 mt-5 mx-auto col-md-12">
              <h3 className="mb-2">03. Some projects</h3>
            </Columns>

            <Columns styleData="col-8 mt-5 mx-auto col-md-8">
              <p>Blablabla</p>
            </Columns>

          </Section>

          <Footer />
        </div>
    )

  }
}

export default App;
