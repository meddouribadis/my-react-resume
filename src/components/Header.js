import React from "react"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../logo.svg';
import gitLogo from '../assets/GitHub_Logo.svg'
import HeaderList from './HeaderList'

class Header extends React.Component{

    constructor(){
        super()
        
        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };

    }

    handleScroll = () => {
      
        const currentScrollPos = window.pageYOffset;
        const visible = currentScrollPos < 60;
      
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
      
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render(){

        var array1 = [{name: '1. About', link: ''}, {name: '2. Experience', link: ''}, {name: '3. Work', link: ''}, {name: '4. Contact', link: ''}];

        return(
            <div className="Headermain">
            <div className={`decalage ${this.state.visible ? "displayNone" : ""}`}></div>
            <header className={`navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar navyblue-background HeadMain${this.state.visible ? "" : " headerVs"}`}>
            <a className="navbar-brand mr-0 mr-md-2" href="/" aria-label="Bootstrap"><img src={logo} className="Header-logo" alt="logo" /></a>
            <div className="navbar-nav-scroll">

                <HeaderList tableau={array1} />

            </div>

            <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                <li className="nav-item">
                    <span className="nav-link">Made with React</span>
                </li>

                <li className="nav-item">
                    <a className="nav-link p-2" href="https://github.com/meddouribadis" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><img src={gitLogo} className="Mini-logo" alt="logo" /></a>
                </li>
            </ul>

            </header>
            </div>
        )
    }
}

export default Header
