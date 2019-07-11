import React from "react"

class Column extends React.Component{

    constructor(){
        super()
    }

    render(){
        
        return (
            <div className={this.props.styleName}>
                {this.props.children}
            </div>
        )

    }

}

export default Column