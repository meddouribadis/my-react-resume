import React from "react"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.css';

class HeaderList extends React.Component{

    constructor(){
        super()
    }

    render(){

        let liList = this.props.tableau.map((x) => {
           return <li className="nav-item"><a className="nav-link" href={x.link}>{x.name}</a></li>
        })
        
        return(
            <ul className="navbar-nav bd-navbar-nav flex-row">
                {liList}
            </ul>
        )

    }

}

export default HeaderList