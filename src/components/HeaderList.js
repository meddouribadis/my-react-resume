import React from "react"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.css';

class HeaderList extends React.Component{

    constructor(){
        super()
    }

    scrollToRef = ref => {
        console.log("Ref")
        console.log(ref)

        if(ref != undefined && ref.current != null){
            window.scrollTo(0, ref.current.offsetTop - 110)
        }
    }
    

    render(){
        
        let liList = this.props.tableau.map((x) => {
           return <li className="nav-item header-nav"><span className="nav-link" onClick={e => this.scrollToRef(x.link)}>{x.name}</span></li>
        })
        
        return(
            <ul className="navbar-nav bd-navbar-nav flex-row">
                {liList}
            </ul>
        )

    }

}

export default HeaderList