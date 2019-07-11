import React from "react"
import ReactDOM from "react-dom"

class Section extends React.Component{

    constructor(){
        super()
    }

    render(){

        return(
            <div className="container">
                <div className={`row ${this.props.styleName}`}>
                    {this.props.children}
                </div>
            </div>
        )

    }

}

export default Section