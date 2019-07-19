import React from "react"
import ReactDOM from "react-dom"

class Image extends React.Component{

    constructor(){
        super()
    }

    render(){

        console.log("Props Image : " + this.props)
        console.log(this.props)

        return(
            <img src={this.props.source} className={`${this.props.styleData} ${this.props.isIntersecting ? this.props.animationName : ""}`} />
        )
    }
}

export default Image